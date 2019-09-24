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
        d="M15,2h-2V0h-2v2H5V0H3v2H1C0.448,2,0,2.448,0,3v2h16V3C16,2.448,15.552,2,15,2z"
        data-color="color-2"
        fill={fill}
      />
      <path
        d="M0,6v9c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V6H0z M11,12H9v2H7v-2H5v-2h2V8h2v2h2V12z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
