<template>
  <div class="timer">
    <div class="time">
      <IconTimerBg class="time-bg" />
      <h4 class="time-number h4">{{ hours }}</h4>
      <p class="time-text cap-s">Hours</p>
    </div>
    <div class="dots">:</div>
    <div class="time">
      <IconTimerBg class="time-bg" />
      <h4 class="time-number h4">{{ minutes }}</h4>
      <p class="time-text cap-s">Minutes</p>
    </div>
    <div class="dots">:</div>
    <div class="time">
      <IconTimerBg class="time-bg" />
      <h4 class="time-number h4">{{ seconds }}</h4>
      <p class="time-text cap-s">Seconds</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const DURATION_MS = 24 * 60 * 60 * 1000 // 24h
const STORAGE_KEY = "duck_timer_end_at"

const endAt = ref<number>(0)
const now = ref<number>(Date.now())
let intervalId: number | undefined

function startNewCycle() {
  endAt.value = Date.now() + DURATION_MS
  localStorage.setItem(STORAGE_KEY, String(endAt.value))
}

function initEndAt() {
  if (typeof window === "undefined") return

  const saved = Number(localStorage.getItem(STORAGE_KEY))
  const isValid = Number.isFinite(saved) && saved > 0

  if (!isValid || saved <= Date.now()) startNewCycle()
  else endAt.value = saved
}

const remainingMs = computed(() => Math.max(0, endAt.value - now.value))

const hours = computed(() => {
  const h = Math.floor(remainingMs.value / (60 * 60 * 1000))
  return String(h).padStart(2, "0")
})

const minutes = computed(() => {
  const m = Math.floor((remainingMs.value % (60 * 60 * 1000)) / (60 * 1000))
  return String(m).padStart(2, "0")
})

const seconds = computed(() => {
  const s = Math.floor((remainingMs.value % (60 * 1000)) / 1000)
  return String(s).padStart(2, "0")
})

function tick() {
  now.value = Date.now()

  if (remainingMs.value === 0) {
    startNewCycle()
    now.value = Date.now()
  }
}

onMounted(() => {
  initEndAt()
  tick()
  intervalId = window.setInterval(tick, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) window.clearInterval(intervalId)
})
</script>

<style scoped lang="scss">
.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
}
.dots {
  font-size: 2.5rem;
  font-family: var(--f-semibold);
}
.time {
  width: 6rem;
  position: relative;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.time-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}
.time-number,
.time-text {
  position: relative;
}
</style>
