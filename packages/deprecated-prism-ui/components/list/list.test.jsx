import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import List from './List';

const mockMenuClick = jest.fn();

const testListItems = [
  {
    content: `"Technically every meal is break-fast," I explain to the CEO as another stack of pancakes slides effortlessly down my throat.
I can tell the board members are impressed.`,
    age: '27',
  },
  { content: `*presses megaphone button* No you be quiet.` },
];

const testMenu = [
  {
    label: `*Describing criminal to sketch artist* He liked crime.`,
    onClick: mockMenuClick,
  },
  {
    label: 'Did you know: L.L.Bean is Spanish for "the the bean."',
    onClick: mockMenuClick,
  },
];

describe('<List />', () => {
  it('defaults to no age or menu', () => {
    const { container } = render(<List listItems={testListItems} />);
    expect(
      container.querySelector('.psm-list--info-block').firstChild,
    ).not.toHaveProperty('tabIndex');
  });

  it('opens the dropdown menu on click', () => {
    const { container, getAllByText } = render(
      <List listItems={testListItems} menu={testMenu} />,
    );
    const menuButton = container.querySelector('.psm-list--menu-button');
    expect(
      getAllByText(testMenu[0].label)[0].parentElement.classList,
    ).toContain('psm-list-hidden');
    fireEvent.click(menuButton);
    expect(
      getAllByText(testMenu[0].label)[0].parentElement.classList,
    ).toContain('psm-list-visible');
  });

  it('handles clicking a menu option correctly', () => {
    const { container, getAllByText } = render(
      <List listItems={testListItems} menu={testMenu} />,
    );
    const menuButton = container.querySelector('.psm-list--menu-button');
    fireEvent.click(menuButton);
    fireEvent.click(getAllByText(testMenu[0].label)[0]);
    expect(mockMenuClick).toHaveBeenCalled();
  });

  it('handles hovering correctly', () => {
    const { container, getByText } = render(<List listItems={testListItems} />);

    const listItem = getByText(testListItems[1].content);
    const infoBlock = container.querySelector('.psm-list--info-block');

    expect(listItem.classList).toContain('psm-list--row-hover');
    fireEvent.mouseEnter(infoBlock);
    expect(getByText(testListItems[1].content).classList).toContain(
      'psm-list--row',
    );
    fireEvent.mouseLeave(container.querySelector('.psm-list--info-block'));
    fireEvent.mouseEnter(listItem);
    expect(getByText(testListItems[1].content).classList).toContain(
      'psm-list--row-hover',
    );
  });

  it('defaults to an empty list', () => {
    const { container } = render(<List />);
    expect(container.querySelector('.psm-list').childNodes[0]).toBeFalsy();
  });

  it('closes an open list menu when something else is focused', () => {
    const { container, getAllByText } = render(
      <List listItems={testListItems} menu={testMenu} />,
    );

    fireEvent.click(container.querySelector('.psm-list--menu-button'));
    expect(
      getAllByText(testMenu[0].label)[0].parentElement.classList,
    ).toContain('psm-list-visible');
    fireEvent.blur(container.querySelector('.psm-list--menu-button'));
    expect(
      getAllByText(testMenu[0].label)[0].parentElement.classList,
    ).toContain('psm-list-hidden');
  });
});
