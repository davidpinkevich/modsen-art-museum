import { type ChangeEventHandler, useEffect } from "react";

import { type TypeForm } from "@src/types";

import { useField, useFormikContext } from "formik";

const useInput = () => {
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

  return { value, error, handleChange };
};

export { useInput };
