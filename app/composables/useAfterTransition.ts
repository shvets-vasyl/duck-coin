export function useAfterTransition(fn: () => void) {
  const preloaderDone = useState("preloader-done")
  const transitionDone = useState("transition-done")

  watch(transitionDone, (ready) => ready && fn())
  watch(preloaderDone, (ready) => ready && fn())
}
