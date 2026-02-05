<template>
  <section class="section two-cards">
    <h3 class="title h3">{{ data.title }}</h3>

    <div class="items">
      <CommonCard v-for="(item, i) in data.items" :key="i" :data="item" />
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string
    items: {
      photo: string
      title: string
      descr?: string
      list: string[]
      descr2?: string
    }[]
  }
}>()
</script>

<style scoped lang="scss">
.two-cards {
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
  text-transform: capitalize;
  @include mobile {
    margin-bottom: 1.5rem;
    text-align: center;
    width: 80%;
  }
}
</style>
