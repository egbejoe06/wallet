import { defineStore } from "pinia";

export const useStore = defineStore("store",{
    state: () => ({
      isConnect:false,
      }),
    actions: {
      toggleConnect() {
        this.isConnected = !this.isConnected;
      },
      },
})