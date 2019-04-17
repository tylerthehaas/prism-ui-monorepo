import * as React from "react";
import { number } from "prop-types";

type RadioProps = {
  buttons: Array<{ text: string; action?(event: any): any; checked: boolean }>;
  onSelect(event: any): any;
  name: string;
  idPrefix: string;
};

type RadioState = {
  selectedOption?: number;
  isFocused: number;
  idPrefix: string;
};

export class Radio extends React.Component<RadioProps, RadioState> {
  constructor(props: RadioProps) {
    super(props);
    this.state = {
      selectedOption: 0,
      isFocused: null,
      idPrefix: Math.random()
        .toString(36)
        .substring(7),
    };
  }
  handleClick = (button, idx) => event => {
    this.props.onSelect(event);
    button.action;
    this.setState({ selectedOption: idx });
  };

  handleEnter = event => {
    if (event.charCode === 13) {
      this.setState({ selectedOption: this.state.isFocused });
    }
  };
  componentDidMount() {
    document.addEventListener("keypress", this.handleEnter, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keypress", this.handleEnter, false);
  }

  public render() {
    return (
      <>
        <div>
          {this.props.buttons.map((b, index) => {
            return (
              <div
                id={`radio-div-${index}`}
                key={index}
                onFocus={() => this.setState({ isFocused: index })}
                style={{ width: "fit-content", display: "inline-block" }}
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
                  id={`${this.state.idPrefix}-label${index}`}
                  tabIndex={-1}
                >
                  {b.text}
                </label>
                {index !== this.props.buttons.length - 1 && <br />}
              </div>
            );
          })}
        </div>
      </>
    );
  }
}
