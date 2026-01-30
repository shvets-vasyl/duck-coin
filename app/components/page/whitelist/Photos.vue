<template>
  <section class="photos">
    <div v-for="(_, idx) in 2" :key="idx" class="track">
      <div v-for="(logo, i) in items" :key="i" class="photo">
        <img class="inner-media" draggable="false" :src="logo" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  "/images/whitelist/whitelist-photo-1.webp",
  "/images/whitelist/whitelist-photo-2.webp",
  "/images/whitelist/whitelist-photo-3.webp",
  "/images/whitelist/whitelist-photo-4.webp",
  "/images/whitelist/whitelist-photo-5.webp",
  "/images/whitelist/whitelist-photo-6.webp",
]
</script>

<style scoped lang="scss">
.photos {
  padding: 3.5rem 0;
  overflow: hidden;
  display: flex;
}

.photo {
  width: 14.25rem;
  height: 14.25rem;
  position: relative;
  overflow: hidden;
  border-radius: 1rem;
}

.track {
  display: flex;
  align-items: center;
  padding-left: 1rem;
  gap: 1rem;
  @include ticker(30s);
}
</style>
