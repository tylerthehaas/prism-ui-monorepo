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
    <title>Group 9</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <rect height="16" id="path-1" rx="3" width="16" x="0" y="0" />
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      id="Data-Export-Utility"
      stroke="none"
      strokeWidth="1"
    >
      <g id="Group-9">
        <g id="Rectangle-29">
          <use fill="#FFFFFF" xlinkHref="#path-1" />
          <use fill="#0078D3" xlinkHref="#path-1" />
        </g>
        <path
          d="M12.3,4.3 L7,9.6 L4.7,7.3 C4.3,6.9 3.7,6.9 3.3,7.3 C2.9,7.7 2.9,8.3 3.3,8.7 L6.3,11.7 C6.5,11.9 6.7,12 7,12 C7.3,12 7.5,11.9 7.7,11.7 L13.7,5.7 C14.1,5.3 14.1,4.7 13.7,4.3 C13.3,3.9 12.7,3.9 12.3,4.3 Z"
          fill="#FFFFFF"
          id="Shape"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
