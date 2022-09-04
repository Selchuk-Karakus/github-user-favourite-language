import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  it("should render the user form", async () => {
    // ARRANGE
    render(<App />);
    // ACT
    // ASSERT
    expect(screen.getByLabelText("Github User Name:")).toBeTruthy();
  });
});
