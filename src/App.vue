<template>
  <div class="landingPage">
    <CardList />
    <AmountFilter />
    <TransactionList />
  </div>
</template>

<script lang="ts">
import CardList from "./components/CardList.vue";
import AmountFilter from "./components/AmountFilter.vue";
import TransactionList from "./components/TransactionList.vue";
export default {
  name: "App",
  components: {
    CardList,
    AmountFilter,
    TransactionList,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

.landingPage {
  margin: 0 auto 0 auto;
  width: 80%;
  min-height: 100vh;
  padding: 100px 10%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 20px;
  color: #2c3e50;
}
</style>
