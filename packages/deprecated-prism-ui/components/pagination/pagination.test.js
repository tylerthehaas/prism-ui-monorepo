import React from "react";
import { render } from "react-testing-library";

import { Pagination } from "./";

describe("<Pagination />", () => {
  it("Pages shown defaults to 15", () => {
    const { container } = render(<Pagination />);
    expect(container.firstChild).toHaveClass("psm-pagination");
  });
});
