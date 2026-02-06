<template>
  <section class="section tokenomics">
    <h3 class="title h3">$DUCK Tokenomics</h3>

    <div class="contract base-card">
      <div class="contract-left">
        <p class="contract-title cap-m">Smart contract</p>
        <p class="contract-code body-xl">
          {{ contract }}
        </p>
      </div>
      <div class="contract-right">
        <button class="copy-btn" @click="copyContract">
          <span v-if="copied" class="tooltip body-s">Copied</span>

          <CommonButtonTemplate small>
            <IconCopy class="icon-copy" />
          </CommonButtonTemplate>
        </button>
      </div>
    </div>

    <div class="graph">
      <div class="left">
        <div
          v-for="({ value, name, color, number }, i) in leftItems"
          :key="i"
          class="item"
        >
          <div class="item-top">
            <p class="item-name sub-m">{{ name }}</p>
            <h5 class="item-percent h5">{{ formatPercent(value) }}</h5>
          </div>

          <CommonProgress :percent="value" :color="color" />

          <p class="item-tokens">
            <span class="sub-xs">{{ number }}</span>
            <span class="token-title cap-s">Tokens</span>
          </p>
        </div>
      </div>

      <div class="center">
        <div class="center-logo">
          <IconLogo />
        </div>
        <div class="donut-wrap" @pointermove="onMove" @pointerleave="onLeave">
          <ClientOnly>
            <svg viewBox="0 0 120 120" class="donut">
              <g>
                <path
                  v-for="(arc, i) in arcs"
                  :key="arc.name"
                  :d="arc.d"
                  fill="none"
                  :stroke-width="STROKE_WIDTH"
                  stroke-linecap="round"
                  :stroke="arc.color"
                  class="donut-segment"
                  style="pointer-events: visibleStroke"
                  @pointerenter="onEnter(i)"
                />
              </g>
            </svg>
          </ClientOnly>

          <div
            v-if="activeArc"
            class="donut-tooltip body-s"
            :style="{
              '--tooltip-color': activeArc.color,
              left: `${tip.x}px`,
              top: `${tip.y}px`,
            }"
          >
            <div class="donut-tooltip-value">
              <span class="body-m">{{ formatNumber(activeArc.number) }}</span>
              <span class="cap-m">Tokens</span>
            </div>
          </div>
        </div>
      </div>

      <div class="right">
        <div
          v-for="({ value, name, color, number }, i) in rightItems"
          :key="i"
          class="item"
        >
          <div class="item-top">
            <p class="item-name sub-m">{{ name }}</p>
            <h5 class="item-percent h5">{{ formatPercent(value) }}</h5>
          </div>

          <CommonProgress :percent="value" :color="color" />

          <p class="item-tokens">
            <span class="sub-xs">{{ number }}</span>
            <span class="token-title cap-s">Tokens</span>
          </p>
        </div>
      </div>
    </div>

    <div class="total">
      <p class="total-text cap-m">Total supply</p>
      <h3 class="total-number h3">6 000 000 000 $DUCK</h3>

      <button class="join-btn">
        <CommonButtonTemplate yellow big> Join Presale </CommonButtonTemplate>
      </button>
    </div>

    <div class="cards">
      <div
        v-for="({ info, text, icon }, i) in cards"
        :key="i"
        class="card base-card"
      >
        <img
          class="card-icon"
          draggable="false"
          :src="icon"
          loading="lazy"
          :alt="text"
        />
        <p class="sub-s">{{ text }}</p>

        <div class="card-info">
          <span class="tooltip-card body-s">{{ info }}</span>
          <button class="card-info-btn">
            <IconInfo />
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { isDesktop } = useViewport()

/* ------------------ contract ------------------ */
const contract = "0xB9Ca2693Dfb8B4fA3Bb1B49934FE2D442427221e"
const copied = ref(false)

