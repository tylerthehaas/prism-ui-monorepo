import * as React from "react";

export type CardProps = {
  shadowType?: string;
  children?: any;
  dataTestId?: String;
};

export class Card extends React.Component<CardProps> {
  constructor(props: CardProps) {
    super(props);
    this.state = {
      shadowType: this.props.shadowType,
    };
  }

  componentWillReceiveProps(props: CardProps) {
    this.setState({ shadowType: props.shadowType });
  }
  getShadowType() {
    if (this.props.shadowType === "sm") {
      return 1;
    }
    if (this.props.shadowType === "md") {
      return 2;
    }
    if (this.props.shadowType === "lg") {
      return 3;
    }
  }

  public render() {
    return (
      <>
        <div
          className={`psm-card psm-card--shadow-${this.getShadowType() || 1}`}
          data-testid={this.props.dataTestId}
          tabIndex={0}
        >
          {this.props.children}
        </div>
      </>
    );
  }
}
