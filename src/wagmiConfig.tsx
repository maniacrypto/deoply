import { createConfig, http } from 'wagmi'
import { base } from '@wagmi/core/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'

export const config = getDefaultConfig ({
      appName: 'My Web3 App',
  projectId: import.meta.env.VITE_WALLETCONNECT_ID,
  chains: [base],
//  connectors: [
//     injected(),

//     walletConnect({
//       projectId: import.meta.env.VITE_WALLETCONNECT_ID,
//       showQrModal: true,
//     }),
//   ],
//   transports: {
//     [base.id]: http(),
//   },

 
})
