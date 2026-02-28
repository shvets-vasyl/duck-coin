export default defineEventHandler(async (event) => {
  const {
    public: { apiBase },
  } = useRuntimeConfig()

  const currencyFrom = String(getQuery(event).currency_from || "").toLowerCase()

  if (!currencyFrom) return null

  try {
    return await $fetch(`${apiBase}/api/v1/presale/min-amount`, {
      query: {
        currency_from: currencyFrom,
      },
    })
  } catch (error) {
    console.error("Min amount fetch error:", error)
    return null
  }
})
