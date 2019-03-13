import React from "react";
import { render } from "react-testing-library";

import { Icon } from "./";

describe("<Icon />", () => {
  it("Icon type: desktop", () => {
    const { container } = render(<Icon iconName={"desktop"} />);
    expect(container.firstChild).toHaveClass("psm-icon-desktop");
  });
  it("Icon type: one-on-one", () => {
    const { container } = render(<Icon iconName={"one-on-one"} />);
    expect(container.firstChild).toHaveClass("psm-icon-one-on-one");
  });
  it("Icon type: tail-down", () => {
    const { container } = render(<Icon iconName={"tail-down"} />);
    expect(container.firstChild).toHaveClass("psm-icon-tail-down");
  });
  it("Icon type: send", () => {
    const { container } = render(<Icon iconName={"send"} />);
    expect(container.firstChild).toHaveClass("psm-icon-send");
  });
  it("Icon type: goal", () => {
    const { container } = render(<Icon iconName={"goal"} />);
    expect(container.firstChild).toHaveClass("psm-icon-goal");
  });
  it("Icon type: heartbeat", () => {
    const { container } = render(<Icon iconName={"heartbeat"} />);
    expect(container.firstChild).toHaveClass("psm-icon-heartbeat");
  });
  it("Icon type: eye", () => {
    const { container } = render(<Icon iconName={"eye"} />);
    expect(container.firstChild).toHaveClass("psm-icon-eye");
  });
  it("Icon type: lock", () => {
    const { container } = render(<Icon iconName={"lock"} />);
    expect(container.firstChild).toHaveClass("psm-icon-lock");
  });
  it("Icon type: chat", () => {
    const { container } = render(<Icon iconName={"chat"} />);
    expect(container.firstChild).toHaveClass("psm-icon-chat");
  });
  it("Icon type: calendar-add", () => {
    const { container } = render(<Icon iconName={"calendar-add"} />);
    expect(container.firstChild).toHaveClass("psm-icon-calendar-add");
  });
  it("Icon type: settings-gear", () => {
    const { container } = render(<Icon iconName={"settings-gear"} />);
    expect(container.firstChild).toHaveClass("psm-icon-settings-gear");
  });
  it("Icon type: simple-remove", () => {
    const { container } = render(<Icon iconName={"simple-remove"} />);
    expect(container.firstChild).toHaveClass("psm-icon-simple-remove");
  });
});