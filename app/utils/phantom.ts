export type PhantomProvider = {
  isPhantom?: boolean
  publicKey?: { toString(): string }
  isConnected?: boolean
  connect: (options?: { onlyIfTrusted?: boolean }) => Promise<{
    publicKey: { toString(): string }
  }>
  disconnect?: () => Promise<void>
}

export const getPhantomProvider = () => {
  if (typeof window === "undefined") return null

  const provider = window.phantom?.solana

  if (provider?.isPhantom) {
    return provider
  }

  return null
}

export const getWalletAddress = async () => {
  const provider = getPhantomProvider()

  if (!provider) {
    window.open("https://phantom.app/", "_blank")
    return null
  }

  if (provider.publicKey) {
    return provider.publicKey.toString()
  }

  const response = await provider.connect()
  return response.publicKey.toString()
}

export const getConnectedWalletAddress = async () => {
  const provider = getPhantomProvider()

  if (!provider) return null

  if (provider.publicKey) {
    return provider.publicKey.toString()
  }

  try {
    const response = await provider.connect({ onlyIfTrusted: true })
    return response.publicKey.toString()
  } catch {
    return null
  }
}

export const logoutWallet = async () => {
  const provider = getPhantomProvider()

  if (!provider) return

  try {
    await provider.disconnect?.()
  } catch (e) {
    console.error("Disconnect error", e)
  }
}
