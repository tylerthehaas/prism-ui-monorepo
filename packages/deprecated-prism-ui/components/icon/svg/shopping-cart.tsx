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
        d="M15,3H4.5L4,0.8C3.9,0.3,3.5,0,3,0H0v2h2.2L4,10.2C4.1,10.7,4.5,11,5,11h8c0.4,0,0.8-0.3,0.9-0.7l2-6 C16.1,3.8,15.8,3,15,3z"
        fill={fill}
      />
      <circle cx="5" cy="14" data-color="color-2" fill={fill} r="2" />
      <circle cx="13" cy="14" data-color="color-2" fill={fill} r="2" />
    </g>
  </svg>
);


export default SVG;
