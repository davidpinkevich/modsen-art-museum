import { useContext } from "react";

import { Context } from "@constants/context";

import { StyledBurger, StyledBurgerSpan } from "./styled";

const Burger: React.FC = () => {
  const { open, setOpen } = useContext(Context);
  const handlerButton = () => {
    setOpen(!open);
  };

  return (
    <StyledBurger open={open} onClick={handlerButton}>
      <StyledBurgerSpan open={open}></StyledBurgerSpan>
    </StyledBurger>
  );
};

export { Burger };
