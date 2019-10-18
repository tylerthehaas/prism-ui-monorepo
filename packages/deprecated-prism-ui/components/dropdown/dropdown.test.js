import React from 'react';
import Avatar from '../avatar/Avatar';
import {
  render,
  fireEvent,
  waitForElement,
  wait,
} from '@testing-library/react';

import Dropdown from './Dropdown';

const mockOnClick = jest.fn(x => x);

const dropdownText =
  'The year is 2027, Lil Nas X has just dropped his 56 remix of old town road featuring 112 other artist, the song is 2 hours long. you hate to do it, but you listen too it bc you heard Obama’s verse is gas. It is.';

const dropdownMenuItems = [
  {
    label: `date: I’m sick of bad boys, I want something more

    me: *puts Bad Boys 2 into the VCR* this is gunna blow your mind`,
    onClick: mockOnClick,
  },
  {
    label:
      'On your first day at the new job, squash every commit from the repo into a single commit with message "Legacy code" and force-push to master.',
    onClick: mockOnClick,
  },
  {
    label:
      'welcome to my gender reveal party. my reveal is that gender is a construct. also im not pregnant. i will be keeping your gifts. please leave my home.',
    onClick: mockOnClick,
  },
  {
    label:
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    onClick: mockOnClick,
  },
];

describe('<Dropdown />', () => {
  it("renders the label it's given", async () => {
    const { getByText } = render(
      <Dropdown label={dropdownText} dropdownMenu={dropdownMenuItems} />,
    );
    const labelText = getByText(dropdownText);
    expect(labelText).not.toBe(null);
  });

  it("shows its menu when it's clicked", async () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = await waitForElement(() =>
      getByText(
        'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
      ),
    );
    expect(menuItem.parentElement.classList).toContain('psm-dropdown-visible');
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
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    expect(menuOption.parentElement.classList).toContain(
      'psm-dropdown-visible',
    );

    fireEvent.keyDown(labelText, { key: 'Escape' });

    const reselectMenuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    await wait(() => {
      expect(reselectMenuOption.parentElement.classList).toContain(
        'psm-dropdown-hidden',
      );
    });
  });

  it('dispatches an event when a menu item is clicked', async () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = await waitForElement(() =>
      getByText(
        'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
      ),
    );

    fireEvent.click(menuItem);

    await wait(() => expect(mockOnClick.mock.calls.length).toBe(1));
  });

  it("dispatches an event when someone hits enter on a menu item. Now you may say to yourself, hey, that's exactly the same thing as the last test. And you'd be right, but an uncovered line of code is an uncovered line of code", async () => {
    const newMockJustForThisTest = jest.fn();
    const { container, getByText } = render(
      <Dropdown
        dropdownMenu={[
          {
            label: dropdownMenuItems[3].label,
            onClick: newMockJustForThisTest(),
          },
        ]}
      />,
    );
    const topLevel = container.querySelector('.psm-dropdown__container');

    fireEvent.keyDown(topLevel, { key: 'Enter' });

    const menuItem = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    fireEvent.keyDown(menuItem, { key: 'ArrowDown' });
    fireEvent.keyDown(menuItem, { key: 'Enter' });

    await wait(() => expect(newMockJustForThisTest).toHaveBeenCalledTimes(1));
  });

  it('closes the menu when focus changes for buttons without children', async () => {
    const { container, getByText } = render(
      <Dropdown dropdownMenu={dropdownMenuItems} />,
    );
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    expect(menuOption.parentElement.classList).toContain(
      'psm-dropdown-visible',
    );

    fireEvent.blur(container.querySelector('.psm-dropdown__menu'));

    const reselectMenuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    await wait(() => {
      expect(reselectMenuOption.parentElement.classList).toContain(
        'psm-dropdown-hidden',
      );
    });
  });

  it('closes the menu when focus changes for buttons with children', async () => {
    const { getByText, getByTestId } = render(
      <Dropdown dropdownMenu={dropdownMenuItems}>
        <Avatar data-testid="an-avatar" />
      </Dropdown>,
    );

    const userAvatar = getByTestId('an-avatar');

    fireEvent.click(userAvatar);

    expect(getByText(dropdownMenuItems[3].label)).toBeTruthy();

    fireEvent.blur(userAvatar);

    const reselectMenuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    await wait(() => {
      expect(reselectMenuOption.parentElement.classList).toContain(
        'psm-dropdown-hidden',
      );
    });
  });

  it('closes the menu when the child of a dropdown is clicked', async () => {
    const { getByText, getByTestId } = render(
      <Dropdown dropdownMenu={dropdownMenuItems}>
        <Avatar data-testid="an-avatar" />
      </Dropdown>,
    );

    const userAvatar = getByTestId('an-avatar');

    fireEvent.click(userAvatar);

    expect(getByText(dropdownMenuItems[3].label)).toBeTruthy();

    fireEvent.click(userAvatar);

    const reselectMenuOption = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );

    await wait(() => {
      expect(reselectMenuOption.parentElement.classList).toContain(
        'psm-dropdown-hidden',
      );
    });
  });

  it('handles arrow down correctly', () => {
    const { container, getByText } = render(
      <Dropdown dropdownMenu={dropdownMenuItems} />,
    );
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);
    fireEvent.keyDown(labelText, { key: 'ArrowDown' });

    expect(container.querySelector('ul').childNodes[0].classList).toContain(
      'psm-dropdown-focused',
    );
  });

  it('handles arrow up correctly', () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);
    fireEvent.keyDown(labelText, { key: 'ArrowUp' });

    expect(getByText(dropdownMenuItems[3].label).classList).toContain(
      'psm-dropdown-focused',
    );
  });
});
