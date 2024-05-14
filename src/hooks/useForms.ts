import { debounce } from "@utils/helpers/debounce";
import { validateSchema } from "@utils/helpers/validate";
import { type TypeForm, type TypeForms } from "@src/types";

import { type FormikConfig } from "formik";

const useForms = ({ setSearch, setPage }: TypeForms) => {
  const getDebounceValue = debounce(setSearch, setPage);
  const onSubmit = (values: TypeForm) => {
    getDebounceValue(values.searh);
  };

  const config: FormikConfig<TypeForm> = {
    initialValues: { searh: "" },
    validationSchema: validateSchema,
    onSubmit
  };
  return { config };
};

export { useForms };
