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
        <div class="item-content">
          <p class="item-title sub-l">{{ title }}</p>
          <p class="item-descr body-m">{{ descr }}</p>
        </div>
      </div>

      <div class="item-inner">
        <img
          src="/images/main/content-card.webp"
          class="inner-media desk"
          draggable="false"
        />
        <img
          src="/images/main/content-card-mob.webp"
          class="inner-media mob"
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
.launchpad {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.title {
  width: 45rem;
  text-align: center;
  margin-bottom: 1rem;
  text-transform: capitalize;
  @include mobile {
    width: 100%;
  }
}
.descr {
  width: 55rem;
  text-align: center;
  margin-bottom: 3.5rem;
  @include mobile {
    width: 100%;
    margin-bottom: 1.5rem;
  }
}
.items {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.item {
  padding: 1.5rem;
  aspect-ratio: 1 / 1;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  border: 0.25rem solid var(--c-grey-3);
  background: var(--c-white);
  @include mobile {
    aspect-ratio: unset;
    padding: 1rem;
    border-width: 0.125rem;
    border-radius: 1rem;
    text-align: center;
    align-items: center;
  }
}
.item-inner {
  position: relative;
  grid-row: 2;
  grid-column: 1;
  border-radius: 1.5rem;
  overflow: hidden;
  @include mobile {
    height: 11.75rem;
    border-radius: 1rem;
  }
}

.item-img {
  width: 9.75rem;
  margin-bottom: auto;
  @include mobile {
    width: 3.5rem;
    margin-bottom: 1rem;
  }
}
.item-title {
  margin-bottom: 1rem;
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.item-descr {
  @include mobile {
    font-size: 0.75rem;
    line-height: 1.25rem;
  }
}

.subtitle {
  margin-top: 3.5rem;
  text-align: center;
  width: 55rem;
  text-transform: capitalize;
  @include mobile {
    width: 85%;
    font-size: 1.5rem;
    line-height: 100%;
    margin-top: 1.5rem;
  }
}
.item:nth-child(1) .item-content,
.item:nth-child(2) .item-content,
.item:nth-child(3) .item-content {
  height: 8.5rem;
  @include mobile {
    height: auto;
  }
}
.item:nth-child(4) .item-content,
.item:nth-child(5) .item-content {
  height: 7rem;
  @include mobile {
    height: auto;
  }
}
</style>
