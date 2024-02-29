<template>
  <div class="App">
    <h1>Sign v2 Standalone</h1>
    <h2 v-if="txnUrl">
      Check out your transaction
      <a :href="txnUrl" target="_blank">here</a>
    </h2>
  </div>
</template>

<script></script>
