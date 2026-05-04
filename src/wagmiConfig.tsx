import { createConfig, http } from 'wagmi'
import { base } from '@wagmi/core/chains'
import { injected, walletConnect } from 'wagmi/connectors'
import { getDefaultConfig } from '@rainbow-me/rainbowkit'
import { Attribution } from "ox/erc8021";

const DATA_SUFFIX = Attribution.toDataSuffix({
  codes: [import.meta.env.VITE_BUILDER_CODE],
});
export const config = getDefaultConfig ({
      appName: 'Block Lab 3',
  projectId: import.meta.env.VITE_WALLETCONNECT_ID,
  chains: [base],
  dataSuffix: DATA_SUFFIX,

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
