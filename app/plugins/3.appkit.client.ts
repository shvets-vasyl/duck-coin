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
      let modalObserver: MutationObserver | null = null

      const addPreventToModal = () => {
        const modal = document.querySelector("w3m-modal")
        if (modal) {
          modal.setAttribute("data-lenis-prevent", "")
          modal.querySelector("[part='container']")?.setAttribute("data-lenis-prevent", "")
        }
      }

      watch(
        () => appKitState.open,
        (isOpen) => {
          useLockScroll(isOpen)
          if (isOpen) {
            addPreventToModal()
            nextTick(addPreventToModal)
            setTimeout(addPreventToModal, 100)
            setTimeout(addPreventToModal, 300)
            setTimeout(addPreventToModal, 600)

            modalObserver?.disconnect()
            modalObserver = new MutationObserver(addPreventToModal)
            modalObserver.observe(document.body, {
              childList: true,
              subtree: true,
            })
          } else {
            modalObserver?.disconnect()
            modalObserver = null
          }
        },
        { immediate: true }
      )
    }, 0)
  })
})
