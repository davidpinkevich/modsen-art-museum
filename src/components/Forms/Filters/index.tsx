import { FILTERS } from "@constants/data";
import { getNameFilter } from "@utils/helpers/getNameFilter";
import { type TypeFilters } from "@src/types";

import { StyledFilters, StyledFiltersBtn } from "./styled";

const Filters: React.FC<TypeFilters> = ({
  filter,
  setFilter,
  load,
  setPage
}) => {
  const handlerButton = (item: string) => {
    setFilter(item);
    setPage(1);
  };
  return (
    <StyledFilters>
      {FILTERS.map((item, index) => {
        return (
          <StyledFiltersBtn
            type={filter === item ? "active" : ""}
            key={index}
            disabled={load}
            onClick={() => handlerButton(item)}>
            {getNameFilter(item)}
          </StyledFiltersBtn>
        );
      })}
    </StyledFilters>
  );
};

export { Filters };
