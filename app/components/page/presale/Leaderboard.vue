<template>
  <section class="section leaderboard">
    <div class="content base-card">
      <h3 class="h3 title">Leaderboard</h3>
      <div class="leaderboard-tip cap-m">Top 30 holders</div>

      <div class="place">
        <svg class="place-decor-1" viewBox="0 0 141 80" fill="none">
          <path
            d="M13.5 39.5C13.5 25.5 2.54275 1.81013 -3 0V80.5H140C141.382 80.5 72 67.5854 32.8962 67.5854C11.8832 67.5854 13.5 55.1277 13.5 39.5Z"
            fill="#FFFFCD"
          />
        </svg>
        <svg class="place-decor-2" viewBox="0 0 132 46" fill="none">
          <path
            d="M103.291 14.2759C123.664 19.0345 125.231 41.2414 131.5 46V0H0C2.08955 6.87356 30.5 20 53.5 20C67.9568 20 75.082 11.1034 103.291 14.2759Z"
            fill="#FFFFCD"
          />
        </svg>

        <div class="place-left">
          <p class="sub-m place-title">Top holder: {{ topHolderPlace }}</p>
          <h5 class="h5 place-count">{{ topHolderMoney }}</h5>
        </div>
        <div class="place-right">
          <p class="sub-s place-number">
            {{ shortAddress(topHolderAddress) }}
          </p>

          <p class="place-text sub-s">
            {{ pending ? "Loading..." : "Highest invested" }}
          </p>
        </div>
      </div>

      <div class="btns">
        <button class="tab-btn" @click="activeTab = 'today'">
          <CommonButtonTemplate :yellow="activeTab === 'today'" big>
            Today
          </CommonButtonTemplate>
        </button>

        <button class="tab-btn" @click="activeTab = 'all'">
          <CommonButtonTemplate :yellow="activeTab === 'all'" big>
            All time
          </CommonButtonTemplate>
        </button>
      </div>

      <div class="items-wrap">
        <div class="items">
          <div
            v-for="({ place, address, money, payments }, i) in paginatedItems"
            :key="i"
            class="item base-card"
          >
            <div class="item-left">
              <p class="sub-m item-title">#{{ place }}</p>
              <h5 class="h5 item-count">{{ money }}</h5>
            </div>
            <div class="item-right">
              <p class="sub-s item-number">
                {{ shortAddress(address) }}
              </p>

              <p class="item-text sub-s">{{ payments }} Payments</p>
            </div>
          </div>
        </div>

        <div class="items-pag">
          <button
            class="pag-prev-btn"
            :disabled="currentPage === 1"
            @click="prevPage"
          >
            <CommonButtonTemplate class="pag-prev" small>
              <IconCaret2 />
            </CommonButtonTemplate>
          </button>
          <p class="items-pages body-l">{{ currentPage }} / {{ totalPages }}</p>
          <button
            class="pag-next-btn"
            :disabled="currentPage === totalPages"
            @click="nextPage"
          >
            <CommonButtonTemplate class="pag-next" small>
              <IconCaret2 />
            </CommonButtonTemplate>
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type ApiLeaderboardItem = {
  rank: number
  wallet_address: string
  total_invested_usd: number
  total_tokens: number
  payment_count: number
  last_invested_at: string | null
}

type LeaderboardResponse = {
  total_count: number
  items: ApiLeaderboardItem[]
}

type LeaderboardItem = {
  place: number
  address: string
  money: string
  payments: number
  date: string
}

const activeTab = ref<"today" | "all">("today")
const ITEMS_PER_PAGE = 6
const currentPage = ref(1)

const { data: leaderboardData, pending } = await useAsyncData(
  "presale-leaderboard",
  () => $fetch<LeaderboardResponse>("/api/presale/leaderboard")
)

function nfMoney(n: number) {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(n)
  )
}

function shortAddress(addr: string, start = 6, end = 4) {
  if (!addr) return ""
  return `${addr.slice(0, start)}...${addr.slice(-end)}`
}

function toDateKey(value: string | null) {
  if (!value) return ""
  const d = new Date(value)

  if (Number.isNaN(d.getTime())) return ""

  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, "0")
  const day = String(d.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

const todayKey = computed(() => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, "0")
  const day = String(now.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
})

const allTimeItems = computed<LeaderboardItem[]>(() =>
  (leaderboardData.value?.items ?? []).slice(0, 30).map((item) => ({
    place: item.rank,
    address: item.wallet_address,
    money: nfMoney(item.total_invested_usd),
    payments: item.payment_count,
    date: toDateKey(item.last_invested_at),
  }))
)

const todayItems = computed<LeaderboardItem[]>(() =>
  allTimeItems.value.filter((item) => item.date === todayKey.value)
)