const copyContract = async () => {
  await navigator.clipboard.writeText(contract)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

/* ------------------ data ------------------ */
interface TokenomicItem {
  name: string
  value: number
  color: string
  number: number
}

const tokenomics: TokenomicItem[] = [
  { name: "Presale", value: 40, color: "#7476E5", number: 2400000000 },
  { name: "Rewards", value: 15, color: "#51C072", number: 900000000 },
  { name: "Team", value: 5, color: "#F7931A", number: 300000000 },
  { name: "Liquidity", value: 20, color: "#D555FF", number: 1200000000 },
  { name: "Burn", value: 15, color: "#FF4245", number: 900000000 },
  { name: "Marketing", value: 5, color: "#FFCB46", number: 367588888 },
]

const cards = [
  {
    icon: "/images/main/token-icon-1.webp",
    text: "Stay Score System",
    info: "Some information",
  },
  {
    icon: "/images/main/token-icon-2.webp",
    text: "Daily Price Increase",
    info: "Some information",
  },
  {
    icon: "/images/main/token-icon-3.webp",
    text: "TGE Unlock Tied",
    info: "Some information",
  },
]

const leftItems = computed(() => tokenomics.slice(0, 3))
const rightItems = computed(() => tokenomics.slice(3))

/* ------------------ hover ------------------ */

const hoveredIndex = ref<number | null>(null)
const tip = ref({ x: 0, y: 0 })

const activeArc = computed(() =>
  hoveredIndex.value === null ? null : tokenomics[hoveredIndex.value]
)

const onEnter = (i: number) => {
  if (!isDesktop.value) return

  hoveredIndex.value = i
}

const onLeave = () => {
  if (!isDesktop.value) return

  hoveredIndex.value = null
}

const onMove = (e: PointerEvent) => {
  if (!isDesktop.value) return

  const target = e.target as Element

  if (!target?.classList?.contains("donut-segment")) {
    hoveredIndex.value = null
    return
  }

  const el = e.currentTarget as HTMLElement
  const rect = el.getBoundingClientRect()

  tip.value.x = e.clientX - rect.left
  tip.value.y = e.clientY - rect.top
}

// format
const formatPercent = (value: number) =>
  `${value.toFixed(2).replace(".", ",")}%`
const formatNumber = (n: number) => new Intl.NumberFormat("fr-FR").format(n)

/* ------------------ svg helpers ------------------ */
const polarToCartesian = (cx: number, cy: number, r: number, angle: number) => {
  const rad = ((angle - 90) * Math.PI) / 180
  return {
    x: cx + r * Math.cos(rad),
    y: cy + r * Math.sin(rad),
  }
}

const describeArc = (
  cx: number,
  cy: number,
  r: number,
  start: number,
  end: number
) => {
  const startPos = polarToCartesian(cx, cy, r, end)
  const endPos = polarToCartesian(cx, cy, r, start)
  const largeArc = end - start <= 180 ? 0 : 1

  return `M ${startPos.x} ${startPos.y}
          A ${r} ${r} 0 ${largeArc} 0 ${endPos.x} ${endPos.y}`
}

/* ------------------ donut config ------------------ */
const cx = 60
const cy = 60
const r = 50

const STROKE_WIDTH = 20
const GAP_DEG = 4
const MIN_VISIBLE_DEG = 0.1

/* ------------------ arcs ------------------ */
const arcs = computed(() => {
  const total = tokenomics.reduce((s, i) => s + i.value, 0)
  const n = tokenomics.length

  const capDeg = (STROKE_WIDTH / 2 / r) * (180 / Math.PI)

  const gapGeom = GAP_DEG + 2 * capDeg

  const safeGap = Math.min(gapGeom, 360 / n - 0.2)

  const available = 360 - n * safeGap

  let a = 0

  return tokenomics.map((item) => {
    const sweep = available * (item.value / total)

    const start = a
    const end = a + sweep

    const d = sweep > MIN_VISIBLE_DEG ? describeArc(cx, cy, r, start, end) : ""

    a += sweep + safeGap

    return { ...item, d }
  })
})
</script>

<style scoped lang="scss">
.icon-copy {
  width: 1.5rem;
}
.title {
  margin-bottom: 3.5rem;
  @include mobile {
    text-align: center;
    margin-bottom: 1.5rem;
  }
}
.tokenomics {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.contract {
  display: flex;
  align-items: center;
  justify-content: space-between;
  @include mobile {
    display: none;
  }
}
.contract-title {
  margin-bottom: 0.75rem;
  color: var(--c-grey);
}
.copy-btn {
  position: relative;
}
.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;

  padding: 0.25rem 0.5rem;
  background: var(--c-black);
  color: var(--c-white);
  border-radius: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
}

.graph {
  display: grid;
  grid-template-columns: 23.1875rem 1fr 23.1875rem;
  gap: 4.5rem;
  align-items: center;
  width: 100%;
  margin-top: 3.5rem;
  @include mobile {
    grid-template-columns: 1fr 1fr;
    margin-top: 0;
    gap: 0;
    column-gap: 0.5rem;
    align-items: flex-start;
  }
}
.item {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include mobile {
    border-radius: 1rem;
    border: 0.0625rem solid var(--c-grey-3);
    background: var(--c-white);
    padding: 1rem;
    gap: 0;
  }
}
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @include mobile {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.5rem;
  }
}
.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @include mobile {
    gap: 0.5rem;
  }
}
.left {
  @include mobile {
    order: 2;
  }
}
.right {
  @include mobile {
    order: 3;
  }
}

