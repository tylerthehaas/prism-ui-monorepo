import * as React from 'react';
import '../input/input.scss';

export type SelectProps = {
  dropdown?: boolean;
  radio?: boolean;
  content: Array<{ text: string }>;
  onClick(event: any): any;
  dataTestId?: String;
};
type SelectState = {
  active: Array<number>;
  radioActive: number;
  dropdown?: boolean;
  radio?: boolean;
  isFocused: number;
  isTab: boolean;
};

export default class Select extends React.Component<SelectProps, SelectState> {
  constructor(props: SelectProps) {
    super(props);
    this.state = {
      active: [],
      radioActive: null,
      dropdown: this.props.dropdown,
      radio: this.props.radio,
      isFocused: null,
      isTab: false,
    };
  }
  static defaultProps: SelectProps = {
    dropdown: false,
    radio: true,
    content: [
      { text: 'Option 1' },
      { text: 'Option 2' },
      { text: 'Option 3' },
      { text: 'Option 4' },
    ],
    onClick: () => {
      console.log('Selected');
    },
  };
  componentWillReceiveProps(props: SelectProps) {
    this.setState({ dropdown: props.dropdown, radio: props.radio });
  }

  findClassName() {
    if (!this.props.dropdown && this.props.radio) {
      return 'psm-multi-select--radio';
    }
  }
  handleDropDown(index) {
    if (index === 0) {
      return (
        <select
          className="psm-input psm-select"
          data-testid={this.props.dataTestId}
          key={`select${index}`}
          onChange={this.props.onClick}
          onFocus={() =>
            this.setState({ isFocused: this.props.content.length + 1 })
          }
          tabIndex={0}
        >
          {this.props.content.map((t, index) => {
            return (
              <option
                data-testid={`${this.props.dataTestId}-option-${index}`}
                key={index}
              >
                {t.text}
              </option>
            );
          })}
        </select>
      );
    }
  }

  handleTab = event => {
    if (event.keyCode === 9) {
      this.setState({ isTab: true });
    }
  };

  handleEnter = event => {
    if (event.charCode === 13) {
      this.handleClick(this.state.isFocused)(event);
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

  handleClick = i => event => {
    let temp = this.state.active;

    let indexValue = temp.indexOf(i);
    if (!this.props.radio && !this.props.dropdown) {
      if (indexValue > -1) {
        temp.splice(indexValue, 1);
      } else {
        temp.push(i);
        this.props.onClick(event);
      }
    } else if (!this.props.dropdown) {
      if (this.state.radioActive === i) {
        this.setState({ radioActive: null });
      } else {
        this.setState({ radioActive: i });
        this.props.onClick(event);
      }
    }

    this.setState({ active: temp });
    if (this.props.dropdown) {
      this.props.onClick(event);
    }
    this.setState({ isTab: false });
  };

  public render() {
    return (
      <>
        <div>
          {this.props.content.map((t, index) => {
            return !this.props.dropdown ? (
              <div
                className={`psm-multi-select${
                  this.state.active.indexOf(index) > -1 ||
                  index === this.state.radioActive
                    ? '--selected '
                    : ' '
                }${this.findClassName()}`}
                data-testid={`${this.props.dataTestId}-option-${index}`}
                id={`option-${index}`}
                key={`div${index}`}
                onBlur={() => this.setState({ isFocused: null })}
                onClick={this.handleClick(index)}
                onFocus={() => this.setState({ isFocused: index })}
                style={{ outline: this.state.isTab ? null : 'none' }}
                tabIndex={0}
              >
                {t.text}
              </div>
            ) : (
              this.handleDropDown(index)
            );
          })}
        </div>
      </>
    );
  }
}
