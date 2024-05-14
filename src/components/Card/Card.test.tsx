import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import { dataMock } from "@mocks/data";

import { Card } from ".";

describe("Card component", () => {
  test("renders main card with mock data", () => {
    render(
      <Router>
        <Card item={dataMock[0]} type="main" />
      </Router>
    );

    const title = screen.getByText("The Bedroom");
    expect(title).toBeInTheDocument();
  });

  test("renders link for detail", () => {
    render(
      <Router>
        <Card item={dataMock[0]} type="detail" />
      </Router>
    );

    const linkElement = screen.getByRole("link", { name: /The Bedroom/i });
    expect(linkElement).toBeInTheDocument();
  });
});
