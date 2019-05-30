import * as React from 'react';

export type SliderProps = {
  defaultValue: number;
  minValue: number;
  maxValue: number;
  stepValue: number;
  idPrefix: string;
};
export type SliderState = {
  value: number;
  disappear: boolean;
  percentageValue: number;
  sx: number;
  transform: number;
  idPrefix: string;
  minValue: number;
  maxValue: number;
  stepValue: number;
  showMin: boolean;
  showMax: boolean;
};

export default class Slider extends React.Component<SliderProps, SliderState> {
  constructor(props: SliderProps) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
      disappear: true,
      percentageValue: this.props.maxValue / 100,
      sx:
        0.5 * 0.25 +
        ((this.props.defaultValue - this.props.minValue) /
          (this.props.maxValue - this.props.minValue)) *
          100 -
        0.2,
      transform:
        ((this.props.defaultValue - this.props.minValue) /
          (this.props.maxValue - this.props.minValue)) *
        100,
      idPrefix:
        this.props.idPrefix ||
        Math.random()
          .toString(36)
          .substring(7),
      minValue: this.props.minValue,
      maxValue: this.props.maxValue,
      stepValue: this.props.stepValue,
      showMin: true,
      showMax: true,
    };
  }

  componentWillReceiveProps(props: SliderProps) {
    this.setState({
      value: props.defaultValue,
      minValue: props.minValue,
      maxValue: props.maxValue,
      stepValue: props.stepValue,
    });
    this.moveStuff({ target: { value: props.defaultValue } });
  }

  handleChange = event => {
    this.setState({ value: Number(event.target.value) });
    this.moveStuff(event);
  };

  moveStuff = event => {
    this.setState({
      sx:
        0.5 * 0.25 +
        ((event.target.value - this.state.minValue) /
          (this.state.maxValue - this.state.minValue)) *
          100 -
        0.2,
    });
    this.setState({
      transform:
        ((event.target.value - this.state.minValue) /
          (this.state.maxValue - this.state.minValue)) *
        100,
    });
    if (
      Math.floor(
        0.5 * 0.25 +
          ((event.target.value - this.state.minValue) /
            (this.state.maxValue - this.state.minValue)) *
            100 -
          0.25 -
          1,
      ) <= Math.ceil(this.state.minValue / this.state.maxValue)
    ) {
      this.setState({ showMin: false });
    } else {
      this.setState({ showMin: true });
    }
    if (
      Math.floor(
        0.5 * 0.25 +
          ((event.target.value - this.state.minValue) /
            (this.state.maxValue - this.state.minValue)) *
            100 -
          0.25 +
          1,
      ) >=
      100 - this.state.maxValue.toString().length
    ) {
      this.setState({ showMax: false });
    } else {
      this.setState({ showMax: true });
    }
  };

  public render() {
    return (
      <>
        <div style={{ position: 'relative' }}>
          <span
            className={'psm-input__slider-range--current'}
            style={{
              position: 'absolute',
              left: this.state.transform + '%',
              top: '-20px',
            }}
          >
            <span
              style={{
                position: 'relative',
                top: '4px',
                right: this.state.transform + '%',
                zIndex: 25,
                height: '20px',

                backgroundColor: 'rgba(255, 255, 255, 0.8)',
              }}
            >
              {this.state.value}
            </span>
          </span>
          <span
            className={'psm-input__slider-range--low'}
            style={{ opacity: this.state.showMin ? 1 : 0 }}
          >
            {this.state.minValue}
          </span>
          <span
            className={'psm-input__slider-range--high'}
            style={{ opacity: this.state.showMax ? 1 : 0 }}
          >
            {this.state.maxValue}
          </span>
          <input
            id={`${this.state.idPrefix}-slider`}
            max={`${this.state.maxValue}`}
            min={`${this.state.minValue}`}
            onChange={this.handleChange}
            onInput={this.handleChange}
            step={`${this.state.stepValue}`}
            type="range"
            value={`${this.state.value}`}
          />
          <div
            className={'psm-input__slider-right-side'}
            style={{
              width: 100 - this.state.sx + '%',
            }}
          />
        </div>
      </>
    );
  }
}
