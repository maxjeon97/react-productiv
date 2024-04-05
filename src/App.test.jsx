import { describe, test, expect } from "vitest";

import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("productiv app", function () {
  test("renders without crashing", function () {
    render(<App />);
  });

  test('matches snapshot', function () {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  test("contains expected title", function () {
    const result = render(<App />);
    expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  });

  // test("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});

