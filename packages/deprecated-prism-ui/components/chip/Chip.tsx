import * as React from 'react';
import './chip.scss';

export type ChipProps = {
  label: string;
  selectAction(event: any): any;
  show?: boolean;
  isClosed?: boolean;
  closeAction(event: any): any;
  isSelected?: boolean;
  dataTestId?: String;
};
type ChipState = {
  show?: boolean;
  isSelected: boolean;
  isClosed: boolean;
  isFocused: number;
};

export default class Chip extends React.Component<ChipProps, ChipState> {
  constructor(props: ChipProps) {
    super(props);
    this.state = {
      show: this.props.show,
      isSelected: false,
      isClosed: false,
      isFocused: null,
    };
  }
  componentDidUpdate(prevState) {
    if (this.state.isClosed === prevState.isClosed) {
      this.setState({ isClosed: true });
    }
  }
  static defaultProps: ChipProps = {
    label: 'Empty Chip',
    selectAction: () => {
      alert('Chip selected');
    },
    show: true,
    isClosed: false,
    closeAction: () => alert('Chip Closed'),
    isSelected: false,
  };
  componentWillReceiveProps(props: ChipProps) {
    this.setState({ isClosed: props.isClosed });
  }

  handleClose() {
    this.setState({
      isClosed: true,
      show: false,
      isFocused: null,
    });
    this.props.closeAction(this.props.closeAction);
  }
  handleClick() {
    this.setState({ isSelected: true });
    this.props.selectAction(this.props.selectAction);
  }

  handleEnter = event => {
    if (event.charCode === 13) {
      if (this.state.isFocused === 0) {
        this.handleClick();
      } else if (this.state.isFocused === 1) {
        this.setState({
          isFocused: null,
        });
        this.handleClose();
      }
    }
  };
  componentDidMount() {
    document.addEventListener('keypress', this.handleEnter, false);
  }
  componentWillUnmount() {
    document.removeEventListener('keypress', this.handleEnter, false);
  }

  public render() {
    return (
      <>
        {this.state.show && (
          <div style={{ display: 'inline-block' }}>
            <div
              className={`psm-chip${this.state.isSelected ? '--selected' : ''}`}
            >
              <div
                aria-labelledby={this.props.label}
                data-testid={this.props.dataTestId}
                onBlur={() => this.setState({ isFocused: null })}
                onClick={() =>
                  this.state.isClosed && this.state.isSelected
                    ? this.setState({ isSelected: !this.state.isSelected })
                    : this.handleClick()
                }
                onFocus={() => this.setState({ isFocused: 0 })}
                style={{ display: 'inline-block' }}
                tabIndex={0}
              >
                {this.props.label}
              </div>
              <i
                aria-label={`Close ${this.props.label} chip`}
                className="psm-icon-simple-remove psm-chip__close"
                data-testid={`${this.props.dataTestId}-icon`}
                onBlur={() => this.setState({ isFocused: null })}
                onClick={() => this.handleClose()}
                onFocus={() => this.setState({ isFocused: 1 })}
                tabIndex={0}
              />
            </div>
          </div>
        )}
      </>
    );
  }
}
