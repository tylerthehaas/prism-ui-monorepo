import * as React from "react";

type RolloverProps = {
  position: string;
  content: Array<{ text: string }>;
  numShown: number;
  hoverText: string;
  dotted: boolean;
  underline: boolean;
  idPrefix: string;
};

type RolloverState = {
  hovered: boolean;
  position: string;
  extra: Array<any>;
  clicked: boolean;
  escaped: boolean;
  idPrefix: string;
};

export class Rollover extends React.Component<RolloverProps, RolloverState> {
  constructor(props: RolloverProps) {
    super(props);
    this.state = {
      hovered: false,
      position: this.props.position,
      extra: [],
      clicked: false,
      escaped: false,
      idPrefix: Math.random()
        .toString(36)
        .substring(7),
    };
    this.handleHover = this.handleHover.bind(this);
    this.handleLeave = this.handleLeave.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  componentWillReceiveProps(props: RolloverProps) {
    this.setState({ position: props.position });
    console.log(props);
  }

  handleHover = () => {
    this.setState({
      hovered: true,
    });
  };

  handleLeave = () => {
    this.setState({
      hovered: false,
      clicked: false,
    });
  };

  static defaultProps: RolloverProps = {
    position: "up",
    content: [
      { text: "John Smith" },
      { text: "Jane Smith" },
      { text: "John Doe" },
      { text: "Jane Doe" },
    ],
    numShown: 4,
    hoverText: "Hover over me!",
    dotted: true,
    underline: false,
    idPrefix: null,
  };

  handleMore() {
    let moreClass = [];
    this.props.content.map((c, index) => {
      if (index >= this.props.numShown) {
        moreClass.push(<li key={index}>{c.text}</li>);
      }
    });
    this.setState({ clicked: true });
    this.setState({
      extra: moreClass,
    });
  }

  displayRollover() {
    let rollClass = [];
    let more = 0;
    let extra = false;
    this.props.content.map((c, index) => {
      if (index < this.props.numShown) {
        rollClass.push(<li key={index}>{c.text}</li>);
      } else {
        more = more + 1;
        extra = true;
      }
    });
    extra && !this.state.clicked
      ? rollClass.push(
          <div
            className="psm-rollover__footer"
            key={"extra"}
            onClick={() => this.handleMore()}
          >
            +{more} More
          </div>,
        )
      : "";
    return rollClass;
  }

  escFunction(event) {
    if (event.keyCode === 27) {
      document.getElementById(`${this.state.idPrefix}-rollover-div`).blur();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  handleOptions() {
    if (!this.props.dotted && !this.props.underline) {
      return "";
    } else if (this.props.dotted) {
      return "psm-rollover psm-rollover__text psm-rollover__text-dotted";
    } else if (this.props.underline) {
      return "psm-rollover psm-rollover__text psm-rollover__text-underline";
    }
  }

  public render() {
    return (
      <div>
        <div
          className="psm-rollover"
          id={`${this.state.idPrefix}-rollover-div`}
          onBlur={this.handleLeave}
          onFocus={!this.state.escaped && this.handleHover}
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleLeave}
          style={{ width: "fit-content" }}
          tabIndex={0}
        >
          <span className={`${this.handleOptions()}`}>
            {this.props.hoverText}
          </span>
          <div>
            <div
              className={` psm-rollover__window--${
                this.state.hovered ? "show" : "hide"
              } psm-rollover__window--${this.props.position}`}
            >
              <ul>
                {this.displayRollover()}
                {!this.state.clicked ? "" : this.state.extra}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
