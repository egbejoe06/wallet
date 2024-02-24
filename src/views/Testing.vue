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

const projectId = "YOUR_PROJECT_ID";

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
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
      // Handle successful connection here
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
