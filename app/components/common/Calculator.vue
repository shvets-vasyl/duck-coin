<template>
  <ClientOnly>
    <div class="base-card calculator" :class="{ smaller: isSmaller }">
      <div class="price">
        <h3 class="price-number h4">{{ raisedDisplay }}</h3>
        <p class="price-text cap-m">Raised</p>
      </div>

      <div class="top-info">
        <div class="days">
          <span class="sub-s">{{ soldDisplay }} </span
          ><span class="cap-m"> Sold</span>
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
          <span class="cap-m">1 $DUCK = <br class="mob" /></span>
          <span class="sub-s">{{ duckPriceDisplay }}</span>
        </div>

        <div class="launching">
          <span class="cap-m">
            Launch<span class="txt-1">ing</span> price = <br class="mob" />
          </span>
          <span class="sub-s">{{ launchPriceDisplay }}</span>
        </div>
      </div>

      <div class="fields-wrap">
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
              <CommonSelect
                v-model="selected"
                :items="exchange"
                :inner2="isSmaller"
              />
            </div>
          </div>
        </div>

        <p class="balance cap-s">
          <span v-if="minAmountPending">Checking minimum...</span>
          <span v-else-if="!amountNum">Enter amount</span>

          <span v-else-if="isBelowMinAmount">
            Min payment is {{ minAmountDisplay }} {{ selected.code }}
          </span>
          <span v-else-if="estimatePending">Calculating...</span>
          <span v-else-if="estimatedAmountDisplay">
            Pay: {{ estimatedAmountDisplay }} {{ selected.code }}
          </span>
          <span v-else>Enter amount</span>
        </p>

        <div v-if="!isSmaller" class="decor-down">
          <div class="decor-line" />
          <CommonButtonTemplate small disabled>
            <IconDown class="icon-down" />
          </CommonButtonTemplate>
          <div class="decor-line" />
        </div>

        <div class="receive">
          <p class="receive-title sub-s">You receive (tokens)</p>

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
              <img
                class="logo-img"
                draggable="false"
                src="/images/presale/profile.png"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="btn-wrap">
        <button
          v-if="!connectedWallet"
          class="btn-buy"
          @click="openConnectModal"
        >
          <CommonButtonTemplate big yellow>
            Connect wallet
          </CommonButtonTemplate>
        </button>
        <button
          v-else
          class="btn-buy"
          :disabled="
            !amountNum ||
            isBelowMinAmount ||
            estimatePending ||
            minAmountPending ||
            createInvoicePending ||
            !isActive
          "
          @click="onSubmit"
        >
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
            <img
              class="audited-img"
              draggable="false"
              :src="icon"
              :alt="text"
            />
            <p class="audited-text sub-s">{{ text }}</p>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import { nfMoney, nfInt, nfPrice, nfToken, nfCrypto } from "@/utils/formatters"
import type {
  CurrencyItem,
  ExchangeItem,
  EstimateResponse,
  CreateInvoiceResponse,
  MinAmountResponse,
} from "@/types/general"

const props = defineProps<{
  smaller?: boolean
}>()

const auditedItems = [
  { text: "CertiK", icon: "/images/main/audited-1.webp" },
  { text: "hacken", icon: "/images/main/audited-2.webp" },
  { text: "solidproof", icon: "/images/main/audited-3.webp" },
]

const createInvoicePending = ref(false)
const paymentId = useState<string | null>("presale-payment-id", () => null)

const { connectedWallet, openConnectModal } = useWallet()

const { presaleData } = await usePresaleData()
const { isMobile } = useViewport()

const route = useRoute()
const router = useRouter()
const sended = useState("form-sended")

const selected = ref<ExchangeItem>({
  text: "",
  icon: "",
  code: "",
})

onMounted(() => {
  const payment = route.query.payment

  if (payment === "success") {
    sended.value = true

    setTimeout(() => {
      sended.value = false
    }, 4000)

    router.replace({ query: { ...route.query, payment: undefined } })
  }

  if (payment === "cancel") {
    router.replace({ query: { ...route.query, payment: undefined } })
  }
})

const isSmaller = computed(() => props.smaller || isMobile.value)

const minAmountData = ref<MinAmountResponse | null>(null)
const minAmountPending = ref(false)

const fetchMinAmount = async () => {
  const code = selected.value.code?.toLowerCase()

  if (!code) {
    minAmountData.value = null
    return
  }

  minAmountPending.value = true

  try {
    const response = await $fetch<MinAmountResponse>(
      "/api/presale/min-amount",
      {
        query: {
          currency_from: code,
        },
      }
    )

    minAmountData.value = response
  } catch (error) {
    console.error("Min amount fetch error:", error)
    minAmountData.value = null
  } finally {
    minAmountPending.value = false
  }
}

watch(
  () => selected.value.code,
  () => {
    fetchMinAmount()
  },
  { immediate: true }
)

const minAmountValue = computed(() => {
  return Number(minAmountData.value?.min_amount ?? 0)
})

const estimatedAmountValue = computed(() => {
  return Number(estimateData.value?.estimated_amount ?? 0)
})

const isBelowMinAmount = computed(() => {
  if (!estimatedAmountValue.value || !minAmountValue.value) return false
  return estimatedAmountValue.value < minAmountValue.value
})

const minAmountDisplay = computed(() => {
  if (!minAmountValue.value) return "—"

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }).format(minAmountValue.value)
})

const configData = computed(
  () => (presaleData.value?.config ?? {}) as Record<string, unknown>
)

const statsData = computed(
  () => (presaleData.value?.stats ?? {}) as Record<string, unknown>
)

