import type { TransitionProps } from "vue"
import type { RouteLocationNormalized } from "#vue-router"
import type { HeaderStateInterface } from "@/types/general"
import gsap from "gsap"

export default function defaultTransition(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  const transitionDone = useState("transition-done")
  const preloaderDone = useState("preloader-done")
  const headerState = useState<HeaderStateInterface>("header-state")
  const duration = 1

  to.meta.pageTransition = { ...(to.meta.pageTransition as TransitionProps) }
  from.meta.pageTransition = {
    ...(from.meta.pageTransition as TransitionProps),
  }

  to.meta.pageTransition.mode = "out-in"
  from.meta.pageTransition.mode = "out-in"

  const onLeave = (_el: Element, done: () => void) => {
    useLockScroll(true)
    transitionDone.value = false
    preloaderDone.value = true

    gsap.set(".transition-loader", {
      opacity: 1,
    })

    const tl = gsap.timeline({
      onComplete() {
        ScrollTrigger.killAll()
        headerState.value.white = false
        headerState.value.onlyBtnWhite = false
        headerState.value.instant = false
        headerState.value.isMenuOpen = false
        done()
      },
    })

    tl.to(".transition-loader .overlay", {
      x: 0,
      xPercent: 0,
      duration,
    })
  }

  const onEnter = (_el: Element, done: () => void) => {
    const tl = gsap.timeline({
      onComplete() {
        useLockScroll(false)
        transitionDone.value = true
        done()
      },
    })

    tl.to(".transition-loader", {
      opacity: 0,
      duration,
    })

    tl.set(".transition-loader .overlay", {
      xPercent: 100,
    })
  }

  if (from.meta.pageTransition)
    (from.meta.pageTransition as TransitionProps).onLeave = onLeave
  if (to.meta.pageTransition)
    (to.meta.pageTransition as TransitionProps).onEnter = onEnter
}
