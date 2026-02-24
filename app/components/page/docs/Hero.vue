<template>
  <section class="hero">
    <div class="container">
      <img class="inner-media" draggable="false" src="/images/docs/bg.webp" />

      <div class="content">
        <h2 class="title h2">Terms of service</h2>
        <p class="descr sub-s">Last Updated: 19 February 2026</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  padding: 8rem 3.5rem 3.5rem;
}
.container {
  height: 20rem;
  position: relative;
  border-radius: 1.5rem;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.content {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.title {
  text-transform: capitalize;
}
</style>
