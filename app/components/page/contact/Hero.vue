<template>
  <section class="hero">
    <div class="left">
      <h3 class="title h3">Get in touch with us</h3>
      <p class="descr body-m">
        Drop us a message and our team will get back to you shortly.
      </p>
      <div class="email-content">
        <p class="email-title sub-s">Contact by email</p>
        <div class="email-text">
          <a href="mailto:hello@duck.com" class="email-link body-l">
            hello@duck.com
          </a>
          <IconArrow2 class="email-arrow" />
        </div>
      </div>
      <div class="photo">
        <img
          class="inner-media"
          draggable="false"
          src="/images/contact/hero.webp"
        />
      </div>
    </div>
    <div class="right">
      <Form
        :validation-schema="schema"
        class="base-card form"
        @submit="onSubmit"
      >
        <p class="form-title sub-l">Contact form</p>

        <div class="fields">
          <input
            name="check"
            type="text"
            tabindex="-1"
            autocomplete="off"
            style="position: absolute; left: -9999px"
          />

          <CommonFormInput
            name="name"
            type="text"
            :label="fields.name.label"
            :placeholder="fields.name.placeholder"
            :required="fields.name.required"
          />

          <CommonFormInput
            name="email"
            type="email"
            :label="fields.email.label"
            :placeholder="fields.email.placeholder"
            :required="fields.email.required"
          />

          <CommonFormInput
            name="subject"
            type="text"
            :label="fields.subject.label"
            :placeholder="fields.subject.placeholder"
            :required="fields.subject.required"
          />

          <CommonFormTextarea
            name="message"
            type="text"
            :label="fields.message.label"
            :placeholder="fields.message.placeholder"
            :required="fields.message.required"
          />
        </div>

        <button class="form-btn">
          <CommonButtonTemplate big :yellow="!sended">
            {{ sended ? "Sended Successfully!" : "Send message" }}
          </CommonButtonTemplate>
        </button>
      </Form>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Form } from "vee-validate"
import type { SubmissionHandler, GenericObject } from "vee-validate"
import { emailRegex } from "@/utils/validation/emailRegex"
import * as yup from "yup"

const fields = {
  name: {
    label: "Name",
    placeholder: "Name",
    required: true,
  },
  email: {
    label: "Email",
    placeholder: "Email",
    required: true,
  },
  subject: {
    label: "Subject",
    placeholder: "Find your issue",
    required: true,
  },
  message: {
    label: "Your Message",
    placeholder: "Describe your issue",
    required: false,
  },
}

// ----- FORM SCHEMA
const schema = yup.object({
  name: yup
    .string()
    .required("Is a required field")
    .min(2, "Must be at least 2 characters")
    .matches(/^[^\d]*$/, "Invalid format"),

  email: yup
    .string()
    .required("Is a required field")
    .matches(emailRegex, "Enter a valid e-mail (e.g. test@gmail.com)"),

  subject: yup
    .string()
    .required("Is a required field")
    .min(2, "Must be at least 2 characters"),

  message: yup.string(),
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

  const name = values.name as string
  const email = values.email as string
  const subject = values.subject as string
  const message = values.message as string

  const data = { name, email, subject, message }

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
  padding: 8rem 3.5rem 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    padding: 6rem 1rem 2.5rem;
  }
}
.title {
  width: 60%;
  text-transform: capitalize;
  margin-bottom: 1rem;
  @include mobile {
    width: 80%;
  }
}
.descr {
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 1.25rem;
    width: 75%;
  }
}
.left {
  display: flex;
  flex-direction: column;
}
.email-title {
  color: var(--c-grey);
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0;
  }
}
.photo {
  position: relative;
  height: 27.5rem;
  border-radius: 1.5rem;
  overflow: hidden;
  margin-top: auto;
  @include mobile {
    height: 21.4375rem;
    border-radius: 1.25rem;
    margin-top: 2.5rem;
  }
}
.email-text {
  display: flex;
  gap: 0.5rem;
  @include mobile {
    gap: 0.25rem;
    margin-top: -0.3125rem;
  }
}
.email-link {
  text-decoration: underline;
  @include mobile {
    font-size: 0.875rem;
  }
}
@include hover {
  .email-link:hover {
    text-decoration: none;
  }
}
.email-arrow {
  width: 1.5rem;
  @include mobile {
    width: 1.25rem;
  }
}

.form {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  @include mobile {
    padding: 1.5rem 1.25rem;
  }
}
.form-title {
  margin-bottom: 2.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
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
.email-content {
  @include mobile {
    display: flex;
    justify-content: space-between;
  }
}
</style>
