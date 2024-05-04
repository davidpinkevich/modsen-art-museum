import {
  StyledInputBody,
  StyledInput,
  StyledValidate,
  StyledInputImg
} from "./styled";
import glass from "@assets/icons/glass.svg";

import { useInput } from "@hooks/useInput";
const InputSearch: React.FC<{ load: boolean }> = ({ load }) => {
  const { value, error, handleChange } = useInput();

  return (
    <StyledInputBody>
      <StyledInput
        type="text"
        name="searh"
        disabled={load}
        placeholder="Search art, artist, work..."
        onChange={handleChange}
        value={value}
      />
      <StyledInputImg src={glass} alt="glass" />
      <StyledValidate>{typeof error === "string" && error}</StyledValidate>
    </StyledInputBody>
  );
};

export { InputSearch };
