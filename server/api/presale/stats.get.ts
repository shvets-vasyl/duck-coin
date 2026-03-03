export default defineEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()
  return await $fetch("/api/v1/presale/stats", {
    baseURL: runtimeConfig.public.apiBase,
  })
})
