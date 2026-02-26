export type PhantomProvider = {
  isPhantom?: boolean
  publicKey?: { toString(): string }
  isConnected?: boolean
  connect: () => Promise<{ publicKey: { toString(): string } }>
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

export const getConnectedWalletAddress = () => {
  const provider = getPhantomProvider()

  if (!provider?.publicKey) return null

  return provider.publicKey.toString()
}
