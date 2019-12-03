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
      <title>chat-45</title>
      <path
        d="M15.25.75H.75v10.5h3.333v3.25l4.334-3.25h6.833V.75z"
        fill="none"
        fillRule="nonzero"
        stroke={fill}
        strokeWidth="1.5"
        transform="translate(-1024 -479) translate(1020 475) translate(4 4)"
      />
    </g>
  </svg>
);

export default SVG;
