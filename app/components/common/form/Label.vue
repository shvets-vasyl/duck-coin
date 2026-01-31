<template>
  <label :for="forId" class="label sub-s">
    {{ text }} <span v-if="required">*</span>
  </label>
</template>

<script setup lang="ts">
defineProps<{
  forId: string
  text: string
  required: boolean
}>()
</script>

<style scoped lang="scss">
.label {
  margin-bottom: 1rem;
}
.label span {
  color: #ff0000;
}
</style>
