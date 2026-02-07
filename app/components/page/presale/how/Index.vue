<template>
  <section class="section how">
    <h3 class="h3 title">how to buy</h3>

    <div class="items">
      <PagePresaleHowCard
        v-for="(item, i) in items"
        :key="i"
        :data="item"
        :index="i"
      />
    </div>

    <div class="how-swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(item, i) in items" :key="i" class="swiper-slide">
          <PagePresaleHowCard :data="item" :index="i" />
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
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper"
import { Navigation, Pagination } from "swiper/modules"

const items = [
  {
    name: "Connect your wallet",
    descr: "MetaMask, Trust Wallet, WalletConnect",
    img: "/images/presale/how-1.webp",
  },
  {
    name: "Choose amount",
    descr: "Buy with USDT or etc. Daily price increases automatically",
    img: "/images/presale/how-2.webp",
  },
  {
    name: "Confirm your payment",
    descr: "In your wallet or use direct deposit.",
    img: "/images/presale/how-3.webp",
  },
  {
    name: "Presale Position Locked",
    descr: "Allocation secured. Stay Score activated.",
    img: "/images/presale/how-4.png",
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
  swiper = new Swiper(".how-swiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    speed: 600,
    loop: true,
    navigation: {
      prevEl: ".how-swiper .swiper-prev-btn",
      nextEl: ".how-swiper .swiper-next-btn",
    },
    pagination: {
      el: ".how-swiper .swiper-pag",
      clickable: true,
    },
  })
}
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 3.5rem;
  text-transform: capitalize;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.items {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @include mobile {
    display: none;
  }
}

.how-swiper {
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
