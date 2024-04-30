import React, { type ChangeEventHandler, useEffect } from "react";
import { useField, useFormikContext } from "formik";
import {
  StyledInputBody,
  StyledInput,
  StyledValidate,
  StyledInputImg
} from "./styled";
import glass from "@assets/icons/glass.svg";
import { type TypeForm } from "@src/types";

const InputSearch: React.FC = () => {
  const { isValid, handleSubmit } = useFormikContext<TypeForm>();
  const [field, meta, helpers] = useField("searh");

  const { value, onChange } = field;
  const { error, touched } = meta;

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    helpers.setTouched(true).catch((e) => e);
    onChange(e);
  };

  useEffect(() => {
    if (!touched || !isValid) return;

    handleSubmit();
    helpers.setTouched(false).catch((e) => e);
  }, [isValid, handleSubmit, touched]);

  return (
    <StyledInputBody>
      <StyledInput
        type="text"
        name="searh"
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
