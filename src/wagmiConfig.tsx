import { createConfig, http } from '@wagmi/core'
import { base, baseSepolia } from '@wagmi/core/chains'

export const config = createConfig({

  chains: [base],
   transports: {
    [base.id]: http()
    // [baseSepolia.id]:http()
    
  },
});