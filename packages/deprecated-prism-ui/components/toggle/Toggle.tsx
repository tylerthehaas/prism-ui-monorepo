import React, { useState } from 'react';
import './toggle.scss';
import validateHexColor from '../core/color/index';

type ToggleProps = {
  clientColor?: string;
  defaultToggle?: boolean;
  id?: string;
  label: string;
  toggleAction: (
    event: React.FormEvent,
    active: boolean,
  ) => void;
  'data-testid': string;
};

type ToggleState = {
  active: boolean;
};

export const Toggle = ({
  clientColor = '',
  'data-testid': testid = '',
  defaultToggle = false,
  id = '',
  label = '',
  toggleAction = (
    event: React.FormEvent,
    active: any,
  ) => {},
}: ToggleProps) => {
  const [active, setActive] = useState<ToggleState['active']>(defaultToggle);
  const [focus, setFocus] = useState(false);
  const [generatedId] = useState(getRandomId());

  function handleToggle(event: React.FormEvent) {
    if (toggleAction) {
      toggleAction(event, !active);
    }
    setActive(!active);
  }

  function getRandomId() {
    const random = Math.random().toString().slice(2, 7);
    return `psm-toggle-${random}`;
  }

  function showFocus() {
    setFocus(true);
  }

  function unFocus() {
    setFocus(false);
  }

  const validatedClientColor = clientColor ? validateHexColor(clientColor) : '';

  return (
    <div className='psm-toggle__wrapper'>
      <label
        className={`psm-toggle ${
          active ? 'psm-toggle--active' : ''
        } ${focus ? 'psm-toggle--focus' : ''}`}
        data-testid={`psm-toggle-${testid}`}
        style={active && validatedClientColor
          ? { backgroundColor: `#${validatedClientColor}` }
          : {}
        }
      >
        <input
          type='checkbox'
          className='psm-toggle__checkbox'
          checked={active}
          onChange={handleToggle}
          onFocus={showFocus}
          onBlur={unFocus}
          id={id || generatedId}
        />
        <div className='psm-toggle__switch' />
      </label>
      <label
        className='psm-toggle__label'
        htmlFor={id || generatedId}
      >
        {label}
      </label>
    </div>
  );
};

export default Toggle;
