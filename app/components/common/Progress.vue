<template>
  <div class="progress-wrap">
    <div class="progress">
      <div
        class="progress-percent"
        :style="{
          width: `${percent}%`,
          backgroundColor: color,
        }"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  percent: number
  color: string
}>()
</script>

<style scoped lang="scss">
.progress-wrap {
  width: 100%;
  border-radius: 6.25rem;
  border: 0.0625rem solid var(--c-black);
  background: var(--c-white);
  height: 1.5rem;
  padding: 0.25rem;
}
.progress {
  width: 100%;
  height: 100%;
  border-radius: 6.25rem;
  background: var(--c-grey-3);
}
.progress-percent {
  height: 100%;
  border-radius: 6.25rem;
}
</style>
