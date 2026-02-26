<template>
  <main class="presale-page">
    <CommonHeader :nav-list="headerNav" btn-text="Connect wallet" />
    <CommonMenu />

    <PagePresaleHero />
    <PagePresaleProfile v-if="connectedWallet" />
    <PagePresalePanel />
    <PagePresaleHow />
    <PagePresaleReferrals />
    <PagePresaleLeaderboard />
    <SectionJoin />

    <CommonFormMessage transaction />

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

const connectedWallet = useState<string | null>("connected-wallet")
</script>

<style scoped lang="scss"></style>
