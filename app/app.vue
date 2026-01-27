<template>
  <div class="wrapper">
    <!-- <CommonPreloader v-if="!preloaderDone" />
    <CommonLoader /> -->

    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
const preloaderDone = useState<boolean>("preloader-done", () => false)
useState("transition-done", () => true)
useState("header-state", () => {
  return {
    isMenuOpen: false,
    isScrolled: false,
  }
})
</script>
