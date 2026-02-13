<template>
  <div class="card base-card">
    <div class="photo">
      <img
        class="inner-media"
        draggable="false"
        :src="data.photo"
        :alt="data.title"
      />
    </div>

    <h5 class="name h5">{{ data.title }}</h5>
    <p v-if="data.descr" class="descr sub-s">{{ data.descr }}</p>

    <div class="list">
      <div v-for="(text, l) in data.list" :key="l" class="list-item">
        <div class="list-check">
          <IconCheck2 />
        </div>
        <p class="list-text">{{ text }}</p>
      </div>
    </div>

    <div v-if="data.descr2" class="tip-wrap bode-m">
      <CommonTip :text="data.descr2" />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    photo: string
    title: string
    descr?: string
    descr2?: string
    list: string[]
  }
}>()
</script>

<style scoped lang="scss">
.card {
  padding-bottom: 3.5rem;
  width: 27rem;
  display: flex;
  flex-direction: column;
  @include mobile {
    padding: 1.25rem 1.25rem 2rem;
    text-align: center;
    width: 100%;
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
  @include mobile {
    text-align: left;
  }
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
  }
}
.list-text {
  line-height: 1.5rem;
}
.tip-wrap {
  text-align: center;
  padding-top: 2.5rem;
  margin-top: auto;
  margin-bottom: -2rem;
  @include mobile {
    margin-bottom: -0.5rem;
    padding-top: 1.5rem;
  }
}
.tip-wrap:deep(.tip) {
  padding: 1rem 1.5rem;
  line-height: 1.5rem;
  @include mobile {
    line-height: 1.375rem;
    padding: 1rem;
    font-size: 0.875rem;
  }
}
</style>
