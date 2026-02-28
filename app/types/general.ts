export type InvestorResponse = {
  wallet_address: string
  total_invested_usd: number
  total_tokens: number
  payment_count: number
  first_invested_at?: string | null
  last_invested_at?: string | null
}

export type CurrencyItem = {
  id: number
  code: string
  name: string
  logo_url: string
  enable: boolean
}

export type ExchangeItem = {
  text: string
  icon: string
  code: string
}

export type EstimateResponse = {
  usd_amount: number
  pay_currency: string
  estimated_amount: number
  token_amount: number
}

export type CreateInvoiceResponse = {
  payment_id: string
  invoice_url: string
  invoice_id: string
  token_amount: number
  usd_amount: number
}

export type SelectItem = {
  text: string
  priceUsd: number
  day: number
  stage: number
}
