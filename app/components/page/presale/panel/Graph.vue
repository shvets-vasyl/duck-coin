<template>
  <div class="graph">
    <div class="left-content">
      <p class="price-top sub-s">$0.33</p>
      <p class="price-1 sub-s">$0.17</p>
      <p class="price-2 sub-s">$0.09</p>
      <p class="price-3 sub-s">$0.00</p>
    </div>
    <div ref="linksWrap" class="right-content">
      <!-- SVG overlay -->
      <svg class="links-svg" preserveAspectRatio="none">
        <line
          v-for="(l, i) in links"
          :key="i"
          :x1="l.x1"
          :y1="l.y1"
          :x2="l.x2"
          :y2="l.y2"
          :class="{ dotted: i >= 1 }"
        />
      </svg>

      <div class="cols">
        <div class="col col-1">
          <div class="col-block">
            <div class="track">
              <div :ref="setCircleRef(0)" class="circle">
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
                :ref="setCircleRef(1)"
                class="circle"
                :style="{ bottom: `${currentPct}%` }"
              >
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
              <div
                :ref="setCircleRef(2)"
                class="circle"
                :style="{ bottom: `${nextPct}%` }"
              >
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
              <div :ref="setCircleRef(3)" class="circle">
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
import type { ComponentPublicInstance, VNodeRef } from "vue"

type SelectItem = { text: string }

const props = defineProps<{
  stagesPrice: SelectItem[]
  currentStage: number
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

// --- links svg
const linksWrap = ref<HTMLElement | null>(null)

// Vue refs callback receives Element | ComponentPublicInstance | null
const circleEls = ref<(HTMLElement | null)[]>([null, null, null, null])

const setCircleRef = (i: number): VNodeRef => {
  return (refEl: Element | ComponentPublicInstance | null) => {
    circleEls.value[i] = refEl instanceof HTMLElement ? refEl : null
  }
}

const links = ref([
  { x1: 0, y1: 0, x2: 0, y2: 0 },
  { x1: 0, y1: 0, x2: 0, y2: 0 },
  { x1: 0, y1: 0, x2: 0, y2: 0 },
])

function centerOf(el: Element, relativeTo: DOMRect) {
  const node = el as HTMLElement
  const r = node.getBoundingClientRect()
  return {
    x: r.left - relativeTo.left + r.width / 2,
    y: r.top - relativeTo.top + r.height / 2,
  }
}

async function updateLinks() {
  await nextTick()

  const wrap = linksWrap.value
  if (!wrap) return

  const c = circleEls.value
  if (c.some((x) => !x)) return

  const base = wrap.getBoundingClientRect()

  const p0 = centerOf(c[0]!, base)
  const p1 = centerOf(c[1]!, base)
  const p2 = centerOf(c[2]!, base)
  const p3 = centerOf(c[3]!, base)

  links.value[0]!.x1 = p0.x
  links.value[0]!.y1 = p0.y
  links.value[0]!.x2 = p1.x
  links.value[0]!.y2 = p1.y

  links.value[1]!.x1 = p1.x
  links.value[1]!.y1 = p1.y
  links.value[1]!.x2 = p2.x
  links.value[1]!.y2 = p2.y

  links.value[2]!.x1 = p2.x
  links.value[2]!.y1 = p2.y
  links.value[2]!.x2 = p3.x
  links.value[2]!.y2 = p3.y
}

let ro: ResizeObserver | null = null

onMounted(() => {
  updateLinks()
  window.addEventListener("resize", updateLinks)

  if (linksWrap.value) {
    ro = new ResizeObserver(updateLinks)
    ro.observe(linksWrap.value)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener("resize", updateLinks)
  ro?.disconnect()
})

// важливо: коли міняються bottom %, перераховуємо
watch([currentPct, nextPct, totalStages], updateLinks, { flush: "post" })
</script>

<style scoped lang="scss">
// graf
.graph {
  display: flex;
  gap: 1rem;
  padding-top: 1.5rem;
  height: 100%;
  @include mobile {
    padding-top: 0.5rem;
  }
}
.left-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  min-width: 3.6875rem;
  text-align: right;
  padding-bottom: 2.5rem;
  @include mobile {
    min-width: 2.75rem;
    padding-bottom: 2rem;
    gap: 1.5rem;
  }
}
.right-content {
  flex: 1 1 auto;
  position: relative;
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
  @include mobile {
    gap: 1rem;
  }
}
.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  @include mobile {
    gap: 1rem;
  }
}
.col-block {
  flex: 1 1 auto;
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  width: 100%;
  position: relative;
  padding: 4.25rem 0 1rem;

  @include mobile {
    height: 19.75rem;
    border-radius: 1rem;
    padding: 2rem 0 0.5rem;
  }
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
  @include mobile {
    width: 1.5rem;
    height: 1.5rem;
    top: 1rem;
  }
}
.logo-img {
  width: 1.6875rem;
  @include mobile {
    width: 0.75rem;
  }
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
  z-index: 3;
  @include mobile {
    width: 0.75rem;
    height: 0.75rem;
    border-width: 0.125rem;
  }
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
  @include mobile {
    padding: 0.15rem 0.75rem;
    bottom: auto;
    top: 100%;
    margin-bottom: 0;
    margin-top: 1rem;
  }
}
.col-1 .circle-price {
  @include mobile {
    top: auto;
    bottom: 100%;
    margin-bottom: 1rem;
    margin-top: 0;
  }
}
.col-2 .circle-price {
  background: var(--c-yellow);
  border-color: var(--c-black);
  box-shadow: 0 0 0 0.1875rem var(--c-milk);
}
.col-4 .circle-price {
  margin-bottom: 0.25rem;
  @include mobile {
    margin-bottom: 0;
  }
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
  @include mobile {
    border-width: 0.125rem;
  }
}
.col-3 .circle,
.col-4 .circle {
  background: #bcbcbc;
}

.links-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 2; // під circle (в тебе circle z-index: 3)
  pointer-events: none;
}

.links-svg line {
  stroke: var(--c-black);
  stroke-width: 0.125rem;
  stroke-linecap: round;
  @include mobile {
    stroke-width: 0.0625rem;
  }
}

.links-svg line.dotted {
  stroke-dasharray: 6 6;
  stroke: #bcbcbc;
}

.sub-s,
.body-m {
  @include mobile {
    font-size: 0.75rem;
  }
}

.col-title {
  text-align: center;
  white-space: nowrap;
}
</style>
