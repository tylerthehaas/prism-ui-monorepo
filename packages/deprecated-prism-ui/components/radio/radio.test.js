import React from "react";
import { render } from "react-testing-library";

import { Radio } from "./";

describe("<Radio />", () => {
  it("Checked defaults to first option", () => {
    const { container } = render(
      <Radio
        buttons={[
          {
            text: "Option 1",
            action: () => {},
            checked: true,
          },
          {
            text: "Option 2",
            action: () => {},
            checked: false,
          },
        ]}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveProperty(
      "checked",
    );
  });
  it("Option 2 is checked", () => {
    const { container } = render(
      <Radio
        buttons={[
          {
            text: "Option 1",
            action: () => {},
            checked: false,
          },
          {
            text: "Option 2",
            action: () => {},
            checked: true,
          },
        ]}
      />,
    );
    expect(container.firstChild.lastChild.firstChild).toHaveProperty("checked");
  });
});
