<template>
  <Field v-slot="{ field, meta }" :name="name">
    <div
      class="field"
      :class="{ error: meta.touched && !meta.valid, withIcon: icon }"
    >
      <CommonFormLabel
        v-if="label"
        :for-id="name"
        :text="label"
        :required="required"
      />

      <input
        v-bind="field"
        :id="name"
        :type="type"
        :autocomplete="autocomplete || 'on'"
        :placeholder="placeholder"
        class="input body-m"
      />

      <div class="icon">
        <slot />
      </div>

      <CommonFormErrorMessage :name="name" />
    </div>
  </Field>
</template>

<script setup lang="ts">
import { Field } from "vee-validate"

defineProps<{
  name: string
  type: string
  label?: string
  icon?: boolean
  placeholder?: string
  required?: boolean
  autocomplete?: string
}>()
</script>

<style lang="scss" scoped>
.field {
  display: flex;
  flex-direction: column;
  position: relative;
}
.input {
  height: 4rem;
  border: none;
  outline: none;
  display: block;
  background: none;
  border: 0.0938rem solid var(--c-grey-3);
  text-transform: none;
  color: var(--c-black);
  border-radius: 1rem;
  padding: 0 1rem;
}
.field.withIcon .input {
  padding-right: 3.125rem;
}
.input::placeholder {
  color: var(--c-grey);
}
.icon {
  position: absolute;
  bottom: 1.25rem;
  right: 1rem;
  width: 1.5rem;
  pointer-events: none;
}

// error
.field.error .input {
  border-color: red;
  color: red;
}
</style>
