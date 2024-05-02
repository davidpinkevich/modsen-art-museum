import { StyledBurger, StyledBurgerSpan } from "./styled";
import { type TypeBurger } from "@src/types";

const Burger: React.FC<TypeBurger> = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <StyledBurgerSpan open={open}></StyledBurgerSpan>
    </StyledBurger>
  );
};

export { Burger };
