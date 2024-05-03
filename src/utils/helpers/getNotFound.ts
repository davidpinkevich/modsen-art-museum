const getNotFound = (value: string) => {
  switch (value) {
    case "main":
      return "Arts not found";
    case "detail":
      return "This kind of art doesn't exist";
    case "favorites":
      return "Favorites list is empty";
  }
};

export { getNotFound };
