<template>
  <footer class="footer">
    <div class="top">
      <div class="logo">
        <img class="small-logo" draggable="false" src="/small-logo.webp" />

        <IconLogo class="logo-name" />
      </div>

      <div
        class="nav"
        :class="{ open: ecosystemOpen }"
        @click="ecosystemOpen = !ecosystemOpen"
      >
        <p class="nav-title sub-m">Ecosystem</p>
        <div class="nav-open">
          <CommonButtonTemplate small>
            <div class="link-wrap">
              <IconCaret2 />
            </div>
          </CommonButtonTemplate>
        </div>
        <div class="list">
          <NuxtLink
            v-for="({ title, link }, i) in ecosystem"
            :key="i"
            class="list-link cta-s hover-fade"
            :to="link"
          >
            {{ title }}
          </NuxtLink>
        </div>
      </div>

      <div
        class="nav"
        :class="{ open: legalOpen }"
        @click="legalOpen = !legalOpen"
      >
        <p class="nav-title sub-m">Legal</p>
        <div class="nav-open">
          <CommonButtonTemplate small>
            <div class="link-wrap">
              <IconCaret2 />
            </div>
          </CommonButtonTemplate>
        </div>
        <div class="list">
          <NuxtLink
            v-for="({ title, link }, i) in legal"
            :key="i"
            class="list-link cta-s hover-fade"
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
const ecosystemOpen = ref(false)
const legalOpen = ref(false)

const ecosystem = [
  {
    title: "Presale",
    link: "/",
  },
  {
    title: "DuckPad",
    link: "/duckpad",
  },
  {
    title: "About",
    link: "/",
  },
  {
    title: "Ecosystem",
    link: "/ecosystem",
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
  @include mobile {
    padding: 3rem 1rem 1.5rem;
  }
}
.top {
  display: flex;
  gap: 6rem;
  align-items: flex-start;
  border-bottom: 0.125rem solid var(--c-grey-3);
  padding-bottom: 2.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0;
    padding-bottom: 1.5rem;
    align-items: stretch;
  }
}
.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex: 0 0 13rem;
  @include mobile {
    align-self: center;
    flex: 1;
    margin-bottom: 1.5rem;
  }
}
.small-logo {
  width: 2rem;
}
.logo-name {
  width: 4.5625rem;
}
.nav {
  flex: 0 0 8rem;
  @include mobile {
    flex: 1;
    margin-bottom: 0.25rem;
    background: var(--c-white);
    padding: 2.4rem 1.5rem;
    border-radius: 1rem;
    border: 0.0625rem solid var(--c-grey-3);
    background: var(--c-white);
    max-height: 5.7rem;
    overflow: hidden;
    position: relative;
    transition: max-height 0.5s var(--t-ease);
  }
}
.nav.open {
  @include mobile {
    max-height: 250px;
  }
}
.nav-title {
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 2.2rem;
  }
}
.list-link {
  display: flex;
}
.list-link:not(:last-child) {
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.mail {
  display: grid;
  grid-template-columns: 1.5rem 1fr;
  align-items: center;
  gap: 1rem;
  @include mobile {
    gap: 0.5rem;
  }
}
.contact {
  margin-left: auto;
  flex: 0 0 20rem;
  @include mobile {
    flex: 1;
    margin-left: 0;
    margin-top: 1.25rem;
  }
}
.contact-title {
  margin-bottom: 1.5rem;
  @include mobile {
    margin-bottom: 1rem;
  }
}
.socials-wrap {
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 1.5rem;
  }
}
.bot {
  padding-top: 2.5rem;
  text-align: center;
  color: var(--c-grey);
  @include mobile {
    padding-top: 1.5rem;
  }
}
.nav-open {
  display: none;
  @include mobile {
    display: block;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
  }
}
.link-wrap {
  width: 1.25rem;
  transition: all 0.5s var(--t-ease);
}
.nav.open .link-wrap {
  @include mobile {
    transform: rotate(180deg);
  }
}
</style>
