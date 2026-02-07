<template>
  <section class="section panel">
    <div class="content base-card">
      <div class="head">
        <div class="head-left">
          <h3 class="title h3">Buy $DUCK Now!</h3>
          <p class="descr sub-m">
            Token price will increase <span>+2%</span> in:
          </p>
        </div>
        <div class="head-right">
          <CommonTimer />
        </div>
      </div>
      <div class="body">
        <div class="body-left">
          <CommonCalculator />
        </div>
        <div class="body-right">graf</div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.panel {
  @include mobile {
    padding-top: 1.25rem;
  }
}
.content {
  padding: 2.5rem;
  @include mobile {
    padding: 1.5rem 1rem;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @include mobile {
    flex-direction: column;
    margin-bottom: 2.5rem;
  }
}
.title {
  margin-bottom: 0.75rem;
  @include mobile {
    margin-bottom: 1.5rem;
    text-align: center;
    width: 95%;
  }
}
.descr {
  @include mobile {
    margin-bottom: 1rem;
    text-align: center;
  }
}
.descr span {
  font-size: 2.25rem;
  line-height: 100%;
  font-family: var(--f-bold);
  @include mobile {
    font-size: 1.5rem;
    text-align: center;
  }
}
.body {
  display: grid;
  grid-template-columns: 34.625rem 1fr;
  gap: 2.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
  }
}
.head-left,
.head-right {
  @include mobile {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.body-left:deep(.calculator) {
  @include mobile {
    padding: 0;
    border: none;
  }
}
</style>
