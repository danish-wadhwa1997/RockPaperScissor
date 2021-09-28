import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Rock Paper Scissor", () => {
  render(<App />);
  const linkElement = screen.getByText(/Rock Paper Scissor/i);
  expect(linkElement).toBeInTheDocument();
});
