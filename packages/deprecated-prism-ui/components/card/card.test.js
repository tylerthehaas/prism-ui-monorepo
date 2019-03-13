import React from "react";
import { render } from "react-testing-library";

import { Card } from "./";

describe("<Card />", () => {
  it("Defaults to shadow type 1", () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass("psm-card psm-card--shadow-1");
  });
  it("Shadow Type 2", () => {
    const { container } = render(<Card shadowType={"md"} />);
    expect(container.firstChild).toHaveClass("psm-card psm-card--shadow-2");
  });
  it("Shadow Type 3", () => {
    const { container } = render(<Card shadowType={"lg"} />);
    expect(container.firstChild).toHaveClass("psm-card psm-card--shadow-3");
  });
});
