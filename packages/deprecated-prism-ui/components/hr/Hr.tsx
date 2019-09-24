import React from 'react';
import './hr.scss';

export type HRProps = {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
};

export const HR = ({ className = '', 'data-testid': testid = '' }: HRProps) => (
  <hr className={`psm-hr ${className}`} data-testid={testid} />
);

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default HR;
