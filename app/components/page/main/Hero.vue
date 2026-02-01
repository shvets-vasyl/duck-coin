<template>
  <section class="hero">
    <div class="circles-wrap">
      <IconCircles class="desk" />
      <IconCirclesMob class="mob" />
    </div>
    <div class="content">
      <div class="hero-tip cap-m">
        <CommonTip text="The Most Based Launchpad on Solana" />
      </div>

      <h1 class="title h1">$DUCK Presale is Live!</h1>
      <p class="subtitle sub-s">
        Early Price. Limited Time. No Second Chances.
      </p>

      <div class="logo">
        <img
          class="duck-img"
          draggable="false"
          src="/images/main/duck-1.svg"
          role="presentation"
        />
        <img
          class="duck-img-mob"
          draggable="false"
          src="/images/main/duck-1-mob.svg"
          role="presentation"
        />
      </div>

      <div class="descr body-m">
        <p>The first meme coin launchpad with contract-level rug protection.</p>
        <p>No trust required – just code that actually works.</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  min-height: 100vh;
  padding: 7rem 1.5rem 1.5rem;
  text-align: center;
  background: var(--c-yellow);
  border-radius: 0 0 3.5rem 3.5rem;
  position: relative;
  @include mobile {
    border-radius: 0 0 2rem 2rem;
  }
}
.circles-wrap {
  position: absolute;
  top: 8rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  width: 82.3125rem;
  @include mobile {
    width: 21.4375rem;
    top: 28rem;
  }
}
.content {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
.hero-tip {
  transform: rotate(3deg);
  margin-bottom: 1.5rem;
}
.title {
  margin-bottom: 1rem;
}
.logo {
  flex: 1 1 auto;
  display: flex;
  align-items: flex-end;
  margin-left: -11.25rem;
  @include mobile {
    margin-left: 0;
    flex: 1;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }
}
.duck-img {
  width: 55.875rem;
  @include mobile {
    display: none;
  }
}
.duck-img-mob {
  display: none;
  @include mobile {
    display: block;
    width: 21.4375rem;
  }
}
</style>
