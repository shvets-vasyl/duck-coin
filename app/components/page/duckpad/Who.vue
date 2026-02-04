<template>
  <section class="section who">
    <h3 class="title h3">Who DuckPad Is For</h3>

    <div class="items">
      <CommonCard v-for="(item, i) in items" :key="i" :data="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    photo: "/images/duckpad/who-2.webp",
    title: "For Creators",
    descr: "Launch fast without custom contracts",
    list: [
      "No need to write or audit your own launch logic",
      "Use standardized templates traders already understand",
      "Signal seriousness without pretending to be “safe”",
    ],
  },
  {
    photo: "/images/duckpad/who-1.webp",
    title: "For Traders",
    descr: "See the rules before the chaos",
    list: [
      "No hidden mint functions",
      "No owner-controlled liquidity pulls",
      "No post-launch parameter changes",
    ],
  },
]
</script>

<style scoped lang="scss">
.who {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.items {
  display: flex;
  gap: 1rem;
  justify-content: center;
  @include mobile {
    flex-direction: column;
    gap: 0.5rem;
  }
}
.title {
  margin-bottom: 2.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
    text-align: center;
    width: 80%;
  }
}
</style>
