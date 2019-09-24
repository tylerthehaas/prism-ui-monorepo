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
      <path
        d="M1,0h14c0.552,0,1,0.448,1,1v10c0,0.552-0.448,1-1,1h-5l-6,4v-4H1c-0.552,0-1-0.448-1-1V1 C0,0.448,0.448,0,1,0z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
