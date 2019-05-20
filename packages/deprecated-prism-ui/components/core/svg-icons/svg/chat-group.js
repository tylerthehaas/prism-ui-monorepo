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
    focusable="true"
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
      <path
        d="M15,4h-1v6c0,0.552-0.448,1-1,1H6.828L5,13h5l3,3v-3h2c0.552,0,1-0.448,1-1V5 C16,4.448,15.552,4,15,4z"
        data-color="color-2"
        fill={fill}
      />
      <path
        d="M1,0h10c0.552,0,1,0.448,1,1v7c0,0.552-0.448,1-1,1H6l-3,3V9H1C0.448,9,0,8.552,0,8V1C0,0.448,0.448,0,1,0z"
        fill={fill}
      />
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
