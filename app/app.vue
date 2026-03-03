<template>
  <div class="wrapper">
    <!-- <CommonPreloader v-if="!preloaderDone" /> -->
    <!-- <CommonLoader /> -->
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
import { useAppKitState } from "@reown/appkit/vue"

const appKitState = useAppKitState()
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

// const preloaderDone = useState<boolean>("preloader-done", () => false)
useState("transition-done", () => true)
useState("form-sended", () => false)
useState("form-error", () => false)
useState("header-state", () => {
  return {
    isMenuOpen: false,
    isScrolled: false,
  }
})
</script>
