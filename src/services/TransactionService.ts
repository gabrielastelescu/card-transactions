import { Transaction } from "../models/transaction.model";
import store from "../store/index";

export const data: { [key: string]: Transaction[] } = {
  "lkmfkl-mlfkm-dlkfm": [
    { id: "lkmlk-5kkm5-55gg", amount: 123.88, description: "Food" },
    { id: "43mm3-lkm4-55gg", amount: 33.48, description: "Snack" },
    { id: "eefe-5kkm5-ffeefe", amount: 288.38, description: "Tickets" },
  ],
  "elek-n3lk-4m3lk4": [
    { id: "lkmlk-5kkm5-55gg", amount: 21.88, description: "T-Shirt" },
    { id: "43mm3-lkm4-55gg", amount: 533.48, description: "Smart Phone" },
    { id: "eefe-5kkm5-ffeefe", amount: 2.58, description: "Chocolate Bar" },
  ],
};

const getTransactions = async (cardId: string): Promise<Transaction[]> => {
  const transactionsByCardId: Transaction[] = data[cardId];
  return new Promise<Transaction[]>((resolve) => resolve(transactionsByCardId))
    .then((response) => response)
    .then((data) => {
      store.mutations.setTransactions(data);
      return data as Transaction[];
    })
    .catch((error) => {
      throw new Error(
        `Error while fetching transactions for card id: ${cardId}: ${error}`
      );
    });
};

export default getTransactions;
