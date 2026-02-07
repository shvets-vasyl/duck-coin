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
          <p class="sub-m place-title">Your place: #?</p>
          <h5 class="h5 place-count">$0.0</h5>
        </div>
        <div class="place-right">
          <p class="sub-s place-number">
            {{ shortAddress("0xd4e8a9c1f23b7e91a44357") }}
          </p>

          <p class="place-text sub-s">Current coin worth</p>
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
            v-for="({ place, address, money }, i) in paginatedItems"
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

              <p class="item-text sub-s">Total Transactions</p>
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
type LeaderboardItem = {
  place: number
  address: string
  money: string
  date: string
}

const todayItems: LeaderboardItem[] = [
  {
    place: 1,
    address: "0xd4e8a9c1f23b7e91a44357",
    money: "$36,453",
    date: "2026-02-07",
  },
  {
    place: 2,
    address: "0xa91c4e2f8b73d9e144b210",
    money: "$34,120",
    date: "2026-02-07",
  },
  {
    place: 3,
    address: "0x7f21b9e43c0a8d55219eaa",
    money: "$31,998",
    date: "2026-02-07",
  },
  {
    place: 4,
    address: "0x91b4eaa73d2f8c104f8e22",
    money: "$29,450",
    date: "2026-02-07",
  },
  {
    place: 5,
    address: "0x3c9e1a4b8d2f774aa918ee",
    money: "$27,880",
    date: "2026-02-07",
  },
  {
    place: 6,
    address: "0x8a22f9c1d4b73e9100aa55",
    money: "$26,410",
    date: "2026-02-07",
  },
  {
    place: 7,
    address: "0xb7e19f23d44a91c8ee1021",
    money: "$25,030",
    date: "2026-02-07",
  },
  {
    place: 8,
    address: "0x4aa8d1f9b73e22c019f333",
    money: "$23,760",
    date: "2026-02-07",
  },
  {
    place: 9,
    address: "0x9c44e2f1b73d8a901aa812",
    money: "$22,540",
    date: "2026-02-07",
  },
  {
    place: 10,
    address: "0x1f73e9c4b8d22aa901344f",
    money: "$21,300",
    date: "2026-02-07",
  },
]

const allTimeItems: LeaderboardItem[] = [
  ...todayItems,

  {
    place: 11,
    address: "0xa8129c44e1f73d8b2aa901",
    money: "$20,150",
    date: "2026-02-06",
  },
  {
    place: 12,
    address: "0xb8d1f73e9c44aa901221f",
    money: "$19,020",
    date: "2026-02-06",
  },
  {
    place: 13,
    address: "0x22aa9c44e1f73d8b19001",
    money: "$18,100",
    date: "2026-02-05",
  },
  {
    place: 14,
    address: "0x901f73e9c44b8d1aa2213",
    money: "$17,350",
    date: "2026-02-05",
  },
  {
    place: 15,
    address: "0x73e9c44b8d1f22aa90199",
    money: "$16,700",
    date: "2026-02-04",
  },
  {
    place: 16,
    address: "0x44b8d1f73e9c22aa901f3",
    money: "$15,980",
    date: "2026-02-04",
  },
  {
    place: 17,
    address: "0x8d1f73e9c44b22aa901aa",
    money: "$15,240",
    date: "2026-02-03",
  },
  {
    place: 18,
    address: "0x9c44b8d1f73e22aa901ef",
    money: "$14,600",
    date: "2026-02-03",
  },
  {
    place: 19,
    address: "0xf73e9c44b8d122aa901bb",
    money: "$13,950",
    date: "2026-02-02",
  },
  {
    place: 20,
    address: "0x1f73e9c44b8d22aa90012",
    money: "$13,300",
    date: "2026-02-02",
  },

  {
    place: 21,
    address: "0xc44b8d1f73e922aa90177",
    money: "$12,880",
    date: "2026-02-01",
  },
  {
    place: 22,
    address: "0x8d1f73e9c44b22aa90144",
    money: "$12,300",
    date: "2026-02-01",
  },
  {
    place: 23,
    address: "0x73e9c44b8d1f22aa90188",
    money: "$11,760",
    date: "2026-01-31",
  },
  {
    place: 24,
    address: "0x44b8d1f73e9c22aa90121",
    money: "$11,200",
    date: "2026-01-31",
  },
  {
    place: 25,
    address: "0xb8d1f73e9c4422aa90131",
    money: "$10,740",
    date: "2026-01-30",
  },
  {
    place: 26,
    address: "0x9c44b8d1f73e22aa90099",
    money: "$10,120",
    date: "2026-01-30",
  },
  {
    place: 27,
    address: "0xf73e9c44b8d122aa90055",
    money: "$9,680",
    date: "2026-01-29",
  },
  {
    place: 28,
    address: "0x1f73e9c44b8d22aa900aa",
    money: "$9,120",
    date: "2026-01-29",
  },
  {
    place: 29,
    address: "0xc44b8d1f73e922aa900ef",
    money: "$8,650",
    date: "2026-01-28",
  },
  {
    place: 30,
    address: "0x8d1f73e9c44b22aa90001",
    money: "$8,100",
    date: "2026-01-28",
  },
]

const filteredItems = computed(() =>
  activeTab.value === "today" ? todayItems : allTimeItems
)

const shortAddress = (addr: string, start = 4, end = 5) => {
  if (!addr) return ""
  return `${addr.slice(0, start)}...${addr.slice(-end)}`
}

const activeTab = ref<"today" | "all">("today")

const ITEMS_PER_PAGE = 6
const currentPage = ref(1)

const totalPages = computed(() =>
  Math.ceil(filteredItems.value.length / ITEMS_PER_PAGE)
)

const paginatedItems = computed(() => {
  const start = (currentPage.value - 1) * ITEMS_PER_PAGE
  const end = start + ITEMS_PER_PAGE
  return filteredItems.value.slice(start, end)
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
