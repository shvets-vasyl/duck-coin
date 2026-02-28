export default defineEventHandler(async (event) => {
  const {
    public: { apiBase },
  } = useRuntimeConfig()

  const wallet = getRouterParam(event, "wallet")

  if (!wallet) return null

  try {
    return await $fetch(`${apiBase}/api/v1/presale/info/${wallet}`)
  } catch (error) {
    console.error("Presale info fetch error:", error)
    return null
  }
})
