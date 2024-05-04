import * as yup from "yup";

const validateSchema = yup.object().shape({
  searh: yup
    .string()
    .matches(/^[a-zA-Z\s]*$/, "Use only Latin characters for input")
    .max(20, "No more than 20 characters")
});

export { validateSchema };
