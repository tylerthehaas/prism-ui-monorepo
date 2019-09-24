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
        d="M15,7H1C0.4,7,0,7.4,0,8s0.4,1,1,1h14c0.6,0,1-0.4,1-1S15.6,7,15,7z"
        data-color="color-2"
        fill={fill}
      />
      <path
        d="M15,1H1C0.4,1,0,1.4,0,2s0.4,1,1,1h14c0.6,0,1-0.4,1-1S15.6,1,15,1z"
        fill={fill}
      />
      <path
        d="M15,13H1c-0.6,0-1,0.4-1,1s0.4,1,1,1h14c0.6,0,1-0.4,1-1S15.6,13,15,13z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
