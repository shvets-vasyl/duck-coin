import type Lenis from "lenis"

export function useLockScroll(value: boolean = true) {
  const lenis = useState<Lenis>("lenis")
  if (!lenis.value) return
  return value ? lenis.value.stop() : lenis.value.start()
}
