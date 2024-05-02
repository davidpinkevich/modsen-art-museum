import { memo } from "react";
import { Formik, type FormikConfig } from "formik";
import { InputSearch } from "./InputSearch";
import { Filters } from "./Filters";
import { validateSchema } from "@utils/helpers/validate";
import { debounce } from "@utils/helpers/debounce";
import { StyledFormBody, StyledFormTitle, StyledForm } from "./styled";
import { Container } from "@styles/Container";
import { type TypeForm, type TypeForms } from "@src/types";

const Forms: React.FC<TypeForms> = memo((props) => {
  const getDebounceValue = debounce(props.setSearch, props.setPage);
  const onSubmit = (values: TypeForm) => {
    getDebounceValue(values.searh);
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
            <InputSearch load={props.load} />
          </StyledForm>
        </Formik>
        <Filters
          filter={props.filter}
          setFilter={props.setFilter}
          setPage={props.setPage}
          load={props.load}
        />
      </StyledFormBody>
    </Container>
  );
});

export { Forms };
