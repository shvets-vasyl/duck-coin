<template>
  <section class="hero">
    <div class="container">
      <img
        class="inner-media desk"
        draggable="false"
        src="/images/docs/bg.webp"
      />
      <img
        class="inner-media mob"
        draggable="false"
        src="/images/docs/bg-mob.webp"
      />

      <div class="content">
        <h2 class="title h2">{{ data.title }}</h2>
        <p class="descr sub-s">{{ data.descr }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string
    descr: string
  }
}>()
</script>

<style scoped lang="scss">
.hero {
  padding: 8rem 3.5rem 3.5rem;
  @include mobile {
    padding: 6rem 1rem 2.5rem;
  }
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
  border: 0.0938rem solid var(--c-black);
  padding: 1.5rem;
  text-align: center;

  @include mobile {
    height: 33rem;
    border-radius: 1rem;
  }
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
