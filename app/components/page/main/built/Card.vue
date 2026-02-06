<template>
  <div class="block">
    <p class="block-title sub-m">{{ data.title }}</p>

    <div class="items">
      <div v-for="({ icon, name }, i) in data.items" :key="i" class="item">
        <img class="item-icon" draggable="false" :src="icon" :alt="name" />

        <p class="item-name cap-m">{{ name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    title: string
    items: {
      name: string
      icon: string
    }[]
  }
}>()
</script>

<style scoped lang="scss">
.block {
  border: 0.0625rem solid var(--c-black);
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
  position: relative;
  @include mobile {
    padding: 0;
    border-radius: 1rem;
  }
}
.block-title {
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  left: 50%;
  background: var(--c-milk);
  padding: 0 1.5rem;
  white-space: nowrap;
  @include mobile {
    font-size: 0.875rem;
    line-height: 0.875rem;
    padding: 0 1rem;
  }
}
.items {
  display: flex;
  align-items: flex-end;
  @include mobile {
    justify-content: center;
  }
}
.item {
  width: 8.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  @include mobile {
    width: 5.125rem;
    gap: 0.5rem;
    padding: 1rem 0.5rem;
  }
}
.block:nth-child(1) .item,
.block:nth-child(2) .item {
  width: 8.9375rem;
  @include mobile {
    width: 5.125rem;
  }
}
.block:nth-child(3) .item,
.block:nth-child(4) .item {
  width: 8.4375rem;
  @include mobile {
    width: 5.125rem;
  }
}
.block:nth-child(5) .item {
  width: 7.5rem;
  @include mobile {
    width: 5.125rem;
  }
}
.item-icon {
  width: 1.9375rem;
  @include mobile {
    width: 1.5rem;
  }
}
.item-name {
  @include mobile {
    font-size: 0.75rem;
    line-height: 100%;
    white-space: nowrap;
  }
}
</style>
