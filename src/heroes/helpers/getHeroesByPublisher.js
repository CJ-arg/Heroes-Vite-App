import { heroes } from "../data/heroes";

export const getHeroesByPublisher = (publisher) => {
  const validPublisher = ["Marvel Comics", "DC Comics"];
  if (!validPublisher.includes(publisher.publisher)) {
    throw new Error(`${publisher.publisher} is not a valid publisher`);
  }

  return heroes.filter((heroe) => heroe.publisher === publisher.publisher);
};
