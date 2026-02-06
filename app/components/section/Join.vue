<template>
  <section class="join" :class="{ white }">
    <img class="duck-img" draggable="false" src="/images/main/join-duck.png" />
    <div class="content">
      <h2 class="title h2">Join the Duck Army</h2>
      <p class="descr body-m">
        240,000+ degens and counting. This isn’t a community — it’s a movement.
        Get in or get left behind.
      </p>

      <div class="socials-wrap">
        <CommonSocials :yellow="white" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  white?: boolean
}>()
</script>

<style scoped lang="scss">
.join {
  padding: 7.375rem 3.5rem;
  background: var(--c-yellow);
  position: relative;
  overflow: hidden;
  @include mobile {
    padding: 1.5rem 1rem 20rem;
  }
}
.join.white {
  background: transparent;
  border-bottom: 0.125rem solid var(--c-black);
}
.title {
  margin-bottom: 1rem;
  width: 43.75rem;
  @include mobile {
    width: 100%;
  }
}
.descr {
  width: 28rem;
  margin-bottom: 3.5rem;
  @include mobile {
    width: 85%;
    margin-bottom: 1.5rem;
  }
}
.duck-img {
  position: absolute;
  bottom: 0;
  width: 35rem;
  right: 3.5rem;
  pointer-events: none;
  @include mobile {
    width: 21.5rem;
    right: 1.5rem;
  }
}
</style>
