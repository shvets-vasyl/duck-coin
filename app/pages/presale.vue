<template>
  <main class="presale-page">
    <CommonHeader btn-text="Connect wallet" />
    <CommonMenu />

    <PagePresaleHero />
    <PagePresaleProfile v-if="connectedWallet" />
    <PagePresalePanel />
    <PagePresaleHow />
    <PagePresaleReferrals v-if="connectedWallet" />
    <PagePresaleLeaderboard />
    <SectionJoin />

    <CommonFormMessage transaction />

    <CommonFooter />
  </main>
</template>

<script setup lang="ts">
const connectedWallet = useState<string | null>("connected-wallet")
</script>

<style scoped lang="scss"></style>
