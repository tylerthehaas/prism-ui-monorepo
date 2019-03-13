import React from "react";
import { render } from "react-testing-library";

import { Modal } from "./";

describe("<Modal />", () => {
  it("Shows when show is true", () => {
    const { container } = render(<Modal show={true} />);
    expect(container.firstChild).toHaveClass("psm-modal--show");
  });
});
