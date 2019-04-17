import React from "react";
import { render } from "react-testing-library";

import { List } from "./";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./");

describe("<List />", () => {
  it("Size is large when large is selected", () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Large"}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-lg",
    );
  });
  it("Size is small when small is selected", () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Small"}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-sm",
    );
  });
  it("Size is medium with medium is selected", () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Medium"}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-md",
    );
  });
  it("Row and column test", () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: "Button",
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
          {
            columns: [
              {
                text: "Button",
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Medium"}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      "psm-list__row psm-list__row-md",
    );
  });
  it("Prop changes row size", () => {
    const container = mount(
      <List
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Small"}
      />,
    );
    container.setProps({ size: "Large" });
    expect(container.find(".psm-list__row.psm-list__row-lg")).toHaveLength(1);
  });
  it("Focus functions sets focued to current column and row", () => {
    const container = mount(
      <List
        idPrefix={"a1"}
        rows={[
          {
            columns: [
              {
                text: "Empty Row",
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={"Small"}
      />,
    );
    container.find("#a1-row-0-column-div-0").simulate("focus");
    expect(container.state("isFocusedColumn")).toEqual(0);
    expect(container.state("isFocusedRow")).toEqual(0);
  });
});

jest.unmock("./");
