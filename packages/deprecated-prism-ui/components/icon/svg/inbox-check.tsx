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
        d="M15,0H1C0.4,0,0,0.4,0,1v14c0,0.6,0.4,1,1,1h14c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z M14,2v9h-3 c-0.6,0-1,0.4-1,1v1H6v-1c0-0.6-0.4-1-1-1H2V2H14z"
        fill={fill}
      />
      <path
        d="M6.3,9.7c0.5,0.5,1,0.4,1.4,0l4-4c0.4-0.4,0.4-1,0-1.4c-0.4-0.4-1-0.4-1.4,0L7,7.6L5.7,6.3 c-0.4-0.4-1-0.4-1.4,0c-0.4,0.4-0.4,1,0,1.4L6.3,9.7z"
        data-color="color-2"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
