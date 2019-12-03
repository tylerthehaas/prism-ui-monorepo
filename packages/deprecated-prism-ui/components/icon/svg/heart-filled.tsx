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
        d="M11.6,0C10.1,0,8.8,0.8,8,2C7.2,0.8,5.9,0,4.4,0C2,0,0,2,0,4.4c0,4.4,8,10.9,8,10.9s8-6.5,8-10.9 C16,2,14,0,11.6,0z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
