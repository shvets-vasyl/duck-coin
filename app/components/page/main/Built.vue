<template>
  <section class="section built">
    <h3 class="title h3">Built on Giants. Integrated with Legends.</h3>

    <p class="descr body-m">
      $DUCK doesn’t exist in a vacuum. We’re deeply integrated with the Solana
      ecosystem and partnered with the infrastructure that actually matters.
    </p>

    <div class="blocks">
      <div v-for="({ title, items }, b) in blocks" :key="b" class="block">
        <p class="block-title sub-m">{{ title }}</p>

        <div class="items">
          <div v-for="({ icon, name }, i) in items" :key="i" class="item">
            <img
              class="item-icon"
              draggable="false"
              :src="icon"
              loading="lazy"
              :alt="name"
            />

            <p class="item-name cap-m">{{ name }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
.title {
  width: 43rem;
  margin-bottom: 1rem;
  text-align: center;
}
.descr {
  width: 45rem;
  margin-bottom: 3.5rem;
  text-align: center;
}
.blocks {
  display: flex;
  column-gap: 1rem;
  row-gap: 3.5rem;
  flex-wrap: wrap;
  width: 100%;
}
.block {
  border: 0.0625rem solid var(--c-black);
  border-radius: 1.5rem;
  padding: 2rem 2.5rem;
  position: relative;
}
.block-title {
  position: absolute;
  top: 0;
  transform: translate(-50%, -50%);
  left: 50%;
  background: var(--c-milk);
  padding: 0 1.5rem;
  white-space: nowrap;
}
.items {
  display: flex;
  align-items: flex-end;
}
.item {
  width: 8.9375rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.block:nth-child(1) .item,
.block:nth-child(2) .item {
  width: 8.9375rem;
}
.block:nth-child(3) .item,
.block:nth-child(4) .item {
  width: 8.4375rem;
}
.block:nth-child(5) .item {
  width: 7.5rem;
}
.item-icon {
  width: 1.9375rem;
}
</style>
