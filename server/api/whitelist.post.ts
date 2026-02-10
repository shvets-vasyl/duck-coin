export default defineEventHandler(async (event) => {
  try {
    const { email } = await readBody(event)

    console.log(email)

    return { ok: true }
  } catch (e) {
    return { ok: false, error: e }
  }
})
