import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Pagination from './Pagination';

const arrayToTestWith = [...Array(90).keys()];

describe('<Pagination />', () => {
  it('Defaults to opening on page one', async () => {
    const { getByTestId } = render(<Pagination>{arrayToTestWith}</Pagination>);

    const page1 = getByTestId('1');

    expect(page1.classList).toContain('psm-pagination__active');
  });

  it('shows the second page when the right arrow is clicked', async () => {
    const { getByTestId, getByText } = render(
      <Pagination>{arrayToTestWith}</Pagination>,
    );
    const paginationContainer = getByTestId('pagination');

    const rightArrow = getByTestId('right arrow');
    fireEvent.click(rightArrow);

    const eleven = await waitForElement(() => getByText('11'));
    expect(paginationContainer.childNodes).toContain(eleven);
  });

  it('shows the previous page when the left arrow is clicked', async () => {
    const { getByTestId, getByText } = render(
      <Pagination defaultPage={2}>
        {[
          'one',
          'two',
          'three',
          'four',
          'five',
          'six',
          'seven',
          'eight',
          'nine',
          'ten',
          'eleven',
          'twelve',
        ]}
      </Pagination>,
    );
    const paginationContainer = getByTestId('pagination');

    const leftArrow = getByTestId('left arrow');
    fireEvent.click(leftArrow);

    const five = await waitForElement(() => getByText('five'));
    expect(paginationContainer.childNodes).toContain(five);
  });

  it('shows the second page when the 2 is clicked', async () => {
    const { getByText, getByTestId } = render(
      <Pagination>{arrayToTestWith}</Pagination>,
    );
    const paginationContainer = getByTestId('pagination');
    const two = getByTestId('2');

    fireEvent.click(two);

    const eleven = await waitForElement(() => getByText('11'));
    expect(paginationContainer.childNodes).toContain(eleven);
  });

  it('goes to the last page when the last button is clicked', () => {
    const { container, getByText, getByTestId } = render(
      <Pagination>{arrayToTestWith}</Pagination>,
    );
    const navbar = container.querySelector('.psm-pagination__navigation');
    const lastPage = navbar.childNodes[navbar.childNodes.length - 2];
    fireEvent.click(lastPage);

    const paginationContainer = getByTestId('pagination');
    const eightySix = getByText('86');
    expect(paginationContainer.childNodes).toContain(eightySix);
  });

  it('goes to the first page when the first button is clicked', async () => {
    const { getAllByText, getByTestId } = render(
      <Pagination defaultPage={8}>{arrayToTestWith}</Pagination>,
    );
    const firstPage = getByTestId('1');
    fireEvent.click(firstPage);

    const paginationContainer = await waitForElement(() =>
      getByTestId('pagination'),
    );
    const five = await waitForElement(() => getAllByText('5'));
    expect(paginationContainer.childNodes).toContain(five[0]);
  });
});
