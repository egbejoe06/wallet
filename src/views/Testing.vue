<template>
  <div>
    <h1>Connect Your Wallet</h1>
    <p>Click the button below to connect your wallet:</p>
    <button @click="openModal">Connect Wallet</button>
  </div>
</template>

<script setup>
import { createWeb3Modal, defaultWagmiConfig } from "@web3modal/wagmi";
import { mainnet, arbitrum } from "viem/chains";
import { reconnect } from "@wagmi/core";

const projectId = "55fc77bde257c03b68c88892a1780af4";

const metadata = {
  name: "Dymension",
  description: "Web3Modal Example",
  url: "https://wallet-pied-tau.vercel.app/",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const chains = [mainnet, arbitrum];
const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  enableWalletConnect: true,
  enableInjected: true,
  enableEIP6963: true,
  enableCoinbase: true,
});

reconnect(config);

const openModal = () => {
  const web3Modal = createWeb3Modal({
    wagmiConfig: config,
    projectId,
    enableAnalytics: true,
  });
  web3Modal
    .open()
    .then((provider) => {
      console.log("Connected:", provider);
    })
    .catch((error) => {
      console.error("Connection Error:", error);
    });
};
</script>

<style scoped>
/* Add your styles here if needed */
</style>
