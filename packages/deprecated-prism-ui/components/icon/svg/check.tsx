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
        d="M14.3,2.3L5,11.6L1.7,8.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l4,4C4.5,13.9,4.7,14,5,14s0.5-0.1,0.7-0.3 l10-10c0.4-0.4,0.4-1,0-1.4S14.7,1.9,14.3,2.3z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
