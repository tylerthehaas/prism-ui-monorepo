import React from 'react';
import fetch from 'node-fetch';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import TypeaheadSearch from './typeahead-search';

import apiMock from '../../test-config/__mocks__/apiMock';

global.fetch = fetch;
global.Headers = fetch.Headers;

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
      getByText('Not found!'),
    );
    expect(errorMessage).toBeTruthy();
  });
});

describe('<TypeaheadSearch /> mocked fetch', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation(() => {
      const p = new Promise((resolve) => {
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
    const youngThug = await waitForElement(() => getByText('Adams Arthur | octmigration@octanner.mailinator.com'));
    expect(youngThug).toBeTruthy();
  });
});
