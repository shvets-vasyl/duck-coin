export const useToggleMenu = () => {
  const open = () => {
    useLockScroll(true)
    const tl = gsap.timeline({
      onComplete() {
        gsap.set(".menu-wrap", {
          pointerEvents: "auto",
        })
      },
    })
    tl.set(".menu-wrap", { display: "block", pointerEvents: "none" })
    tl.to(".menu-wrap .menu-bg", { opacity: 1 })
    tl.fromTo(
      ".menu-wrap .menu",
      {
        opacity: 0,
      },
      {
        opacity: 1,
      },
      "<"
    )

    tl.fromTo(
      ".menu-wrap nav .text-1 .char",
      {
        xPercent: 100,
      },
      {
        xPercent: 0,
        duration: 0.7,
        ease: "Out",
      }
    )

    tl.fromTo(
      ".menu-wrap .inquiries-photos",
      {
        scale: 0,
      },
      {
        scale: 1,
        duration: 0.7,
        ease: "Out",
        force3D: true,
      },
      "<"
    )

    tl.fromTo(
      ".menu-wrap .menu-foot .line",
      {
        yPercent: 105,
      },
      {
        yPercent: 0,
        duration: 0.7,
        ease: "Out",
        force3D: true,
      },
      "<"
    )
    return tl
  }

  const close = () => {
    useLockScroll(false)

    const tl = gsap.timeline()

    tl.to(".menu-wrap nav .text-1 .char", {
      xPercent: 100,
      ease: "In",
    })

    tl.to(
      ".menu-wrap .inquiries-photos",
      {
        scale: 0,
        ease: "In",
      },
      "<"
    )

    tl.to(
      ".menu-wrap .menu-foot .line",
      {
        yPercent: 105,
        ease: "In",
      },
      "<"
    )

    tl.to(".menu-wrap .menu-bg", { opacity: 0 })
    tl.to(".menu-wrap .menu", { opacity: 0 }, "<")
    tl.set(".menu-wrap", { display: "none" })

    return tl
  }

  return { open, close }
}
