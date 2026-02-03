<template>
  <section class="section calculate">
    <img
      class="calculate-img inner-media"
      draggable="false"
      src="/images/main/calc-bg.png"
      loading="lazy"
      alt="some alt"
    />
    <div class="content">
      <div class="left">
        <h2 class="title h2">Buy $DUCK <br />Now!</h2>
        <p class="descr sub-m">
          Token price will increase <span>+2%</span> in:
        </p>

        <div class="timer-wrap">
          <CommonTimer />
        </div>
      </div>
      <div class="right">
        <CommonCalculator />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.calculate {
  position: relative;
  @include mobile {
    overflow: hidden;
  }
}
.content {
  display: grid;
  grid-template-columns: 1fr 31rem;
  gap: 3.5rem;
  width: 100%;
  align-items: center;
  position: relative;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 4rem;
  }
}
.left {
  text-align: center;
}
.title {
  margin-bottom: 3.125rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.descr {
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.descr span {
  font-size: 2.25rem;
  font-family: var(--f-bold);
  @include mobile {
    font-size: 1.5rem;
  }
}
.calculate-img {
  margin-left: 3rem;
  @include mobile {
    object-fit: inset;
    height: auto;
    width: 200%;
    margin-left: -4.375rem;
    margin-top: 6.2rem;
  }
}
.right {
  @include mobile {
    width: 21.4375rem;
  }
}
</style>
