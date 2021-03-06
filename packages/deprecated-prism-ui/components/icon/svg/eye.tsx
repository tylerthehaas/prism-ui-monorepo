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
        d="M8,14c4.707,0,7.744-5.284,7.871-5.508c0.171-0.304,0.172-0.676,0.001-0.98C15.746,7.287,12.731,2,8,2 C3.245,2,0.251,7.289,0.126,7.514c-0.169,0.303-0.168,0.672,0.002,0.975C0.254,8.713,3.269,14,8,14z M8,4 c2.839,0,5.036,2.835,5.818,4C13.034,9.166,10.837,12,8,12c-2.841,0-5.038-2.838-5.819-4.001C2.958,6.835,5.146,4,8,4z"
        fill={fill}
      />
      <circle cx="8" cy="8" data-color="color-2" fill={fill} r="2" />
    </g>
  </svg>
);

export default SVG;
