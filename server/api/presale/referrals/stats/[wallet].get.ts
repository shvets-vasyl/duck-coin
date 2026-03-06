export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const wallet = getRouterParam(event, "wallet")

  if (!wallet) return null

  try {
    return await $fetch(`/api/v1/presale/referrals/stats/${wallet}`, {
      baseURL: runtimeConfig.public.apiBase,
    })
  } catch (error) {
    console.error("Referral stats fetch error:", error)
    return null
  }
})
