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
          <CommonCalculator />
        </div>
        <div class="body-right">
          <PagePresalePanelGraph
            :stages-price="stagesPrice"
            :current-stage="selectedStageNumber"
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
type SelectItem = { text: string }

const listingPrice = "0.0300"

const stagesPrice: SelectItem[] = [
  { text: "0.0100" }, // 1
  { text: "0.0102" }, // 2
  { text: "0.0104" }, // 3
  { text: "0.0106" }, // 4
  { text: "0.0108" }, // 5
  { text: "0.0110" }, // 6
  { text: "0.0112" }, // 7
  { text: "0.0115" }, // 8
  { text: "0.0117" }, // 9
  { text: "0.0119" }, // 10
  { text: "0.0121" }, // 11
  { text: "0.0124" }, // 12
  { text: "0.0126" }, // 13
  { text: "0.0129" }, // 14
  { text: "0.0131" }, // 15
  { text: "0.0134" }, // 16
  { text: "0.0137" }, // 17
  { text: "0.0140" }, // 18
  { text: "0.0143" }, // 19
  { text: "0.0146" }, // 20
  { text: "0.0149" }, // 21
  { text: "0.0152" }, // 22
  { text: "0.0155" }, // 23
  { text: "0.0158" }, // 24
  { text: "0.0161" }, // 25
  { text: "0.0164" }, // 26
  { text: "0.0167" }, // 27
  { text: "0.0170" }, // 28
  { text: "0.0173" }, // 29
]

const selected = ref<SelectItem>(stagesPrice[10]!)

/** ---------------------------
 *  Amount input (тільки цифри)
 *  -------------------------- */
const amount = ref("")

/** ---------------------------
 *  Calc
 *  -------------------------- */
// ціна з селекта (float)
const selectedPrice = computed(() => {
  const n = Number(String(selected.value?.text ?? "").replace(",", "."))
  return Number.isFinite(n) ? n : 0
})

// сума інвестиції (int)
const amountNumber = computed(() => {
  const n = Number(amount.value)
  return Number.isFinite(n) ? n : 0
})

// receive = amount / price  (скільки $DUCK отримаєш)
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
  // можеш змінити decimals: 0 / 2 / 6 — як тобі треба для токена
  return receive.value ? formatNumber(receive.value, 2) : ""
})

const selectedStageNumber = computed(() => {
  const i = stagesPrice.findIndex((s) => s.text === selected.value?.text)
  return i === -1 ? 1 : i + 1
})

function onJoin() {
  // тут твоя логіка (open modal / send tx / whitelist etc)
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
  grid-template-columns: 34.625rem 1fr;
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
