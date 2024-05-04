import image from "@assets/icons/error.svg";
import {
  StyledFallback,
  StyledFallbackBlock,
  StyledFallbackImg,
  StyledFallbackTitle,
  StyledFallbackInfo
} from "./styled";
import { type TypeFallback } from "@src/types";

const Fallback: React.FC<TypeFallback> = ({ logger }) => {
  return (
    <StyledFallback>
      <StyledFallbackImg src={image} alt="error" />
      <StyledFallbackBlock>
        <StyledFallbackTitle>Something is wrong.</StyledFallbackTitle>
        <StyledFallbackInfo>{logger}</StyledFallbackInfo>
      </StyledFallbackBlock>
    </StyledFallback>
  );
};

export { Fallback };