const filteredItems = computed(() =>
  activeTab.value === "today" ? todayItems.value : allTimeItems.value
)

const totalPages = computed(() => {
  const pages = Math.ceil(filteredItems.value.length / ITEMS_PER_PAGE)
  return pages || 1
})

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  return filteredItems.value.slice(start, end)
})

const topHolder = computed(() => allTimeItems.value[0] ?? null)

const topHolderPlace = computed(() => {
  return topHolder.value ? `#${topHolder.value.place}` : "#—"
})

const topHolderMoney = computed(() => {
  return topHolder.value?.money ?? "$0"
})

const topHolderAddress = computed(() => {
  return topHolder.value?.address ?? ""
})

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

watch(activeTab, () => {
  currentPage.value = 1
})

watch(filteredItems, () => {
  if (currentPage.value > totalPages.value) {
    currentPage.value = 1
  }
})
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.leaderboard-tip {
  transform: rotate(5deg);
  height: 3rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.125rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-orange);
  margin-bottom: 2.5rem;
  @include mobile {
    height: 1.875rem;
    width: 8.5rem;
    margin-bottom: 2rem;
  }
}
.content {
  width: 55rem;
  padding: 2.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mobile {
    width: 100%;
    padding: 1.5rem;
  }
}
.place {
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-yellow);
  padding: 0 1.5rem;
  height: 9.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  overflow: hidden;
  margin-bottom: 2.5rem;
  @include mobile {
    border-radius: 1rem;
    height: auto;
    padding: 1.25rem;
    align-items: flex-start;
    margin-bottom: 1.5rem;
  }
}
.place-right,
.place-left {
  display: flex;
  justify-content: space-between;
}
.place-left {
  @include mobile {
    flex-direction: column;
  }
}
.place-right {
  text-align: right;
  @include mobile {
    width: 100%;
  }
}
.place-title,
.place-count {
  margin-bottom: 1rem;
}
.place-count {
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.place-title {
  @include mobile {
    margin-bottom: 1rem;
  }
}
.place-decor-1 {
  width: 8.8125rem;
  bottom: 0;
  left: 0;
  pointer-events: none;
  position: absolute;
  @include mobile {
    width: 6.5625rem;
  }
}
.place-decor-2 {
  width: 8.25rem;
  top: 0;
  right: 0;
  pointer-events: none;
  position: absolute;
  @include mobile {
    width: 4.6875rem;
  }
}
.btns {
  padding-top: 2.5rem;
  border-top: 0.0625rem solid var(--c-grey-3);
  width: 100%;
  display: flex;
  gap: 1rem;
  @include mobile {
    padding-top: 1.5rem;
    gap: 0;
    justify-content: space-between;
  }
}
.tab-btn {
  width: 12.25rem;
  @include mobile {
    width: 8.75rem;
  }
}
.tab-btn:deep(.btn-template) {
  border-radius: 3.125rem;
}
.tab-btn:deep(:not(.yellow)) {
  box-shadow: 0 0.1875rem 0 0 var(--c-grey-3);
  border-color: var(--c-grey-3);
}
@include hover {
  .tab-btn:deep(:not(.yellow)):hover {
    box-shadow: none;
  }
}
.items-wrap {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  gap: 2.5rem;
  @include mobile {
    margin-top: 1.5rem;
    gap: 1.5rem;
  }
}

.items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.item {
  background: var(--c-milk);
  display: flex;
  flex-direction: column;
  @include mobile {
    position: relative;
    padding: 1.25rem;
  }
}
.item-right {
  text-align: right;
  @include mobile {
    text-align: left;
  }
}
.item-title,
.item-count {
  margin-bottom: 1rem;
}
.item-count {
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.items-pag {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.items-pages {
  width: 5rem;
  text-align: center;
  @include mobile {
    font-size: 0.875rem;
    width: 3rem;
  }
}
.pag-prev-btn svg {
  width: 1.25rem;
  transform: rotate(90deg);
}
.pag-next-btn svg {
  width: 1.25rem;
  transform: rotate(-90deg);
}
.pag-prev-btn:disabled,
.pag-next-btn:disabled {
  opacity: 0.2;
}

.item-left,
.item-right {
  display: flex;
  justify-content: space-between;
  @include mobile {
    flex-direction: column;
  }
}

.place-text {
  @include mobile {
    order: 1;
    font-size: 0.75rem;
    font-family: var(--f-medium);
  }
}
.place-number {
  @include mobile {
    order: 2;
    font-size: 0.75rem;
    font-family: var(--f-bold);
  }
}
.item-text {
  @include mobile {
    font-size: 0.75rem;
    font-family: var(--f-medium);
  }
}
.item-number {
  @include mobile {
    position: absolute;
    top: 1.25rem;
    right: 1.25rem;
  }
}
</style>
