export default defineEventHandler(async () => {
  const runtimeConfig = useRuntimeConfig()
  return await $fetch("/api/v1/presale/config", {
    baseURL: runtimeConfig.public.apiBase,
  })
})
