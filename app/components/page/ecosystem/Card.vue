<template>
  <div class="item-wrap">
    <p v-if="data.text3" class="text3 desk body-m">{{ data.text3 }}</p>
    <div class="item base-card">
      <div class="photo">
        <img
          class="inner-media"
          draggable="false"
          :src="data.photo"
          :alt="data.name"
        />
      </div>

      <h5 class="name h5">{{ data.name }}</h5>

      <p class="descr body-m">{{ data.descr }}</p>

      <p class="text sub-s">{{ data.text }}</p>

      <div class="list">
        <div v-for="(listText, l) in data.list" :key="l" class="list-item">
          <IconArrow />
          <p class="list-text body-m">{{ listText }}</p>
        </div>
      </div>

      <p v-if="data.text2" class="text2 sub-s">{{ data.text2 }}</p>

      <div v-if="data.list2" class="list">
        <div v-for="(listText, l) in data.list2" :key="l" class="list-item">
          <IconArrow />
          <p class="list-text body-m">{{ listText }}</p>
        </div>
      </div>

      <p v-if="data.text3" class="text3 mob body-m">{{ data.text3 }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    photo: string
    name: string
    descr: string
    text: string
    list: string[]
    text2?: string
    list2?: string[]
    text3?: string
  }
}>()
</script>

<style scoped lang="scss">
.item {
  position: relative;
  height: 100%;
  @include mobile {
    padding: 1.25rem;
  }
}
.item-wrap {
  position: relative;
  height: 100%;
}
.photo {
  height: 15.25rem;
  position: relative;
  border-radius: 1rem;
  overflow: hidden;
  border: 0.0938rem solid var(--c-grey-3);
  margin-bottom: 2.5rem;
  @include mobile {
    height: 11.375rem;
    border-radius: 0.75rem;
    border-width: 0.0625rem;
    margin-bottom: 1.5rem;
  }
}
.photo img {
  transform: scale(1.01);
}
.name {
  margin-bottom: 1rem;
  @include mobile {
    text-align: center;
    margin-bottom: 0.75rem;
  }
}
.descr {
  margin-bottom: 2.5rem;
  border-radius: 0.75rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  padding: 0.4375rem 1.25rem;
  display: inline-flex;
  align-items: center;
  @include mobile {
    width: 100%;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
}
.text,
.text2 {
  margin-bottom: 1.5rem;
}
.text2 {
  margin-top: 2.5rem;
}
.list,
.list2 {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @include mobile {
    gap: 1rem;
  }
}
.list-item {
  display: flex;
  gap: 1rem;
  align-items: center;
}
.list-item:deep(svg) {
  width: 1.5rem;
}
.list-text {
  line-height: 1.5rem;
  @include mobile {
    line-height: 1.375rem;
  }
}
.text3 {
  position: absolute;
  width: 100%;
  bottom: 100%;
  left: 0;
  padding: 1.25rem 1rem 3.75rem;
  border-radius: 1.5rem 1.5rem 0 0;
  background: var(--c-grey-3);
  text-align: center;
  margin-bottom: -2.5rem;
  @include mobile {
    position: relative;
    bottom: auto;
    padding: 1rem 2rem;
    line-height: 1.375rem;
    border-radius: 0.75rem;
    margin-bottom: 0;
    margin-top: 1.5rem;
  }
}
</style>
