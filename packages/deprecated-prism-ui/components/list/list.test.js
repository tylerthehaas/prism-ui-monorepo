import React from "react";
import { render } from "react-testing-library";

import { List } from "./";

describe("<List />", () => {
  it("Size is large when large is selected", () => {
    const { container } = render(<List size={"Large"} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-lg",
    );
  });
  it("Size is small when small is selected", () => {
    const { container } = render(<List size={"Small"} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-sm",
    );
  });
  it("Size is medium with medium is selected", () => {
    const { container } = render(<List size={"Medium"} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-md",
    );
  });
});
