<template>
  <div class="base-card calculator">
    <div class="price">
      <h3 class="price-number h3">{{ raisedDisplay }}</h3>
      <p class="price-text cap-m">Raised</p>
    </div>

    <div class="top-info">
      <div class="days">
        <span class="sub-s">{{ dayDisplay }} </span
        ><span class="cap-m"> Day</span>
      </div>
      <div class="investors">
        <span class="sub-s">{{ investorsDisplay }} </span
        ><span class="cap-m"> Investors</span>
      </div>
    </div>

    <div class="calc-progress">
      <CommonProgress :percent="progressPercent" color="#ffec00" />
    </div>

    <div class="bot-info">
      <div class="cost">
        <span class="cap-m">1 $DUCK = <br class="mob" /></span
        ><span class="sub-s">{{ duckPriceDisplay }}</span>
      </div>
      <div class="launching">
        <span class="cap-m">Launching price = <br class="mob" /></span
        ><span class="sub-s">{{ launchPriceDisplay }}</span>
      </div>
    </div>

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

        <div class="select-wrap">
          <CommonSelect v-model="selected" :items="exchange" />
        </div>
      </div>
    </div>

    <p class="balance cap-s">Balance: 0.00000 Max</p>

    <div class="decor-down">
      <div class="decor-line" />
      <CommonButtonTemplate small disabled>
        <IconDown class="icon-down" />
      </CommonButtonTemplate>
      <div class="decor-line" />
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

    <div class="btn-wrap">
      <button class="btn-buy" @click="onSubmit">
        <CommonButtonTemplate big yellow> Buy $DUCK </CommonButtonTemplate>
      </button>
    </div>

    <div class="audited">
      <p class="audited-title cap-m">Audited by:</p>

      <div class="audited-items">
        <div
          v-for="({ text, icon }, i) in auditedItems"
          :key="i"
          class="audited-item"
        >
          <img class="audited-img" draggable="false" :src="icon" :alt="text" />
          <p class="audited-text sub-s">{{ text }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type ExchangeItem = {
  text: string
  icon: string
}

const exchange: ExchangeItem[] = [
  { text: "USDT", icon: "/images/main/coin-1.webp" },
  { text: "ETH", icon: "/images/main/coin-2.webp" },
  { text: "USDC", icon: "/images/main/coin-3.webp" },
]

const auditedItems = [
  { text: "CertiK", icon: "/images/main/audited-1.webp" },
  { text: "hacken", icon: "/images/main/audited-2.webp" },
  { text: "solidproof", icon: "/images/main/audited-3.webp" },
]

const selected = ref<ExchangeItem>(exchange[0]!)

const sended = useState("form-sended")
// const errorForm = useState("form-error")

const onSubmit = () => {
  sended.value = true

  setTimeout(() => {
    sended.value = false
  }, 2000)
}

/** ---------------------------
 *  Мінімальні "дані пресейлу"
 *  -------------------------- */
const stats = reactive({
  raisedUsd: 1_525_632,
  investors: 1572,
  day: 4,
  totalDays: 150,
  // щоб твій 40% співпав — hardcap = raised / 0.40
  hardcapUsd: 3_814_080,
})

const duckPriceUsd = ref(0.00463)
const launchPriceUsd = ref(0.012)

/**
 * Курс до USD для розрахунку:
 * - для stable = 1
 * - для ETH ставимо заглушку (потім заміниш на бек/API)
 */
const ratesUsd = reactive<Record<string, number>>({
  USDT: 1,
  USDC: 1,
  ETH: 2300, // placeholder
})

/** ---------------------------
 *  Input
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
 *  Helpers форматування
 *  -------------------------- */
function nfInt(n: number) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 }).format(n)
}
function nfMoney(n: number) {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n)
  )
}
function nfPrice(n: number) {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5,
    }).format(n)
  )
}

/** ---------------------------
 *  Computed значення
 *  -------------------------- */
