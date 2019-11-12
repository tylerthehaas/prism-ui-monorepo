import * as React from 'react';

interface ThingProps {
  /** keyword to use in span */
  keyword: string;
}
// Delete me
const Thing: React.FC<ThingProps> = ({ keyword }: ThingProps) => (
  <span>
    the {keyword} taste like {keyword}
  </span>
);

// @component
export default Thing;
