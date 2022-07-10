<template>
  <div class="transactions">
    <TransactionItem
      v-for="item in transactions"
      v-bind="item"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import store from "../store/index";
import TransactionItem from "./TransactionItem.vue";
export default {
  name: "TransactionList",
  components: { TransactionItem },
  setup() {
    const transactions = computed(() =>
      store.state.search
        ? store.state.transactions.filter(
            (t) => t.amount >= store.state.search!
          )
        : store.state.transactions
    );
    return {
      transactions,
      store,
    };
  },
};
</script>
<style>
.transactions {
  display: flex;
  flex-direction: column;
  width: 100%;
  text-align: left;
  margin-top: 100px;
}
.transactions:after {
  content: "";
  display: table;
  clear: both;
}
</style>
