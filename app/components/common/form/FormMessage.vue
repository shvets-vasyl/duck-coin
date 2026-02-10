<template>
  <div v-if="sended || errorForm" class="form-message body-m">
    <div v-if="whitelist">
      You successfully <br class="mob" />joined the whitelist!
    </div>

    <div v-if="transaction">
      Transaction successful! <br class="mob" />Your purchase is complete.
    </div>

    <div v-if="errorForm">
      Something went wrong. <br class="mob" />
      Please try again later.
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  transaction?: boolean
  whitelist?: boolean
}>()

const sended = useState("form-sended")
const errorForm = useState("form-error")
</script>

<style scoped lang="scss">
.form-message {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 41rem;
  padding: 1.5rem;
  background: var(--c-white);
  border: 0.125rem solid var(--c-black);
  border-radius: 1rem;
  z-index: 9999;
  text-align: center;
  @include mobile {
    width: 17.25rem;
  }
}
</style>
