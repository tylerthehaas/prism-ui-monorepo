import React from "react";
import { render } from "react-testing-library";

import { HR } from "./";

describe("<HR />", () => {
  it("Has a  horizontal rule", () => {
    const { container } = render(<HR />);
    expect(container.firstChild).toHaveClass("psm-hr");
  });
});
