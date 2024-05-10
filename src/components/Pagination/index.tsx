import { usePagination } from "@hooks/usePagination";
import { changePage } from "@utils/helpers/changePagination";
import {
  StyledPagination,
  StyledPaginationBtn,
  StyledPaginationImg
} from "./styled";
import left from "@assets/icons/arrow-left.svg";
import right from "@assets/icons/arrow-right.svg";
import { type TypePagination } from "@src/types";

const Pagination: React.FC<TypePagination> = ({
  total,
  load,
  page,
  setPage
}) => {
  const { arr } = usePagination(page, total);

  const handlerIncrease = () => {
    changePage(page, total, "INC", setPage);
  };

  const handlerDecrease = () => {
    changePage(page, total, "DEC", setPage);
  };

  const handlerChange = (id: number) => {
    changePage(page, total, "CHANGE", setPage, id);
  };

  return (
    <StyledPagination>
      <StyledPaginationBtn
        disabled={load || page === 1}
        onClick={handlerDecrease}>
        <StyledPaginationImg src={left} alt="arrow-left" />
      </StyledPaginationBtn>
      {arr.map((item, index) => (
        <StyledPaginationBtn
          disabled={load}
          type={item === page ? "active" : "base"}
          key={index}
          onClick={() => handlerChange(item)}>
          {item}
        </StyledPaginationBtn>
      ))}
      <StyledPaginationBtn
        disabled={load || page === total}
        onClick={handlerIncrease}>
        <StyledPaginationImg src={right} alt="arrow-right" />
      </StyledPaginationBtn>
    </StyledPagination>
  );
};

export { Pagination };
