import React from 'react';

const SVG = ({
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
    {/* Generator: Sketch 50 (54983) - http://www.bohemiancoding.com/sketch */}
    <title>Rectangle 29</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      fill="none"
      fillRule="evenodd"
      id="Symbols"
      stroke="none"
      strokeWidth="1"
    >
      <g
        fill="#FFFFFF"
        id="Country-List"
        stroke="#D4D4D4"
        transform="translate(-16.000000, -12.000000)"
      >
        <rect
          height="15"
          id="Rectangle-29"
          rx="3"
          width="15"
          x="16.5"
          y="12.5"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
