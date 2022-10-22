import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
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

test("should navigate to https://selchuk-karakus.vercel.app/ when link is clicked", () => {
  render(<Header />);

  expect(screen.getByText("Get In Touch")).toHaveAttribute(
    "href",
    "https://selchuk-karakus.vercel.app/"
  );
});
