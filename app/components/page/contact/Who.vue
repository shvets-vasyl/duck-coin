<template>
  <section class="who">
    <SectionTwoCards :data="data" />
  </section>
</template>

<script setup lang="ts">
const data = {
  title: "Who the ecosystem is built for",
  items: [
    {
      photo: "/images/contact/1.webp",
      title: "For Participants",
      list: [
        "Time-based participation",
        "Transparent rules",
        "Predictable mechanics",
      ],
      descr2: "You don’t compete on speed. You compete on when you showed up.",
    },
    {
      photo: "/images/contact/2.webp",
      title: "For Builders",
      list: [
        "Access to a standardized launch environment",
        "Clear participation incentives",
        "Visibility into user behavior",
      ],
      descr2: "The ecosystem grows through usage, not promises.",
    },
  ],
}
</script>

<style scoped lang="scss"></style>
