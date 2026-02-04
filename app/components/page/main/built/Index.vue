<template>
  <section class="section built">
    <h3 class="title h3">Built on Giants. Integrated with Legends.</h3>

    <p class="descr body-m">
      $DUCK doesn’t exist in a vacuum. We’re deeply integrated with the Solana
      ecosystem and partnered with the infrastructure that actually matters.
    </p>

    <div class="blocks">
      <PageMainBuiltCard v-for="(block, b) in blocks" :key="b" :data="block" />
    </div>

    <div class="built-swiper swiper">
      <div class="swiper-wrapper">
        <div v-for="(block, b) in blocks" :key="b" class="swiper-slide">
          <PageMainBuiltCard :data="block" />
        </div>
      </div>

      <div class="swiper-pag" />
    </div>
  </section>
</template>

<script setup lang="ts">
import Swiper from "swiper"
import { Pagination, Autoplay } from "swiper/modules"

const blocks = [
  {
    title: "Blockchain & Infrastructure",
    items: [
      {
        name: "Solana",
        icon: "/images/main/built-1.webp",
      },
      {
        name: "Jupiter",
        icon: "/images/main/built-2.webp",
      },
      {
        name: "Raydium",
        icon: "/images/main/built-3.webp",
      },
      {
        name: "Orca",
        icon: "/images/main/built-4.webp",
      },
    ],
  },
  {
    title: "Wallets & Auth",
    items: [
      {
        name: "Privy",
        icon: "/images/main/built-5.webp",
      },
      {
        name: "Phantom",
        icon: "/images/main/built-6.webp",
      },
      {
        name: "Solflare",
        icon: "/images/main/built-7.webp",
      },
      {
        name: "Backpack",
        icon: "/images/main/built-8.webp",
      },
    ],
  },
  {
    title: "Security & Audits",
    items: [
      {
        name: "CertiK",
        icon: "/images/main/built-9.webp",
      },
      {
        name: "Hacken",
        icon: "/images/main/built-10.webp",
      },
      {
        name: "SolidProof",
        icon: "/images/main/built-11.webp",
      },
    ],
  },
  {
    title: "Data & Analytics",
    items: [
      {
        name: "Birdeye",
        icon: "/images/main/built-12.webp",
      },
      {
        name: "DexScreener",
        icon: "/images/main/built-13.webp",
      },
      {
        name: "SolanaFM",
        icon: "/images/main/built-14.webp",
      },
    ],
  },
  {
    title: "Oracles & Tools",
    items: [
      {
        name: "Pyth Network",
        icon: "/images/main/built-15.webp",
      },
      {
        name: "Helius",
        icon: "/images/main/built-16.webp",
      },
    ],
  },
]

let swiper: Swiper | null = null

onMounted(() => {
  initSwiper()
})

onBeforeUnmount(() => {
  if (swiper) {
    swiper.destroy(true, true)
    swiper = null
  }
})

const initSwiper = () => {
  swiper = new Swiper(".built-swiper", {
    modules: [Pagination, Autoplay],
    slidesPerView: 1,
    speed: 600,
    loop: true,
    autoplay: {
      delay: 4000,
      stopOnLastSlide: false,
    },
    pagination: {
      el: ".built-swiper .swiper-pag",
      clickable: true,
    },
  })
}
</script>

<style scoped lang="scss">
.title {
  width: 43rem;
  margin-bottom: 1rem;
  text-align: center;
  @include mobile {
    width: 100%;
    text-align: left;
  }
}
.built {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.descr {
  width: 45rem;
  margin-bottom: 3.5rem;
  text-align: center;
  @include mobile {
    text-align: left;
    width: 100%;
    margin-bottom: 2.5rem;
  }
}
.blocks {
  display: flex;
  column-gap: 1rem;
  row-gap: 3.5rem;
  flex-wrap: wrap;
  width: 100%;
  @include mobile {
    display: none;
  }
}
.built-swiper {
  display: none;
  @include mobile {
    display: block;
    padding: 0.5rem 0;
    width: calc(100% + 2rem);
    margin-left: -1rem;
  }
}
.swiper-pag {
  @include mobile {
    margin-top: 1.5rem;
  }
}
.swiper-slide {
  padding-left: 1rem;
  padding-right: 1rem;
}
</style>
