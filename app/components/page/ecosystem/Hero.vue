<template>
  <section class="hero">
    <h1 class="h1 title">Ecosystem</h1>

    <div class="items">
      <PageEcosystemCard v-for="(item, i) in items" :key="i" :data="item" />
    </div>

    <div class="hero-swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(item, b) in items" :key="b" class="swiper-slide">
          <PageEcosystemCard :data="item" />
        </div>
      </div>

      <div class="swiper-pag" />
    </div>

    <button class="hero-btn">
      <CommonButtonTemplate yellow big> Join the Presale </CommonButtonTemplate>
    </button>
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper"
import { Pagination } from "swiper/modules"

const items = [
  {
    photo: "/images/ecosystem/1.webp",
    name: "$DUCK Token",
    descr: "The coordination layer",
    text: "$DUCK is used to:",
    list: [
      "Access DuckPad features",
      "Participate in platform mechanics",
      "Align incentives across the ecosystem",
      "It does not represent ownership or guarantees",
      "It enables participation",
    ],
  },
  {
    photo: "/images/ecosystem/2.webp",
    name: "DuckPad",
    descr: "The product layer",
    text: "Meme launch platform designed to:",
    list: [
      "Standardize launches",
      "Reduce obvious rug mechanics",
      "Keep speed without hiding rules",
      "DuckPad generates activity",
      "$DUCK connects users to it",
    ],
  },
  {
    photo: "/images/ecosystem/3.webp",
    name: "Stay Score",
    descr: "The time layer",
    text: "Stay Score records:",
    list: ["When participation begins", "How long it lasts"],
    text2: "It influences:",
    list2: ["Access", "Unlock schedules", "Platform prioritization"],
    text3: "Stay Score cannot be transferred or gamed.",
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
  swiper = new Swiper(".hero-swiper", {
    modules: [Pagination],
    slidesPerView: 1,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
    },
    pagination: {
      el: ".hero-swiper .swiper-pag",
      clickable: true,
    },
  })
}
</script>

<style scoped lang="scss">
.hero {
  padding: 8rem 3.5rem 3.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include mobile {
    padding: 6rem 1rem 2.5rem;
  }
}
.title {
  margin-bottom: 6rem;
  text-align: center;
  @include mobile {
    margin-bottom: 2.5rem;
  }
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
  width: 100%;
  @include mobile {
    display: none;
  }
}

.hero-btn {
  width: 15.625rem;
  @include mobile {
    width: 100%;
  }
}
.hero-swiper {
  display: none;
  @include mobile {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    width: calc(100% + 2rem);
    margin-left: -1rem;
    margin-bottom: 1.5rem;
  }
}

.swiper-pag {
  @include mobile {
    margin-top: 1rem;
  }
}
.swiper-slide {
  padding-left: 1rem;
  padding-right: 1rem;
  height: auto;
}
</style>
