import * as React from 'react';
import t from 'prop-types';

interface ThingProps {
  keyword: String;
}

const Thing: React.FC<ThingProps> = ({ keyword }) => {
  return (
    <span>
      the {keyword} taste like {keyword}
    </span>
  );
};

export default Thing;
