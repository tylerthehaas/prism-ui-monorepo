import * as React from 'react';
import './spinner.scss';

export interface SpinnerProps {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  'data-testid'?: String;
}

export const Spinner = ({
  size = 'md',
  'data-testid': testid = 'spinner',
}: SpinnerProps) => (
  <div className={`psm-spinner--${size}`} data-testid={testid}>
    <div />
    <div />
    <div />
    <div />
  </div>
);

export default Spinner;
