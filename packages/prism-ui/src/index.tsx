import * as React from 'react';

interface ThingProps {
  /** keyword to use in span */
  keyword: string;
}

function Thing({ keyword }: ThingProps) {
  return (
    <span>
      the {keyword} taste like {keyword}
    </span>
  );
}

// @component
export default Thing;
