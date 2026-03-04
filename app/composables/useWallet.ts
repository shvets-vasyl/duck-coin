import {
  appkitOpenRef,
  appkitDisconnectRef,
  appkitConnectionRef,
} from "./appkit-provider"

export function useWallet() {
  const connectedWallet = useState<string | null>("connected-wallet", () => null)

  const address = computed(
    () => appkitConnectionRef.value?.address.value ?? undefined
  )
  const isConnected = computed(
    () => appkitConnectionRef.value?.isConnected.value ?? false
  )

  watch(
    () => appkitConnectionRef.value?.address.value,
    (val) => {
      connectedWallet.value = val ?? null
    },
    { immediate: true }
  )

  const openConnectModal = () => {
    const open = appkitOpenRef.value
    if (open) open({ view: "Connect" })
  }

  const disconnectWallet = async () => {
    const disconnect = appkitDisconnectRef.value
    if (disconnect) {
      await disconnect()
      connectedWallet.value = null
    }
  }

  return {
    address,
    isConnected,
    connectedWallet,
    openConnectModal,
    disconnect: disconnectWallet,
  }
}
