import { reactive } from "vue";
import { Card } from "../models/card.model";
import { Transaction } from "../models/transaction.model";

const state = reactive({
  selectedCard: "",
  search: null,
  cards: [] as Card[],
  transactions: [] as Transaction[],
});

const mutations = {
  setSelectedCard(payload: string) {
    state.selectedCard = payload;
  },
  setCards(payload: Card[]) {
    state.cards = payload;
  },
  setTransactions(payload: Transaction[]) {
    state.transactions = payload;
  },
};

const getters = {
  selectedCardId() {
    return state.selectedCard;
  },
  filteredTransactions() {
    if (state.search) {
      return state.transactions.filter((t) => t.amount === state.search);
    }
    return state.transactions;
  },
};

export default {
  state: state,
  mutations,
  getters,
};
