<template>
  <Field v-slot="{ field, meta }" :name="name">
    <div class="field" :class="{ error: meta.touched && !meta.valid }">
      <CommonFormLabel
        v-if="label"
        :for-id="name"
        :text="label"
        :required="required"
      />

      <textarea
        v-bind="field"
        :id="name"
        :placeholder="label"
        class="textarea body-m"
      />
      <CommonFormErrorMessage :name="name" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate"

defineProps<{
  name: string
  label: string
  required?: boolean
}>()
</script>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  position: relative;
}
.textarea {
  height: 9.5rem;
  resize: none;
  outline: none;
  display: block;
  background: none;
  border: 0.0938rem solid var(--c-grey-3);
  text-transform: none;
  color: var(--c-black);
  border-radius: 1rem;
  padding: 1rem;
  @include mobile {
    height: 8.875rem;
  }
}
.textarea::placeholder {
  color: var(--c-grey);
}

// error
.field.error .textarea {
  border-color: red;
  color: red;
}
</style>
