import React from 'react';

const SVG = ({
  fill = '#000',
  height = '100%',
  width = '100%',
  className = '',
  viewBox = '0 0 16 16',
}) => (
  <svg
    className={className}
    focusable="false"
    height={height}
    version="1.1"
    viewBox={viewBox}
    width={width}
    x="0px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    y="0px"
  >
    <g className="nc-icon-wrapper" fill={fill}>
      <polygon
        fill={fill}
        points="1.3,6.7 2.7,8.1 7,3.8 7,16 9,16 9,3.8 13.3,8.1 14.7,6.7 8,0 "
      />
    </g>
  </svg>
);

export default SVG;
