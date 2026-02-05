<template>
  <section class="who">
    <SectionTwoCards :data="data" />
  </section>
</template>

<script setup lang="ts">
const data = {
  title: "Who DuckPad Is For",
  items: [
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
  ],
}
</script>

<style scoped lang="scss"></style>
