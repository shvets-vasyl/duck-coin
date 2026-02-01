<template>
  <div class="item">
    <div class="item-photo">
      <img
        :src="data.img"
        :alt="data.name"
        class="item-img"
        draggable="false"
      />
    </div>
    <div class="item-info">
      <div class="item-left">
        <p class="item-name sub-m">{{ data.name }}</p>
        <p class="item-nickname sub-s">{{ data.nickname }}</p>
      </div>
      <div class="item-right">
        <NuxtLink :to="data.link" class="soc-link">
          <CommonButtonTemplate small>
            <IconX class="icon-x" />
          </CommonButtonTemplate>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: {
    name: string
    nickname: string
    link: string
    img: string
  }
}>()
</script>

<style scoped lang="scss">
.item {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  box-shadow: 0 0.25rem 0 0 var(--c-grey-3);
  transition: all 0.4s var(--t-ease);
  @include mobile {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    padding-bottom: 1.5rem;
  }
}
@include hover {
  .item:hover {
    border-color: var(--c-black);
  }
}
.item:nth-child(1),
.item:nth-child(2) {
  grid-row: span 2;
}
.item-img {
  width: 100%;
}
.item-photo {
  margin-bottom: 1.5rem;
  @include mobile {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }
}
.item-nickname {
  color: var(--c-grey);
}
.item-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.item-info {
  display: flex;
  justify-content: space-between;
}
.icon-x {
  width: 1.5rem;
}
</style>
