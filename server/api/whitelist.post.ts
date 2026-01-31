export default defineEventHandler(async (event) => {
  try {
    const { name, email } = await readBody(event)

    await $fetch("https://docs.google.com/forms/d/e/FORM_ID/formResponse", {
      method: "POST",
      body: new URLSearchParams({
        "entry.123456": name,
        "entry.654321": email,
      }),
    })

    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
})
