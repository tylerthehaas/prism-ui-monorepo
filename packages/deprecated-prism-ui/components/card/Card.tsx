import React from 'react';
import './card.scss';

interface CardProps {
  shadowType?: 'sm' | 'md' | 'lg';
  children?: any;
  'data-testid'?: string;
}

export const Card = ({
  shadowType = 'sm',
  children,
  'data-testid': testid = '',
}: CardProps) => (
  <div
    className={`psm-card psm-card--shadow-${shadowType}`}
    data-testid={testid}
  >
    {children}
  </div>
);
// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Card;
