<template>
  <div v-if="store.state.selectedCard" class="searchGroup">
    <h3>Amount filter</h3>
    <input
      v-model="store.state.search"
      class="searchField"
      type="search"
      placeholder="Amount"
    />
  </div>
</template>
<script lang="ts">
import store from "../store/index";
export default {
  name: "AmountFilter",
  setup() {
    return {
      store,
    };
  },
};
</script>
<style>
.searchGroup {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;
}

.searchField {
  border-radius: 15px;
  padding: 20px 40px;
  width: 100%;
}
</style>
