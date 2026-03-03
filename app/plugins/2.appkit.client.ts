import { createAppKit } from "@reown/appkit/vue"
import { appkitConfig } from "@/config/appkit"

export default defineNuxtPlugin(() => {
  createAppKit(appkitConfig)
})
