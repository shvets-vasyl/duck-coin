<template>
  <section class="section leaderboard">
    <h3 class="h3 title">Leaderboard</h3>
    <div class="leaderboard-tip cap-m">Top 30 holders</div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.title {
  margin-bottom: 1.5rem;
}
.leaderboard-tip {
  transform: rotate(5deg);
  height: 3rem;
  width: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.125rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-orange);
}
</style>
