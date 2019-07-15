import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Rollover from './Rollover';

const testRolloverContent = [
  'Hello sir, I-*briefcase full of jellybeans falls open*',
  '[burglar gently waking me] you live like this?',
  `"Anime is real," Barack Obama said in his inauguration speech earlier. "Pokémon are real. Geodude is real, and strong, and he's my friend."`,
  `The basketball shot clock was invented in 1954 after a player hid the ball under his shirt for 48 minutes and told everyone he was pregnant.`,
];
const testTriggerPhrase = `You can't spend your whole life gently rollerblading away from your problems`;

describe('<Rollover />', () => {
  test('Shows rollover above trigger by default', () => {
    const { getByText } = render(
      <Rollover content={testRolloverContent} hoverText={testTriggerPhrase} />,
    );

    const getTriggerPhrase = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    fireEvent.mouseOver(getTriggerPhrase);

    const getContent = getByText(
      'Hello sir, I-*briefcase full of jellybeans falls open*',
    );

    expect(getContent.parentElement.parentElement).toHaveClass(
      'psm-rollover__window--show psm-rollover__window--up',
    );
  });

  test('Rollover is underneath trigger phrase if position is down', () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        position="down"
      />,
    );

    const getTriggerPhrase = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    fireEvent.mouseOver(getTriggerPhrase);

    const getContent = getByText(
      'Hello sir, I-*briefcase full of jellybeans falls open*',
    );

    expect(getContent.parentElement.parentElement).toHaveClass(
      'psm-rollover__window--show psm-rollover__window--down',
    );
  });

  test('Hover text is dotted when hoverTextStyle = dotted', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="dotted" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    expect(getUnderlinedTriggerPhrase).toHaveClass('psm-rollover__text-dotted');
  });

  test('Hover text is underlined when hoverTextStyle = underlined', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="underlined" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    expect(getUnderlinedTriggerPhrase).toHaveClass(
      'psm-rollover__text-underline',
    );
  });

  test('Hover text has no additional styles when hoverTextStyle = none', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="none" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    expect(getUnderlinedTriggerPhrase).not.toHaveClass();
  });

  test(`'Show More' will appear when there are more items than the numShown prop allows`, () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    fireEvent.mouseEnter(hoverText);

    const secondRolloverItem = getByText(
      '[burglar gently waking me] you live like this?',
    );

    expect(secondRolloverItem.nextElementSibling).toHaveClass(
      'psm-rollover__footer',
    );
  });

  test(`'Show More' displays the previously hidden content when clicked`, () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    fireEvent.mouseEnter(hoverText);

    const getShowMore = getByText('+2 More');

    fireEvent.click(getShowMore);

    const thirdRolloverItem = getByText(
      `"Anime is real," Barack Obama said in his inauguration speech earlier. "Pokémon are real. Geodude is real, and strong, and he's my friend."`,
    );

    const fourthRolloverItem = getByText(
      `The basketball shot clock was invented in 1954 after a player hid the ball under his shirt for 48 minutes and told everyone he was pregnant.`,
    );

    expect(thirdRolloverItem).toBeTruthy();
    expect(fourthRolloverItem).toBeTruthy();
  });

  test('OnBlur closes rollover', () => {
    const { getByText, queryByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      `You can't spend your whole life gently rollerblading away from your problems`,
    );

    fireEvent.mouseEnter(hoverText);

    const getShowMore = getByText('+2 More');

    fireEvent.click(getShowMore);

    fireEvent.blur(hoverText);

    const thirdRolloverItem = queryByText(
      `"Anime is real," Barack Obama said in his inauguration speech earlier. "Pokémon are real. Geodude is real, and strong, and he's my friend."`,
    );

    const fourthRolloverItem = queryByText(
      `The basketball shot clock was invented in 1954 after a player hid the ball under his shirt for 48 minutes and told everyone he was pregnant.`,
    );

    expect(thirdRolloverItem).toBeFalsy();
    expect(fourthRolloverItem).toBeFalsy();
  });
});
