interface ImportMetaEnv {
  readonly VITE_RPC_URL: string
  readonly VITE_WALLETCONNECT_ID: string
  readonly VITE_CONTRACT_ADDRESS: string
  readonly VITE_APP_URL:string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}