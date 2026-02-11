<template>
  <div class="graph">
    <div class="left-content">
      <p class="price-top sub-s">$0.33</p>
      <p class="price-1 sub-s">$0.17</p>
      <p class="price-2 sub-s">$0.09</p>
      <p class="price-3 sub-s">$0.00</p>
    </div>
    <div class="right-content">
      <div class="cols">
        <div class="col col-1">
          <div class="col-block">
            <div class="track">
              <div class="circle-line" :style="{ height: `${currentPct}%` }" />
              <div class="circle">
                <div class="circle-price body-m">
                  ${{ stagesPrice[0]?.text }}
                </div>
              </div>
            </div>
          </div>
          <p class="col-title sub-s">1 Stage</p>
        </div>
        <div class="col col-2">
          <div class="col-block">
            <div class="col-logo">
              <img
                class="logo-img"
                draggable="false"
                src="/images/presale/profile.png"
              />
            </div>

            <div class="track">
              <div
                class="circle-line"
                :style="{ height: `${nextPct}%`, bottom: `${currentPct}%` }"
              />
              <div class="circle" :style="{ bottom: `${currentPct}%` }">
                <div class="circle-price body-m">
                  ${{ stagesPrice[currentStage - 1]?.text }}
                </div>
              </div>
            </div>
          </div>
          <p class="col-title sub-s">{{ currentStage }} Stage</p>
        </div>
        <div class="col col-3">
          <div class="col-block">
            <div class="track">
              <div class="circle" :style="{ bottom: `${nextPct}%` }">
                <div class="circle-price body-m">
                  ${{ stagesPrice[nextStage - 1]?.text }}
                </div>
              </div>
            </div>
          </div>
          <p class="col-title sub-s">{{ nextStage }} Stage</p>
        </div>
        <div class="col col-4">
          <div class="col-block">
            <div class="track">
              <div class="circle">
                <div class="circle-price body-m">
                  ${{ stagesPrice[stagesPrice.length - 1]?.text }}
                </div>
              </div>
            </div>
          </div>
          <p class="col-title sub-s">Listing</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type SelectItem = { text: string }

const props = defineProps<{
  stagesPrice: SelectItem[]
  currentStage: number // selectedStageNumber (1..N)
}>()

const totalStages = computed(() => props.stagesPrice.length || 1)

const currentStage = computed(() => {
  const n = Number(props.currentStage)
  if (!Number.isFinite(n)) return 1
  return Math.min(Math.max(Math.trunc(n), 1), totalStages.value)
})

const nextStage = computed(() =>
  Math.min(currentStage.value + 1, totalStages.value)
)

function stageToPct(stage: number) {
  const total = totalStages.value
  if (total <= 1) return 0
  // stage 1 => 0%, last stage => 100%
  return ((stage - 1) / (total - 1)) * 100
}

const currentPct = computed(() => stageToPct(currentStage.value))
const nextPct = computed(() => stageToPct(nextStage.value))
</script>

<style scoped lang="scss">
// graf
.graph {
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  height: 100%;
}
.left-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  min-width: 3.6875rem;
  text-align: right;
  padding-bottom: 2.5rem;
}
.right-content {
  flex: 1 1 auto;
}
.price-top {
  margin-bottom: auto;
}
.cols {
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  height: 100%;
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
.col-block {
  flex: 1 1 auto;
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  width: 100%;
  position: relative;
  padding: 4.25rem 0 1rem;
}
.col-2 .col-block {
  background: var(--c-milk);
}
.col-logo {
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 100%;
  background: var(--c-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5rem;
}
.logo-img {
  width: 1.6875rem;
}
.circle {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  border: 0.25rem solid var(--c-white);
  background: var(--c-black);
}
.circle-price {
  width: auto;
  position: absolute;
  bottom: 100%;
  margin-bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 0.75rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  box-shadow: 0 0 0 0.1875rem var(--c-white);
  padding: 0.25rem 1rem;
}
.col-2 .circle-price {
  background: var(--c-yellow);
  border-color: var(--c-black);
  box-shadow: 0 0 0 0.1875rem var(--c-milk);
}
.col-4 .circle-price {
  margin-bottom: 0.25rem;
}
.col-4 .circle {
  bottom: 100%;
}
.track {
  height: 100%;
  position: relative;
}

.col-2 .circle {
  border: 0.375rem solid var(--c-black);
  background: var(--c-yellow);
}
.col-3 .circle,
.col-4 .circle {
  background: #bcbcbc;
}
.circle-line {
  width: 0.125rem;
  background: var(--c-black);
  height: 100px;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
</style>
