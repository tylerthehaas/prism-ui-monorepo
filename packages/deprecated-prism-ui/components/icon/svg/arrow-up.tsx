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
        d="M15.108,12.41L8,6.317L0.892,12.41l-1.302-1.519l7.759-6.65c0.375-0.322,0.927-0.322,1.302,0l7.759,6.65 L15.108,12.41z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