const priceData = computed(
  () => (presaleData.value?.price ?? {}) as Record<string, unknown>
)

const exchange = computed<ExchangeItem[]>(() =>
  ((presaleData.value?.currencies as CurrencyItem[]) ?? [])
    .filter((item) => item.enable)
    .map(({ code, logo_url }) => ({
      text: code,
      code,
      icon: "https://nowpayments.io" + logo_url,
    }))
)

watchEffect(() => {
  if (!selected.value.text && exchange.value.length) {
    selected.value = exchange.value[0]!
  }
})

const onSubmit = async () => {
  const wallet = connectedWallet.value
  if (!wallet) {
    openConnectModal()
    return
  }

  if (
    !amountNum.value ||
    !isActive.value ||
    isBelowMinAmount.value ||
    minAmountPending.value
  )
    return

  createInvoicePending.value = true

  try {
    const origin = window.location.origin

    const response = await $fetch<CreateInvoiceResponse>(
      "/api/presale/create-invoice",
      {
        method: "POST",
        body: {
          wallet_address: wallet,
          usd_amount: amountNum.value,
          success_url: `${origin}/presale?payment=success`,
          cancel_url: `${origin}/presale?payment=cancel`,
        },
      }
    )

    paymentId.value = response.payment_id
    window.location.href = response.invoice_url
  } finally {
    createInvoicePending.value = false
  }
}

const amount = ref("")
const estimateData = ref<EstimateResponse | null>(null)
const estimatePending = ref(false)

function onInput(e: Event) {
  const el = e.target as HTMLInputElement
  let v = el.value.replace(/[^\d.]/g, "")
  v = v.replace(/(\..*)\./g, "$1")
  v = v.replace(/^0+(?=\d)/, "")
  amount.value = v
}

const amountNum = computed(() => {
  const n = Number.parseFloat(amount.value || "0")
  return Number.isFinite(n) ? n : 0
})

const duckPriceUsd = computed(() => {
  const raw = Number(configData.value.token_price_usd ?? 0)
  return raw > 0 ? raw / 1e9 : 0
})

const fetchEstimate = async () => {
  if (!amountNum.value || !selected.value.code) {
    estimateData.value = null
    return
  }

  estimatePending.value = true

  try {
    const response = await $fetch<EstimateResponse>("/api/presale/estimate", {
      query: {
        usd_amount: amountNum.value,
        pay_currency: selected.value.code,
      },
    })

    estimateData.value = response
  } catch {
    estimateData.value = null
  } finally {
    estimatePending.value = false
  }
}

watch([amountNum, () => selected.value.code], () => {
  fetchEstimate()
})

const receiveTokens = computed(() => {
  if (!amountNum.value || !duckPriceUsd.value) return 0
  return amountNum.value / duckPriceUsd.value
})

const receiveDisplay = computed(() => {
  return receiveTokens.value ? nfToken(receiveTokens.value) : ""
})

const estimatedAmountDisplay = computed(() => {
  const value = estimatedAmountValue.value
  return value ? nfCrypto(value) : ""
})

const raisedDisplay = computed(() => {
  const value = Number(statsData.value.total_raised_usd ?? 0)
  return nfMoney(value)
})

const investorsDisplay = computed(() => {
  const value = Number(statsData.value.total_participants ?? 0)
  return nfInt(value)
})

const soldDisplay = computed(() => {
  const value = Number(statsData.value.total_sold ?? 0)
  return nfInt(value)
})

const progressPercent = computed(() => {
  const sold = Number(statsData.value.total_sold ?? 0)
  const supply = Number(statsData.value.presale_supply ?? 0)

  if (!supply) return 0

  const p = (sold / supply) * 100
  return Math.max(0, Math.min(100, Math.round(p)))
})

const isActive = computed(() => Boolean(statsData.value.is_active))

const duckPriceDisplay = computed(() => {
  return duckPriceUsd.value ? nfPrice(duckPriceUsd.value) : "—"
})

const launchPriceDisplay = computed(() => {
  const value = Number(priceData.value.launch_price_usd ?? 0)
  return value > 0 ? nfPrice(value) : "—"
})
</script>

<style scoped lang="scss">
.calculator {
  padding: 2.5rem 1.5rem;
  @include mobile {
    padding: 1.5rem 1rem;
  }
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
  top: -0.5rem;
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
  @include mobile {
    margin-bottom: 0.75rem;
  }
}
.smaller .amount {
  order: 1;
  width: calc(50% - 0.5rem);
  @include mobile {
    width: calc(50% - 0.25rem);
  }
}
.smaller .receive {
  order: 2;
  margin-bottom: 1rem;
  width: calc(50% - 0.5rem);
  @include mobile {
    width: calc(50% - 0.25rem);
  }
}
.smaller .balance {
  order: 3;
}
.smaller .balance span {
  @include mobile {
    display: none;
  }
}

.select-wrap {
  flex: 0 0 7.75rem;
  position: relative;
  margin-right: 1rem;
}
.smaller .select-wrap {
  flex: 1 0 auto;
}

.launching .txt-1 {
  @include mobile {
    display: none;
  }
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
.smaller .balance {
  width: calc(50% - 0.5rem);
  @include mobile {
    width: calc(50% - 0.25rem);
  }
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
.icon-dollar img {
  width: 100%;
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
.btn-buy:disabled {
  pointer-events: none;
  opacity: 0.5;
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

.smaller .fields-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.smaller .calc-field {
  height: 4rem;
  margin-bottom: 0;
}
</style>
