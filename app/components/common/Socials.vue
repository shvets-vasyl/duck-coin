<template>
  <div class="socials">
    <a
      v-for="({ link, name }, i) in soc"
      :key="i"
      target="_blank"
      class="soc-link"
      :href="link"
      :class="{ small }"
      rel="nofollow noopener noreferrer"
    >
      <CommonButtonTemplate :extra="!small" :small="small" :yellow="yellow">
        <div class="link-wrap">
          <component :is="icons[name as IconName]" />
          <p v-if="!small" class="cta-s">{{ name }}</p>
        </div>
      </CommonButtonTemplate>
    </a>
  </div>
</template>

<script setup lang="ts">
import IconFacebook from "@/components/icon/Facebook.vue"
import IconX from "@/components/icon/X.vue"
import IconInstagram from "@/components/icon/Instagram.vue"
import IconTelegram from "@/components/icon/Telegram.vue"

defineProps<{
  small?: boolean
  yellow?: boolean
}>()

type IconName = keyof typeof icons

const icons = {
  twitter: IconX,
  instagram: IconInstagram,
  facebook: IconFacebook,
  telegram: IconTelegram,
} as const

const soc = [
  {
    name: "twitter",
    link: "https://www.x.com/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "telegram",
    link: "https://web.telegram.org/k/",
  },
]
</script>

<style scoped lang="scss">
.soc-link:not(.small) {
  text-transform: capitalize;
  width: 11.5rem;
}
.soc-link:deep(svg) {
  width: 1.5rem;
}
.socials {
  display: flex;
  gap: 1rem;
}
.link-wrap {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
</style>
