export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)

    const cleanEmail = String(email || "").trim()
    if (!cleanEmail) {
      throw createError({ statusCode: 400, statusMessage: "email is required" })
    }

    const config = useRuntimeConfig()
    const auth = Buffer.from(
      `${config.esputnikUsername}:${config.esputnikApiKey}`
    ).toString("base64")

    // ВАЖЛИВО: channels на верхньому рівні (як в OpenAPI)
    const res = await $fetch("https://esputnik.com/api/v1/contact", {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Content-Type": "application/json",
      },
      body: {
        channels: [{ type: "email", value: cleanEmail }],
      },
    })

    return { ok: true, res }
  } catch (e: any) {
    return { ok: false, error: e?.statusMessage ?? e?.message ?? String(e) }
  }
})
