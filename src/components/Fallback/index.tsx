import image from "@assets/icons/error.svg";
import { type TypeFallback } from "@src/types";

import {
  StyledFallback,
  StyledFallbackBlock,
  StyledFallbackImg,
  StyledFallbackInfo,
  StyledFallbackTitle
} from "./styled";

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
