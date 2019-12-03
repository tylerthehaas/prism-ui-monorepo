import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';

import Card from './Card';

const mockOnClick = jest.fn();

const testText = 'Pick up artists and garbage men should switch names';

const testMenu = [
  {
    label: `Any 2 white guys could walk up to me and say "we're The Chainsmokers" and I'd believe them.`,
    onClick: mockOnClick(),
  },
  {
    onClick: mockOnClick(),
    label: `*slides down your bannister...VERY slowly*`,
  },
];

describe('<Card />', () => {
  it('defaults to small shadow', () => {
    const { getByText } = render(<Card>{testText}</Card>);

    const defaultCard = getByText(testText);
    expect(defaultCard.parentElement.parentElement.classList).toContain(
      'psm-card--shadow-sm',
    );
  });

  it('can have a small shadow', () => {
    const { getByText } = render(<Card shadowType="sm">{testText}</Card>);
    const shadow1 = getByText(testText);
    expect(shadow1.parentElement.parentElement.classList).toContain(
      'psm-card--shadow-sm',
    );
  });

  it('can have a medium shadow', () => {
    const { getByText } = render(<Card shadowType="md">{testText}</Card>);
    const shadow2 = getByText(testText);

    expect(shadow2.parentElement.parentElement.classList).toContain(
      'psm-card--shadow-md',
    );
  });

  it('can have a large shadow', async () => {
    const { getByText } = render(<Card shadowType="lg">{testText}</Card>);
    const shadow3 = getByText(testText);

    expect(shadow3.parentElement.parentElement.classList).toContain(
      'psm-card--shadow-lg',
    );
  });

  it('opens the menu when clicked', async () => {
    const { container, getByText } = render(
      <Card cardMenu={testMenu}>{testText}</Card>,
    );

    const menuButton = container.querySelector('.psm-card--menu-button');

    fireEvent.click(menuButton);

    const menuItem = await getByText(testMenu[1].label);

    expect(menuItem.parentElement.classList).toContain(
      'psm-card--menu-visible',
    );
  });

  it('handles menu clicks correctly', async () => {
    const { container, getByText } = render(
      <Card cardMenu={testMenu}>{testText}</Card>,
    );

    const menuButton = container.querySelector('.psm-card--menu-button');

    fireEvent.click(menuButton);

    const menuItem = await getByText(testMenu[1].label);
    fireEvent.click(menuItem);

    wait(() => expect(mockOnClick).toHaveBeenCalled());
  });
});
