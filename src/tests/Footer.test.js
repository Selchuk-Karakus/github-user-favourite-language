import { render, screen } from "@testing-library/react";
import Footer from "../Components/Footer";

test("should render footer component", async () => {
  //ARRANGE
  render(<Footer />);

  //ASSERT
  expect(
    await screen.findAllByText("Selchuk Karakus © 2022. All rights reserved")
  ).toBeTruthy();
});
