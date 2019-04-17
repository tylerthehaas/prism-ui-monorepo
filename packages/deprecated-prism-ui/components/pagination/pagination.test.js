import React from "react";
import { fireEvent, render } from "react-testing-library";

import { Pagination } from "./";

describe("<Pagination />", () => {
  it("Pages shown defaults to 7", () => {
    const { getAllByTestId } = render(<Pagination data-testid="pagination" />);
    expect(getAllByTestId(/pagination-\d/)).toHaveLength(7);
  });

  it("can change pages", () => {
    const action = jest.fn();
    const { getByText } = render(<Pagination onClick={action} />);
    fireEvent.click(getByText(/2/));
    expect(action.mock.calls).toEqual([[2]]);
    expect(getByText(/2/)).toHaveClass("psm-pagination__active");
  });

  it("can go forward and backward one page", () => {
    const action = jest.fn();
    const { getByTestId, getByText } = render(
      <Pagination data-testid="pagination" onClick={action} />,
    );
    expect(getByText(/1/)).toHaveClass("psm-pagination__active");
    fireEvent.click(getByTestId("pagination-right-arrow"));
    expect(getByText(/2/)).toHaveClass("psm-pagination__active");
    fireEvent.click(getByTestId("pagination-left-arrow"));
    expect(getByText(/1/)).toHaveClass("psm-pagination__active");
    expect(action.mock.calls).toEqual([[2], [1]]);
  });

  it("renders props change", () => {
    const { rerender, getAllByTestId } = render(
      <Pagination data-testid="pagination" />,
    );
    expect(getAllByTestId(/pagination-\d/)).toHaveLength(7);
    rerender(<Pagination data-testid="pagination" pagesShown={8} />);
    expect(getAllByTestId(/pagination-\d/)).toHaveLength(8);
  });
});

jest.unmock("./");
