import { memo } from "react";

import { useForms } from "@hooks/useForms";
import { Container } from "@styles/Container";
import { type TypeForms } from "@src/types";

import { Filters } from "./Filters";
import { InputSearch } from "./InputSearch";
import { StyledForm, StyledFormBody, StyledFormTitle } from "./styled";

import { Formik } from "formik";

const Forms: React.FC<TypeForms> = memo(
  ({ filter, load, setFilter, setPage, setSearch }) => {
    const { config } = useForms({
      filter,
      load,
      setFilter,
      setPage,
      setSearch
    });

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
          <Filters
            filter={filter}
            setFilter={setFilter}
            setPage={setPage}
            load={load}
          />
        </StyledFormBody>
      </Container>
    );
  }
);

export { Forms };
