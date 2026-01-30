<template>
  <footer class="footer">
    <div class="top">
      <div class="logo">
        <img class="small-logo" draggable="false" src="/small-logo.webp" />

        <IconLogo class="logo-name" />
      </div>

      <div class="nav">
        <p class="nav-title sub-m">Ecosystem</p>
        <div class="list">
          <NuxtLink
            v-for="({ title, link }, i) in ecosystem"
            :key="i"
            class="list-link hover-fade"
            :to="link"
          >
            {{ title }}
          </NuxtLink>
        </div>
      </div>

      <div class="nav">
        <p class="nav-title sub-m">Legal</p>
        <div class="list">
          <NuxtLink
            v-for="({ title, link }, i) in legal"
            :key="i"
            class="list-link hover-fade"
            :to="link"
          >
            {{ title }}
          </NuxtLink>
        </div>
      </div>

      <div class="contact">
        <p class="contact-title sub-m">Join us</p>

        <div class="socials-wrap">
          <CommonSocials small />
        </div>

        <a class="mail hover-fade" href="mailto:hello@duck.com">
          <IconMail />
          <span class="body-m">hello@duck.com</span>
        </a>
      </div>
    </div>

    <div class="bot">
      <p class="cta-s">
        © {{ new Date().getFullYear() }} Duck Coin. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup lang="ts">
const ecosystem = [
  {
    title: "Presale",
    link: "/",
  },
  {
    title: "DuckPad",
    link: "/",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Ecosystem",
    link: "/",
  },
]

const legal = [
  {
    title: "Privacy Policy",
    link: "/",
  },
  {
    title: "Terms",
    link: "/",
  },
]
</script>

<style scoped lang="scss">
.footer {
  padding: 3.5rem 3.5rem 1.5rem;
}
.top {
  display: flex;
  gap: 6rem;
  align-items: flex-start;
  border-bottom: 0.125rem solid var(--c-grey-3);
  padding-bottom: 2.5rem;
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 13rem;
}
.small-logo {
  width: 2rem;
}
.logo-name {
  width: 4.5625rem;
}
.nav {
  flex: 0 0 8rem;
}
.nav-title {
  margin-bottom: 1.5rem;
}
.list-link {
  display: flex;
}
.list-link:not(:last-child) {
  margin-bottom: 1.5rem;
}
.mail {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 1rem;
}
.contact {
  margin-left: auto;
  flex: 0 0 20rem;
}
.contact-title {
  margin-bottom: 1.5rem;
}
.socials-wrap {
  margin-bottom: 3.5rem;
}
.bot {
  padding-top: 2.5rem;
  text-align: center;
  color: var(--c-grey);
}
</style>
