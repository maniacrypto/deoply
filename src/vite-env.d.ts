interface ImportMetaEnv {
  readonly VITE_RPC_URL: string
  readonly VITE_WALLETCONNECT_ID: string
  readonly VITE_CONTRACT_ADDRESS: string
  readonly VITE_APP_URL:string
  readonly VITE_GM_CONTRACT:string
  readonly VITE_COUNTER_CONTRACT:string
  readonly VITE_BUILDER_CODE:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}