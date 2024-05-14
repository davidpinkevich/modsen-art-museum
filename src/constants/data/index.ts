import { type TypeArtsBlock } from "@src/types";

const RANDOM_ARTS_VIEW = 9;

const RANDOM_PAGES_COUNT = 100;

const LENGTH_TITLE = 14;

const LENGTH_PAGINATION = 3;

const LENGTH_VIEW_MAIN = 3;

const DEFAULT_SCREEN = 400;

const LINK_MODSEN = "https://www.modsen-software.com/";

const BREAKPOINTS = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px"
};

const FILTERS = ["public", "not-public", "view", "not-view"];

const ARTS_BLOCK: TypeArtsBlock = {
  main: {
    title: "Topics for you",
    info: "Our special gallery"
  },
  random: {
    title: "Here some more",
    info: "Other works for you"
  },
  favorites: {
    title: "Saved by you",
    info: "Your favorites list"
  }
};

const QUERY_IMAGE = `/full/${DEFAULT_SCREEN},/0/default.jpg`;

const LINK_PATH = {
  BASE: "./",
  DETAIL: "detail-info",
  FAVORITES: "favorites"
};

export {
  ARTS_BLOCK,
  BREAKPOINTS,
  FILTERS,
  LENGTH_PAGINATION,
  LENGTH_TITLE,
  LENGTH_VIEW_MAIN,
  LINK_MODSEN,
  LINK_PATH,
  QUERY_IMAGE,
  RANDOM_ARTS_VIEW,
  RANDOM_PAGES_COUNT
};
