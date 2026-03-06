const REFERRAL_CODE_STORAGE_KEY = "duck_referral_code"

function getStoredReferralCode(): string | null {
  if (import.meta.server) return null
  try {
    return localStorage.getItem(REFERRAL_CODE_STORAGE_KEY)
  } catch {
    return null
  }
}

function setStoredReferralCode(code: string): void {
  if (import.meta.server) return
  try {
    localStorage.setItem(REFERRAL_CODE_STORAGE_KEY, code)
  } catch {
    // ignore
  }
}

function clearStoredReferralCode(): void {
  if (import.meta.server) return
  try {
    localStorage.removeItem(REFERRAL_CODE_STORAGE_KEY)
  } catch {
    // ignore
  }
}

export function useReferralAttach() {
  const route = useRoute()
  const { connectedWallet } = useWallet()
  const attachPending = useState<boolean>("referral-attach-pending", () => false)

  function storeReferralCodeFromRoute() {
    if (import.meta.server) return
    const code = route.query.ref as string
    if (code && typeof code === "string" && code.trim()) {
      setStoredReferralCode(code.trim())
    }
  }

  onMounted(storeReferralCodeFromRoute)
  watch(() => route.query.ref, storeReferralCodeFromRoute)

  watch(
    () => connectedWallet.value,
    async (wallet) => {
      if (import.meta.server || !wallet) return

      const code = getStoredReferralCode()
      if (!code) return

      attachPending.value = true
      try {
        await $fetch("/api/presale/referrals/attach", {
          method: "POST",
          body: {
            wallet_address: wallet,
            referral_code: code,
          },
        })
        clearStoredReferralCode()
      } catch {
        // 422 or network error: clear so we don't retry forever
        clearStoredReferralCode()
      } finally {
        attachPending.value = false
      }
    },
    { immediate: true }
  )

  return {
    attachPending: readonly(attachPending),
    getStoredReferralCode,
    clearStoredReferralCode,
  }
}
