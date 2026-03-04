import { createAppKit, useAppKitState, useAppKit, useDisconnect } from "@reown/appkit/vue"
import { useConnection } from "@wagmi/vue"
import { appkitConfig } from "@/config/appkit"
import {
  appkitOpenRef,
  appkitDisconnectRef,
  appkitConnectionRef,
} from "@/composables/appkit-provider"

export default defineNuxtPlugin((nuxtApp) => {
  createAppKit(appkitConfig)

  nuxtApp.vueApp.runWithContext(() => {
    const { open } = useAppKit()
    const { disconnect } = useDisconnect()
    const connection = useConnection()
    appkitOpenRef.value = open as (opts?: { view?: string }) => void
    appkitDisconnectRef.value = disconnect
    appkitConnectionRef.value = connection
  })

  const appKitState = useAppKitState()
  nuxtApp.vueApp.runWithContext(() => {
    setTimeout(() => {
      watch(
        () => appKitState.open,
        (isOpen) => {
          useLockScroll(isOpen)
          if (isOpen) {
            const addPrevent = () => {
              document.querySelector("w3m-modal")?.setAttribute("data-lenis-prevent", "")
            }
            addPrevent()
            nextTick(addPrevent)
            setTimeout(addPrevent, 200)
          }
        },
        { immediate: true }
      )
    }, 0)
  })
})
