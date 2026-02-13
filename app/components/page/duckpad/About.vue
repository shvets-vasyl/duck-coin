<template>
  <section class="section about">
    <img class="about-bg" draggable="false" src="/images/duckpad/about.png" />

    <div class="content">
      <img class="coin-img" draggable="false" src="/images/duckpad/coin.webp" />

      <h3 class="h3 title">
        DuckPad is a meme token launch platform built to remove
        <br class="mob" />the most common rug mechanics.
      </h3>

      <button class="about-btn">
        <CommonButtonTemplate yellow big>
          Get Access via $DUCK
        </CommonButtonTemplate>
      </button>
    </div>

    <div class="logos">
      <div v-for="(_, idx) in 2" :key="idx" class="track">
        <div v-for="(logo, i) in logos" :key="i" class="logo">
          <img class="inner-media" draggable="false" :src="logo" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const logos = [
  "/images/duckpad/logo-1.webp",
  "/images/duckpad/logo-2.webp",
  "/images/duckpad/logo-3.webp",
  "/images/duckpad/logo-4.webp",
  "/images/duckpad/logo-5.webp",
  "/images/duckpad/logo-6.webp",
  "/images/duckpad/logo-7.webp",
  "/images/duckpad/logo-8.webp",
  "/images/duckpad/logo-9.webp",
  "/images/duckpad/logo-10.webp",
  "/images/duckpad/logo-11.webp",
]
</script>

<style scoped lang="scss">
.about {
  position: relative;
  @include mobile {
    padding-top: 2.5rem;
    overflow: hidden;
  }
}
.about-btn {
  width: 15.625rem;
  @include mobile {
    width: 100%;
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.coin-img {
  width: 11.125rem;
  margin-bottom: 1.5rem;
  @include mobile {
    width: 6.25rem;
  }
}
.title {
  margin-bottom: 2.5rem;
  width: 80%;
  text-transform: capitalize;
  text-align: center;
  @include mobile {
    width: 100%;
    margin-bottom: 1.5rem;

    font-size: 1.9rem;
    line-height: 100%;
  }
}

.logos {
  padding: 2.5rem 0;
  overflow: hidden;
  display: flex;
  width: 100%;
  border-radius: 1.5rem;
  background: var(--c-white);
  z-index: 2;
  margin-top: 2.5rem;

  @include mobile {
    margin-top: 1.5rem;
    padding: 1.5rem;
    border-radius: 1rem;
  }
}

.logo {
  width: 4.5rem;
  height: 4.5rem;
  position: relative;
  @include mobile {
    width: 3rem;
    height: 3rem;
  }
}

.track {
  display: flex;
  align-items: center;
  padding-left: 3.5rem;
  gap: 3.5rem;
  @include ticker(30s);

  @include mobile {
    padding-left: 2.5rem;
    gap: 2.5rem;
  }
}
.about-bg {
  position: absolute;
  width: 100%;
  left: 0;
  top: 0;
  @include mobile {
    width: 200%;
    left: 50%;
    transform: translateX(-41%);
  }
}
</style>
