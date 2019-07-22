import React from 'react';
import PropTypes from 'prop-types';

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
    {/* Generator: Sketch 49.1 (51147) - http://www.bohemiancoding.com/sketch */}
    <title>Page 1</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <polygon id="path-1" points="0 0.0002 12 0.0002 12 16 0 16" />
    </defs>
    <g fill="none" fillRule="evenodd" id="Style" stroke="none" strokeWidth="1">
      <g
        id="1---Tanner-UI_Iconography"
        transform="translate(-824.000000, -671.000000)"
      >
        <g id="Page-1" transform="translate(824.000000, 671.000000)">
          <mask fill={fill} id="mask-2">
            <use xlinkHref="#path-1" />
          </mask>
          <g id="Clip-2" />
          <path
            d="M10,12.7642 L6,10.7642 L2.001,12.7632 L2.006,2.0002 L10,2.0002 L10,12.7642 Z M10,0.0002 L2,0.0002 C0.9,0.0002 0,0.9002 0,2.0002 L0,16.0002 L6,13.0002 L12,16.0002 L12,2.0002 C12,0.9002 11.1,0.0002 10,0.0002 Z"
            fill={fill}
            id="Fill-1"
            mask="url(#mask-2)"
          />
        </g>
      </g>
    </g>
  </svg>
);

SVG.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SVG;
