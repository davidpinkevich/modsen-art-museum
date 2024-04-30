const getFilter = (value: string) => {
  switch (value) {
    case "public":
      return "&query[term][is_public_domain]=true";
    case "not-public":
      return "&query[term][is_public_domain]=false";
    case "view":
      return "&query[term][is_on_view]=true";
    case "not-view":
      return "&query[term][is_on_view]=false";
    default:
      return "&query[term][is_public_domain]=true";
  }
};

export { getFilter };
