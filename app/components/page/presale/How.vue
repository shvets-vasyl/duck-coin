<template>
  <section class="section how">
    <h3 class="h3 title">how to buy</h3>

    <div class="items">
      <div
        v-for="({ name, descr, img }, i) in items"
        :key="i"
        class="item base-card"
      >
        <div class="item-content">
          <p class="item-name sub-l">{{ i + 1 }}. {{ name }}</p>
          <p class="item-descr body-m">{{ descr }}</p>
        </div>
        <img class="item-img" draggable="false" :src="img" :alt="name" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
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
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 3.5rem;
  text-transform: capitalize;
}
.items {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}
.item {
  height: 12.25rem;
  display: flex;
  gap: 1.5rem;
  align-items: center;
  padding: 2.5rem;
  justify-content: space-between;
  overflow: hidden;
}
.item-name {
  margin-bottom: 1rem;
}
.item-img {
  width: 13.75rem;
  object-fit: contain; // або cover
  align-self: center;
}
</style>
