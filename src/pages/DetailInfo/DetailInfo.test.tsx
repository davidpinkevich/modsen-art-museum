import { render } from "@testing-library/react";

import { useDetailInfo } from "@hooks/useDetailInfo";
import { dataMock } from "@mocks/data";

import { DetailInfo } from ".";

jest.mock("@hooks/useDetailInfo");

describe("Detail Info component", () => {
  const mockArt = dataMock[0];
  test("renders detail card with mock data", async () => {
    (useDetailInfo as jest.Mock).mockReturnValue({
      art: mockArt,
      loadArt: false
    });

    const { getByText } = render(<DetailInfo />);

    expect(getByText("Saint-Rémy-de-Provence")).toBeInTheDocument();
    expect(getByText("The Bedroom")).toBeInTheDocument();
  });

  test("not found data", async () => {
    (useDetailInfo as jest.Mock).mockReturnValue({
      art: undefined,
      loadArt: false
    });
    const { getByText } = render(<DetailInfo />);
    expect(getByText("Resource Not Found")).toBeInTheDocument();
  });
});
