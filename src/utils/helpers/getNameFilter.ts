const getNameFilter = (value: string) => {
  switch (value) {
    case "public":
      return "Public arts";
    case "not-public":
      return "Non-public works";
    case "view":
      return "The work of art`s on display";
    case "not-view":
      return "The work of art isn`t on display";
  }
};

export { getNameFilter };
