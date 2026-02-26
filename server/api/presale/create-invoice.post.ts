export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  return await $fetch("/api/v1/presale/create-invoice", {
    baseURL: runtimeConfig.public.apiBase,
    method: "POST",
    body: {
      wallet_address: body.wallet_address,
      usd_amount: body.usd_amount,
      success_url: body.success_url,
      cancel_url: body.cancel_url,
    },
  })
})
