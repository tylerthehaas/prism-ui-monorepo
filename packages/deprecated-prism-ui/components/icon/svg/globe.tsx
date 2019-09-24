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
    {/* Generator: Sketch 49 (51002) - http://www.bohemiancoding.com/sketch */}
    <title>globe</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g fill="none" fillRule="evenodd" id="Style" stroke="none" strokeWidth="1">
      <g
        fill={fill}
        fillRule="nonzero"
        id="1---Tanner-UI_Iconography"
        transform="translate(-1009.000000, -741.000000)"
      >
        <g id="globe" transform="translate(1009.000000, 741.000000)">
          <path
            d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M13.9,7 L12,7 C11.9,5.5 11.6,4.1 11.2,2.9 C12.6,3.8 13.6,5.3 13.9,7 Z M8,14 C7.4,14 6.2,12.1 6,9 L10,9 C9.8,12.1 8.6,14 8,14 Z M6,7 C6.2,3.9 7.3,2 8,2 C8.7,2 9.8,3.9 10,7 L6,7 Z M4.9,2.9 C4.4,4.1 4.1,5.5 4,7 L2.1,7 C2.4,5.3 3.4,3.8 4.9,2.9 Z M2.1,9 L4,9 C4.1,10.5 4.4,11.9 4.8,13.1 C3.4,12.2 2.4,10.7 2.1,9 Z M11.1,13.1 C11.6,11.9 11.8,10.5 11.9,9 L13.8,9 C13.6,10.7 12.6,12.2 11.1,13.1 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
