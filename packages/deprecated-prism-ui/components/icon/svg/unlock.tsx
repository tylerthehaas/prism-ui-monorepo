import React from 'react';

const SVG = ({
  fill = '#000',
  height = '100%',
  width = '100%',
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
    <g fill="none" fillRule="evenodd" id="Page-1" stroke="none" strokeWidth="1">
      <g
        fill={fill}
        fillRule="nonzero"
        id="ECARD-EXTRA-LONG-PARAGRAPH-STATE"
        transform="translate(-874.000000, -508.000000)"
      >
        <g id="Group-6" transform="translate(857.000000, 491.000000)">
          <g
            id="ui-16px-1_lock-open"
            transform="translate(17.000000, 17.000000)"
          >
            <path
              d="M0,15 C0,15.6 0.4,16 1,16 L13,16 C13.6,16 14,15.6 14,15 L14,6 C14,5.4 13.6,5 13,5 L11,5 L5,5 L5,4 C5,2.9 5.9,2 7,2 C7.6,2 8.1,2.2 8.5,2.7 L9.2,3.4 L10.7,2.1 L10,1.3 C9.2,0.5 8.1,0 7,0 C4.8,0 3,1.8 3,4 L3,5 L1,5 C0.4,5 0,5.4 0,6 L0,15 Z M7,8 C8.1,8 9,8.9 9,10 C9,10.7 8.6,11.4 8,11.7 L8,13 L6,13 L6,11.7 C5.4,11.4 5,10.7 5,10 C5,8.9 5.9,8 7,8 Z"
              id="Shape"
            />
          </g>
        </g>
      </g>
    </g>
  </svg>
);


export default SVG;
