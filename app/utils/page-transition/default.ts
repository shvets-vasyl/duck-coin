import type { TransitionProps } from "vue"
import type { RouteLocationNormalized } from "#vue-router"
import gsap from "gsap"

export default function defaultTransition(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) {
  const headerState = useState<{
    isMenuOpen: boolean
    isScrolled: boolean
  }>("header-state")
  const transitionDone = useState("transition-done")
  const preloaderDone = useState("preloader-done")
  const duration = 0.7

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

    const tl = gsap.timeline({
      onComplete() {
        headerState.value.isMenuOpen = false
        ScrollTrigger.killAll()
        done()
      },
    })

    tl.to(_el, {
      opacity: 0,
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

    tl.from(_el, {
      opacity: 0,
      duration,
    })
  }

  if (from.meta.pageTransition)
    (from.meta.pageTransition as TransitionProps).onLeave = onLeave
  if (to.meta.pageTransition)
    (to.meta.pageTransition as TransitionProps).onEnter = onEnter
}
