import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Rollover from './Rollover';

const testRolloverContent = [
  'Hello sir, I-*briefcase full of jellybeans falls open*',
  '[burglar gently waking me] you live like this?',
  '"Anime is real," Barack Obama said in his inauguration speech earlier. "Pokémon are real. Geodude is real, and strong, and he\'s my friend."',
  'The basketball shot clock was invented in 1954 after a player hid the ball under his shirt for 48 minutes and told everyone he was pregnant.',
];
const testTriggerPhrase =
  "You can't spend your whole life gently rollerblading away from your problems";

describe('<Rollover />', () => {
  test('Shows rollover above trigger by default', () => {
    const { getByText, getAllByText } = render(
      <Rollover content={testRolloverContent} hoverText={testTriggerPhrase} />,
    );

    const getTriggerPhrase = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.mouseOver(getTriggerPhrase);

    const getContent = getAllByText(
      'Hello sir, I-*briefcase full of jellybeans falls open*',
    );

    expect(
      getContent[0].parentElement.parentElement.parentElement.classList,
    ).toContain('psm-rollover__window--show' && 'psm-rollover__window--up');
  });

  test('Rollover is underneath trigger phrase if position is down', () => {
    const { getByText, getAllByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        position="down"
      />,
    );

    const getTriggerPhrase = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.mouseOver(getTriggerPhrase);

    const getContent = getAllByText(
      'Hello sir, I-*briefcase full of jellybeans falls open*',
    )[0];

    expect(
      getContent.parentElement.parentElement.parentElement.classList,
    ).toContain('psm-rollover__window--show' && 'psm-rollover__window--down');
  });

  test('Hover text is dotted when hoverTextStyle = dotted', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="dotted" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    expect(getUnderlinedTriggerPhrase.classList).toContain(
      'psm-rollover__text-dotted',
    );
  });

  test('Hover text is underlined when hoverTextStyle = underlined', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="underlined" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    expect(getUnderlinedTriggerPhrase.classList).toContain(
      'psm-rollover__text-underlined',
    );
  });

  test('Hover text has no additional styles when hoverTextStyle = none', () => {
    const { getByText } = render(
      <Rollover hoverText={testTriggerPhrase} hoverTextStyle="none" />,
    );

    const getUnderlinedTriggerPhrase = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    expect(getUnderlinedTriggerPhrase.classList).not.toContain(
      'psm-rollover__text-underlined',
    );
    expect(getUnderlinedTriggerPhrase.classList).not.toContain(
      'psm-rollover__text-dotted',
    );
  });

  test("'Show More' will appear when there are more items than the numShown prop allows", () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.mouseEnter(hoverText);

    const showMoreButton = getByText('+2 More');
    expect(showMoreButton).toBeTruthy();
  });

  test("'Show More' displays the previously hidden content when clicked", () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.mouseEnter(hoverText);

    const getShowMore = getByText('+2 More');

    fireEvent.click(getShowMore);

    const thirdRolloverItem = getByText(testRolloverContent[2]);

    const fourthRolloverItem = getByText(testRolloverContent[3]);

    expect(thirdRolloverItem.parentElement.parentElement.classList).toContain(
      'psm-rollover-visible',
    );
    expect(fourthRolloverItem.parentElement.parentElement.classList).toContain(
      'psm-rollover-visible',
    );
  });

  test('OnBlur closes rollover', () => {
    const { getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );

    const hoverText = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.mouseEnter(hoverText);

    const getShowMore = getByText('+2 More');

    fireEvent.click(getShowMore);

    fireEvent.blur(hoverText);

    const thirdRolloverItem = getByText(testRolloverContent[2]);

    const fourthRolloverItem = getByText(testRolloverContent[3]);

    expect(thirdRolloverItem.parentElement.parentElement.classList).toContain(
      'psm-rollover-hidden',
    );
    expect(fourthRolloverItem.parentElement.parentElement.classList).toContain(
      'psm-rollover-hidden',
    );
  });

  test("default hoverText is 'Hover over me!'", () => {
    const { getByText } = render(<Rollover />);
    expect(getByText('Hover over me!')).toBeTruthy();
  });

  test('the mouse leaving the expanded dropdown resets it', async () => {
    const { container, getByText, getAllByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );
    const hoverText = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );
    fireEvent.mouseEnter(hoverText);
    fireEvent.click(container.querySelector('button'));
    waitForElement(() =>
      expect(
        getAllByText(testRolloverContent[2])[1].parentElement.parentElement
          .classList,
      ).toContain('psm-rollover-visible'),
    );
    fireEvent.mouseLeave(
      container.querySelector('.psm-rollover__window--show'),
    );
    waitForElement(() =>
      expect(
        getAllByText(testRolloverContent[2])[1].parentElement.parentElement
          .classList,
      ).toContain('psm-rollover-hidden'),
    );
  });

  test('focusing the rollover text expands the rollover', async () => {
    const { getAllByText, getByText } = render(
      <Rollover
        content={testRolloverContent}
        hoverText={testTriggerPhrase}
        numShown={2}
      />,
    );
    const hoverText = getByText(
      "You can't spend your whole life gently rollerblading away from your problems",
    );

    fireEvent.focus(hoverText);

    waitForElement(() =>
      expect(
        getAllByText(testRolloverContent[0])[1].parentElement.parentElement
          .classList,
      ).toContain('psm-rollover-visible'),
    );
  });
});
