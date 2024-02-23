<template>
  <div
    v-show="showConnect"
    class="bg-browncolor rounded-md absolute w-[90%] z-10 top-[10%] h-[180px] justify-center p-2 flex flex-col gap-3 sd:text-sm"
  >
    <div class="flex flex-col gap-1">
      <div class="flex justify-between">
        <span>Connect</span>
        <span @click="toggle()" class="cursor-pointer"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            height="18px"
            viewBox="0 0 24 24"
            width="18px"
            fill="#f1e1d4"
          >
            <path
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            ></path></svg
        ></span>
      </div>
      <div class="sd:text-xs text-disable">
        Connect and interact with Dymension Portal
      </div>
    </div>
    <div class="flex flex-col gap-2">
      <div class="flex flex-col gap-1">
        <div class="flex gap-1 items-center">
          <span>Wallet</span
          ><span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              height="16px"
              viewBox="0 0 24 24"
              width="16px"
              fill="#f1e1d4"
            >
              <path
                d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
              ></path></svg
          ></span>
        </div>
        <div class="sd:text-xs text-disable">Recommended for best security</div>
      </div>
      <div>
        <div class="flex gap-2 cursor-pointer items-center bg-buttoncolor py-2 pl-5">
          <span
            ><svg
              width="20"
              height="20"
              viewBox="3.3 2.85 31.4 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M32.6924 4.23413L20.8248 13.0483L23.0194 7.84807L32.6924 4.23413Z"
                fill="#E2761B"
                stroke="#E2761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M5.29565 4.23413L17.0678 13.1318L14.9805 7.84807L5.29565 4.23413Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M28.4225 24.6654L25.2618 29.5078L32.0246 31.3685L33.9687 24.7727L28.4225 24.6654Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M4.04333 24.7727L5.97554 31.3685L12.7383 29.5078L9.57755 24.6654L4.04333 24.7727Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.3565 16.4834L10.472 19.334L17.187 19.6321L16.9485 12.4162L12.3565 16.4834Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M25.6315 16.4834L20.9799 12.3327L20.8248 19.6321L27.5279 19.334L25.6315 16.4834Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.7383 29.5078L16.7697 27.5398L13.2869 24.8204L12.7383 29.5078Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.2185 27.5398L25.2618 29.5078L24.7012 24.8204L21.2185 27.5398Z"
                fill="#E4761B"
                stroke="#E4761B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M25.2618 29.5078L21.2185 27.5399L21.5405 30.1758L21.5048 31.285L25.2618 29.5078Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.7383 29.5078L16.4953 31.285L16.4715 30.1758L16.7697 27.5399L12.7383 29.5078Z"
                fill="#D7C1B3"
                stroke="#D7C1B3"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M16.5549 23.0791L13.1914 22.0891L15.5649 21.0038L16.5549 23.0791Z"
                fill="#233447"
                stroke="#233447"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.4331 23.0791L22.4231 21.0038L24.8085 22.0891L21.4331 23.0791Z"
                fill="#233447"
                stroke="#233447"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.7382 29.5078L13.3107 24.6654L9.57751 24.7727L12.7382 29.5078Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M24.6892 24.6654L25.2617 29.5078L28.4224 24.7727L24.6892 24.6654Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M27.5279 19.334L20.8248 19.6322L21.445 23.0791L22.435 21.0038L24.8204 22.0892L27.5279 19.334Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.1914 22.0892L15.5769 21.0038L16.5549 23.0791L17.187 19.6322L10.472 19.334L13.1914 22.0892Z"
                fill="#CD6116"
                stroke="#CD6116"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M10.472 19.334L13.2869 24.8205L13.1914 22.0892L10.472 19.334Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M24.8204 22.0892L24.7012 24.8205L27.5279 19.334L24.8204 22.0892Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M17.1871 19.6321L16.5549 23.0791L17.3421 27.1463L17.521 21.791L17.1871 19.6321Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20.8248 19.6321L20.5028 21.779L20.6459 27.1463L21.4451 23.0791L20.8248 19.6321Z"
                fill="#E4751F"
                stroke="#E4751F"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.4451 23.0791L20.646 27.1463L21.2185 27.5398L24.7012 24.8204L24.8205 22.0891L21.4451 23.0791Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M13.1914 22.0891L13.2868 24.8204L16.7696 27.5398L17.3421 27.1463L16.5549 23.0791L13.1914 22.0891Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.5048 31.285L21.5405 30.1757L21.2424 29.9133H16.7458L16.4715 30.1757L16.4953 31.285L12.7383 29.5078L14.0503 30.5813L16.71 32.43H21.2781L23.9498 30.5813L25.2618 29.5078L21.5048 31.285Z"
                fill="#C0AD9E"
                stroke="#C0AD9E"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M21.2185 27.5398L20.646 27.1462H17.3421L16.7696 27.5398L16.4714 30.1757L16.7458 29.9133H21.2423L21.5405 30.1757L21.2185 27.5398Z"
                fill="#161616"
                stroke="#161616"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M33.1934 13.6208L34.2072 8.75453L32.6925 4.23413L21.2185 12.7501L25.6316 16.4833L31.8695 18.3082L33.253 16.698L32.6567 16.2687L33.6108 15.398L32.8714 14.8255L33.8255 14.0979L33.1934 13.6208Z"
                fill="#763D16"
                stroke="#763D16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.79285 8.75453L4.80666 13.6208L4.16259 14.0979L5.11677 14.8255L4.38921 15.398L5.34338 16.2687L4.74702 16.698L6.11865 18.3082L12.3566 16.4833L16.7696 12.7501L5.29567 4.23413L3.79285 8.75453Z"
                fill="#763D16"
                stroke="#763D16"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M31.8694 18.3082L25.6315 16.4833L27.5279 19.3339L24.7012 24.8204L28.4225 24.7727H33.9686L31.8694 18.3082Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12.3566 16.4833L6.11866 18.3082L4.04333 24.7727H9.57755L13.2869 24.8204L10.4721 19.3339L12.3566 16.4833Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M20.8249 19.6321L21.2185 12.7502L23.0314 7.84808H14.9806L16.7697 12.7502L17.1871 19.6321L17.3302 21.8029L17.3422 27.1463H20.646L20.6699 21.8029L20.8249 19.6321Z"
                fill="#F6851B"
                stroke="#F6851B"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></span>
          <span>Metamask</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useStore } from "../store/store.js";
import { ref, onMounted, watch } from "vue";

const showConnect = ref(null);

const toggle = () => {
  useStore().isConnect = !useStore().isConnect;
};

onMounted(() => {
  showConnect.value = useStore().isConnect;
}),
  watch(
    () => useStore().isConnect,
    (newValue) => {
      showConnect.value = newValue;
    }
  );
</script>
