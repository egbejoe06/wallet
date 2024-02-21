<template>
  <div>
    <button class="enableEthereumButton bg-red-50" @click="getAccount">
      Enable Ethereum for browser
    </button>
    <button class="enableEthereumButton" @click="connectToMetaMask()">
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

export default {
  data() {
    return {
      account: null,
      balance: null,
      MMSDK: null,
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
    async connectToMetaMask() {
      if (!this.MMSDK) {
        console.error("MetaMask SDK not initialized.");
        return;
      }

      const ethereum = this.MMSDK.getProvider();

      try {
        const accounts = await ethereum.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
      } catch (err) {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      }
    },

    async detectProvider() {
      const provider = await detectEthereumProvider();
      if (provider) {
        this.startApp(provider);
      } else {
        console.log("Please install MetaMask!");
      }
    },
    startApp(provider) {
      if (provider !== window.ethereum) {
        console.error("Do you have multiple wallets installed?");
      }
    },
    async getAccount() {
      try {
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        this.account = accounts[0];
        this.getBalance();
      } catch (err) {
        if (err.code === 4001) {
          console.log("Please connect to MetaMask.");
        } else {
          console.error(err);
        }
      }
    },
    async getBalance() {
      try {
        const balance = await window.ethereum.request({
          method: "eth_getBalance",
          params: [this.account, "latest"],
        });
        console.log(balance);
        const balanceInEther = parseFloat(
          window.ethereum.utils.fromWei(balance, "ether")
        ).toFixed(2);
        this.balance = balanceInEther;
      } catch (err) {
        console.error("Error fetching balance:", err);
      }
    },
    async sendEth() {
      try {
        const valueInWei = "500000000000000000"; // 0.5 Ether in Wei
        const txHash = await window.ethereum.request({
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
