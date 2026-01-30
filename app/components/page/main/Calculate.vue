<template>
  <section class="section calculate">
    <img
      class="inner-media"
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
}
.content {
  display: grid;
  grid-template-columns: 1fr 34rem;
  gap: 3.5rem;
  width: 100%;
  align-items: center;
  position: relative;
}
.left {
  text-align: center;
}
.title {
  margin-bottom: 3.125rem;
}
.descr {
  margin-bottom: 1.5rem;
}
.descr span {
  font-size: 2.25rem;
  font-family: var(--f-bold);
}
</style>
