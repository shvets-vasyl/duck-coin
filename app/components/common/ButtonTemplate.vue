<template>
  <div class="btn-template cta-s" :class="{ yellow, small, big }">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  yellow?: boolean
  small?: boolean
  big?: boolean
}>()
</script>

<style scoped lang="scss">
.btn-template {
  border-radius: 1rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-white);
  box-shadow: 0 0.1875rem 0 0 var(--c-black);
  padding: 0 1.5rem;
  display: flex;
  height: 3rem;
  justify-content: center;
  align-items: center;
  transition: all 0.4s var(--t-ease);
}
.btn-template.big {
  height: 3.5rem;
  width: 100%;
}
.btn-template.small {
  padding: 0;
  width: 3rem;
  border-radius: 0.75rem;
  box-shadow: 0 0.125rem 0 0 var(--c-black);
}
.btn-template.yellow {
  background: var(--c-yellow);
}
@include hover {
  .btn-template:hover {
    transform: translateY(0.1875rem);
    box-shadow: none;
  }
  .btn-template.small:hover {
    transform: translateY(0.125rem);
  }
}
</style>
