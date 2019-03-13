import React from "react";
import { render } from "react-testing-library";

import { Button } from "./";

describe("<Button />", () => {
  it("Has a dropdown when dropdown is true", () => {
    const { container } = render(<Button dropdown={true} label="Menu" />);
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-dropdown--primary",
    );
  });
  it("does not have a dropdown when dropdown is false", () => {
    const { container } = render(<Button dropdown={false} label="Menu" />);
    expect(container.firstChild.firstChild).not.toHaveClass(
      "psm-dropdown--primary",
    );
  });
  it("Defaults to primary", () => {
    const { container } = render(<Button dropdown={false} label="Menu" />);
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-button psm-button--primary",
    );
  });
  it("Is not primary when primary is false", () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-button");
  });
  it("Defaults to Large", () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} />,
    );
    expect(container.firstChild.firstChild).not.toHaveClass(
      "psm-button psm-button--small",
    );
  });
  it("Is small when small is true", () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} small={true} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-button psm-button--small",
    );
  });
  it("Link defaults to false", () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} small={true} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      "psm-button psm-button--small",
    );
  });
  it("Is a link when link is true", () => {
    const { container } = render(
      <Button
        dropdown={false}
        label="Menu"
        linkRef={"#"}
        primary={false}
        small={true}
      />,
    );
    expect(container.firstChild.firstChild.nodeName).toEqual("A");
  });
});