.donut-segment {
  cursor: pointer;
  transition: opacity 0.25s ease;
}
@include hover {
  .donut-segment:hover {
    opacity: 0.25;
  }
}
.donut-segment .donut {
  width: 100%;
  height: auto;
}
.donut-tooltip {
  border: 0.125rem solid var(--tooltip-color);
  position: absolute;
  transform: translateY(-100%) translateX(-50%);
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  background: var(--c-white);
  color: var(--c-black);
  border-radius: 1rem;
  pointer-events: none;
  white-space: nowrap;
  z-index: 3;
  margin-top: -2rem;
  @include mobile {
    display: none;
  }
}
.donut-tooltip:after {
  content: "";
  width: 1rem;
  height: 1rem;
  background: var(--c-white);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%) rotate(45deg);
  border: 0.125rem solid var(--tooltip-color);
  border-left-color: transparent;
  border-top-color: transparent;
}

.donut-tooltip-title {
  opacity: 0.8;
  margin-bottom: 0.125rem;
}

.donut-tooltip-value .cap-m {
  color: var(--c-grey);
  padding-left: 0.25rem;
}
.donut-wrap {
  position: relative;
}
.center {
  position: relative;
  @include mobile {
    order: 1;
    height: 14.1875rem;
    width: 14.1875rem;
    grid-column: 1 / span 2;
    margin: 0 auto;
    margin-bottom: 1.5rem;
  }
}
.center-logo {
  width: 9.6875rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  @include mobile {
    width: 4.375rem;
  }
}
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.5rem;
  @include mobile {
    display: none;
  }
}
.total-text {
  margin-bottom: 1rem;
}
.total-number {
  margin-bottom: 1.5rem;
}
.join-btn {
  width: 15.625rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  width: 100%;
  margin-top: 3.5rem;
  @include mobile {
    display: none;
  }
}
.card {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.card-icon {
  width: 4.5rem;
}
.card-info {
  margin-left: auto;
  position: relative;
}
.card-info-btn {
  width: 1.5rem;
}

.tooltip-card {
  position: absolute;
  bottom: 100%;
  margin-bottom: 0.5rem;
  width: 13rem;
  right: 0;

  padding: 0.25rem 0.5rem;
  background: var(--c-black);
  color: var(--c-white);
  border-radius: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
  opacity: 0;
  transition: all 0.4s var(--t-ease);
}
@include hover {
  .card-info:hover .tooltip-card {
    opacity: 1;
  }
}
.item-name {
  @include mobile {
    font-size: 0.875rem;
    line-height: 100%;
    margin-bottom: 1.5rem;
  }
}
.item:deep(.progress-wrap) {
  @include mobile {
    height: 1rem;
    margin-bottom: 1.5rem;
  }
}
.item-tokens {
  display: none;
  @include mobile {
    display: flex;
    gap: 0.25rem;
  }
}
.token-title {
  @include mobile {
    color: var(--c-grey);
  }
}
</style>
