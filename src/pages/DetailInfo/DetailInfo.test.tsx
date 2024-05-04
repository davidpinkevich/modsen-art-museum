import { render } from "@testing-library/react";
import { DetailInfo } from ".";
import { dataMock } from "@mocks/data";
import { useDetailInfo } from "@hooks/useDetailInfo";

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

  test("error data", async () => {
    (useDetailInfo as jest.Mock).mockReturnValue({
      art: undefined,
      loadArt: false
    });
    const { getByText } = render(<DetailInfo />);
    expect(getByText("This kind of art doesn't exist")).toBeInTheDocument();
  });
});
