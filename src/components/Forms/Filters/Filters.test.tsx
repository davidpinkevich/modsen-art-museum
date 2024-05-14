import { render, screen } from "@testing-library/react";

import { Filters } from ".";

describe("Filters component", () => {
  const handlerFilter = jest.fn();
  const handlerPage = jest.fn();
  test("render current active filter", () => {
    render(
      <Filters
        filter="public"
        load={false}
        setFilter={handlerFilter}
        setPage={handlerPage}
      />
    );

    const mainFilter = screen.getByText("Public arts");
    expect(mainFilter).toBeInTheDocument();
    expect(mainFilter).toHaveAttribute("type", "active");
  });

  test("test other filters", () => {
    render(
      <Filters
        filter="public"
        load={false}
        setFilter={handlerFilter}
        setPage={handlerPage}
      />
    );

    const nextFilter = screen.getByText("Non-public works");
    expect(nextFilter).not.toHaveAttribute("type", "active");
  });
});
