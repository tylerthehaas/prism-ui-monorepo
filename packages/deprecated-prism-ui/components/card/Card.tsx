import React, { ReactNode } from 'react';
import './card.scss';

interface CardProps {
  /** Determines the size of the shadow beneath the card */
  shadowType?: 'sm' | 'md' | 'lg';
  /** The content inside the card */
  children: ReactNode;
  'data-testid'?: string;
}

export const Card = ({
  shadowType = 'sm',
  children,
  'data-testid': testid = '',
}: CardProps) => (
  <div className={`psm-card--shadow-${shadowType}`} data-testid={testid}>
    {children}
  </div>
);
// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Card;
