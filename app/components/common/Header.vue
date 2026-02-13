<template>
  <header
    class="header"
    :class="{ scrolled: headerState.isScrolled, open: headerState.isMenuOpen }"
  >
    <div class="logo">
      <NuxtLink class="logo-link" to="/">
        <IconLogo />
      </NuxtLink>
    </div>

    <nav class="nav">
      <template v-if="!hideNav">
        <NuxtLink
          v-for="({ text, link }, i) in navList ? navList : nav"
          :key="i"
          class="nav-item cta-s hover-fade"
          :to="link"
        >
          {{ text }}
        </NuxtLink>
      </template>
    </nav>

    <div v-if="!hideNav" class="cta-wrap">
      <button class="cta-btn">
        <CommonButtonTemplate>
          {{ btnText ? btnText : "Join the presale" }}
        </CommonButtonTemplate>
      </button>
    </div>

    <button v-if="!hideNav" class="burger" @click="toggleMenu">
      <IconBurger v-if="!headerState.isMenuOpen" />
      <IconClose v-else />
    </button>
  </header>
</template>

<script setup lang="ts">
defineProps<{
  hideNav?: boolean
  btnText?: string
  navList?: {
    text: string
    link: string
  }[]
}>()
const nav = [
  {
    text: "Presale",
    link: "/presale",
  },
  {
    text: "DuckPad",
    link: "/duckpad",
  },
  {
    text: "Ecosystem",
    link: "/ecosystem",
  },
  {
    text: "Contact",
    link: "/contact",
  },
]

const headerState = useState<{
  isMenuOpen: boolean
  isScrolled: boolean
}>("header-state")

const animating = ref(false)

const toggleMenu = () => {
  if (animating.value) return
  animating.value = true

  const menu = document.querySelector("menu.menu")

  if (headerState.value.isMenuOpen) {
    headerState.value.isMenuOpen = false
    useLockScroll(false)

    gsap.to(menu, {
      xPercent: 105,
      onComplete() {
        animating.value = false
      },
    })
  } else {
    headerState.value.isMenuOpen = true
    useLockScroll(true)

    gsap.to(menu, {
      x: 0,
      xPercent: 0,
      onComplete() {
        animating.value = false
      },
    })
  }
}

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
  }
}
.logo {
  @include mobile {
    margin-right: auto;
  }
}
.header.scrolled {
  background: var(--c-yellow);
  border-bottom: 0.0625rem solid var(--c-black);
  @include mobile {
    transition: border-color 0.4s var(--t-ease);
  }
}
.header.open.scrolled {
  @include mobile {
    border-color: transparent;
  }
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
  @include mobile {
    transition: opacity 0.4s var(--t-ease);
  }
}
.header.open .cta-wrap {
  @include mobile {
    opacity: 0;
    visibility: hidden;
  }
}
.burger {
  display: none;
  @include mobile {
    display: block;
    padding: 1rem;
    margin-right: -1rem;
  }
}
.burger:deep(svg) {
  width: 1.5rem;
}
</style>
