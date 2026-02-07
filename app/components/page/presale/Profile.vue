<template>
  <section class="section profile">
    <div class="content base-card">
      <div class="logo">
        <img
          class="logo-img"
          draggable="false"
          src="/images/presale/profile.png"
        />
      </div>

      <div class="score">
        <p class="score-title cap-m">Stay score</p>
        <h5 class="score-name h5">3 (Middle Duck)</h5>

        <button class="buy-btn">
          <CommonButtonTemplate yellow big> Buy $DUCK </CommonButtonTemplate>
        </button>
      </div>

      <div class="info">
        <div class="item base-card">
          <div class="icon-wrap">
            <CommonButtonTemplate small>
              <IconInvested />
            </CommonButtonTemplate>
          </div>
          <div class="item-content">
            <p class="item-number sub-m">$500</p>
            <p class="item-text cap-m">Invested</p>
          </div>
        </div>

        <div class="item base-card">
          <div class="icon-wrap">
            <CommonButtonTemplate small>
              <IconTokens />
            </CommonButtonTemplate>
          </div>
          <div class="item-content">
            <p class="item-number sub-m">4 221 333 $DUCK</p>
            <p class="item-text cap-m">Tokens</p>
          </div>
        </div>

        <div class="item base-card">
          <div class="icon-wrap">
            <CommonButtonTemplate small>
              <IconBalance />
            </CommonButtonTemplate>
          </div>
          <div class="item-content">
            <p class="item-number sub-m">$500</p>
            <p class="item-text cap-m">Current balance</p>
          </div>
        </div>

        <div class="item base-card">
          <div class="icon-wrap">
            <CommonButtonTemplate small>
              <IconEvaluation />
            </CommonButtonTemplate>
          </div>
          <div class="item-content">
            <p class="item-number sub-m">$3500</p>
            <p class="item-text cap-m">Launch Evaluation</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.content {
  padding: 2.5rem;
  display: flex;
  align-items: center;
  @include mobile {
    padding: 1.5rem;
    flex-direction: column;
  }
}
.logo-img {
  width: 8.3125rem;
  @include mobile {
    width: 3.8125rem;
  }
}
.logo {
  width: 13rem;
  height: 13rem;
  border-radius: 100%;
  background: var(--c-yellow);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1.5rem;
  @include mobile {
    width: 6rem;
    height: 6rem;
    margin-right: 0;
    margin-bottom: 1rem;
  }
}
.score-title {
  color: var(--c-grey);
  margin-bottom: 1rem;
  @include mobile {
    text-align: center;
    margin-bottom: 0.625rem;
  }
}
.score {
  @include mobile {
    width: 100%;
  }
}
.score-name {
  margin-bottom: 1.5rem;
  @include mobile {
    text-align: center;
  }
}
.buy-btn {
  width: 15.625rem;
  @include mobile {
    width: 100%;
    margin-bottom: 1rem;
  }
}
.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-left: auto;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-left: 0;
    width: 100%;
  }
}
.item {
  box-shadow: 0.25rem 0.25rem var(--c-grey-3);
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 20.5rem;
  @include mobile {
    padding: 1rem;
    width: 100%;
  }
}
.icon-wrap {
  pointer-events: none;
}
.icon-wrap:deep(svg) {
  width: 1.5rem;
  @include mobile {
    width: 1.25rem;
  }
}
.item-number {
  margin-bottom: 0.5rem;
}
.item-text {
  color: var(--c-grey);
}
</style>
