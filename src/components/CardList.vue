<template>
  <div class="cards">
    <CardItem
      v-for="item in cards"
      v-bind="item"
      :key="item.id"
      @click="
        setSelectedCardId(item.id);
        setTransactionColor(item.color);
      "
    />
  </div>
</template>
<script lang="ts">
import { computed, onMounted } from "vue";
import store from "../store/index";
import CardItem from "./CardItem.vue";
import getCards from "../services/CardService";
import getTransactions from "../services/TransactionService";
export default {
  name: "CardList",
  components: { CardItem },
  setup() {
    const cards = computed(() => store.state.cards);
    const methods = store.mutations;
    const setSelectedCardId = (payload: string) => {
      getTransactions(payload);
      methods.setSelectedCard(payload);
    };
    const setTransactionColor = (payload: string) => {
      methods.setBackgroundColor(payload);
    };
    onMounted(() => {
      getCards();
    });
    return {
      setSelectedCardId,
      setTransactionColor,
      cards,
      store,
    };
  },
  data: function () {
    return {
      isSelected: true,
    };
  },
};
</script>
<style>
.cards {
  display: grid;
  gap: 100px;
  grid-template-columns: 1fr 1fr;
  align-items: end;
  width: 100%;
  margin: 0 -5px;
  justify-content: space-between;
}

.cards :second-child {
  justify-self: end;
  grid-area: b;
  width: 100%;
  margin: 0 -5px;
  justify-content: space-between;
}

.cards:after {
  content: "";
  display: table;
  clear: both;
}

@media screen and (max-width: 760px) {
  .cards {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
</style>
