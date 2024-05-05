import { type KeyboardEvent } from "react";
import {
  StyledInputBody,
  StyledInput,
  StyledValidate,
  StyledInputImg
} from "./styled";
import glass from "@assets/icons/glass.svg";

import { useInput } from "@hooks/useInput";
const InputSearch: React.FC = () => {
  const { value, error, handleChange } = useInput();
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <StyledInputBody>
      <StyledInput
        type="text"
        name="searh"
        placeholder="Search art, artist, work..."
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={value}
      />
      <StyledInputImg src={glass} alt="glass" />
      <StyledValidate>{typeof error === "string" && error}</StyledValidate>
    </StyledInputBody>
  );
};

export { InputSearch };
