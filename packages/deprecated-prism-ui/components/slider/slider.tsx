import React, { useState, useEffect, ChangeEvent } from 'react';
import shortid from 'shortid';
import './slider.scss';

export type SliderProps = {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  defaultValue: number;
  maxValue: number;
  minValue: number;
  stepValue: number;
  inputId?: string;
};

export type SliderState = {
  sliderValue: number;
  sliderPosition: number;
  transform: number;
  showMin: boolean;
  showMax: boolean;
};

export default ({
  className = '',
  'data-testid': testid = '',
  defaultValue = 1,
  maxValue = 100,
  minValue = 1,
  stepValue = 1,
  inputId = `psm_slider-${shortid.generate()}`,
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState<SliderState['sliderValue']>(
    defaultValue,
  );
  const [showMin, setShowMin] = useState<SliderState['showMin']>(true);
  const [showMax, setShowMax] = useState<SliderState['showMax']>(true);
  const [transform, setTransform] = useState<SliderState['transform']>(
    ((defaultValue - minValue) / (maxValue - minValue)) * 100,
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setSliderValue(Number(event.target.value));
  }

  useEffect(() => {
    function calculateTransform() {
      return ((sliderValue - minValue) / (maxValue - minValue)) * 100;
    }

    setTransform(calculateTransform());

    if (
      Math.floor(
        0.5 * 0.25 +
          ((sliderValue - minValue) / (maxValue - minValue)) * 100 -
          0.25 -
          1,
      ) <= Math.ceil(minValue / maxValue)
    ) {
      setShowMin(false);
    } else {
      setShowMin(true);
    }

    if (
      Math.floor(
        0.5 * 0.25 +
          ((sliderValue - minValue) / (maxValue - minValue)) * 100 -
          0.25 +
          1,
      ) >=
      100 - maxValue.toString().length
    ) {
      setShowMax(false);
    } else {
      setShowMax(true);
    }
  }, [maxValue, minValue, sliderValue]);

  useEffect(() => {
    setSliderValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={`psm-input__slider ${className}`}>
      {/* eslint-disable-next-line jsx-a11y/label-has-for */}
      <label
        htmlFor={inputId}
        className="psm-input__slider-range--current"
        style={{
          position: 'absolute',
          left: `${transform}%`,
          top: '-20px',
        }}
      >
        <span
          style={{
            position: 'relative',
            top: '4px',
            right: `${transform}%`,
            zIndex: 25,
            height: '20px',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          {sliderValue}
        </span>
      </label>
      <span
        className="psm-input__slider-range--low"
        style={{ opacity: showMin ? 1 : 0 }}
      >
        {minValue}
      </span>
      <span
        className="psm-input__slider-range--high"
        style={{ opacity: showMax ? 1 : 0 }}
      >
        {maxValue}
      </span>
      <input
        id={inputId}
        data-testid={testid}
        max={`${maxValue}`}
        aria-valuemax={maxValue}
        min={`${minValue}`}
        aria-valuemin={minValue}
        onChange={handleChange}
        onInput={handleChange}
        step={`${stepValue}`}
        type="range"
        value={`${sliderValue}`}
        aria-valuenow={sliderValue}
      />
      <div
        className="psm-input__slider-right-side"
        style={{
          width: `${((maxValue - sliderValue) / (maxValue - minValue)) * 100}%`,
        }}
      />
    </div>
  );
};
