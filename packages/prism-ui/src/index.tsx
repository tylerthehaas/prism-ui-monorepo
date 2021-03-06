import * as React from 'react';

interface ThingProps {
  /** word to interpolate */
  keyword: string;
}

export const Thing: React.FC<ThingProps> = ({ keyword }) => (
  <div className="alert">
    the {keyword} taste like {keyword}
  </div>
);
