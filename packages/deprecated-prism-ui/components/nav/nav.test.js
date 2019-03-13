import React from "react";
import { render } from "react-testing-library";

import { Nav } from "./";

describe("<Nav />", () => {
  it("Active defaults to 0", () => {
    const { container } = render(
      <Nav tabs={["Recieved", "Given", "Personal"]} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-nav__tab psm-nav__active",
    );
  });
  it("Active sets to 1 when 1 is selected", () => {
    const { container } = render(
      <Nav active={1} tabs={["Recieved", "Given", "Personal"]} />,
    );
    expect(container.firstChild.firstChild.nextSibling).toHaveClass(
      "psm-nav__tab psm-nav__active",
    );
  });
  it("Active sets to 1 when 1 is selected #2", () => {
    const { container } = render(
      <Nav active={2} tabs={["Recieved", "Given", "Personal"]} />,
    );
    expect(container.firstChild.lastChild).toHaveClass(
      "psm-nav__tab psm-nav__active",
    );
  });
});
