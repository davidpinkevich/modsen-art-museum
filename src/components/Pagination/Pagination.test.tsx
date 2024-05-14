import { fireEvent, render } from "@testing-library/react";

import { Pagination } from ".";

describe("Pagination component", () => {
  const handler = jest.fn();
  test("should go to next page", () => {
    const { getByText } = render(
      <Pagination total={10} page={1} load={false} setPage={handler} />
    );

    const nextButton = getByText("2");

    fireEvent.click(nextButton);

    expect(handler).toHaveBeenCalledWith(2);
  });

  test("should go to previous page", () => {
    const { getByText } = render(
      <Pagination total={10} page={2} load={false} setPage={handler} />
    );

    const prevButton = getByText("1");

    fireEvent.click(prevButton);

    expect(handler).toHaveBeenCalledWith(1);
  });

  test("with load it`s disabled", () => {
    const { getByText } = render(
      <Pagination total={10} page={2} load={true} setPage={handler} />
    );

    const button = getByText("2");

    expect(button).toBeDisabled();
  });

  test("with total 2 it doesn`t have button 3", () => {
    const { queryByText } = render(
      <Pagination total={2} page={1} load={false} setPage={handler} />
    );

    const button = queryByText("3");

    expect(button).toBeNull();
  });
});
