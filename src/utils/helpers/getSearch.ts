const getSearch = (query: string) => {
  return query.trim() ? `q=${query}` : "";
};

export { getSearch };
