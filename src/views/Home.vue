<template>
  <div
    style="font-family: Inter, Helvetica Neue, sans-serif"
    class="p-5 bg-black flex flex-col gap-8 relative text-primary sd:p-4 sd:text-sm md:text-base p-5 items-center"
  >
    <Nav />
    <Connect class="w-full" />
    <div
      class="flex flex-col gap-3.5 px-8 sd:p-0 md:px-8 w-full"
      :style="{ opacity: showConnect ? '0.3' : '1' }"
    >
      <div
        class="flex bg-bg h-10 w-40 border-disable text-textdisable border gap-2 rounded-lg items-center justify-center"
      >
        Parameter Change
      </div>
      <div class="md:text-2xl sd:text-xl">
        #1 Increase max_bytes and max_gas in BlockParams to increase max TPS
      </div>
      <div class="text-textcolor">
        max TPS is suboptimal causing slow transactions processing during high load. This
        proposal aims at increasing the max TPS by changing the `BlockParams`
      </div>
      <div
        class="warp1 flex justify-between md:gap-0 whitespace-normal sd:gap-3 whitespace-nowrap snap-x"
      >
        <div class="bg-bg w-64 p-2 rounded-md sd:snap-center md:snap-none">
          <div class="text-textcolor text-xs">Submit On</div>
          <div>Feb 08 2024, 06:08</div>
        </div>
        <div class="bg-bg w-64 p-2 rounded-md sd:snap-center md:snap-none">
          <div class="text-textcolor text-xs">Voting Starts</div>
          <div>Feb 08 2024, 06:08</div>
        </div>
        <div class="bg-bg w-64 p-2 rounded-md sd:snap-center md:snap-none">
          <div class="text-textcolor text-xs">Voting Ends</div>
          <div>Feb 13 2024, 06:08</div>
        </div>
        <div class="bg-bg w-64 p-2 rounded-md sd:snap-center md:snap-none">
          <div class="text-textcolor text-xs">Total Deposit</div>
          <div>1,000 DYM</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-3.5 px-8 sd:p-0 md:px-8 w-full"
      :style="{ opacity: showConnect ? '0.3' : '1' }"
    >
      <div class="flex justify-between">
        <span>Proposal Results</span>
        <span
          class="py-1.5 px-2.5 border rounded-md border-greenborder bg-greencolor text-greenborder"
          >Passed</span
        >
      </div>
      <div class="warp flex justify-between sd:gap-2 gap-y-2.5 md:gap-3 gap-y-0">
        <div
          class="border-greenborder rounded-md p-4 w-[25%] border flex flex-col h-28 justify-between sd:w-[48%] md:w-[25%]"
        >
          <div class="flex justify-between">
            <span class="text-greenborder">YES</span
            ><span class="text-greenborder">99.87%</span>
          </div>
          <div>256,557,000 DYM</div>
        </div>
        <div
          class="bg-bg rounded-md p-4 w-[25%] flex flex-col h-28 justify-between sd:w-[48%] md:w-[25%]"
        >
          <div class="flex justify-between">
            <span class="text-redcolor">NO</span><span class="text-redcolor">0.6%</span>
          </div>
          <div>148,800 DYM</div>
        </div>
        <div
          class="bg-bg rounded-md p-4 w-[25%] flex flex-col h-28 justify-between sd:w-[48%] md:w-[25%]"
        >
          <div class="flex justify-between">
            <span class="text-orangecolor">VETO</span
            ><span class="text-orangecolor">0.02%</span>
          </div>
          <div>53,458.7 DYM</div>
        </div>
        <div
          class="bg-bg rounded-md p-4 w-[25%] flex flex-col h-28 justify-between sd:w-[48%] md:w-[25%]"
        >
          <div class="flex justify-between">
            <span class="text-disable">ABSTAIN</span
            ><span class="text-disable">0.05%</span>
          </div>
          <div>124,208 DYM</div>
        </div>
      </div>
    </div>
    <div
      class="flex flex-col gap-3.5 px-8 sd:p-0 md:px-8"
      :style="{ opacity: showConnect ? '0.3' : '1' }"
    >
      <div>Message</div>
      <div>
        <div class="bg-bg rounded-md w-full">
          <div class="w-full p-3 overflow-y-auto">
            <pre class="whitespace-pre-wrap">{{ jsonData }}</pre>
          </div>
        </div>
      </div>
    </div>
    <div>
      <Footers />
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "../store/store.js";
import Nav from "../components/Nav.vue";
import Connected from "../components/Connected.vue";
import Footers from "../components/Footers.vue";
import Connect from "../components/Connect.vue";

const jsonData = ref(null);
const showConnect = ref(null);

watch(
  () => useStore().isConnect,
  (newValue) => {
    showConnect.value = newValue;
  }
);

const data = {
  root: {
    title: "Increase max_bytes and max_gas in BlockParams to increase max TPS",
    description:
      "max TPS is suboptimal causing slow transactions processing during high load.This proposal aims at increasing the max TPS by changing the `BlockParams`",
    changes: [
      {
        subspace: "baseapp",
        key: "BlockParams",
        value: { max_bytes: "5242880", max_gas: "400000000" },
      },
    ],
  },
};

onMounted(() => {
  jsonData.value = JSON.stringify(data, null, 2);
  showConnect.value = useStore().isConnect;
});
</script>
<style>
.warp {
  flex-wrap: unset;
}
.warp1 {
  overflow-x: unset;
}
@media only screen and (max-width: 600px) {
  .warp {
    flex-wrap: wrap;
  }
  .warp1 {
    overflow-x: scroll;
  }
}
</style>
