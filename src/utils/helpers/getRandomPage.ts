import { RANDOM_PAGES_COUNT } from "@constants/data";

const getRandomPage = () => Math.floor(Math.random() * RANDOM_PAGES_COUNT) + 1;

export { getRandomPage };
