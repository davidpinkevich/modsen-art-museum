import { type FormikConfig } from "formik";
import { debounce } from "@utils/helpers/debounce";
import { validateSchema } from "@utils/helpers/validate";
import { type TypeForm, type TypeForms } from "@src/types";

const useForms = (props: TypeForms) => {
  const getDebounceValue = debounce(props.setSearch, props.setPage);
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
