import React from "react";
import { render } from "react-testing-library";

import { Input } from "./";

describe("<Input />", () => {
  it("Required defualts to false", () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass("psm-input");
  });
  it("Is required when required is true", () => {
    const { container } = render(<Input required={true} />);
    expect(container.firstChild).toHaveClass("psm-input psm-input--active");
  });
  it("Leading icon defaults to false", () => {
    const { container } = render(<Input icon={{ name: "desktop" }} />);
    expect(container.firstChild).toHaveClass("psm-input-trailing-icon");
  });
  it("Uses leading icon when leading is true", () => {
    const { container } = render(
      <Input icon={{ name: "desktop", position: "leading" }} />,
    );
    expect(container.firstChild).toHaveClass("psm-input-leading-icon");
  });

  it("Icon type: desktop", () => {
    const { container } = render(
      <Input icon={{ name: "desktop", position: "leading" }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-icon-desktop");
  });
  it("Icon type: one-on-one", () => {
    const { container } = render(
      <Input icon={{ name: "one-on-one", position: "leading" }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-icon-one-on-one");
  });
  it("Icon type: tail-down", () => {
    const { container } = render(
      <Input icon={{ name: "tail-down", position: "leading" }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-icon-tail-down");
  });
  it("Icon type: send", () => {
    const { container } = render(
      <Input icon={{ name: "send", position: "leading" }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-icon-send");
  });
  it("Icon type: goal", () => {
    const { container } = render(
      <Input icon={{ name: "goal", position: "leading" }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass("psm-icon-goal");
  });
});
