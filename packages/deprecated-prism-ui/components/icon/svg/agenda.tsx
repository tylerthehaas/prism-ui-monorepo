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
      <polygon
        data-color="color-2"
        fill={fill}
        points="13,3 13,11 16,11 16,0 5,0 5,3 "
      />
      <rect fill={fill} height="11" width="11" x="0" y="5" />
    </g>
  </svg>
);

export default SVG;
