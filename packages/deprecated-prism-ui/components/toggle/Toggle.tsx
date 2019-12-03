import React, { useState, useEffect, FormEvent } from 'react';
import shortid from 'shortid';
import './toggle.scss';
import validateHexColor from '../core/color/index';

type ToggleProps = {
  color?: string;
  /** Custom class name for component */
  className?: string;
  'data-testid': string;
  defaultToggle?: boolean;
  id?: string;
  label: string;
  toggleAction: (event: FormEvent, active: boolean) => void;
};

type ToggleState = {
  active: boolean;
};

export default ({
  className = '',
  color = '',
  'data-testid': testid = '',
  defaultToggle = false,
  id = shortid.generate(),
  label = '',
  toggleAction = () => {},
}: ToggleProps) => {
  const [active, setActive] = useState<ToggleState['active']>(defaultToggle);
  const [focus, setFocus] = useState(false);

  function handleToggle(event: FormEvent) {
    if (toggleAction) {
      toggleAction(event, !active);
    }
    setActive(!active);
  }

  function showFocus() {
    setFocus(true);
  }

  function unFocus() {
    setFocus(false);
  }

  const validatedColor = color ? validateHexColor(color) : '';

  useEffect(() => {
    setActive(defaultToggle);
  }, [defaultToggle]);

  return (
    <label className={`psm-toggle__wrapper ${className}`} htmlFor={id}>
      <div
        className={`psm-toggle ${active ? 'psm-toggle--active' : ''} ${
          focus ? 'psm-toggle--focus' : ''
        }`}
        data-testid={`psm-toggle-${testid}`}
        style={
          active && validatedColor
            ? { backgroundColor: `#${validatedColor}` }
            : {}
        }
      >
        <input
          aria-label="toggle"
          type="checkbox"
          className="psm-toggle__checkbox"
          defaultChecked={active}
          onChange={handleToggle}
          onFocus={showFocus}
          onBlur={unFocus}
          id={id}
        />
        <div className="psm-toggle__switch" />
      </div>
      <span className="psm-toggle__label">{label}</span>
    </label>
  );
};
