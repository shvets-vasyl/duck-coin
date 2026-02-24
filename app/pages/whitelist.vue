<template>
  <main class="whitelist-page">
    <CommonHeader hide-nav btn-text="Join Whitelist" />

    <PageWhitelistHero />
    <PageWhitelistPhotos />
    <SectionJoin white />

    <CommonFormMessage whitelist />
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.whitelist-page .header {
  pointer-events: none;
}
</style>
