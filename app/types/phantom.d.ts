declare global {
  interface Window {
    phantom?: {
      solana?: PhantomProvider
    }
  }
}

export {}
