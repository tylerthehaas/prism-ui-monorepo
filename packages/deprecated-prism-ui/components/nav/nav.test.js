import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Nav from './Nav';

const testTabs = [
  {
    tabName: `Unfortunately, as you probably already know, people`,
    onClick: () => console.log('R.I.P. @Horse_ebooks'),
    isNew: false,
  },
  {
    tabName: `a lot of people say to me, things, but i am to busy brushing my hair and being a beautiful model. thats what life is all about`,
    onClick: () => console.log('credit to @wolfpupy'),
  },
];

describe('<Nav />', () => {
  test('Active tab defaults to 0', () => {
    const { getByText } = render(<Nav tabs={testTabs} />);

    const tabIsActive = getByText(
      `Unfortunately, as you probably already know, people`,
    );

    expect(tabIsActive.parentElement).toHaveClass('psm-nav__active');
  });

  test('Active sets to 1 when 1 is selected', () => {
    const { getByText } = render(<Nav active={1} tabs={testTabs} />);

    const secondTabIsActive = getByText(
      `a lot of people say to me, things, but i am to busy brushing my hair and being a beautiful model. thats what life is all about`,
    );

    expect(secondTabIsActive.parentElement).toHaveClass('psm-nav__active');
  });

  test('Focusing activates the hover effect', () => {
    const { getByText } = render(<Nav tabs={testTabs} />);

    const hoverOverTab = getByText(
      `a lot of people say to me, things, but i am to busy brushing my hair and being a beautiful model. thats what life is all about`,
    );

    fireEvent.mouseOver(hoverOverTab);

    expect(hoverOverTab.parentElement).toHaveClass(
      'psm-nav__tab  psm-nav__hovered',
    );
  });

  test('Clicking a tab makes it the active tab', () => {
    const { getByText } = render(<Nav tabs={testTabs} />);

    const clickOnTab = getByText(
      `a lot of people say to me, things, but i am to busy brushing my hair and being a beautiful model. thats what life is all about`,
    );

    fireEvent.click(clickOnTab);

    expect(clickOnTab.parentElement).toHaveClass(
      'psm-nav__tab  psm-nav__active',
    );
  });
});
