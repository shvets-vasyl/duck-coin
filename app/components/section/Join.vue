<template>
  <section class="join">
    <img
      class="duck-img"
      draggable="false"
      src="/images/main/join-duck.webp"
      loading="lazy"
      role="presentation"
    />
    <div class="content">
      <h2 class="title h2">Join the Duck Army</h2>
      <p class="descr body-m">
        240,000+ degens and counting. This isn’t a community — it’s a movement.
        Get in or get left behind.
      </p>

      <div class="socials-wrap">
        <CommonSocials />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.join {
  padding: 7.375rem 3.5rem;
  background: var(--c-yellow);
  position: relative;
  overflow: hidden;
}
.title {
  margin-bottom: 1rem;
  width: 43.75rem;
}
.descr {
  width: 28rem;
  margin-bottom: 3.5rem;
}
.duck-img {
  position: absolute;
  top: -7.5rem;
  width: 94.0625rem;
  right: -19.375rem;
  pointer-events: none;
}
</style>
