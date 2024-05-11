const getNotFound = (value: string) => {
  switch (value) {
    case "main":
      return "Arts not found";
    case "random":
      return "Random arts not found";
    case "favorites":
      return "Favorites list is empty";
    case "page":
      return "This page not found";
    case "error":
      return "Resource Not Found";
  }
};

export { getNotFound };
