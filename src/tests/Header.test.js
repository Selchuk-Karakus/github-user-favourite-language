import { render, screen } from "@testing-library/react";
import Header from "../Components/Header";

describe("should render the header component", () => {
  test("should check the value of the title", async () => {
    //ARRANGE
    render(<Header />);

    //ASSERT
    expect(
      await screen.findAllByText("Github User Favourite Language")
    ).toBeTruthy();
  });
});
