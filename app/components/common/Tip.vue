<template>
  <div class="tip">{{ text }}</div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
}>()
</script>

<style scoped lang="scss">
.tip {
  border-radius: 1rem;
  border: 0.0625rem solid var(--c-black);
  background: var(--c-orange);
  display: inline-flex;
  padding: 0.5rem 1rem;
}
</style>
