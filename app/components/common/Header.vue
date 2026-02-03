<template>
  <header class="header" :class="{ scrolled: headerState.isScrolled }">
    <div class="logo">
      <NuxtLink class="logo-link" to="/">
        <IconLogo />
      </NuxtLink>
    </div>

    <nav class="nav">
      <template v-if="!hideNav">
        <NuxtLink
          v-for="({ text, link }, i) in nav"
          :key="i"
          class="nav-item cta-s hover-fade"
          :to="link"
        >
          {{ text }}
        </NuxtLink>
      </template>
    </nav>

    <div class="cta-wrap">
      <button class="cta-btn">
        <CommonButtonTemplate>
          {{ btnText ? btnText : "Join the presale" }}
        </CommonButtonTemplate>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  hideNav?: boolean
  btnText?: string
}>()
const nav = [
  {
    text: "Presale",
    link: "/",
  },
  {
    text: "DuckPad",
    link: "/",
  },
  {
    text: "About",
    link: "/",
  },
  {
    text: "Ecosystem",
    link: "/",
  },
  {
    text: "Contact",
    link: "/",
  },
]

const headerState = useState<{
  isMenuOpen: boolean
  isScrolled: boolean
}>("header-state")

const onScroll = () => {
  headerState.value.isScrolled = window.scrollY > 0
}

onMounted(() => {
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-header);
  display: grid;
  grid-template-columns: 0.3fr 1fr 0.3fr;
  padding: 1.5rem 3.5rem;
  align-items: center;
  @include mobile {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
  }
}
.header.scrolled {
  background: var(--c-yellow);
  border-bottom: 0.0625rem solid var(--c-black);
}

.logo-link {
  width: 4.3125rem;
  display: inline-flex;
}
.nav {
  display: flex;
  justify-content: center;
  gap: 2.5rem;
  align-items: center;
  @include mobile {
    display: none;
  }
}
.cta-wrap {
  display: flex;
  justify-content: flex-end;
}
</style>
