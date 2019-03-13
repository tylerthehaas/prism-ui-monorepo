import React from "react";
import { render } from "react-testing-library";

import { Select } from "./";

describe("<Select />", () => {
  it("Defaults to radio", () => {
    const { container } = render(<Select />);
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-multi-select psm-multi-select--radio",
    );
  });
  it("Dropdown when dropdown is true", () => {
    const { container } = render(<Select dropdown={true} />);
    expect(container.firstChild.firstChild).toHaveClass("psm-input psm-select");
  });
  it("Multi select buttons when radio is false", () => {
    const { container } = render(<Select dropdown={false} radio={false} />);
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-multi-select undefined",
    );
  });
});
