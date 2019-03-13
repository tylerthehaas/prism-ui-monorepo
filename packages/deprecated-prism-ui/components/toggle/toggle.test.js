import React from "react";
import { render } from "react-testing-library";

import { Toggle } from "./";

describe("<Toggle />", () => {
  it("Defaults to false", () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild).toHaveClass("psm-toggle psm-toggle--inactive");
  });
});
