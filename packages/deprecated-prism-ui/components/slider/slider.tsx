import React, { useState } from 'react';
import './slider.scss';

export type SliderProps = {
  'data-testid'?: string;
  defaultValue: number;
  maxValue: number;
  minValue: number;
  stepValue: number;
};
export type SliderState = {
  sliderValue: number;
  sliderPosition: number;
  transform: number;
  showMin: boolean;
  showMax: boolean;
};

export const Slider = ({
  'data-testid': testid = '',
  defaultValue = 1,
  maxValue = 100,
  minValue = 1,
  stepValue = 1,
}: SliderProps) => {
  const [sliderValue, setSliderValue] = useState<SliderState['sliderValue']>(
    defaultValue,
  );
  const [showMin, setShowMin] = useState<SliderState['showMin']>(true);
  const [showMax, setShowMax] = useState<SliderState['showMax']>(true);
  const [sliderPosition, setSliderPosition] = useState<
    SliderState['sliderPosition']
  >(0.5 * 0.25 + ((defaultValue - minValue) / (maxValue - minValue)) * 100);
  const [transform, setTransform] = useState<SliderState['transform']>(
    ((defaultValue - minValue) / (maxValue - minValue)) * 100,
  );

  function handleChange(event: any) {
    setSliderValue(event.target.value);
    moveSlider();
  }

  function calculateSliderPosition() {
    return (
      0.5 * 0.25 +
      ((sliderValue - minValue) / (maxValue - minValue)) * 100 -
      0.2
    );
  }

  function calculateTransform() {
    return ((sliderValue - minValue) / (maxValue - minValue)) * 100;
  }

  function moveSlider() {
    setSliderPosition(calculateSliderPosition());
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
  }

  return (
    <>
      <div style={{ position: 'relative' }}>
        <span
          className={'psm-input__slider-range--current'}
          style={{
            position: 'absolute',
            left: transform + '%',
            top: '-20px',
          }}
        >
          <span
            style={{
              position: 'relative',
              top: '4px',
              right: transform + '%',
              zIndex: 25,
              height: '20px',

              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            }}
          >
            {sliderValue}
          </span>
        </span>
        <span
          className={'psm-input__slider-range--low'}
          style={{ opacity: showMin ? 1 : 0 }}
        >
          {minValue}
        </span>
        <span
          className={'psm-input__slider-range--high'}
          style={{ opacity: showMax ? 1 : 0 }}
        >
          {maxValue}
        </span>
        <input
          id={`${testid}-slider`}
          data-testid={testid}
          max={`${maxValue}`}
          min={`${minValue}`}
          onChange={handleChange}
          onInput={handleChange}
          step={`${stepValue}`}
          type="range"
          value={`${sliderValue}`}
        />
        <div
          className={'psm-input__slider-right-side'}
          style={{
            width: 100 - sliderPosition + '%',
          }}
        />
      </div>
    </>
  );
};

export default Slider;
