<template>
  <div>
    <button v-if="!connected" @click="connectWallet">Connect Wallet</button>
    <div v-else>
      <p>Connected Account: {{ selectedAccount }}</p>
      <p>Chain ID: {{ chainId }}</p>
      <button v-if="chainId !== '0x1'" @click="switchChain">Switch to Ethereum</button>
      <p v-if="error" style="color: red">{{ error }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      initializing: true,
      injectedProvider: null,
      initializationError: "",
      connected: false,
      selectedAccount: "",
      chainId: "",
      error: "",
    };
  },
  methods: {
    async connectWallet() {
      try {
        this.error = "";

        if (!window.ethereum) {
          this.error = "Trust Wallet is not installed.";
          this.initializing = false;
          return;
        }

        this.injectedProvider = window.ethereum;

        const accounts = await this.injectedProvider.request({
          method: "eth_requestAccounts",
        });

        const chainId = await this.injectedProvider.request({ method: "eth_chainId" });

        this.selectedAccount = accounts[0];
        this.chainId = chainId;
        this.connected = true;

        this.injectedProvider.addListener("chainChanged", this.updateChainId);

        this.injectedProvider.addListener("accountsChanged", (accounts) => {
          if (accounts.length === 0) {
            this.connected = false;
            this.selectedAccount = "";
            this.chainId = "";
          } else {
            const connectedAccount = accounts[0];
            this.selectedAccount = connectedAccount;
          }
        });
      } catch (e) {
        console.error(e);
        if (e.code === 4001) {
          this.error = "User denied connection.";
        }
      }
    },
    async switchChain() {
      try {
        await this.injectedProvider.request({
          method: "wallet_switchEthereumChain",
          params: [{ chainId: "0x1" }],
        });
      } catch (e) {
        console.error(e);
        if (e.code === 4001) {
          this.error = "User rejected switching chains.";
        }
      }
    },
    updateChainId(chainId) {
      this.chainId = chainId;
    },
  },
  async mounted() {
    try {
      if (!window.ethereum) {
        this.initializationError = "Trust Wallet is not installed.";
        this.initializing = false;
        return;
      }

      this.injectedProvider = window.ethereum;
      this.initializing = false;
    } catch (error) {
      console.error(error);
      this.initializationError = "Failed to initialize Trust Wallet.";
      this.initializing = false;
    }
  },
};
</script>
