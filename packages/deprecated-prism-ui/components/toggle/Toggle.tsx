import React, { useState, useEffect, FormEvent } from 'react';
import uuid from 'uuid/v4';
import './toggle.scss';
import validateHexColor from '../core/color/index';

type ToggleProps = {
  color?: string;
  defaultToggle?: boolean;
  id?: string;
  label: string;
  toggleAction: (event: FormEvent, active: boolean) => void;
  'data-testid': string;
};

type ToggleState = {
  active: boolean;
};

export const Toggle = ({
  color = '',
  'data-testid': testid = '',
  defaultToggle = false,
  id = uuid(),
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
    <label className="psm-toggle__wrapper" htmlFor={id}>
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

export default Toggle;
