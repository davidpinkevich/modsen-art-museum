import { type DefaultTheme } from "styled-components";

const myTheme: DefaultTheme = {
  fontSizes: {
    extraSmall: "14px",
    small: "16px",
    mediumSmall: "18px",
    medium: "20px",
    large: "22px",
    extraLarge: "24px",
    extraLarge2: "28px",
    extraLarge3: "32px",
    extraLarge4: "34px",
    huge: "50px",
    huge2: "52px",
    huge3: "54px",
    massive: "64px"
  },
  colors: {
    mainBack: "rgba(0, 0, 0, 0.3)",
    lightBlack: "rgba(57, 57, 57, 1)",
    gold: "rgba(241, 121, 0, 1)",
    lightGold: "rgba(224, 164, 73, 1)",
    white: "rgba(255, 255, 255, 1)",
    whiteBack: "rgba(250, 250, 250, 1)",
    lightWhite: "rgba(249, 249, 249, 1)",
    secondWhite: "rgba(57, 57, 57, 0.05)",
    gray: "rgba(255, 255, 255, 0.5)",
    lightGray: "rgba(251, 215, 178, 0.3)",
    error: "rgba(206, 15, 0, 0.8)",
    input: {
      black: "rgba(0, 0, 0, 0.75)",
      hover: "rgba(0, 0, 0, 0.5)",
      focus: "rgba(0, 0, 0, 1)",
      back: "rgba(57, 57, 57, 0.1)",
      placeholder: "rgba(57, 57, 57, 0.5)"
    }
  }
};

export { myTheme };
