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
    {/* Generator: Sketch 52.4 (67378) - http://www.bohemiancoding.com/sketch */}
    <title>Product_Roadmap</title>
    <desc>Created with Sketch.</desc>
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g id="Product_Roadmap" transform="translate(-4.000000, -4.000000)">
        <rect height="24" id="Rectangle" width="24" x="0" y="0" />
        <path
          d="M12,4 C7.6,4 4,7.6 4,12 C4,16.4 7.6,20 12,20 C16.4,20 20,16.4 20,12 C20,7.6 16.4,4 12,4 Z M12,14 C10.9,14 10,13.1 10,12 C10,10.9 10.9,10 12,10 C13.1,10 14,10.9 14,12 C14,13.1 13.1,14 12,14 Z M12,6 C12.9,6 13.8,6.2 14.6,6.6 L13.044,8.156 C12.283,7.949 11.717,7.949 10.955,8.156 L9.4,6.6 C10.2,6.2 11.1,6 12,6 Z M6,12 C6,11.1 6.2,10.2 6.6,9.4 L8.156,10.956 C7.949,11.717 7.949,12.283 8.156,13.045 L6.6,14.6 C6.2,13.8 6,12.9 6,12 Z M12,18 C11.1,18 10.2,17.8 9.4,17.4 L10.956,15.844 C11.717,16.051 12.283,16.051 13.045,15.844 L14.6,17.4 C13.8,17.8 12.9,18 12,18 Z M17.4,14.6 L15.844,13.044 C16.051,12.283 16.051,11.717 15.844,10.955 L17.4,9.4 C17.8,10.2 18,11.1 18,12 C18,12.9 17.8,13.8 17.4,14.6 Z"
          fill={fill}
          id="Shape"
        />
      </g>
    </g>
  </svg>
);

export default SVG;
