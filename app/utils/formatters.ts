export const nfMoney = (n: number) => {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(n)
  )
}

export const nfToken = (n: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(n)
}

export const nfPrice = (n: number) => {
  return (
    "$" +
    new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 0,
      maximumFractionDigits: 5,
    }).format(n)
  )
}

export const nfInt = (n: number) => {
  return new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 0,
  }).format(n)
}

export const nfCrypto = (n: number) => {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 8,
  }).format(n)
}

export function formatInputNumber(value: number, maxDigits = 8) {
  if (!Number.isFinite(value) || value <= 0) return ""

  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: maxDigits,
    useGrouping: false,
  }).format(value)
}

export function sanitizeNumericValue(value: string) {
  let v = value.replace(/[^\d.]/g, "")
  v = v.replace(/(\..*)\./g, "$1")
  v = v.replace(/^0+(?=\d)/, "")
  return v
}