const amountNum = computed(() => {
  const n = Number.parseInt(amount.value || "0", 10)
  return Number.isFinite(n) ? n : 0
})

const payUsd = computed(() => {
  const rate = ratesUsd[selected.value.text] ?? 0
  return amountNum.value * rate
})

const receiveDuck = computed(() => {
  const price = duckPriceUsd.value
  if (!price) return 0
  return payUsd.value / price
})

const receiveDisplay = computed(() => {
  // мінімально і красиво: ціле число токенів
  return receiveDuck.value ? nfInt(Math.floor(receiveDuck.value)) : ""
})

const raisedDisplay = computed(() => nfMoney(stats.raisedUsd))
const investorsDisplay = computed(() => nfInt(stats.investors))
const dayDisplay = computed(() => `${stats.day} / ${stats.totalDays}`)

const progressPercent = computed(() => {
  const p = (stats.raisedUsd / stats.hardcapUsd) * 100
  return Math.max(0, Math.min(100, Math.round(p)))
})

const duckPriceDisplay = computed(() => nfPrice(duckPriceUsd.value))
const launchPriceDisplay = computed(() => nfPrice(launchPriceUsd.value))

// const canBuy = computed(() => amountNum.value > 0 && payUsd.value > 0)
</script>

<style scoped lang="scss">
.calculator {
  padding: 2.5rem 1.5rem;
}
.price {
  display: flex;
  align-items: flex-end;
  gap: 1rem;
  margin-bottom: 2.5rem;
  @include mobile {
    flex-direction: column;
    margin-bottom: 1.5rem;
    gap: 0.5rem;
    align-items: center;
  }
}
.price-text {
  position: relative;
  top: -1rem;
  @include mobile {
    top: 0;
  }
}
.top-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.bot-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @include mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 1.5rem;
    text-align: center;
  }
}
.calc-progress {
  margin-bottom: 1rem;
}

.amount-title {
  margin-bottom: 1rem;
}

.select-wrap {
  flex: 0 0 7.75rem;
  position: relative;
  margin-right: 1rem;
}

/* кнопка */
.select-btn {
  width: 100%;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 3.125rem;

  border: 0.0625rem solid var(--c-black);
  background: var(--c-white);
}

.select-icon {
  width: 1.25rem;
}

/* стрілка */
.select-arrow {
  width: 0.625rem;
  transform: rotate(180deg);
}
.select-arrow.open {
  transform: rotate(0deg);
}

/* dropdown */
.select-dropdown {
  position: absolute;
  left: 0;
  top: calc(100% + 0.25rem);
  width: 100%;
  max-height: 25rem;

  border-radius: 1rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  overflow: auto;
  z-index: 20;
  display: flex;
  flex-direction: column;
}

.select-item {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  transition: background 0.15s ease;
  box-sizing: border-box;
}
.select-item:not(:last-child) {
  border-bottom: 0.0625rem solid var(--c-grey-3);
}

.select-item:hover,
.select-item.active {
  background: var(--c-grey-3);
}
.balance {
  margin-bottom: 1rem;
  text-align: center;
  color: var(--c-grey);
}
.icon-down {
  width: 1.5rem;
}
.decor-down {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;
  @include mobile {
    display: none;
  }
}
.decor-line {
  height: 0.125rem;
  background: var(--c-grey-3);
}

.receive-title {
  margin-bottom: 1rem;
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
.receive-field {
  height: 4rem;
  background: var(--c-milk);
}
.receive {
  margin-bottom: 1.5rem;
}
.btn-buy {
  width: 100%;
}
.audited-title {
  text-align: center;
  margin-bottom: 1rem;
}
.audited-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.audited-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;
  @include mobile {
    gap: 0.25rem;
  }
}
.btn-wrap {
  margin-bottom: 2.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.audited-img {
  width: 4.5rem;
}
</style>
