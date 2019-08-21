import * as React from 'react';
import './spinner.scss';

export interface SpinnerProps {
  size?:
    | 'extra-small'
    | 'xs'
    | 'small'
    | 'sm'
    | 'medium'
    | 'md'
    | 'large'
    | 'lg'
    | 'extra-large'
    | 'xl';
  'data-testid'?: String;
}

function spinnerSize(size: string) {
  switch (size) {
    case 'extra-small' || 'xs':
      return 'xs';
    case 'small' || 'sm':
      return 'sm';
    case 'medium' || 'md':
      return 'md';
    case 'large' || 'lg':
      return 'lg';
    case 'extra-large' || 'xl':
      return 'xl';
    default:
      return 'md';
  }
}

export const Spinner = ({
  size = 'md',
  'data-testid': testid = '',
}: SpinnerProps) => (
    <div className={`psm-spinner--${spinnerSize(size)}`} data-testid={testid}>
      <div />
      <div />
      <div />
      <div />
    </div>
  );

export default Spinner;
