export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)

    const config = useRuntimeConfig()
    const base = config.emailApiBase

    await $fetch(`https://${base}/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${config.emailApiKey}`,
        "Content-Type": "application/json",
      },
      body: { to: email },
    })

    return { ok: true }
  } catch (e: any) {
    return { ok: false, error: e?.statusMessage ?? e?.message ?? String(e) }
  }
})
