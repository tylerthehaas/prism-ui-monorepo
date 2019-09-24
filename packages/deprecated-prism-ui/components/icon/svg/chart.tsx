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
        d="M9,0H7C6.4,0,6,0.4,6,1v14c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V1C10,0.4,9.6,0,9,0z"
        fill={fill}
      />
      <path
        d="M3,10H1c-0.6,0-1,0.4-1,1v4c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1v-4C4,10.4,3.6,10,3,10z"
        data-color="color-2"
        fill={fill}
      />
      <path
        d="M15,5h-2c-0.6,0-1,0.4-1,1v9c0,0.6,0.4,1,1,1h2c0.6,0,1-0.4,1-1V6C16,5.4,15.6,5,15,5z"
        data-color="color-2"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
