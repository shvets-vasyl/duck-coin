export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const query = getQuery(event)

  return await $fetch("/api/v1/presale/estimate", {
    baseURL: runtimeConfig.public.apiBase,
    query: {
      usd_amount: query.usd_amount,
      pay_currency: query.pay_currency,
    },
  })
})
