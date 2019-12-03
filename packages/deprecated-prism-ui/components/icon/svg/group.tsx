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
      <path d="M8,6L8,6C6.3,6,5,4.7,5,3v0c0-1.7,1.3-3,3-3h0c1.7,0,3,1.3,3,3v0C11,4.7,9.7,6,8,6z">
        {' '}
        fill=
        {fill}
      </path>
      <polygon
        fill={fill}
        points="10,16 6,16 6,12 4,10 4,7 12,7 12,10 10,12 "
      />
      <path
        d="M2,5L2,5C0.9,5,0,4.1,0,3v0c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v0C4,4.1,3.1,5,2,5z"
        data-color="color-2"
        fill={fill}
      />
      <polygon
        data-color="color-2"
        fill={fill}
        points="3,10.4 3,6 0,6 0,9 1,10 1,14 4,14 4,11.4 "
      />
      <path
        d="M14,5L14,5c1.1,0,2-0.9,2-2v0c0-1.1-0.9-2-2-2h0c-1.1,0-2,0.9-2,2v0C12,4.1,12.9,5,14,5z"
        data-color="color-2"
        fill={fill}
      />
      <polygon
        data-color="color-2"
        fill={fill}
        points="13,10.4 13,6 16,6 16,9 15,10 15,14 12,14 12,11.4 "
      />
    </g>
  </svg>
);

export default SVG;
