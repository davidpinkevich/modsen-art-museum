const getNotFound = (value: string) => {
  switch (value) {
    case "main":
      return "Arts not found";
    case "random":
      return "Random arts not found";
    case "detail":
      return "This kind of art doesn't exist";
    case "favorites":
      return "Favorites list is empty";
    case "page":
      return "This page not found";
  }
};

export { getNotFound };
