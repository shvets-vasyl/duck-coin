import type { CreateAppKit } from "@reown/appkit"
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi"
import {
  type AppKitNetwork,
  base,
  bsc,
  dogechain,
  mainnet,
  polygon,
  sonic,
} from "@reown/appkit/networks"
import { cookieStorage, createStorage } from "wagmi"

const APP_NAME = "Duck"
const APP_DESCRIPTION =
  "2026's Hottest Memecoin Presale. The memecoin everyone's talking about."
const PROD_URL =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.NUXT_PUBLIC_SITE_URL) ||
  (typeof process !== "undefined" && process.env?.NUXT_PUBLIC_SITE_URL) ||
  "https://itsduck.com"

export const projectId =
  (typeof import.meta !== "undefined" && (import.meta as any).env?.NUXT_PUBLIC_PROJECT_ID) ||
  (typeof process !== "undefined" && process.env?.NUXT_PUBLIC_PROJECT_ID) ||
  "b56e18d47c72ab683b10814fe9495694"

if (!projectId) {
  throw new Error("Reown Project ID is not defined")
}

const networks: [AppKitNetwork, ...AppKitNetwork[]] = [
  mainnet,
  bsc,
  dogechain,
  polygon,
  sonic,
  base,
]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
})

const metadata = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  url: PROD_URL,
  icons: [`${PROD_URL}/small-logo.webp`],
}

export const appkitConfig: CreateAppKit = {
  adapters: [wagmiAdapter],
  defaultNetwork: mainnet,
  projectId,
  networks,
  metadata,
  themeMode: "light",
  features: {
    connectMethodsOrder: ["wallet"],
    analytics: true,
  },
  allWallets: "SHOW",
  themeVariables: {
    "--w3m-accent": "#000000",
  },
  termsConditionsUrl: "https://itsduck.com/terms",
  privacyPolicyUrl: "https://itsduck.com/privacy",
  featuredWalletIds: [
    "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
    "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
    "15c8b91ade1a4e58f3ce4e7a0dd7f42b47db0c8df7e0d84f63eb39bcb96c4e0f",
    "8a0ee50d1f22f6651afcae7eb4253e52a3310b90af5daef78a8c4929a9bb99d4",
    "cbc11415130d01316513f735eac34fd1ad7a5d40a993bbb6772d2c02eeef3df8",
    "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
  ],
}
