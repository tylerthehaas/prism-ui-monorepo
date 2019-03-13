import React from "react";
import { render } from "react-testing-library";

import { Rollover } from "./";

describe("<Rollover />", () => {
  it("Defaults to show above text", () => {
    const { container } = render(<Rollover />);
    expect(container.firstChild.firstChild.lastChild.firstChild).toHaveClass(
      "psm-rollover__window--hide psm-rollover__window--up",
    );
  });
  it("Rollover shown above text when down is false", () => {
    const { container } = render(<Rollover position={"down"} />);
    expect(container.firstChild.firstChild.lastChild.firstChild).toHaveClass(
      "psm-rollover__window--hide psm-rollover__window--down",
    );
  });
  it("Dotted underline when dotted underline is true", () => {
    const { container } = render(<Rollover dotted={true} down={false} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-rollover psm-rollover__text psm-rollover__text-dotted",
    );
  });
  it("Solid underline when solid underline is true", () => {
    const { container } = render(
      <Rollover dotted={false} down={false} underline={true} />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-rollover psm-rollover__text psm-rollover__text-underline",
    );
  });
  it("No underline when no underline is picked", () => {
    const { container } = render(
      <Rollover dotted={false} down={false} underline={false} />,
    );
    expect(container.firstChild.firstChild.firstChild).not.toHaveClass(
      "psm-rollover",
    );
  });
});
