import { Card } from "../models/card.model";
import store from "../store/index";

const data = [
  { id: "lkmfkl-mlfkm-dlkfm", description: "Private Card" },
  { id: "elek-n3lk-4m3lk4", description: "Business Card" },
];

const getCards = async (): Promise<Card[]> => {
  return await new Promise<Card[]>((resolve) => resolve(data)).then(
    (response) => {
      store.mutations.setCards(response);
      return response as Card[];
    }
  );
};

export default getCards;
