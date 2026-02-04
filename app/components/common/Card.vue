<template>
  <div class="card base-card">
    <div class="photo">
      <img
        class="inner-media"
        draggable="false"
        :src="data.photo"
        loading="lazy"
        :alt="data.title"
      />
    </div>

    <h5 class="name h5">{{ data.title }}</h5>
    <p class="descr sub-s">{{ data.descr }}</p>

    <div class="list">
      <div v-for="(text, l) in data.list" :key="l" class="list-item">
        <div class="list-check">
          <IconCheck2 />
        </div>
        <p class="list-text">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    photo: string
    title: string
    descr: string
    list: string[]
  }
}>()
</script>

<style scoped lang="scss">
.card {
  padding-bottom: 3.5rem;
  @include mobile {
    padding: 1.25rem 1.25rem 2rem;
    text-align: center;
  }
}

.photo {
  height: 24rem;
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 2.5rem;
  position: relative;
  @include mobile {
    height: 18.9375rem;
    margin-bottom: 1.5rem;
    border-radius: 0.75rem;
  }
}
.name {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.descr {
  margin-bottom: 1.5rem;
  color: var(--c-grey);
}
.list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.list-check {
  flex: 0 0 1.5rem;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background: var(--c-black);
  @include mobile {
    flex: 0 0 1.25rem;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 0.375rem;
  }
}
.list-check:deep(svg) {
  width: 0.9375rem;
  @include mobile {
    width: 0.625rem;
  }
}
.list-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  @include mobile {
    gap: 0.75rem;
    flex-direction: column;
  }
}
.list-text {
  line-height: 1.5rem;
}
</style>
