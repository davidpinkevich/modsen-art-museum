import { FILTERS } from "@constants/data";
import { getNameFilter } from "@utils/helpers/getNameFilter";
import { StyledFilters, StyledFiltersBtn } from "./styled";
import { type TypeFilters } from "@src/types";

const Filters: React.FC<TypeFilters> = ({ filter, setFilter, load }) => {
  return (
    <StyledFilters>
      {FILTERS.map((item, index) => {
        return (
          <StyledFiltersBtn
            type={filter === item ? "active" : ""}
            key={index}
            disabled={load}
            onClick={() => setFilter(item)}>
            {getNameFilter(item)}
          </StyledFiltersBtn>
        );
      })}
    </StyledFilters>
  );
};

export { Filters };
