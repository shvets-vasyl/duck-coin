<template>
  <div class="preloader">
    <div class="content">
      <h2 class="h2">{{ percent }}%</h2>
      <CommonProgress :percent="percent" color="#ffec00" />
    </div>
  </div>
</template>

<script setup lang="ts">
const preloaderDone = useState<boolean>("preloader-done")

const percent = ref(0)
const duration = 1

onMounted(() => {
  initAnim()
})

const initAnim = async () => {
  const preloader = document.querySelector(".preloader")

  const tl = gsap.timeline({
    delay: 0.5,
    onComplete() {
      useLockScroll(false)
      preloaderDone.value = true
    },
  })

  tl.to(
    percent,
    {
      value: 100,
      snap: "value",
      duration,
      ease: "preloaderEase",
    },
    "<"
  )

  tl.fromTo(
    preloader,
    {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    },
    {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      ease: "ease",
    }
  )
}
</script>

<style scoped lang="scss">
.preloader {
  position: fixed;
  inset: 0;
  background: var(--c-white);
  z-index: var(--z-preloader);
  color: var(--c-black);
  display: flex;
  align-items: center;
  justify-content: center;
}
.content {
  width: 50%;
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
