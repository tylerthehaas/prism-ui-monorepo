import * as React from 'react';
import './spinner.scss';

export type SpinnerProps = {
  size: sizes;
  dataTestId?: String;
};

export enum sizes {
  'xl',
  'xs',
  'lg',
  'md',
  'sm',
}

export default class Spinner extends React.Component<SpinnerProps> {
  constructor(props: SpinnerProps) {
    super(props);
    this.state = {
      size: this.props.size,
    };
  }

  componentWillReceiveProps(props: SpinnerProps) {
    this.setState({ size: props.size });
  }

  public render() {
    return (
      <div
        className={`psm-spinner--${this.props.size}`}
        data-testid={this.props.dataTestId}
      >
        <div />
        <div />
        <div />
        <div />
      </div>
    );
  }
}
