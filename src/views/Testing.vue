<template>
  <div class="App">
    <h1>Sign v2 Standalone</h1>
    <p v-if="account">{{ account }}</p>
    <button @click="handleConnect" :disabled="!signClient">Connect</button>
    <button @click="handleDisconnect">Disconnect</button>
    <button @click="handleSend">Send Transaction</button>
    <h2 v-if="txnUrl">
      Check out your transaction
      <a :href="txnUrl" target="_blank">here</a>
    </h2>
  </div>
</template>

<script>
import { ref } from "vue";
import { SignClient } from "@walletconnect/sign-client";
import { Web3Modal } from "@web3modal/standalone";

export default {
  setup() {
    const signClient = ref(null);
    const session = ref([]);
    const account = ref(null);
    const txnUrl = ref(null);

    const createClient = async () => {
      try {
        const client = await SignClient.init({
          projectId: "55fc77bde257c03b68c88892a1780af4",
        });
        signClient.value = client;
      } catch (e) {
        console.log(e);
      }
    };

    const web3Modal = new Web3Modal({
      projectId: "55fc77bde257c03b68c88892a1780af4",
      standaloneChains: ["eip155:5"],
    });

    const handleConnect = async () => {
      try {
        if (!signClient.value) throw Error("SignClient does not exist");

        const proposalNamespace = {
          eip155: {
            methods: ["eth_sendTransaction"],
            chains: ["eip155:5"],
            events: ["connect", "disconnect"],
          },
        };

        const { uri } = await signClient.value.connect({
          requiredNamespaces: proposalNamespace,
        });

        if (uri) {
          web3Modal.openModal({ uri });
        }

        const { approval } = await signClient.value.connect({
          // ...
        });
        const sessionNamespace = await approval();
        onSessionConnected(sessionNamespace);
        web3Modal.closeModal();
      } catch (e) {
        console.log(e);
      }
    };

    const onSessionConnected = async (session) => {
      try {
        session.value = session;
        account.value = session.namespaces.eip155.accounts[0].slice(9);
      } catch (e) {
        console.log(e);
      }
    };

    const handleDisconnect = async () => {
      try {
        await signClient.value.disconnect({
          topic: session.value.topic,
          message: "User disconnected",
          code: 6000,
        });
        reset();
      } catch (e) {
        console.log(e);
      }
    };

    const reset = () => {
      account.value = null;
      session.value = [];
    };

    const handleSend = async () => {
      try {
        if (!account.value) throw Error("No account available");

        const tx = {
          from: account.value,
          to: "0xBDE1EAE59cE082505bB73fedBa56252b1b9C60Ce",
          data: "0x",
          gasPrice: "0x029104e28c",
          gasLimit: "0x5208",
          value: "0x00",
        };

        const result = await signClient.value.request({
          topic: session.value.topic,
          chainId: "eip155:5",
          request: {
            method: "eth_sendTransaction",
            params: [tx],
          },
        });

        txnUrl.value = result;
      } catch (e) {
        console.log(e);
      }
    };

    createClient(); // Call createClient function when component is setup

    return {
      signClient,
      session,
      account,
      txnUrl,
      handleConnect,
      handleDisconnect,
      handleSend,
    };
  },
};
</script>
