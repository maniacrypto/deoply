import { createConfig, http } from 'wagmi'
import { base } from '@wagmi/core/chains'
import { injected, walletConnect } from 'wagmi/connectors'

export const config = createConfig({
  chains: [base],
 connectors: [
    injected(),

    walletConnect({
      projectId: import.meta.env.VITE_WALLETCONNECT_ID,
      showQrModal: true,
    }),
  ],
  transports: {
    [base.id]: http(),
  },

 
})
