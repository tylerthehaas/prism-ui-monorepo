import React, { SFC } from 'react';

interface ThingProps {
  /** word to interpolate */
  keyword: string;
}

export const Thing: SFC<ThingProps> = ({ keyword }) => (
  <div className="alert">
    the {keyword} taste like {keyword}
  </div>
);
