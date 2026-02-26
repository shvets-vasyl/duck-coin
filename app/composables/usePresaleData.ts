export const usePresaleData = async () => {
  const runtimeConfig = useRuntimeConfig()

  const presaleData = useState<{
    currencies: unknown[]
    config: Record<string, unknown>
    stats: Record<string, unknown>
  } | null>("presale-data", () => null)

  const presalePending = useState<boolean>("presale-data-pending", () => false)
  const presaleError = useState<string | null>("presale-data-error", () => null)

  const fetchPresaleData = async () => {
    if (presaleData.value || presalePending.value) return

    presalePending.value = true
    presaleError.value = null

    try {
      const [currenciesRes, configRes, statsRes] = await Promise.all([
        $fetch<{ currencies: unknown[] }>("/api/v1/presale/currencies", {
          baseURL: runtimeConfig.public.apiBase,
        }),
        $fetch<Record<string, unknown>>("/api/v1/presale/config", {
          baseURL: runtimeConfig.public.apiBase,
        }),
        $fetch<Record<string, unknown>>("/api/v1/presale/stats", {
          baseURL: runtimeConfig.public.apiBase,
        }),
      ])

      presaleData.value = {
        currencies: currenciesRes?.currencies ?? [],
        config: configRes ?? {},
        stats: statsRes ?? {},
      }
    } catch (error) {
      presaleError.value =
        error instanceof Error ? error.message : "Failed to fetch presale data"
    } finally {
      presalePending.value = false
    }
  }

  await fetchPresaleData()

  const refresh = async () => {
    presaleData.value = null
    await fetchPresaleData()
  }

  return {
    presaleData,
    pending: presalePending,
    error: presaleError,
    refresh,
  }
}
