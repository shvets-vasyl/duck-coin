export const appkitOpenRef = shallowRef<((opts?: { view?: string }) => void) | null>(null)
export const appkitDisconnectRef = shallowRef<(() => Promise<void>) | null>(null)
export const appkitConnectionRef = shallowRef<{
  address: import("vue").Ref<string | undefined>
  isConnected: import("vue").Ref<boolean>
} | null>(null)
