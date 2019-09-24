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
        d="M13,7.1c0,0,0-0.1,0-0.1c0-2.8-2.2-5-5-5C5.5,2,3.4,3.8,3.1,6.3C1.3,6.9,0,8.5,0,10.5C0,13,2,15,4.5,15 c1.7,0,5.9,0,7.5,0c2.2,0,4-1.8,4-4C16,9.1,14.7,7.6,13,7.1z M8,13L4,9h3V6h2v3h3L8,13z"
        fill={fill}
      />
    </g>
  </svg>
);

export default SVG;
