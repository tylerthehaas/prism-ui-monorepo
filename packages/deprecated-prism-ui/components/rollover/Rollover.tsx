import React, { useState, useEffect, ReactNode } from 'react';
import shortid from 'shortid';
import './rollover.scss';

interface RolloverProps {
  /** Custom class name for component */
  className?: string;
  /** Content to include in the rollover */
  content: string[];
  'data-testid'?: string;
  /** Text that triggers the rollover when hovered over */
  hoverText: string;
  /** How that hover text is styled */
  hoverTextStyle: 'dotted' | 'underlined' | 'none';
  /** The maximum number of separate items that are included in the rollover before a 'Show More' button appears */
  numShown: number;
  /** Determines if the rollover goes above the text or below it */
  position?: 'up' | 'down' | 'left' | 'right';
}

interface RolloverState {
  effectiveNumShown: number;
  expanded: boolean;
  hiddenItems: number;
  visible: boolean;
  visibleContent: JSX.Element[];
}

export default ({
  className = '',
  content = [],
  'data-testid': testid = '',
  hoverText = 'Hover over me!',
  hoverTextStyle = 'dotted',
  numShown = content.length,
  position = 'up',
}: RolloverProps) => {
  /* calculating and using an effectiveNumShown to make sure that we're using a positive integer
  instead of just trusting the numShown prop mitigates a whole litany of weird behavior if numShown isn't a
  positive integer. The value is calculated in makeSureEverythingPlaysNice() */

  const [effectiveNumShown, setEffectiveNumShown] = useState<
    RolloverState['effectiveNumShown']
  >(numShown);

  const [expanded, setExpanded] = useState<RolloverState['expanded']>(false);
  const [visible, setVisible] = useState<RolloverState['visible']>(false);

  const initialContent = content
    .map((item: ReactNode) => (
      <li className="psm-rollover--item" key={shortid.generate()}>
        {item}
      </li>
    ))
    .filter((item: ReactNode, index: number) => index < effectiveNumShown);

  const expandedContent = content.map((item: ReactNode) => (
    <li className="psm-rollover--item" key={shortid.generate()}>
      {item}
    </li>
  ));

  const [visibleContent, setVisibleContent] = useState<
    RolloverState['visibleContent']
  >(initialContent);

  function expandRollover() {
    setExpanded(true);
    setVisibleContent(expandedContent);
  }

  const [hiddenItems, setHiddenItems] = useState<RolloverState['hiddenItems']>(
    content.length - effectiveNumShown,
  );

  useEffect(() => {
    if (numShown < 1 || !numShown) {
      return setEffectiveNumShown(1);
    }
    if (numShown < content.length) {
      return setEffectiveNumShown(numShown);
    }
    return setEffectiveNumShown(content.length);
  }, [content.length, numShown]);

  useEffect(() => {
    if (content.length - effectiveNumShown > 0) {
      setHiddenItems(content.length - effectiveNumShown);
    }
    if (visibleContent.length >= expandedContent.length) {
      setExpanded(true);
    }
  }, [
    content.length,
    effectiveNumShown,
    expandedContent.length,
    visibleContent,
  ]);

  const expandButton = (
    <button
      className="psm-rollover__footer"
      key="extra"
      type="button"
      onClick={() => expandRollover()}
      tabIndex={0}
    >
      +{hiddenItems} More
    </button>
  );

  function handleOptions() {
    switch (hoverTextStyle) {
      case 'none':
        return '';
      case 'dotted':
        return 'psm-rollover__text-dotted';
      case 'underlined':
        return 'psm-rollover__text-underlined';
      default:
        return '';
    }
  }

  function resetDropdown() {
    setExpanded(false);
    setVisible(false);
    setVisibleContent(initialContent);
  }

  function handleVisibility() {
    setVisibleContent(initialContent);
    setVisible(true);
  }

  return (
    <div
      className={`psm-rollover ${className}`}
      data-testid={testid}
      id={`${testid}-rollover-div`}
      onFocus={() => setVisible(true)}
      onMouseEnter={handleVisibility}
      onBlur={() => resetDropdown()}
      onMouseLeave={() => resetDropdown()}
    >
      <span className={`${handleOptions()}`}>{hoverText}</span>
      <div
        className={`psm-rollover__window-${
          visible ? 'visible' : 'hidden'
        } psm-rollover__window--${position}`}
      >
        <ul className="psm-rollover--container">{visibleContent}</ul>
        {hiddenItems > 0 && !expanded ? expandButton : ''}
      </div>
    </div>
  );
};
