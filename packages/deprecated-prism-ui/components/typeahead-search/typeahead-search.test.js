import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import TypeaheadSearch from './typeahead-search';

import apiMock from '../../test-config/__mocks__/apiMock';

describe('<TypeaheadSearch /> unmocked fetch', () => {
  test('data-testid defaults to an empty string', () => {
    const { queryByTestId } = render(<TypeaheadSearch />);
    const searchInput = queryByTestId('testing-input');
    expect(searchInput).toBeNull();
  });

  test('no auth returns an error', async () => {
    const { getByTestId, getByText } = render(
      <TypeaheadSearch data-testid="testing" />,
    );
    const searchInput = getByTestId('testing-input');
    fireEvent.change(searchInput, { target: { value: 'no auth' } });
    const errorMessage = await waitForElement(() =>
      getByText('Error: Failed to fetch'),
    );
    expect(errorMessage).toBeTruthy();
  });
});

describe('<TypeaheadSearch /> mocked fetch', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          json() {
            return apiMock;
          },
        });
      });

      return p;
    });
  });
  test('valid results are displayed', async () => {
    const { getByTestId, getByText } = render(
      <TypeaheadSearch data-testid="testing" />,
    );
    const searchInput = getByTestId('testing-input');
    fireEvent.change(searchInput, { target: { value: 'young' } });
    const youngThug = await waitForElement(() => getByText('Young Thug'));
    expect(youngThug).toBeTruthy();
  });
});
