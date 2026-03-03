<template>
  <section class="wallet-info">
    <div class="info-panel">
      <div class="info-coins">
        <img
          class="logo-img"
          draggable="false"
          src="/images/presale/profile.png"
        />
        <p class="coins-text sub-s">753</p>
      </div>
      <div class="info-wallet">
        <IconWallet />
        <p v-if="connectedWallet" class="wallet-text cta-s">
          {{ formatWallet(connectedWallet) }}
        </p>
      </div>
      <button class="buy-btn" @click="scrollToPanel">
        <CommonButtonTemplate> Buy $DUCK </CommonButtonTemplate>
      </button>
    </div>
    <button class="log-out-btn" @click="logOutWallet">
      <CommonButtonTemplate small>
        <IconLogOut />
      </CommonButtonTemplate>
    </button>
  </section>
</template>

<script setup lang="ts">
const connectedWallet = useState<string | null>("connected-wallet")

const { isDesktop } = useViewport()

const formatWallet = (address: string, start = 6, end = 5) => {
  if (!address) return ""

  const startPart = address.slice(0, start)
  const endPart = address.slice(-end)

  return `${startPart}...${endPart}`
}

const headerState = useState<{
  isMenuOpen: boolean
  isScrolled: boolean
}>("header-state")

const scrollToPanel = () => {
  gsap.to(window, {
    scrollTo: {
      y: "section.panel",
    },
  })

  if (!isDesktop.value) {
    const menu = document.querySelector("menu.menu")

    headerState.value.isMenuOpen = false
    useLockScroll(false)

    gsap.to(menu, {
      xPercent: 105,
    })
  }
}

const logOutWallet = async () => {
  await logoutWallet()
  connectedWallet.value = null
}
</script>

<style scoped lang="scss">
.wallet-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  @include mobile {
    width: 100%;
    display: block;
    gap: 0;
  }
}
.log-out-btn:deep(svg) {
  width: 1.5rem;
}
.info-panel {
  padding: 1rem;
  border-radius: 1rem;
  border: 0.0938rem solid var(--c-black);
  background: var(--c-white);
  display: flex;
  align-items: center;
  @include mobile {
    align-items: flex-start;
    flex-direction: column;
    gap: 1rem;
    position: relative;
  }
}

.logo-img {
  width: 1.5rem;
}
.info-coins {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  border: 0.0938rem solid var(--c-grey-3);
  background: var(--c-milk);
  margin-right: 1rem;
  @include mobile {
    background: transparent;
    padding: 0;
    border: none;
  }
}
.info-wallet {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-right: 1.5rem;
}
.info-wallet:deep(svg) {
  width: 1.5rem;
}
.buy-btn {
  white-space: nowrap;
  @include mobile {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 1rem;
  }
}
.log-out-btn {
  @include mobile {
    display: none;
  }
}
</style>
