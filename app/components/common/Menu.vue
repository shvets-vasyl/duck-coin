<template>
  <menu class="menu">
    <nav class="nav">
      <h5 v-for="({ text, link }, i) in nav" :key="i" class="nav-text h5">
        <NuxtLink :to="link" class="nav-link">
          <span> {{ text }}</span>
          <IconArrow />
        </NuxtLink>
      </h5>
    </nav>

    <div class="foot">
      <a class="mail" href="mailto:hello@duck.com">
        <IconMail />
        <span class="body-m">hello@duck.com</span>
      </a>

      <button class="cta-btn">
        <CommonButtonTemplate big yellow>
          {{ btnText ? btnText : "Join the presale" }}
        </CommonButtonTemplate>
      </button>
    </div>
  </menu>
</template>

<script setup lang="ts">
defineProps<{
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
</script>

<style scoped lang="scss">
.menu {
  display: none;
  @include mobile {
    display: flex;
    flex-direction: column;
    position: fixed;
    inset: 0;
    z-index: var(--z-menu);
    background: var(--c-white);
    padding-bottom: 3rem;
    transform: translateX(105%);
  }
}
.mail {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 0.5rem;
}
.nav {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  background: var(--c-yellow);
  padding: 7.5rem 1rem 1rem;
  border-radius: 0 0 2rem 2rem;
  flex: 1 1 auto;
  margin-bottom: 1.5rem;
}

.nav-text:deep(svg) {
  width: 1.5rem;
}
.nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.cta-btn {
  width: 100%;
}
.foot {
  width: 100%;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}
</style>
