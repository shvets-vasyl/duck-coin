<template>
  <main class="main-page">
    <CommonHeader />
    <!-- <CommonMenu /> -->

    <PageMainHero />
    <PageMainCalculator />
    <PageMainGrowing />
    <PageMainLaunchpad />
    <PageMainWhy />
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  useLockScroll(false)
})
</script>

<style scoped lang="scss"></style>
