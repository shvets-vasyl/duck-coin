<template>
  <main class="error-page">
    <h1 class="h1">404</h1>

    <a class="link" href="/">
      <CommonButtonTemplate yellow big> Go back home </CommonButtonTemplate>
    </a>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.error-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  @include mobile {
    gap: 1rem;
  }
}
</style>
