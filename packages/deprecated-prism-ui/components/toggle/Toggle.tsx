/* eslint jsx-a11y/click-events-have-key-events: 0 */
/* eslint jsx-a11y/no-static-element-interactions: 0 */

import React, { useState } from 'react';
import './toggle.scss';

type ToggleProps = {
  defaultToggle?: boolean;
  toggleAction: (
    event: React.MouseEvent | KeyboardEvent,
    active: boolean,
  ) => void;
  'data-testid': string;
};

type ToggleState = {
  active: boolean;
  isTab: boolean;
};

export const Toggle = ({
  'data-testid': testid = '',
  defaultToggle = false,
  toggleAction = (
    event: KeyboardEvent | React.MouseEvent<Element, MouseEvent>,
    active: any,
  ) => {},
}: ToggleProps) => {
  const [active, setActive] = useState<ToggleState['active']>(defaultToggle);
  const [isTab, setIsTab] = useState<ToggleState['isTab']>(false);

  function handleToggle(event: React.MouseEvent | KeyboardEvent) {
    if (toggleAction) {
      toggleAction(event, !active);
    }
    setActive(!active);
  }

  return (
    <div
      aria-label="toggle"
      className={`psm-toggle ${
        active ? 'psm-toggle--active' : 'psm-toggle--inactive'
      }`}
      data-testid={`psm-toggle-${testid}`}
      onClick={event => {
        handleToggle(event);
        setIsTab(false);
      }}
      style={{ outlineStyle: isTab ? '' : 'none' }}
      tabIndex={0}
    >
      <div className="psm-toggle__switch" />
    </div>
  );
};

export default Toggle;
