import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Dropdown from './Dropdown';

const dropdownText =
  'The year is 2027, Lil Nas X has just dropped his 56 remix of old town road featuring 112 other artist, the song is 2 hours long. you hate to do it, but you listen too it bc you heard Obama’s verse is gas. It is.';

const dropdownMenuItems = [
  {
    label: `date: I’m sick of bad boys, I want something more

    me: *puts Bad Boys 2 into the VCR* this is gunna blow your mind`,
    onClick: () => console.log('@handsock_butts'),
  },
  {
    label: `On your first day at the new job, squash every commit from the repo into a single commit with message "Legacy code" and force-push to master.`,
    onClick: () => console.log('@codeinthehole'),
  },
  {
    label: `welcome to my gender reveal party. my reveal is that gender is a construct. also im not pregnant. i will be keeping your gifts. please leave my home.`,
    onClick: () => console.log('@jamieloftusHELP'),
  },
  {
    label: `Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.`,
    onClick: () => console.log('@SirEviscerate'),
  },
];

describe('<Dropdown />', () => {
  it("renders the label it's given", () => {
    const { getByText } = render(<Dropdown label={dropdownText} />);
    const labelText = getByText(dropdownText);
    expect(labelText).not.toBe(null);
  });

  it("shows its menu when it's clicked", () => {
    const { getByText } = render(<Dropdown dropdownMenu={dropdownMenuItems} />);
    const labelText = getByText('Dropdown Label');

    fireEvent.click(labelText);

    const menuItem = getByText(
      'Your eyes dart around the Chuck E Cheese ball pit in panic. I rise silently behind you, face painted in big red, blue, and yellow circles.',
    );
    expect(menuItem).not.toBe(null);
  });
});
