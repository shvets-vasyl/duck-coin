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
          <div class="left-content">
            <p class="price-top sub-s">$0.33</p>
            <p class="price-1 sub-s">$0.17</p>
            <p class="price-2 sub-s">$0.09</p>
            <p class="price-3 sub-s">$0.00</p>
          </div>
          <div class="right-content">
            <div class="cols">
              <div class="col-1">
                <div class="col-block" />
                <p class="col-title sub-s">1 Stage</p>
              </div>
              <div class="col-2">
                <div class="col-block" />
                <p class="col-title sub-s">29 Stage</p>
              </div>
              <div class="col-3">
                <div class="col-block" />
                <p class="col-title sub-s">30 Stage</p>
              </div>
              <div class="col-4">
                <div class="col-block" />
                <p class="col-title sub-s">Listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="stages-box base-card">
      <div class="stages-top">
        <div class="stage body-m">Stage 1 ${{ stagesPrice[0]?.text }}</div>
        <div class="stage-line" />
        <div class="current-stage">
          <p class="body-m stage-text">
            Stage {{ selectedStageNumber }} (Current):
          </p>

          <p class="stage-text2 sub-s">1 $dUCK=$</p>
          <div class="select-wrap">
            <CommonSelect v-model="selected" :items="stagesPrice" inner />
          </div>
        </div>
        <div class="stage-line" />
        <div class="listing body-m">Listing ${{ listingPrice }}</div>
      </div>

      <div class="stages-bot">
        <div class="amount">
          <p class="amount-title sub-s">Your amount</p>

          <div class="calc-field">
            <input
              v-model="amount"
              class="calc-input body-xl"
              name="amount"
              type="text"
              placeholder="0"
              inputmode="numeric"
              @input="onInput"
            />

            <div class="icon-dollar">
              <IconDollar />
            </div>
          </div>
        </div>

        <div class="decor-down">
          <CommonButtonTemplate small disabled>
            <IconDown class="icon-down" />
          </CommonButtonTemplate>
        </div>

        <div class="receive">
          <p class="receive-title sub-s">You receive</p>

          <div class="calc-field receive-field">
            <input
              class="calc-input body-xl"
              name="receive"
              type="text"
              placeholder="0"
              :value="receiveDisplay"
              readonly
            />
            <div class="icon-dollar">
              <IconDollar />
            </div>
          </div>
        </div>

        <button class="join-btn">
          <CommonButtonTemplate yellow big> Join now </CommonButtonTemplate>
        </button>
      </div>
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

const selected = ref<SelectItem>(stagesPrice[0]!)

/** ---------------------------
 *  Amount input (тільки цифри)
 *  -------------------------- */
const amount = ref("")

function onInput(e: Event) {
  const el = e.target as HTMLInputElement

  // тільки цифри
  let v = el.value.replace(/[^\d]/g, "")
  // прибираємо зайві нулі на початку
  v = v.replace(/^0+(?=\d)/, "")

  amount.value = v
}

/** ---------------------------
 *  Calc
 *  -------------------------- */
// ціна з селекта (float)
const selectedPrice = computed(() => {
  const n = Number(String(selected.value?.text ?? "").replace(",", "."))
  return Number.isFinite(n) ? n : 0
})

const selectedStageNumber = computed(() => {
  const i = stagesPrice.findIndex((s) => s.text === selected.value?.text)
  return i === -1 ? 1 : i + 1
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
.stages-box {
  margin-top: 1rem;
  @include mobile {
    padding: 1.5rem 1rem;
    margin-top: 0.5rem;
  }
}
.current-stage {
  display: flex;
  align-items: center;
  width: 30rem;
  justify-content: center;
  border-radius: 3.125rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-grey-3);
  padding: 0.875rem;
  @include mobile {
    width: 100%;
  }
}
.stage-text {
  margin-right: 0.5rem;
  @include mobile {
    font-size: 0.75rem;
    margin-right: 0.25rem;
  }
}
.stage-text2 {
  @include mobile {
    font-size: 0.75rem;
  }
}
.select-wrap:deep(.select-text) {
  @include mobile {
    font-size: 0.75rem;
  }
}
.stages-top {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  padding-bottom: 2.5rem;
  border-bottom: 0.125rem solid var(--c-grey-3);
  @include mobile {
    flex-direction: column;
    gap: 0.5rem;
    padding-bottom: 1.5rem;
  }
}
.stage-line {
  flex: 1 1 auto;
  height: 0.125rem;
  background: #bcbcbc;
  @include mobile {
    height: 1rem;
    width: 0.125rem;
    background: var(--c-black);
  }
}
.stage {
  color: var(--c-grey);
}
.stage,
.listing {
  width: 9.75rem;
  border-radius: 0.75rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  text-align: center;
  padding: 0.4375rem 0;
  @include mobile {
    font-size: 0.75rem;
    width: auto;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}

.listing {
  background: var(--c-grey-3);
}

.amount-title,
.receive-title {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.75rem;
  }
}

.icon-dollar {
  width: 1.5rem;
  flex: 0 0 1.5rem;
  margin-right: 1rem;
  @include mobile {
    width: 1.25rem;
    flex: 0 0 1.25rem;
  }
}
.calc-field {
  height: 4rem;
  margin-bottom: 0;
  @include mobile {
    height: 3.5rem;
  }
}
.receive-field {
  background: var(--c-milk);
}
.stages-bot {
  padding-top: 2.5rem;
  display: flex;
  align-items: flex-end;
  gap: 1.5rem;
  @include mobile {
    display: flex;
    flex-wrap: wrap;
    gap: 0;
    padding-top: 1.5rem;
    justify-content: space-between;
  }
}
.icon-down {
  width: 1.5rem;
  transform: rotate(-90deg);
}
.decor-down {
  margin-bottom: 0.5rem;
  @include mobile {
    display: none;
  }
}
.join-btn {
  width: 16.625rem;
  margin-bottom: 0.25rem;
  margin-left: auto;
  @include mobile {
    margin-left: 0;
    margin-bottom: 0;
    width: 100%;
    margin-top: 2.5rem;
  }
}
.amount,
.receive {
  @include mobile {
    width: 9.4375rem;
  }
}

// graf
.body-right {
  display: flex;
  gap: 1rem;
  padding: 1.5rem 0;
}
.left-content {
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  min-width: 3.6875rem;
  text-align: right;
  padding-bottom: 1rem;
}
.price-top {
  margin-bottom: auto;
}
.cols {
  flex: 1 1 auto;
}
</style>
