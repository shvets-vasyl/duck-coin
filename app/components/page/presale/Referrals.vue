<template>
  <section class="section referrals">
    <h3 class="h3 title">Referrals</h3>
    <p class="descr body-m">Your link. Their buy. Earn up to 20% USDT.</p>

    <div class="content base-card">
      <div class="left">
        <h5 class="content-title h5">Referral program</h5>

        <div class="copy">
          <p class="copy-text body-m">
            https://duckcoin.io/ref/sqdd123utm_source=referral&utm_campaign=presale
          </p>

          <button class="copy-btn" @click="copyRef">
            <span v-if="copied" class="tooltip body-s">Copied</span>
            <CommonButtonTemplate yellow> Copy </CommonButtonTemplate>
          </button>
        </div>

        <div class="info">
          <div
            v-for="({ title, descr }, i) in info"
            :key="i"
            class="info-item base-card"
          >
            <div class="info-icon">
              <CommonButtonTemplate small>
                <IconPig v-if="i === 0" />
                <IconProfile v-if="i === 1" />
              </CommonButtonTemplate>
            </div>

            <div class="info-text">
              <p class="info-title sub-m">{{ title }}</p>
              <p class="info-descr cap-m">{{ descr }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="right">
        <h5 class="content-title h5">your Referral earnings</h5>

        <p class="content-subtitle sub-s">Available to claim</p>

        <div class="claim">
          <p class="claim-count body-xl">0</p>
          <p class="claim-text body-m">Min. $50.00</p>
        </div>

        <button class="claim-btn">
          <CommonButtonTemplate yellow big>
            Convert to $DUCK
          </CommonButtonTemplate>
        </button>
      </div>
    </div>

    <div class="items">
      <div v-for="({ title, descr, image }, i) in items" :key="i" class="item">
        <img class="item-img" draggable="false" :src="image" :alt="title" />

        <p class="item-title sub-l">{{ title }}</p>
        <p class="item-descr body-m">{{ descr }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const referral =
  "https://duckcoin.io/ref/sqdd123utm_source=referral&utm_campaign=presale"
const copied = ref(false)

const copyRef = async () => {
  await navigator.clipboard.writeText(referral)
  copied.value = true
  setTimeout(() => (copied.value = false), 1500)
}

const info = [
  {
    title: "$10,532.48",
    descr: "All-time earnings",
  },
  {
    title: "93",
    descr: "Total Referrals",
  },
]

const items = [
  {
    title: "Connect Your Wallet",
    descr:
      "Securely connect your crypto wallet to activate your referral dashboard.",
    image: "/images/presale/how-1.webp",
  },
  {
    title: "Copy your personal referral link",
    descr: "Share it with your friends, followers, or community.",
    image: "/images/presale/link-field.png",
  },
  {
    title: "Get Paid Instantly",
    descr: "Earn 20% cashback per referral and convert to $DUCK.",
    image: "/images/presale/paid-img.png",
  },
]
</script>

<style scoped lang="scss">
.referrals {
  @include mobile {
    padding-top: 0.5rem;
  }
}
.title {
  text-transform: capitalize;
  margin-bottom: 1rem;
}
.descr {
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.content {
  padding: 2.5rem;
  margin-bottom: 3.5rem;
  display: grid;
  grid-template-columns: 50% 50%;
  @include mobile {
    display: none;
    padding: 2.5rem 1.5rem;
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
  }
}
.left {
  padding-right: 2.5rem;
  border-right: 0.125rem solid var(--c-grey-3);
  @include mobile {
    border-right: none;
    padding-right: 0;
    padding-bottom: 1.5rem;
    border-bottom: 0.0625rem solid var(--c-grey-3);
    margin-bottom: 1.5rem;
  }
}
.right {
  padding-left: 2.5rem;
  @include mobile {
    padding-left: 0;
  }
}
.content-title {
  text-transform: capitalize;
  text-align: center;
  margin-bottom: 1.5rem;
}
.copy-btn {
  width: 7.5rem;
  position: relative;
  @include mobile {
    width: 100%;
  }
}
.copy {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  border-radius: 1rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  height: 4.5rem;
  padding-left: 1rem;
  padding-right: 0.5rem;
  margin-bottom: 1rem;
  @include mobile {
    height: 3.625rem;
  }
}
.copy-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tooltip {
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translateX(-50%);
  margin-bottom: 0.5rem;

  padding: 0.25rem 0.5rem;
  background: var(--c-black);
  color: var(--c-white);
  border-radius: 0.5rem;
  white-space: nowrap;
  pointer-events: none;
  z-index: 2;
}
.info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.info-item {
  display: flex;
  gap: 1rem;
  box-shadow: 0.25rem 0.25rem 0 0 var(--c-grey-3);
  @include mobile {
    padding: 1rem;
  }
}
.info-icon:deep(svg) {
  width: 1.5rem;
}
.info-icon {
  pointer-events: none;
}
.info-title {
  margin-bottom: 0.5rem;
}
.info-descr {
  color: var(--c-grey);
}
.content-subtitle {
  margin-bottom: 1rem;
}
.claim-btn {
  width: 100%;
}
.claim {
  display: flex;
  gap: 1rem;
  align-items: center;
  border-radius: 1rem;
  border: 0.0938rem solid var(--c-grey-3);
  height: 4rem;
  padding: 0 1rem;
  margin-bottom: 1rem;
}
.claim-count {
  color: var(--c-grey);
  flex: 1 1 auto;
}
.claim-text {
  border-radius: 0.75rem;
  border: 0.0938rem solid var(--c-black);
  padding: 0.25rem 0.75rem;
}
.items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  @include mobile {
    display: flex;
    flex-direction: column;
  }
}
.item {
  position: relative;
  padding: 2.5rem;
  border-radius: 1.5rem;
  display: flex;
  flex-direction: column;
  height: 27rem;
  @include mobile {
    height: 15rem;
    border-radius: 1rem;
    text-align: center;
    padding: 1.5rem;
    align-items: center;
    overflow: hidden;
  }
}
.item:nth-child(1) {
  background: #e7e5ca;
  box-shadow: 0 0 0 0.25rem rgba(#e7e5ca, 0.5);
}
.item:nth-child(2) {
  background: #ffefe9;
  box-shadow: 0 0 0 0.25rem rgba(#ffefe9, 0.5);
}
.item:nth-child(3) {
  background: #dfeeff;
  box-shadow: 0 0 0 0.25rem rgba(#dfeeff, 0.5);
}

.item:nth-child(1) .item-img {
  width: 14rem;
  @include mobile {
    margin-top: auto;
    width: 10rem;
    margin-bottom: -3rem;
  }
}
.item:nth-child(2) .item-img {
  width: 100%;
  margin-top: 4rem;
  @include mobile {
    margin-top: auto;
    width: 16.125rem;
    margin-bottom: 1rem;
  }
}
.item:nth-child(3) .item-img {
  width: 100%;
  margin-top: 2rem;
  @include mobile {
    margin-top: auto;
    width: 15.0625rem;
    margin-bottom: 0.5rem;
  }
}
.item-img {
  @include mobile {
    order: 3;
    margin-top: auto;
  }
}
.item-title {
  margin-bottom: 1rem;
  margin-top: auto;
  text-transform: capitalize;
  padding-right: 10%;
  @include mobile {
    order: 1;
    margin-bottom: 0.5rem;
    padding-right: 0;
  }
}
.item-descr {
  @include mobile {
    order: 2;
  }
}
</style>
