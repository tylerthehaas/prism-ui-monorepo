import React from "react";
import { render } from "react-testing-library";

import { Pagination } from "./";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

jest.mock("./");

describe("<Pagination />", () => {
  it("Pages shown defaults to 15", () => {
    const { container } = render(<Pagination />);
    expect(container.firstChild).toHaveClass("psm-pagination");
  });
  it("Click on right arrow sets active + 1", () => {
    const container = mount(<Pagination />);
    container.find(".psm-icon-small-right").simulate("click");
    expect(container.state("active")).toEqual(2);
  });
  it("Click on last page sets active to last page", () => {
    const container = mount(<Pagination />);
    container.find("#pagination-number-10").simulate("click");
    expect(container.state("active")).toEqual(10);
  });
  it("Click on left arrow sets active - 1", () => {
    const container = mount(<Pagination defaultPage={10} />);
    container.find(".psm-icon-small-left").simulate("click");
    expect(container.state("active")).toEqual(9);
  });
  it("Click on page sets active to page number", () => {
    const container = mount(<Pagination defaultPage={10} />);
    container.find("#pagination-number-5").simulate("click");
    expect(container.state("active")).toEqual(5);
  });
  it("Click on active page does not change active", () => {
    const container = mount(<Pagination defaultPage={5} />);
    container.find("#pagination-number-5").simulate("click");
    expect(container.state("active")).toEqual(5);
  });
});

jest.unmock("./");
