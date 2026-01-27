<template>
  <section class="section launchpad">
    <h3 class="title h3">The Launchpad That Actually Gives a Duck 🦆</h3>
    <p class="descr body-m">
      Tired of getting rugged by anon devs with “trust me bro” energy? Same.
      That’s why we built DuckPad – the first Solana launchpad where rug
      protection is baked into the smart contracts, not some pinky promise.
    </p>

    <div class="items">
      <div v-for="({ icon, title, descr }, i) in items" :key="i" class="item">
        <img :src="icon" :alt="title" class="item-img" draggable="false" />
        <p class="item-title sub-l">{{ title }}</p>
        <p class="item-title body-m">{{ descr }}</p>
      </div>

      <div class="item-inner">
        <img
          src="/images/main/content-card.webp"
          class="inner-media"
          draggable="false"
        />
      </div>
    </div>

    <h4 class="subtitle h4">
      Every token launched through DuckPad Comes with automatic safeguards.
    </h4>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    title: "Auto-Locked Liquidity",
    descr:
      "Liquidity gets locked at launch. Automatically. Devs literally cannot pull it. Sleep easy, anon.",
    icon: "/images/main/card-icon-1.webp",
  },
  {
    title: "Quack Insurance Pool",
    descr:
      "A portion of every launch funds the insurance pool. If something goes wrong, holders get compensated. Revolutionary? Nah, just common sense.",
    icon: "/images/main/card-icon-2.webp",
  },
  {
    title: "Staking Requirements",
    descr:
      "Creators must stake $DUCK to launch. Skin in the game or GTFO. Simple as.",
    icon: "/images/main/card-icon-3.webp",
  },
  {
    title: "Verified Contracts",
    descr:
      "Every launch contract is verified and audited. You can read the code yourself, king.",
    icon: "/images/main/card-icon-4.webp",
  },
  {
    title: "Duck Score Rating",
    descr:
      "Every project gets a trust score based on on-chain data. No more guessing if the dev is legit — the blockchain tells you.",
    icon: "/images/main/card-icon-5.webp",
  },
]
</script>

<style scoped lang="scss">
.title {
  width: 45rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
}
.descr {
  width: 55rem;
  text-align: center;
  margin-bottom: 3.5rem;
}
.items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
.item {
  padding: 1.5rem;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  border: 0.25rem solid var(--c-grey-3);
  background: var(--c-white);
}
.item-inner {
  position: relative;
  grid-row: 2;
  grid-column: 1;
}

.item-img {
  width: 9.75rem;
  margin-bottom: auto;
}
.item-title {
  margin-bottom: 1rem;
}

.subtitle {
  margin-top: 3.5rem;
  text-align: center;
  width: 55rem;
  text-transform: capitalize;
}
</style>
