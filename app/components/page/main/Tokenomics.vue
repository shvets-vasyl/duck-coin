<template>
  <section class="section tokenomics">
    <h3 class="title h3">$DUCK Tokenomics</h3>

    <div class="contract base-card">
      <div class="left">
        <p class="contract-title cap-m">Smart contract</p>
        <p class="contract-code body-xl">
          {{ contract }}
        </p>
      </div>
      <div class="right">
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
          v-for="({ value, name, color }, i) in leftItems"
          :key="i"
          class="item"
        >
          <div class="item-top">
            <p class="item-name sub-m">{{ name }}</p>
            <h5 class="item-percent h5">{{ formatPercent(value) }}</h5>
          </div>

          <div class="item-progress-wrap">
            <div class="item-progress">
              <div
                class="progress-percent"
                :style="{
                  width: `${value}%`,
                  backgroundColor: color,
                }"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="center">
        <svg viewBox="0 0 120 120" class="donut">
          <g>
            <path
              v-for="arc in arcs"
              :key="arc.name"
              :d="arc.d"
              fill="none"
              :stroke-width="STROKE_WIDTH"
              stroke-linecap="round"
              :stroke="arc.color"
              class="donut-segment"
            />
          </g>
        </svg>
      </div>

      <div class="right">
        <div
          v-for="({ value, name, color }, i) in rightItems"
          :key="i"
          class="item"
        >
          <div class="item-top">
            <p class="item-name sub-m">{{ name }}</p>
            <h5 class="item-percent h5">{{ formatPercent(value) }}</h5>
          </div>

          <div class="item-progress-wrap">
            <div class="item-progress">
              <div
                class="progress-percent"
                :style="{
                  width: `${value}%`,
                  backgroundColor: color,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue"

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
}

const tokenomics: TokenomicItem[] = [
  { name: "Presale", value: 40, color: "#7476E5" },
  { name: "Rewards", value: 15, color: "#51C072" },
  { name: "Team", value: 5, color: "#F7931A" },
  { name: "Liquidity", value: 20, color: "#D555FF" },
  { name: "Burn", value: 15, color: "#FF4245" },
  { name: "Marketing", value: 5, color: "#FFCB46" },
]

const leftItems = computed(() => tokenomics.slice(0, 3))
const rightItems = computed(() => tokenomics.slice(3))

const formatPercent = (value: number) => `${value.toFixed(0)}%`

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

const STROKE_WIDTH = 12
const GAP_DEG = 20

// 0 = майже butt, 1 = повністю round
const ROUNDNESS = 0.7

/* ------------------ arcs ------------------ */
const arcs = computed(() => {
  let startAngle = 0

  return tokenomics.map((item) => {
    const fullAngle = (item.value / 100) * 360

    // 👇 контроль "процента" заокруглення
    const visibleAngle = fullAngle - GAP_DEG * ROUNDNESS

    const d = describeArc(
      cx,
      cy,
      r,
      startAngle + GAP_DEG / 2,
      startAngle + GAP_DEG / 2 + visibleAngle
    )

    startAngle += fullAngle

    return {
      ...item,
      d,
      strokeWidth: STROKE_WIDTH,
    }
  })
})
</script>

<style scoped lang="scss">
.icon-copy {
  width: 1.5rem;
}
.title {
  margin-bottom: 3.5rem;
}
.contract {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
}

.graph {
  display: grid;
  grid-template-columns: 23.1875rem 1fr 23.1875rem;
  gap: 4.5rem;
  align-items: center;
  width: 100%;
  margin-top: 3.5rem;
}
.item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.item-top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}
.item-progress-wrap {
  width: 100%;
  border-radius: 6.25rem;
  border: 0.0625rem solid var(--c-black);
  background: var(--c-white);
  height: 1.5rem;
  padding: 0.25rem;
}
.item-progress {
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background: var(--c-grey-3);
}
.progress-percent {
  height: 100%;
  border-radius: 6.25rem;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.donut-segment {
  cursor: pointer;
  transition: opacity 0.25s ease;

  &:hover {
    opacity: 0.5;
  }
}
</style>
