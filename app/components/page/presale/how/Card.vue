<template>
  <div class="item base-card" :class="`item-${index + 1}`">
    <div class="item-content">
      <p class="item-name sub-l">{{ index + 1 }}. {{ data.name }}</p>
      <p class="item-descr body-m">{{ data.descr }}</p>
    </div>
    <img class="item-img" draggable="false" :src="data.img" :alt="data.name" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    name: string
    descr: string
    img: string
  }
  index: number
}>()
</script>

<style scoped lang="scss">
.item {
  height: 12.25rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 2.5rem;
  justify-content: space-between;
  overflow: hidden;
  @include mobile {
    flex-direction: column;
    padding: 1.5rem;
    gap: 0;
    height: 17.5rem;
    text-align: center;
  }
}
.item-name {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.item-img {
  width: 13.75rem;
  object-fit: contain;
  align-self: center;
  @include mobile {
    width: 100%;
  }
}
.item-1 .item-img {
  @include mobile {
    width: 7.75rem;
  }
}
</style>
