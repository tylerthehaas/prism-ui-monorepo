import React, { useState } from 'react';
import './rollover.scss';

interface RolloverProps {
  content: string[];
  'data-testid'?: string;
  hoverText: string;
  hoverTextStyle: RolloverStyle;
  numShown: number;
  position?: 'up' | 'down';
}

type RolloverStyle = 'dotted' | 'underlined' | 'none';

interface RolloverState {
  visible: boolean;
  rolloverContent: JSX.Element[] | string[];
  contentState: any;
  showMoreButton: boolean;
}

export const Rollover = ({
  content = [],
  'data-testid': testid = '',
  hoverText = 'Hover over me!',
  hoverTextStyle = 'dotted',
  numShown = content.length,
  position = 'up',
}: RolloverProps) => {
  const [visible, setVisible] = useState<RolloverState['visible']>(false);
  const [showMoreButton, setShowMoreButton] = useState<
    RolloverState['showMoreButton']
  >(true);

  const expandedContent = content.map((item: React.ReactNode) => (
    <li key={Math.random().toString()}>{item}</li>
  ));

  const initialContent = content
    .map((item: React.ReactNode) => <li key={Math.random().toString()}>{item}</li>)
    .filter((item: React.ReactNode, index: number) => index < numShown);

  const [rolloverContent, setRolloverContent] = useState<
    RolloverState['rolloverContent']
  >(initialContent);

  function updateRollover() {
    setRolloverContent(expandedContent);
    setShowMoreButton(false);
  }

  const expandButton = (
    <button
      className="psm-rollover__footer"
      key="extra"
      type="button"
      onClick={() => updateRollover()}
      onFocus={() => updateRollover()}
      onKeyDown={event => {
        if (event.key === 'Enter') updateRollover();
      }}
      tabIndex={0}
    >
      +{content.length - numShown} More
    </button>
  );

  function handleOptions() {
    switch (hoverTextStyle) {
      case 'none':
        return '';
      case 'dotted':
        return 'psm-rollover psm-rollover__text psm-rollover__text-dotted';
      case 'underlined':
        return 'psm-rollover psm-rollover__text psm-rollover__text-underline';
      default:
        return '';
    }
  }

  function resetDropdown() {
    setVisible(false);
    setShowMoreButton(true);
    setRolloverContent(initialContent);
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
          className={` psm-rollover__window--${
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
