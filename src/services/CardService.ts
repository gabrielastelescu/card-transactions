import { Card } from "../models/card.model";
import store from "../store/index";

const data = [
  { id: "lkmfkl-mlfkm-dlkfm", description: "Private Card", color: "#ebebeb" },
  { id: "elek-n3lk-4m3lk4", description: "Business Card", color: "#cdeafd" },
];

const getCards = async (): Promise<Card[]> => {
  return await new Promise<Card[]>((resolve) => resolve(data))
    .then((response) => {
      store.mutations.setCards(response);
      return response as Card[];
    })
    .catch((error) => {
      throw new Error(`Error while fetching cards: ${error}`);
    });
};

export default getCards;
