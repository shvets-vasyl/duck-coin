import type { ReferralStatsResponse } from "@/types/general"

export function useReferralStats(walletAddress: Ref<string | null | undefined>) {
  const data = ref<ReferralStatsResponse | null>(null)
  const pending = ref(false)
  const error = ref<Error | null>(null)

  async function fetchStats() {
    const wallet = walletAddress.value
    if (!wallet?.trim()) {
      data.value = null
      return
    }

    pending.value = true
    error.value = null
    try {
      const result = await $fetch<ReferralStatsResponse>(
        `/api/presale/referrals/stats/${encodeURIComponent(wallet)}`
      )
      data.value = result
    } catch (e) {
      error.value = e instanceof Error ? e : new Error(String(e))
      data.value = null
    } finally {
      pending.value = false
    }
  }

  watch(
    walletAddress,
    (wallet) => {
      if (wallet?.trim()) fetchStats()
      else data.value = null
    },
    { immediate: true }
  )

  return {
    data: readonly(data),
    pending: readonly(pending),
    error: readonly(error),
    refresh: fetchStats,
  }
}
