export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const wallet = getRouterParam(event, "wallet")

  return await $fetch(`/api/v1/presale/investor/${wallet}`, {
    baseURL: runtimeConfig.public.apiBase,
  })
})
