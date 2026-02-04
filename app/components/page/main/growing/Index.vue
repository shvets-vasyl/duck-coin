<template>
  <section class="section growing">
    <h3 class="title h3">The Flock <br class="mob" />is Growing 🦆</h3>
    <div class="descr body-m">
      Degens, builders, and certified legends are talking about $DUCK.<br
        class="desk"
      />
      This ain’t paid promo — this is real ones recognizing real ones.
    </div>

    <div class="items">
      <PageMainGrowingCard v-for="(item, i) in items" :key="i" :data="item" />
    </div>

    <div class="growing-swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(item, i) in items" :key="i" class="swiper-slide">
          <PageMainGrowingCard :data="item" />
        </div>
      </div>

      <div class="swiper-nav">
        <CommonButtonTemplate class="swiper-prev-btn" small>
          <IconCaret2 />
        </CommonButtonTemplate>
        <CommonButtonTemplate class="swiper-next-btn" small>
          <IconCaret2 />
        </CommonButtonTemplate>
      </div>

      <div class="swiper-pag" />
    </div>

    <div class="foot">
      <p class="foot-title sub-m">The timeline is noticing. Are you?</p>
      <button class="join-btn">
        <CommonButtonTemplate yellow big>
          Join the presale
        </CommonButtonTemplate>
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

const items = [
  {
    img: "/images/main/soc-1.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
    link: "/",
  },
  {
    img: "/images/main/soc-2.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
    link: "/",
  },
  {
    img: "/images/main/soc-3.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
    link: "/",
  },
  {
    img: "/images/main/soc-4.webp",
    name: "Elon Musk",
    nickname: "@elonmusk",
    link: "/",
  },
]

let swiper: Swiper | null = null

const { isMobile } = useViewport()

onMounted(() => {
  if (isMobile.value) {
    initSwiper()
  }
})

onBeforeUnmount(() => {
  if (swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
})

const initSwiper = () => {
  swiper = new Swiper(".growing-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 600,
    loop: true,
    navigation: {
      prevEl: ".growing-swiper .swiper-prev-btn",
      nextEl: ".growing-swiper .swiper-next-btn",
    },
    pagination: {
      el: ".growing-swiper .swiper-pag",
      clickable: true,
    },
  })
}
</script>

<style scoped lang="scss">
.growing {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.title {
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
}
.descr {
  text-align: center;
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, auto);
  gap: 1rem;
  width: 100%;
  @include mobile {
    display: none;
  }
}
.foot {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3.125rem;
  @include mobile {
    margin-top: 2.5rem;
    width: 100%;
  }
}
.foot-title {
  text-align: center;
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.join-btn {
  width: 15.625rem;
  @include mobile {
    width: 100%;
  }
}
.growing-swiper {
  display: none;
  @include mobile {
    display: block;
    width: calc(100% + 2rem);
    margin-left: -1rem;
  }
}

.swiper-slide {
  height: auto;
  padding-left: 4rem;
  padding-right: 4rem;
}

.swiper-pag {
  margin-top: 1.5rem;
  margin-bottom: 0.125rem;
}
</style>
