<template>
  <section class="hero">
    <div class="block">
      <img
        class="desk inner-media"
        draggable="false"
        src="/images/duckpad/hero.png"
      />

      <img
        class="mob inner-media"
        draggable="false"
        src="/images/duckpad/hero-mob.webp"
      />

      <img
        class="duck-img"
        draggable="false"
        src="/images/duckpad/hero-duck.webp"
      />

      <div class="content">
        <h1 class="title h1">DuckPad</h1>
        <h3 class="subtitle h3">Fast. Standardized. <br />Observable.</h3>

        <p class="descr sub-s">
          A launchpad for memes that still respect basic rules.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  padding: 7.6875rem 3.5rem 3.5rem;
  height: 100vh;
  @include mobile {
    padding: 6rem 1rem 1rem;
  }
}
.block {
  border-radius: 2.5rem;
  background: var(--c-yellow);
  height: 100%;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  @include mobile {
    border-radius: 1.5rem;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
    padding: 2.5rem 1.5rem;
  }
}
.duck-img {
  position: absolute;
  width: 34.1875rem;
  right: 3.5rem;
  bottom: -1rem;
  @include mobile {
    width: 19.5rem;
    right: auto;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
  }
}
.content {
  position: relative;
  padding-left: 3.5rem;
  @include mobile {
    padding-left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.title,
.subtitle {
  margin-bottom: 1rem;
}
.title {
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.subtitle {
  @include mobile {
    margin-bottom: 0.5rem;
  }
}
.descr {
  @include mobile {
    width: 70%;
  }
}
</style>
