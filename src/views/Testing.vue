<template>
  <div>
    <h2>Trust Wallet Integration</h2>
    <p v-if="connected">Connected to Trust Wallet</p>
    <p v-else>Not connected to Trust Wallet</p>
    <button @click="connectWallet">Connect Wallet</button>
    <div v-if="connected">
      <p>Wallet Address: {{ walletAddress }}</p>
      <p>Network: {{ network }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      connected: false,
      walletAddress: null,
      network: null,
    };
  },
  methods: {
    async connectWallet() {
      if (window.ethereum) {
        try {
          await window.ethereum.request({ method: "eth_requestAccounts" });
          this.connected = true;
          this.walletAddress = window.ethereum.selectedAddress;
          this.network = await this.getNetwork();
        } catch (error) {
          console.error(error);
        }
      } else {
        console.error("Trust Wallet or compatible Ethereum wallet not found");
      }
    },
    async getNetwork() {
      const provider = window.ethereum;
      const networkId = await provider.request({ method: "net_version" });
      switch (networkId) {
        case "1":
          return "Mainnet";
        case "3":
          return "Ropsten";
        case "4":
          return "Rinkeby";
        case "5":
          return "Goerli";
        case "42":
          return "Kovan";
        default:
          return "Unknown Network";
      }
    },
  },
  mounted() {
    if (window.ethereum && window.ethereum.selectedAddress) {
      this.connected = true;
      this.walletAddress = window.ethereum.selectedAddress;
      this.getNetwork().then((network) => {
        this.network = network;
      });
    }
  },
};
</script>
