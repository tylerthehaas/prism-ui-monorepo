import React from 'react';
import './hr.scss';

export type HRProps = {
  'data-testid'?: string;
};

export const HR = ({ 'data-testid': testid = '' }: HRProps) => {
  return <hr className="psm-hr" data-testid={testid} />;
};

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default HR;
