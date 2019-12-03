import * as React from 'react';
import './spinner.scss';

export interface SpinnerProps {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: String;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export default ({
  className = '',
  'data-testid': testid = 'spinner',
  size = 'md',
}: SpinnerProps) => (
  <div className={`psm-spinner--${size} ${className}`} data-testid={testid}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
