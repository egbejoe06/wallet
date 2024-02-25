<template>
  <div>
    <button @click="connectWallet">Connect to Trust Wallet</button>
    <div v-if="connected">
      Connected to Trust Wallet
      <button @click="disconnectWallet">Disconnect</button>
    </div>
  </div>
</template>

<script>
import Web3 from "web3";

export default {
  data() {
    return {
      connected: false,
      web3: null,
      accounts: [],
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        try {
          // Request account access
          await window.ethereum.request({ method: "eth_requestAccounts" });
          this.web3 = new Web3(window.ethereum);
          this.accounts = await this.web3.eth.getAccounts();
          this.connected = true;
        } catch (error) {
          console.error("User denied account access");
        }
      } else {
        console.error("Trust Wallet not detected");
      }
    },
    disconnectWallet() {
      this.connected = false;
      this.web3 = null;
      this.accounts = [];
    },
  },
  created() {
    if (window.ethereum) {
      window.ethereum.autoRefreshOnNetworkChange = false;
      this.web3 = new Web3(window.ethereum);
      this.web3.eth.net.getId().then((networkId) => {
        console.log("Network ID:", networkId);
        // Check if Trust Wallet is connected already
        this.web3.eth.getAccounts().then((accounts) => {
          if (accounts.length > 0) {
            this.connected = true;
            this.accounts = accounts;
          }
        });
      });
    } else {
      console.error("Trust Wallet not detected");
    }
  },
};
</script>

<style scoped>
/* Styles if needed */
</style>
