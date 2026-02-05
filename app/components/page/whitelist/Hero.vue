<template>
  <section class="hero">
    <div class="content">
      <div class="left">
        <h2 class="title h2">EARLY BIRDS EAT. LATE FADERS CRY.</h2>
        <p class="descr sub-l">Secure your spot before normies arrive.</p>
      </div>
      <div class="right">
        <Form
          :validation-schema="schema"
          class="base-card form"
          @submit="onSubmit"
        >
          <h3 class="form-title h3">Whitelist is Live</h3>

          <div class="vip">
            <p class="sub-m">VIP presale access</p>
            <p class="sub-m">+</p>
            <p class="vip-best sub-m">Best Token Price</p>
          </div>

          <div class="fields">
            <input
              name="check"
              type="text"
              tabindex="-1"
              autocomplete="off"
              style="position: absolute; left: -9999px"
            />

            <CommonFormInput
              name="email"
              type="email"
              :label="fields.email.label"
              :placeholder="fields.email.placeholder"
              :required="fields.email.required"
              icon
            >
              <IconMail />
            </CommonFormInput>
          </div>

          <button class="form-btn">
            <CommonButtonTemplate big :yellow="!sended">
              {{ sended ? "Joined Successfully!" : "Join Whitelist" }}
            </CommonButtonTemplate>
          </button>

          <!-- <div class="text-wrap">
            <div class="form-text body-s">No spam. No data selling. Ever.</div>
          </div> -->
        </Form>
      </div>
    </div>

    <img class="duck-img" draggable="false" src="/images/whitelist/hero.png" />
  </section>
</template>

<script setup lang="ts">
import { Form } from "vee-validate"
import type { SubmissionHandler, GenericObject } from "vee-validate"
import { emailRegex } from "@/utils/validation/emailRegex"
import * as yup from "yup"

const fields = {
  email: {
    label: "Email",
    placeholder: "Email",
    required: true,
  },
}

// ----- FORM SCHEMA
const schema = yup.object({
  email: yup
    .string()
    .required("Is a required field")
    .matches(emailRegex, "Enter a valid e-mail (e.g. test@gmail.com)"),
})

// ----- FORM SUBMIT
const formOpenedAt = Date.now()
const sended = ref(false)

const onSubmit: SubmissionHandler<GenericObject> = async (
  values,
  { resetForm }
) => {
  const check = values.check as string
  if (check || sended.value) return

  const duration = Date.now() - formOpenedAt
  if (duration < 1200) return

  const email = values.email as string
  const data = { email }

  sended.value = true

  resetForm()

  const res = await $fetch("/api/whitelist", {
    method: "POST",
    body: data,
  })

  setTimeout(() => {
    sended.value = false
  }, 2000)

  console.log(res)
  console.log(data)
}
</script>

<style scoped lang="scss">
.hero {
  background: var(--c-yellow);
  padding: 6.5rem 3.5rem 3rem;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  @include mobile {
    padding: 5.75rem 1.25rem 24rem;
  }
}
.content {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 34rem;
  gap: 3.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
}
.title {
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.duck-img {
  position: absolute;
  bottom: -9.5rem;
  left: 1rem;
  width: 32.8125rem;
  pointer-events: none;
  @include mobile {
    width: 21.875rem;
    left: auto;
    right: 0;
    bottom: 1.25rem;
  }
}
.form {
  border-color: var(--c-black);
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  @include mobile {
    padding: 1.5rem 1.25rem;
  }
}
.form-title {
  text-align: center;
  margin-bottom: 0.5rem;
  text-transform: capitalize;
  padding-left: 5rem;
  padding-right: 5rem;
  @include mobile {
    font-size: 2rem;
    line-height: 2rem;
    padding-left: 0;
    padding-right: 0;
  }
}
.vip {
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  margin-bottom: 3.5rem;
  @include mobile {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.25rem;
    margin-bottom: 2.5rem;
  }
}
.vip-best {
  background: var(--c-yellow);
  border-radius: 3.125rem;
  padding: 0.25rem 0.75rem;
}
.form-btn {
  width: 100%;
}
.fields {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-text {
  border-radius: 0.75rem;
  border: 0.1875rem solid var(--c-grey-3);
  background: var(--c-milk);
  padding: 0.5rem 1.5rem;
  display: inline-flex;
  transform: rotate(2deg);
  justify-self: center;
}
.text-wrap {
  display: inline-flex;
  justify-content: center;
}
.descr {
  position: relative;
  z-index: 2;
  @include mobile {
    font-size: 1rem;
    line-height: 1rem;
  }
}
</style>
