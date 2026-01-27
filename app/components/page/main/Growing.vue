<template>
  <section class="section growing">
    <h3 class="title h3">The Flock is Growing 🦆</h3>
    <div class="descr body-m">
      <p>Degens, builders, and certified legends are talking about $DUCK.</p>
      <p>This ain’t paid promo — this is real ones recognizing real ones.</p>
    </div>

    <div class="items">
      <div v-for="({ img, name, nickname }, i) in items" :key="i" class="item">
        <img :src="img" :alt="name" class="item-img" draggable="false" />
        <div class="item-info">
          <div class="item-left">
            <p class="item-name sub-m">{{ name }}</p>
            <p class="item-nickname sub-s">{{ nickname }}</p>
          </div>
          <div class="item-right">
            <NuxtLink to="/" class="soc-link">
              <CommonButtonTemplate small>
                <IconX class="icon-x" />
              </CommonButtonTemplate>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>

    <div class="foot">
      <p class="foot-title sub-m">The timeline is noticing. Are you? </p>
      <button class="join-btn">
        <CommonButtonTemplate yellow big>
          Join the presale
        </CommonButtonTemplate>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    img: "/images/main/soc-1.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
  },
  {
    img: "/images/main/soc-2.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
  },
  {
    img: "/images/main/soc-3.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
  },
  {
    img: "/images/main/soc-4.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
  },
]
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
}
.descr {
  text-align: center;
  margin-bottom: 3.5rem;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  width: 100%;
}
.item {
  padding: 1.5rem;
  border-radius: 1.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-white);
  box-shadow: 0 0.25rem 0 0 var(--c-grey-3);
  transition: all 0.4s var(--t-ease);
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
  margin-bottom: 1.5rem;
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
.foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
}
.foot-title {
  text-align: center;
  margin-bottom: 1.5rem;
}
.join-btn {
  width: 15.625rem;
}
</style>
