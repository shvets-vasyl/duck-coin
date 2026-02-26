<template>
  <div class="timer">
    <div class="time">
      <IconTimerBg class="time-bg" />
      <h4 class="time-number h4">{{ days }}</h4>
      <p class="time-text cap-s">Days</p>
    </div>

    <div class="dots">:</div>

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
  </div>
</template>

<script setup lang="ts">
const { presaleData } = await usePresaleData()

const now = ref(Date.now())
let intervalId: number | undefined

const startTimeMs = computed(() => {
  const config = (presaleData.value?.config ?? {}) as Record<string, unknown>
  const raw = Number(config.start_time ?? 0)

  return raw > 0 ? raw * 1000 : 0
})

const remainingMs = computed(() => Math.max(0, startTimeMs.value - now.value))

const days = computed(() => {
  const d = Math.floor(remainingMs.value / (24 * 60 * 60 * 1000))
  return String(d).padStart(2, "0")
})

const hours = computed(() => {
  const h = Math.floor(
    (remainingMs.value % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  )
  return String(h).padStart(2, "0")
})

const minutes = computed(() => {
  const m = Math.floor((remainingMs.value % (60 * 60 * 1000)) / (60 * 1000))
  return String(m).padStart(2, "0")
})

function tick() {
  now.value = Date.now()
}

onMounted(() => {
  tick()
  intervalId = window.setInterval(tick, 1000)
})

onBeforeUnmount(() => {
  if (intervalId) {
    window.clearInterval(intervalId)
  }
})
</script>

<style scoped lang="scss">
.timer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  text-align: center;
  @include mobile {
    gap: 1rem;
  }
}
.dots {
  font-size: 2.5rem;
  font-family: var(--f-semibold);
  @include mobile {
    font-size: 1.5rem;
  }
}
.time {
  width: 5.75rem;
  position: relative;
  padding: 1rem;
  padding-top: 1.125rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  @include mobile {
    width: 4.5rem;
    padding: 1rem 0.5rem;
    gap: 0.25rem;
  }
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
