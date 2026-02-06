<template>
  <main class="presale-page">
    <CommonHeader :nav-list="headerNav" btn-text="Connect wallet" />
    <CommonMenu />

    123
    <SectionJoin />

    <CommonFooter />
  </main>
</template>

<script setup lang="ts">
const headerNav = [
  {
    text: "Duck Dynasty",
    link: "/",
  },
  {
    text: "Tokenomics",
    link: "/",
  },
  {
    text: "Stay Score",
    link: "/",
  },
]
</script>

<style scoped lang="scss"></style>
