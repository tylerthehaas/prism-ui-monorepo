import * as React from 'react';
import './radio.scss';

type RadioProps = {
  buttons: Array<{ text: string; onClick?(event: any): any; checked: boolean }>;
  onSelect(event: any): any;
  name: string;
  idPrefix: string;
};

type RadioState = {
  selectedOption?: number;
  isFocused: number;
  idPrefix: string;
  isTab: boolean;
};

export default class Radio extends React.Component<RadioProps, RadioState> {
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      selectedOption: 0,
      isFocused: null,
      isTab: false,
      idPrefix:
        this.props.idPrefix ||
        Math.random()
          .toString(36)
          .substring(7),
    };
  }
  handleClick = (button, idx) => event => this.select(button, idx, event);

  select = (button, idx, event) => {
    this.props.onSelect(event);
    button.onClick ? button.onClick() : null;
    this.setState({ selectedOption: idx, isTab: false });
  };

  handleEnter = event => {
    if (event.charCode === 13) {
      this.select(
        this.props.buttons[this.state.isFocused],
        this.state.isFocused,
        event,
      );
    }
  };

  handleTab = event => {
    if (event.keyCode === 9) {
      this.setState({ isTab: true });
    }
  };

  componentDidMount() {
    document.addEventListener('keypress', this.handleEnter, false);
    document.addEventListener('keydown', this.handleTab, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnter, false);
    document.removeEventListener('keydown', this.handleTab, false);
  }

  public render() {
    return (
      <div
        style={{
          width: 'fit-content',
          display: 'inline-block',
        }}
      >
        {this.props.buttons.map((b, index) => {
          return (
            <div
              key={index}
              onClick={() => this.handleClick(b, index)}
              onFocus={() => this.setState({ isFocused: index })}
              style={{
                width: 'fit-content',
                outline: this.state.isTab ? null : 'none',
              }}
              tabIndex={0}
            >
              <input
                checked={this.state.selectedOption === index}
                className="psm-radio"
                id={`${this.state.idPrefix}-${this.props.name}-${index}`}
                name={this.props.name}
                onChange={this.handleClick(b, index)}
                tabIndex={-1}
                type="radio"
              />
              <label
                aria-labelledby={b.text}
                className="psm-radio__label"
                id={`${this.state.idPrefix}-label-${index}`}
                onClick={this.handleClick(b, index)}
                style={{ outline: 'none' }}
                tabIndex={-1}
              >
                {b.text}
              </label>
            </div>
          );
        })}
      </div>
    );
  }
}
