<template>
  <ErrorMessage v-slot="{ message }" :name="name">
    <div v-if="message" class="error cap-s">{{ message }}</div>
  </ErrorMessage>
</template>

<script setup lang="ts">
import { ErrorMessage } from "vee-validate"

defineProps<{
  name: string
}>()
</script>

<style scoped lang="scss">
.error {
  color: red;
  position: absolute;
  top: 100%;
  margin-top: 0.25rem;
  left: 0;
  width: 100%;
  text-align: right;
}
</style>
