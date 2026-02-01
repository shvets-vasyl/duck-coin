<template>
  <section class="section why">
    <h3 class="title h3">Why DUCK Hits Different</h3>

    <div class="items">
      <!-- HEAD -->
      <div class="head">
        <div class="col">
          <p class="sub-s">Feature</p>
        </div>

        <div v-for="({ feature, icon }, i) in items" :key="i" class="col">
          <img
            class="item-logo"
            draggable="false"
            :src="icon"
            loading="lazy"
            :alt="feature"
          />
          <p class="sub-s">{{ feature }}</p>
        </div>
      </div>

      <!-- ROWS -->
      <div class="rows">
        <div v-for="row in rows" :key="row.key" class="row">
          <div class="col">
            <p class="sub-s">{{ row.label }}</p>
          </div>

          <div v-for="(item, i) in items" :key="i" class="col">
            <component :is="getIcon(item[row.key].available)" />
            <p class="sub-s">{{ item[row.key].text }}</p>
          </div>
        </div>
      </div>

      <div class="stroke" />
    </div>

    <div class="items-mob">
      <div class="head-mob">
        <div class="col-mob">
          <img
            class="item-logo"
            draggable="false"
            :src="items[0]?.icon"
            loading="lazy"
            :alt="items[0]?.feature"
          />
          <p class="sub-s">{{ items[0]?.feature }}</p>
        </div>
        <div class="col-mob">
          <div class="select-wrap">
            <CommonSelect v-model="selectedOption" :items="selectOptions" />
          </div>
        </div>
      </div>
    </div>

    <button class="join-btn">
      <CommonButtonTemplate yellow big>
        Join the $DUCK Presale
      </CommonButtonTemplate>
    </button>
  </section>
</template>

<script setup lang="ts">
import IconCheck from "@/components/icon/Check.vue"
import IconMinus from "@/components/icon/Minus.vue"
import IconExclamation from "@/components/icon/Exclamation.vue"

type Availability = boolean | "half"

type Cell = {
  text: string
  available: Availability
}

type RowKey =
  | "auto_lock"
  | "protection"
  | "insurance"
  | "creator"
  | "sharing"
  | "holder"

type Item = {
  feature: string
  icon: string
} & Record<RowKey, Cell>

const items: Item[] = [
  {
    feature: "DuckPad",
    icon: "/images/main/logo-1.webp",
    auto_lock: { text: "Contract-Level", available: true },
    protection: { text: "Built-in", available: true },
    insurance: { text: "Yes", available: true },
    creator: { text: "On-chain Score", available: true },
    sharing: { text: "To Holders", available: true },
    holder: { text: "Priority", available: true },
  },
  {
    feature: "Pump.fun",
    icon: "/images/main/logo-2.webp",
    auto_lock: { text: "Optional", available: false },
    protection: { text: "None", available: false },
    insurance: { text: "No", available: false },
    creator: { text: "Anyone", available: false },
    sharing: { text: "Platform Only", available: false },
    holder: { text: "None", available: false },
  },
  {
    feature: "Bonk.fun",
    icon: "/images/main/logo-3.webp",
    auto_lock: { text: "Trust-Based", available: false },
    protection: { text: "None", available: false },
    insurance: { text: "No", available: false },
    creator: { text: "Anyone", available: false },
    sharing: { text: "Platform Only", available: false },
    holder: { text: "None", available: false },
  },
  {
    feature: "Meteora",
    icon: "/images/main/logo-4.webp",
    auto_lock: { text: "Partial", available: "half" },
    protection: { text: "Limited", available: "half" },
    insurance: { text: "No", available: false },
    creator: { text: "Basic", available: "half" },
    sharing: { text: "Platform Only", available: false },
    holder: { text: "None", available: false },
  },
  {
    feature: "Four Meme",
    icon: "/images/main/logo-5.webp",
    auto_lock: { text: "None", available: false },
    protection: { text: "None", available: false },
    insurance: { text: "No", available: false },
    creator: { text: "Anyone", available: false },
    sharing: { text: "Platform Only", available: false },
    holder: { text: "None", available: false },
  },
]

const rows: Array<{ key: RowKey; label: string }> = [
  { key: "auto_lock", label: "Auto Liquidity Lock" },
  { key: "protection", label: "Rug Protection" },
  { key: "insurance", label: "Insurance" },
  { key: "creator", label: "Creator Reputation" },
  { key: "sharing", label: "Revenue Sharing" },
  { key: "holder", label: "Holder Benefits" },
]

const getIcon = (available: Availability) => {
  if (available === true) return IconCheck
  if (available === "half") return IconExclamation
  return IconMinus
}

const selectOptions = computed(() =>
  items.slice(1).map((it) => ({
    text: it.feature,
    icon: it.icon,
  }))
)

const selectedOption = ref(selectOptions.value[0]!)

// const selected = computed<Item>(() => {
//   const found = items.find((it) => it.feature === selectedOption.value.text)
//   return found ?? items[0]!
// })
</script>

<style scoped lang="scss">
.why {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.title {
  width: 45rem;
  text-align: center;
  margin-bottom: 3.5rem;
  text-transform: capitalize;
  @include mobile {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}
.items {
  width: 100%;
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  position: relative;
  @include mobile {
    display: none;
  }
}
.stroke {
  position: absolute;
  left: 16.6%;
  top: 0;
  height: 100%;
  width: 13.875rem;
  border-radius: 1.5rem;
  border: 1px solid var(--c-black);
  pointer-events: none;
}
.join-btn {
  margin-top: 3.5rem;
  width: 15.625rem;
  @include mobile {
    margin-top: 1.5rem;
    width: 100%;
  }
}
.item-logo {
  width: 1.5rem;
}
.head,
.row:not(:last-child) {
  border-bottom: 0.0625rem solid var(--c-grey-3);
}
.col {
  display: flex;
  align-items: center;
  gap: 1rem;
  height: 100%;
  padding: 1rem 1.5rem;
}
.col:deep(svg) {
  width: 1.5rem;
}
.head,
.row {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}
.head {
  height: 6rem;
}
.row {
  height: 4.5rem;
}
.items-mob {
  display: none;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
}
.head-mob {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-radius: 3.125rem;
  gap: 0.5rem;
  border: 0.0625rem solid var(--c-grey-3);
  background: var(--c-white);
  padding: 0.5rem;
}
.col-mob {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
}
.select-wrap {
  width: 100%;
}
.select-wrap:deep(.select-btn) {
  border-color: var(--c-grey-3);
  background: var(--c-milk);
}
</style>
