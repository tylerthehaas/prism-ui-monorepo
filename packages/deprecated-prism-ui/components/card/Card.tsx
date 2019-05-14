import * as React from 'react';
import './card.scss';

export type CardProps = {
  shadowType?: string;
  children?: any;
  dataTestId?: String;
};

type CardState = {
  shadowType: string;
};

const shadowTypes = {
  sm: 1,
  md: 2,
  lg: 3,
  small: 1,
  medium: 2,
  large: 3,
};

export default class Card extends React.Component<CardProps, CardState> {
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
    return shadowTypes[this.state.shadowType];
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
