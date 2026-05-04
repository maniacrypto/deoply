import { useState } from 'react';
import { ethers } from 'ethers';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount } from 'wagmi';
import { deployContract, writeContract, readContract} from '@wagmi/core'
import { config } from './wagmiConfig';


import {
  Plus,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  X,
  ArrowRight,

} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { CONTRACT_TEMPLATES } from './contracts';


// Utility for cleaner tailwind classes
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Ensure window.ethereum type exists
declare global {
  interface Window {
    ethereum: any;
  }
}

// Types
type DeployStatus = 'idle' | 'preparing' | 'deploying' | 'success' | 'error';

interface DeploymentResult {
  address: string;
  txHash: string;
}

const switchOrAddChain = async () => {
  const chainId = "0x2105";
  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
    return true;
  } catch (err: any) {
    // 4️⃣ If chain not added → add it
    if (err.code === 4902) {
      const addedChain = await window.ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            chainId,
            chainName: "Base Sepolia Testnet",
            nativeCurrency: {
              name: "Ether",
              symbol: "ETH",
              decimals: 18,
            },
            rpcUrls: ["https://mainnet.base.org"],
            blockExplorerUrls: ["https://base.blockscout.com/"],
          },
        ],
      });
      console.log(addedChain);

    } else {
      console.log("ERROR");
      throw err;

    }
  }
};
export default function App() {


  const { address, isConnected } = useAccount();




  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans flex flex-col md:border-8 border-slate-900 selection:bg-emerald-500 selection:text-black">
      {/* Top Navigation Bar */}
      <nav className="h-16 border-b border-slate-800 flex items-center justify-between px-6 md:px-10 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 bg-emerald-500 rotate-45 shadow-[0_0_15px_rgba(16,185,129,0.3)]"></div>
          <span className="font-mono font-bold tracking-tighter text-lg md:text-xl text-white">BLOCK_LABS</span>
        </div>

        <ConnectButton />
      </nav>

      <div className="flex-1 overflow-y-auto">
        <div className="max-w-6xl mx-auto px-6 md:px-10">
          {/* Header Section */}
          <header className="pt-16 pb-12 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4 uppercase">
              DEPLOYMENT_FACTORY <span className="text-slate-700 font-mono text-sm align-top ml-2">v.1.0.0</span>
            </h1>
            <p className="text-slate-400 max-w-xl text-[11px] md:text-xs leading-relaxed uppercase tracking-[0.2em] font-medium">
              Deploy user contract on different Evm chain, execute counter and create Gm Transaction.
              Currently Base Mainnet Available.
            </p>
          </header>

          {/* Main Options Grid */}
          <main className="pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <DeployCard
                type="TOKEN"
                icon={<div className="w-7 h-7 bg-emerald-500/20 border border-emerald-500/40 rounded-full" />}
                template={CONTRACT_TEMPLATES.TOKEN}
                signer={!address}
                accent="emerald"
                idx="01"
              />
              <DeployCard
                type="COUNTER"
                icon={<div className="w-10 h-2 bg-blue-500/40" />}
                template={CONTRACT_TEMPLATES.COUNTER}
                signer={!address}
                accent="blue"
                idx="02"
              />
              <DeployCard
                type="GM"
                icon={<div className="w-6 h-6 border-2 border-amber-500/40" />}
                template={CONTRACT_TEMPLATES.GM}
                signer={!address}
                accent="amber"
                idx="03"
                iconRotate
              />
            </div>
          </main>
        </div>
      </div>

      {/* Status Bar Footer */}
      <footer className="h-12 bg-slate-900 border-t border-slate-800 px-6 md:px-10 flex items-center justify-between text-[9px] md:text-[10px] font-mono text-slate-500 shrink-0">
        <div className="hidden md:flex gap-8">
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-slate-700 rounded-full" />LATENCY: 12ms</span>
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-slate-700 rounded-full" />BLOCK_HEIGHT: 18,442,091</span>
          <span className="flex items-center gap-1.5"><div className="w-1 h-1 bg-slate-700 rounded-full" />GAS_PRICE: 24 GWEI</span>
        </div>
        <div className="flex gap-4 ml-auto">
          <span className="text-slate-600">STABLE_RELEASE</span>
          <span className="text-emerald-500 font-bold bg-emerald-500/5 px-2">SYSTEM_OPTIMAL</span>
        </div>
      </footer>
    </div>
  );

 
  interface DeployCardProps {
    type: string;
    icon: React.ReactNode;
    template: any;
    accent: 'emerald' | 'blue' | 'amber';
    idx: string;
    iconRotate?: boolean;
  }

  function DeployCard({ type, icon, template, accent, idx, iconRotate }: DeployCardProps) {
    const [status, setStatus] = useState<DeployStatus>('idle');
    const [result, setResult] = useState<DeploymentResult | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [showConfig, setShowConfig] = useState(false);
    const [formError, setFormError] = useState<string | null>(null);




    // Token Form State
    const [tokenConf, setTokenConf] = useState({
      name: "My Protocol Token",
      ticker: "MPT",
      supply: "1000000"
    });


    const validate = (overwriteParams: any) => {



      let params = overwriteParams || tokenConf;
      console.log(params);
      if (!params.name || typeof params.name !== "string" || !params.name.trim()) {
        console.log('name');
        setFormError("Name is required");
        return;

      }
      if (!params.ticker || typeof params.ticker !== "string" || !params.ticker.trim()) {
        console.log('syb');
        setFormError("Symbol is required");
        return;

      }

      if (!params.supply || Number(params.supply) <= 0) {
        console.log('supply');
        setFormError("Supply must not be 0");
        return;

      }

      handleDeploy();



    };

    const handleDeploy = async (overwriteParams?: any) => {


      if (!isConnected) {
        alert("Please connect your wallet first!");
        return;
      }
      let user = address;





      var tx;
      var url = "	https://base.blockscout.com/";

   
      setShowConfig(false);

      setStatus('preparing');
      try {
        setStatus('deploying');


        if (type === 'TOKEN') {
          const params = overwriteParams || tokenConf;
      
          const result = await deployContract(config, {
            abi: template.abi,
            args: [
              params.name,
              params.ticker,
              ethers.parseUnits(params.supply, 18)],
            bytecode: template.bytecode,
          })


          // );
          console.log(result);
          url = url + "tx/" + result;
          setResult({
            address: url || "",
            txHash: tx || "",
          });
          setStatus('success');
        }
        else if (type == 'COUNTER') {
          // alert("OK");

          const result = await writeContract(config, {
            abi: template.abi,
            address: import.meta.env.VITE_COUNTER_CONTRACT,
            functionName: 'increament',
            args: [],
          });
          console.log(result);
          const read = await readContract(config, {
            abi: template.abi,
            address: import.meta.env.VITE_COUNTER_CONTRACT,
            functionName: 'count',
            args: [user]
          });
          console.log(Number(read));





          url = url + "tx/" + result;
          setResult({
            address: url || "",
            txHash: tx?.hash || "",
            msg: "Counter Number : " + read || "Counter Updated Successfully"

          });
          setStatus('success');



        }
        else {

          const result = await readContract(config, {
            abi: template.abi,
            address: import.meta.env.VITE_GM_CONTRACT,
            functionName: 'getEnDTime',
            args: [user],
          });
          let time = Number(result);
          const seconds = Math.floor(Date.now() / 1000);
          if (seconds <= time) {

            const date = new Date(time * 1000);


            setError("After " + date?.toString() || "Deployment sequence interrupted.");
            setStatus('error');

          }
          else {
            const result = await writeContract(config, {
              abi: template.abi,
              address: import.meta.env.VITE_GM_CONTRACT,
              functionName: 'sayGM',
              args: ['GM'],
            });
            url = url + "/tx/" + result;
            setResult({
              address: url || "",
              txHash: tx?.hash || "",
            });
            setStatus('success');


          }



        }






      } catch (err: any) {
        console.log(err);
        let message = "Deployment sequence interrupted.";

        setError(message);
        setStatus('error');

      }
    };


    const accents = {
      emerald: 'group-hover:border-emerald-500/50',
      blue: 'group-hover:border-blue-500/50',
      amber: 'group-hover:border-amber-500/50',
    };

    const glowColors = {
      emerald: 'bg-emerald-500/10',
      blue: 'bg-blue-500/10',
      amber: 'bg-amber-500/10',
    };

    const headerColors = {
      emerald: 'bg-emerald-500/10 text-emerald-500',
      blue: 'bg-blue-500/10 text-blue-500',
      amber: 'bg-amber-500/10 text-amber-500',
    };

    const btnThemes = {
      emerald: 'hover:bg-emerald-400',
      blue: 'hover:bg-blue-400',
      amber: 'hover:bg-amber-400',
    };

    const handleInitClick = () => {
      if (type === 'TOKEN') {
        setShowConfig(true);

      } else {
        handleDeploy();
      }
    };

    return (

      <>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ y: -4 }}
          className={cn(
            "relative flex flex-col border border-slate-800 bg-slate-900/20 transition-all duration-500 group overflow-hidden h-[380px]",
            accents[accent],
            status === 'success' && 'border-emerald-500/40 bg-emerald-500/5',
            status === 'error' && 'border-red-500/40 bg-red-500/5'
          )}
        >
          {/* Background Micro-Grid */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
            style={{ backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)` }} />

          {/* Technical Header */}
          <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800 bg-black/40 relative z-10">
            <div className="flex items-center gap-2">
              <div className={cn("w-1 h-3", status === 'success' ? 'bg-emerald-500' : status === 'error' ? 'bg-red-500' : 'bg-slate-700')} />
              <span className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest">{type}_MODULE</span>
            </div>
            <span className={cn("text-[9px] font-mono font-black uppercase px-1.5 py-0.5", headerColors[accent])}>
              {idx}
            </span>
          </div>

          <div className="p-8 relative z-10 flex-1 flex flex-col text-left">
            {/* Geometric Icon Container */}
            <div className="flex items-center gap-6 mb-8">
              <div className={cn(
                "w-12 h-12 border-2 flex items-center justify-center transition-all duration-700 group-hover:scale-110",
                status === 'success' ? 'border-emerald-400 bg-emerald-500/20 text-emerald-400' :
                  status === 'error' ? 'border-red-400 bg-red-500/20 text-red-400' :
                    cn("border-slate-700 shadow-[0_0_15px_rgba(255,255,255,0.02)]", iconRotate && "rotate-45")
              )}>
                {icon}
              </div>
              <div className="flex flex-col">
                <h2 className="text-lg font-black text-white tracking-tighter uppercase leading-none mb-1">
                  {template.name.replace(' ', '_')}
                </h2>
                <div className="flex items-center gap-1.5">
                  <div className={cn("w-1.5 h-1.5 rounded-full", status === 'success' ? 'bg-emerald-500' : 'bg-slate-700')} />
                  <span className="text-[8px] font-mono text-slate-600 uppercase font-bold tracking-widest"> Ready_to_init</span>
                </div>
              </div>
            </div>

            <p className="text-slate-400 text-[10px] mb-10 leading-relaxed uppercase tracking-wider font-medium text-left border-l border-slate-800 pl-4">
              {template.description}
            </p>

            <div className="w-full mt-auto">
              <AnimatePresence mode="wait">
                {status === 'idle' && (
                  <motion.button
                    key="btn-idle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    onClick={handleInitClick}
                    disabled={!isConnected}
                    className={cn(
                      "w-full py-4 bg-white text-slate-950 font-black text-[10px] tracking-[0.2em] transition-all uppercase rounded-none relative overflow-hidden group/btn",
                      btnThemes[accent],
                      !isConnected && "opacity-20 cursor-not-allowed grayscale"
                    )}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <Plus className="w-3 h-3" />
                      {template.button}
                    </span>
                  </motion.button>
                )}

                {(status === 'preparing' || status === 'deploying') && (
                  <motion.div
                    key="btn-working"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-full py-4 bg-slate-800 text-white flex items-center justify-center gap-3"
                  >
                    <div className="w-3 h-3 border-2 border-white/20 border-t-white animate-spin" />
                    <span className="text-[9px] font-mono uppercase tracking-widest font-black">
                      {status === 'preparing' ? 'BUILDING_BYTECODE' : 'PUSHING_TO_CHAIN'}
                    </span>
                  </motion.div>
                )}

                {status === 'success' && result && (
                  <motion.div
                    key="btn-success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-3 w-full"
                  >
                    <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                      <CheckCircle2 className="w-3 h-3" />

                      {result.msg ? result.msg : "Transaction Success!"}
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between bg-black/40 border border-slate-800 p-3">
                        <div className="flex flex-col items-start overflow-hidden">
                          <span className="text-[7px] text-slate-600 font-bold uppercase">Target_Address</span>
                          <span className="text-[10px] text-slate-300 font-mono truncate w-full">{result.address}</span>
                        </div>
                        <button
                          onClick={() => window.open(`${result.address}`, '_blank')}
                          className="ml-3 p-2 text-slate-500 hover:text-white transition-colors border border-slate-800 bg-slate-900/50"
                        >
                          <ExternalLink className="w-3 h-3" />
                        </button>
                      </div>
                      <button
                        onClick={() => setStatus('idle')}
                        className="w-full py-2 border border-slate-800 text-slate-600 hover:text-slate-300 text-[8px] uppercase tracking-widest font-bold transition-all bg-slate-900/40"
                      >
                        Refresh_Unit
                      </button>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    key="btn-error"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="space-y-3 w-full"
                  >
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                      <AlertCircle className="w-3 h-3" />
                      {error}
                    </div>
                    <button
                      onClick={() => setStatus('idle')}
                      className="w-full py-4 bg-slate-800 text-white font-black text-[10px] tracking-widest uppercase hover:bg-slate-700"
                    >
                      Retry_Sequence
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Subtle Corner Accents */}
          <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-slate-800 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-slate-800 pointer-events-none" />
        </motion.div>

        {/* Token Configuration Modal */}
        <AnimatePresence>
          {showConfig && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-6 md:p-12">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowConfig(false)}
                className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                className="relative w-full max-w-lg bg-slate-900 border border-slate-800 shadow-2xl p-8"
              >
                {/* Technical Header */}

                <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-800">

                  <div className="flex items-center gap-3">
                    <div className="w-4 h-4 bg-emerald-500 rotate-45 shadow-[0_0_10px_rgba(16,185,129,0.3)]"></div>
                    <h3 className="text-xl font-black text-white tracking-tighter uppercase">Initialize_Erc20</h3>


                  </div>
                  <button
                    onClick={() => setShowConfig(false)}
                    className="p-1 hover:text-white transition-colors text-slate-500"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-6">

                  {formError && (
                    <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-500 font-mono text-[9px] uppercase tracking-widest font-bold flex items-center justify-center gap-2">
                      <AlertCircle className="w-3 h-3" />
                      {formError}
                    </div>

                  )}



                  <div className="space-y-2">
                    <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest pl-1">Token_Name</label>
                    <input
                      type="text"
                      value={tokenConf.name}
                      onChange={(e) => setTokenConf({ ...tokenConf, name: e.target.value })}
                      className="w-full bg-black/40 border border-slate-800 p-4 font-mono text-sm focus:border-emerald-500 outline-none transition-all placeholder:text-slate-800 text-white"
                      placeholder="e.g. My Awesome Token" required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest pl-1">Ticker_Symbol</label>
                      <input
                        type="text"
                        value={tokenConf.ticker}
                        onChange={(e) => setTokenConf({ ...tokenConf, ticker: e.target.value.toUpperCase() })}
                        className="w-full bg-black/40 border border-slate-800 p-4 font-mono text-sm focus:border-emerald-500 outline-none transition-all placeholder:text-slate-800 text-white"
                        placeholder="e.g. MAT" required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-mono font-black text-slate-500 uppercase tracking-widest pl-1">Total_Supply</label>
                      <input
                        type="number"
                        value={tokenConf.supply}
                        onChange={(e) => setTokenConf({ ...tokenConf, supply: e.target.value })}
                        className="w-full bg-black/40 border border-slate-800 p-4 font-mono text-sm focus:border-emerald-500 outline-none transition-all placeholder:text-slate-800 text-white"
                        placeholder="e.g. 1000000" required />
                    </div>
                  </div>

                  <div className="pt-6">
                    <div className="p-4 bg-emerald-500/5 border border-emerald-500/10 mb-8">
                      <p className="text-[10px] text-slate-400 font-mono leading-relaxed uppercase tracking-tighter">
                        Attention: deploying this asset will consume gas fees. Verification logic will be applied to all inputs before broadcast.
                      </p>
                    </div>

                    <button
                      onClick={() => { validate(tokenConf) }}
                      className="w-full py-5 bg-white text-slate-950 font-black text-xs tracking-[0.3em] uppercase hover:bg-emerald-400 transition-all flex items-center justify-center gap-3 active:scale-[0.98]"
                    >
                      Commit_Deployment
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Decor */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/5 blur-3xl rounded-full pointer-events-none" />
                <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b border-l border-emerald-500/40" />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </>
    );
  }
}
