<template>
  <div>
    <button class="enableEthereumButton bg-red-50" @click="connectToWallet('trust')">
      Enable Ethereum for browser
    </button>
    <button class="enableEthereumButton" @click="connectToWallet('metamask')">
      Enable Ethereum for mobile
    </button>
    <div class="showAccount">Account: {{ account }}</div>
    <div class="showBalance">Balance: {{ balance }} ETH</div>
    <button class="sendEthButton" @click="sendEth">Send Ethereum</button>
  </div>
</template>

<script>
import detectEthereumProvider from "@metamask/detect-provider";
import { MetaMaskSDK } from "@metamask/sdk";
import { getTrustWalletInjectedProvider } from "./trustWallet";

export default {
  data() {
    return {
      account: null,
      balance: null,
      MMSDK: null,
      walletType: null, // Added to track which wallet is connected
    };
  },
  mounted() {
    this.detectProvider();
    this.initializeMetaMask();
  },
  methods: {
    async initializeMetaMask() {
      const protocol = window.location.protocol;
      const host = window.location.host;
      const url = protocol + "//" + host;

      this.MMSDK = new MetaMaskSDK({
        dappMetadata: {
          name: "Example JavaScript Dapp",
          url: url,
        },
      });
    },
    async connectToWallet(walletType) {
      if (walletType === "metamask") {
        await this.connectToMetaMask();
      } else if (walletType === "trust") {
        await this.connectToTrustWallet();
      }
    },
    async connectToMetaMask() {
      if (!this.MMSDK) {
        console.error("MetaMask SDK not initialized.");
        return;
      }

      const ethereum = this.MMSDK.getProvider();

      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
        this.walletType = "metamask";
      } catch (err) {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      }
    },
    async connectToTrustWallet() {
      try {
        const provider = await getTrustWalletInjectedProvider();
        const accounts = await provider.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
        this.walletType = "trust";
      } catch (error) {
        console.error("Error connecting to Trust Wallet:", error);
      }
    },
    async detectProvider() {
      const provider = await detectEthereumProvider();
      if (provider) {
        this.startApp(provider);
      } else {
        console.log("Please install MetaMask or Trust Wallet!");
      }
    },
    startApp(provider) {
      if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets installed?");
      }
    },
    async getAccount() {
      try {
        let accounts;
        if (this.walletType === "metamask") {
          accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        } else if (this.walletType === "trust") {
          const provider = await getTrustWalletInjectedProvider();
          accounts = await provider.request({ method: "eth_requestAccounts" });
        }
        this.account = accounts[0];
        this.getBalance();
      } catch (err) {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask or Trust Wallet.");
        } else {
          console.error(err);
        }
      }
    },
    async getBalance() {
      try {
        let provider;
        if (this.walletType === "metamask") {
          provider = window.ethereum;
        } else if (this.walletType === "trust") {
          provider = await getTrustWalletInjectedProvider();
        }
        const balance = await provider.request({
          method: "eth_getBalance",
          params: [this.account, "latest"],
        });
        const balanceInEther = parseFloat(
          provider.utils.fromWei(balance, "ether")
        ).toFixed(2);
        this.balance = balanceInEther;
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    },
    async sendEth() {
      try {
        let provider;
        if (this.walletType === "metamask") {
          provider = window.ethereum;
        } else if (this.walletType === "trust") {
          provider = await getTrustWalletInjectedProvider();
        }
        const valueInWei = "500000000000000000"; // 0.5 Ether in Wei
        const txHash = await provider.request({
          method: "eth_sendTransaction",
          params: [
            {
              from: this.account,
              to: "0x401Cf86D34102c070A02aE6D327cBb38a3816a15",
              value: "0x" + valueInWei,
              gasLimit: "0x5028",
              maxPriorityFeePerGas: "0x3b9aca00",
              maxFeePerGas: "0x2540be400",
            },
          ],
        });
        console.log("Transaction Hash:", txHash);
      } catch (error) {
        console.error("Error sending Ethereum:", error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
