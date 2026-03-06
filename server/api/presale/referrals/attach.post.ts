export default defineEventHandler(async (event) => {
  const runtimeConfig = useRuntimeConfig()
  const body = await readBody(event)

  return await $fetch("/api/v1/presale/referrals/attach", {
    baseURL: runtimeConfig.public.apiBase,
    method: "POST",
    body: {
      wallet_address: body.wallet_address,
      referral_code: body.referral_code,
    },
  })
})
