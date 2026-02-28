<template>
  <section class="section panel">
    <div class="content base-card">
      <div class="head">
        <div class="head-left">
          <h3 class="title h3">Buy $DUCK Now!</h3>
          <p class="descr sub-m">
            Token price will increase <span>+2%</span> in:
          </p>
        </div>
        <div class="head-right">
          <CommonTimer />
        </div>
      </div>
      <div class="body">
        <div class="body-left">
          <CommonCalculator smaller />
        </div>
        <div class="body-right">
          <PagePresalePanelGraph
            :stages-price="stagesPrice"
            :current-stage="selectedStageNumber"
            :selected="selected"
            :listing-price="listingPrice"
          />
        </div>
      </div>
    </div>

    <div class="stages-wrap">
      <PagePresalePanelStages
        v-model:selected="selected"
        v-model:amount="amount"
        :stages-price="stagesPrice"
        :listing-price="listingPrice"
        :receive-display="receiveDisplay"
        @join="onJoin"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { SelectItem } from "@/types/general"

const { presaleData } = await usePresaleData()

const priceData = computed(
  () => (presaleData.value?.price ?? {}) as Record<string, unknown>
)

const stagesPrice = computed<SelectItem[]>(() => {
  const tokenomic = (priceData.value.tokenomic ?? {}) as Record<
    string,
    { price_usd: number; stage: number }
  >

  return Object.entries(tokenomic)
    .sort(([a], [b]) => Number(a) - Number(b))
    .map(([day, item]) => ({
      text: String(item.price_usd),
      priceUsd: Number(item.price_usd),
      day: Number(day),
      stage: Number(item.stage),
    }))
})

const listingPrice = computed(() => {
  const value = Number(priceData.value.launch_price_usd ?? 0)
  return value > 0 ? String(value) : "—"
})

const currentDay = computed(() => Number(priceData.value.day_today ?? 1))

const selected = ref<SelectItem>({
  text: "",
  priceUsd: 0,
  day: 1,
  stage: 1,
})

watchEffect(() => {
  if (!stagesPrice.value.length) return

  const current =
    stagesPrice.value.find((item) => item.day === currentDay.value) ||
    stagesPrice.value[0]!

  if (!selected.value.text) {
    selected.value = current
  }
})

const amount = ref("")

const selectedPrice = computed(() => {
  return selected.value?.priceUsd || 0
})

const amountNumber = computed(() => {
  const n = Number(amount.value)
  return Number.isFinite(n) ? n : 0
})

const receive = computed(() => {
  const price = selectedPrice.value
  if (!price) return 0
  return amountNumber.value / price
})

function formatNumber(n: number, maxDecimals = 2) {
  if (!Number.isFinite(n)) return "0"

  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: maxDecimals,
  }).format(n)
}

const receiveDisplay = computed(() => {
  return receive.value ? formatNumber(receive.value, 2) : ""
})

const selectedStageNumber = computed(() => {
  return selected.value?.stage || 1
})

function onJoin() {
  gsap.to(window, {
    scrollTo: "section.panel",
  })
}
</script>

<style scoped lang="scss">
.panel {
  @include mobile {
    padding-top: 1.25rem;
  }
}
.content {
  padding: 2.5rem;
  @include mobile {
    padding: 1.5rem 1rem;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @include mobile {
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
}
.title {
  margin-bottom: 0.75rem;
  @include mobile {
    margin-bottom: 1.5rem;
    text-align: center;
    width: 95%;
  }
}
.descr {
  @include mobile {
    margin-bottom: 1rem;
    text-align: center;
  }
}
.descr span {
  font-size: 2.25rem;
  line-height: 100%;
  font-family: var(--f-bold);
  @include mobile {
    font-size: 1.5rem;
    text-align: center;
  }
}
.body {
  display: grid;
  grid-template-columns: 34rem 1fr;
  gap: 2.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
  }
}
.head-left,
.head-right {
  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.body-left:deep(.calculator) {
  @include mobile {
    padding: 0;
    border: none;
  }
}

.stages-wrap {
  margin-top: 1rem;
  width: 100%;
  @include mobile {
    margin-top: 0.5rem;
  }
}
</style>
