import { Formik, type FormikConfig } from "formik";
import { InputSearch } from "./InputSearch";
import { validateSchema } from "@utils/helpers/validate";
import { StyledFormBody, StyledFormTitle, StyledForm } from "./styled";
import { Container } from "@styles/Container";
import { type TypeForm } from "@src/types";

const Forms: React.FC = () => {
  const onSubmit = (values: TypeForm) => {
    console.log("onSubmit: ", values);
  };

  const config: FormikConfig<TypeForm> = {
    initialValues: { searh: "" },
    validationSchema: validateSchema,
    onSubmit
  };

  return (
    <Container content="center">
      <StyledFormBody>
        <StyledFormTitle>
          Let's Find Some <span>Art</span> Here!
        </StyledFormTitle>
        <Formik {...config}>
          <StyledForm>
            <InputSearch />
          </StyledForm>
        </Formik>
      </StyledFormBody>
    </Container>
  );
};

export { Forms };
