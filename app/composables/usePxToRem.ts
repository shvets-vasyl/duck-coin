export function usePxToRem(base = 16) {
  const toRem = (px: number) => `${px / base}rem`
  return { toRem }
}
