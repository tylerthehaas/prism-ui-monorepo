import React from 'react';
import {
 render, fireEvent, waitForElement, wait,
} from '@testing-library/react';

import Dropdown from './Dropdown';

const mockOnClick = jest.fn();

const dropdownText = 'The year is 2027, Lil Nas X has just dropped his 56 remix of old town road featuring 112 other artist, the song is 2 hours long. you hate to do it, but you listen too it bc you heard Obama’s verse is gas. It is.';

const dropdownMenuItems = [
  {
    label: `date: I’m sick of bad boys, I want something more

    me: *puts Bad Boys 2 into the VCR* this is gunna blow your mind`,
    onClick: () => mockOnClick(x => x),
  },
  {
    label: 'On your first day at the new job, squash every commit from the repo into a single commit with message "Legacy code" and force-push to master.',
    onClick: () => mockOnClick(x => x),
  },
  {
    label: 'welcome to my gender reveal party. my reveal is that gender is a construct. also im not pregnant. i will be keeping your gifts. please leave my home.',
    onClick: () => mockOnClick(x => x),
  },
  {
    label: 'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    onClick: () => mockOnClick(x => x),
  },
];

describe('<Dropdown />', () => {
  it("renders the label it's given", async () => {
    const { getByText } = render(<Dropdown label={dropdownText} />);
    const labelText = getByText(dropdownText);
    expect(labelText).not.toBe(null);
  });

  it("shows its menu when it's clicked", async () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = await waitForElement(() => getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    ));
    expect(menuItem).not.toBe(null);
  });

  it('displays the correct number of menu items', () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    expect(menuItem.parentElement.childNodes.length).toEqual(
      dropdownMenuItems.length,
    );
  });

  it('closes the menu when escape is pressed', async () => {
    const { getByText, queryByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    await waitForElement(() => getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    ));

    await wait(() => {
      fireEvent.keyDown(labelText, { key: 'Escape' });
      expect(queryByText('Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',)).toBeNull();
    });
  });

  it('dispatches an event when a menu item is clicked', async () => {
    mockOnClick.mockClear();
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = await waitForElement(() => getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    ));

    fireEvent.click(menuItem);

    await wait(() => expect(mockOnClick.mock.calls.length).toBe(1));
  });

  it("dispatches an event when someone hits enter on a menu item. Now you may say to yourself, hey, that's exactly the same thing as the last test. And you'd be right, but an uncovered line of code is an uncovered line of code", async () => {
    mockOnClick.mockClear();
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = await waitForElement(() => getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    ));

    fireEvent.keyDown(menuItem, { key: 'Enter' });

    await wait(() => expect(mockOnClick.mock.calls.length).toBe(1));
  });

  it('closes the menu when focus changes', async () => {
    const { getByText, queryByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    await waitForElement(() => getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    ));

    fireEvent.blur(labelText);

    await wait(() => expect(queryByText('Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',)).toBeNull());
  });
});
