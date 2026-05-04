import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import '@rainbow-me/rainbowkit/styles.css';
import {config} from "./wagmiConfig.tsx";
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WagmiProvider } from 'wagmi';
import { base, baseSepolia, mainnet, sepolia } from 'wagmi/chains';
// Create Query Client
const queryClient = new QueryClient();

console.log(import.meta.env.VITE_APP_URL);

// const config = getDefaultConfig({
//   appName: 'My Dapp',
//   chains: [base],
// });
createRoot(document.getElementById('root')!).render(
     <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
      <RainbowKitProvider>
    <App />
    </RainbowKitProvider>
    </WagmiProvider>
    </QueryClientProvider>
  
);
