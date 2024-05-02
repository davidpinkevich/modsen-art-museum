import { keyframes } from "styled-components";

const pulsLoading = keyframes`
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;

export { pulsLoading };
