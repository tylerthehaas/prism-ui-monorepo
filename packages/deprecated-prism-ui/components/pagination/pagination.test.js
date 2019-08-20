import React from 'react';
import { render } from '@testing-library/react';

import Pagination from './Pagination';

const arrayToTestWith = [...Array(33).keys()];

describe('<Pagination />', () => {
  test('Defaults to opening on page one', () => {
    const { getAllByText } = render(<Pagination>{arrayToTestWith}</Pagination>);

    const page1 = getAllByText('1');

    expect(page1[1].previousElementSibling.classList).toContain(
      'psm-pagination__arrow',
    );
  });
});
