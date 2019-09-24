import React from 'react';

const SVG = ({
  fill = '#000',
  height = '16px',
  width = '14px',
  className = '',
  viewBox = '0 0 14 16',
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
    {/* Generator: Sketch 53.2 (72643) - https://sketchapp.com */}
    <title>Group 15</title>
    <desc>Created with Sketch.</desc>
    <g fill="none" fillRule="evenodd" id="Style" stroke="none" strokeWidth="1">
      <g
        id="1---Tanner-UI_Iconography"
        transform="translate(-961.000000, -359.000000)"
      >
        <g id="Group-15" transform="translate(956.000000, 355.000000)">
          <rect height="24" id="Rectangle-15-Copy-3" width="24" x="0" y="0" />
          <path
            d="M14,8 C14.6,8 15,8.4 15,9 L15,19 C15,19.6 14.6,20 14,20 L6,20 C5.4,20 5,19.6 5,19 L5,9 C5,8.4 5.4,8 6,8 L14,8 Z M13,17 L13,16 L7,16 L7,17 L13,17 Z M13,13 L13,12 L7,12 L7,13 L13,13 Z"
            fill={fill}
            id="Combined-Shape"
          />
          <path
            d="M18,4 L8,4 L8,6 L17,6 L17,17 L19,17 L19,5 C19,4.4 18.6,4 18,4 Z"
            fill={fill}
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
