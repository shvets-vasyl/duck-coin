import { useAppKit, useDisconnect } from "@reown/appkit/vue"
import { useConnection } from "@wagmi/vue"

export function useWallet() {
  const { open } = useAppKit()
  const { disconnect } = useDisconnect()
  const { address: wagmiAddress, isConnected: wagmiIsConnected } = useConnection()

  const connectedWallet = useState<string | null>("connected-wallet", () => null)

  const address = computed(() => wagmiAddress.value ?? undefined)
  const isConnected = computed(() => wagmiIsConnected.value ?? false)

  watch(
    wagmiAddress,
    (val) => {
      connectedWallet.value = val ?? null
    },
    { immediate: true }
  )

  const openConnectModal = () => {
    open({ view: "Connect" })
  }

  const disconnectWallet = async () => {
    await disconnect()
    connectedWallet.value = null
  }

  return {
    address,
    isConnected,
    connectedWallet,
    openConnectModal,
    disconnect: disconnectWallet,
  }
}
