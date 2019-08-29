import React, { useState, useEffect, ReactNode } from 'react';
import uuid from 'uuid/v4';
import './rollover.scss';

interface RolloverProps {
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
  position?: 'up' | 'down';
}

interface RolloverState {
  visible: boolean;
  rolloverContent: JSX.Element[] | string[];
  contentState: any;
  showMoreButton: boolean;
  effectiveNumShown: number;
}

export const Rollover = ({
  content = [],
  'data-testid': testid = '',
  hoverText = 'Hover over me!',
  hoverTextStyle = 'dotted',
  numShown = content.length,
  position = 'up',
}: RolloverProps) => {
  const [effectiveNumShown, setEffectiveNumShown] = useState<
    RolloverState['effectiveNumShown']
  >(numShown);

  function determineIfShowMoreIsNeeded(nextState: boolean) {
    if (effectiveNumShown < content.length && effectiveNumShown > 0) {
      return nextState;
    }
    return false;
  }
  const [visible, setVisible] = useState<RolloverState['visible']>(false);

  const [showMoreButton, setShowMoreButton] = useState<
    RolloverState['showMoreButton']
  >(determineIfShowMoreIsNeeded(true));

  const expandedContent = content.map((item: ReactNode) => (
    <li key={uuid()}>{item}</li>
  ));

  const initialContent = content
    .map((item: ReactNode) => <li key={uuid()}>{item}</li>)
    .filter((item: ReactNode, index: number) => index < effectiveNumShown);

  const [rolloverContent, setRolloverContent] = useState<
    RolloverState['rolloverContent']
  >(initialContent);

  function makeSureEverythingPlaysNice() {
    if (numShown < 1 || !numShown) {
      return setEffectiveNumShown(1);
    }
    if (numShown < content.length) {
      return setEffectiveNumShown(numShown);
    }
    setRolloverContent(expandedContent);
    setEffectiveNumShown(content.length);
    return setShowMoreButton(false);
  }

  function updateRollover() {
    setRolloverContent(expandedContent);
    setShowMoreButton(determineIfShowMoreIsNeeded(false));
  }

  useEffect(() => {
    makeSureEverythingPlaysNice();
  }, [numShown]);

  const expandButton = (
    <button
      className="psm-rollover__footer"
      key="extra"
      type="button"
      onClick={() => updateRollover()}
      tabIndex={0}
    >
      +{content.length - effectiveNumShown} More
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
    setVisible(false);
    setShowMoreButton(determineIfShowMoreIsNeeded(true));
    setRolloverContent(initialContent);
  }

  if (visible && content.length === 1) {
    return (
      <div
        className="psm-rollover"
        data-testid={testid}
        id={`${testid}-rollover-div`}
        onBlur={() => resetDropdown()}
        onMouseLeave={() => resetDropdown()}
      >
        <span className={`${handleOptions()}`}>{hoverText}</span>
        <div
          className={`psm-rollover__window--${
            visible ? 'show' : 'hide'
          } psm-rollover__window--${position}`}
        >
          {content.map(item => (
            <p>{item}</p>
          ))}
        </div>
      </div>
    );
  }

  if (visible) {
    return (
      <div
        className="psm-rollover"
        data-testid={testid}
        id={`${testid}-rollover-div`}
        onBlur={() => resetDropdown()}
        onMouseLeave={() => resetDropdown()}
      >
        <span className={`${handleOptions()}`}>{hoverText}</span>
        <div
          className={`psm-rollover__window--${
            visible ? 'show' : 'hide'
          } psm-rollover__window--${position}`}
        >
          <ul>
            {rolloverContent}
            {showMoreButton ? expandButton : ''}
          </ul>
        </div>
      </div>
    );
  }
  return (
    <div
      className="psm-rollover"
      data-testid={testid}
      id={`${testid}-rollover-div`}
      onFocus={() => setVisible(true)}
      onMouseEnter={() => setVisible(true)}
    >
      <span className={`${handleOptions()}`}>{hoverText}</span>
    </div>
  );
};

export default Rollover;
