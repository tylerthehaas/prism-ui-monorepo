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
        d="M5,5v4c0,1.7,1.3,3,3,3s3-1.3,3-3V4.5C11,2,9,0,6.5,0S2,2,2,4.5V10c0,3.3,2.7,6,6,6s6-2.7,6-6V4h-2v6 c0,2.2-1.8,4-4,4s-4-1.8-4-4V4.5C4,3.1,5.1,2,6.5,2S9,3.1,9,4.5V9c0,0.6-0.4,1-1,1S7,9.6,7,9V5H5z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
