<template>
  <div class="socials" :class="{ small }">
    <a
      v-for="({ link, name }, i) in soc"
      :key="i"
      target="_blank"
      class="soc-link"
      :href="link"
      rel="nofollow noopener noreferrer"
    >
      <CommonButtonTemplate :big="!small" :small="small" :yellow="yellow">
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
import IconTiktok from "@/components/icon/Tiktok.vue"
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
  tiktok: IconTiktok,
  telegram: IconTelegram,
} as const

const soc = [
  {
    name: "twitter",
    link: "https://x.com/itsduck_time",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/itsduck_time/",
  },
  {
    name: "tiktok",
    link: "https://www.tiktok.com/@itsduck_time",
  },
  {
    name: "telegram",
    link: "https://t.me/itsduck_community",
  },
]
</script>

<style scoped lang="scss">
.socials:not(.small) .soc-link {
  text-transform: capitalize;
  width: 11.5rem;
  @include mobile {
    width: 100%;
  }
}
.soc-link:deep(svg) {
  width: 1.5rem;
  @include mobile {
    width: 1rem;
  }
}
.socials {
  display: flex;
  gap: 1rem;
  @include mobile {
    gap: 0.5rem;
  }
}
.socials:not(.small) {
  @include mobile {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
}
.link-wrap {
  display: flex;
  align-items: center;
  gap: 0.625rem;
}
</style>
