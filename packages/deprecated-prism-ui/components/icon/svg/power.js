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
    <g className="nc-icon-wrapper" fill={fill}>
      <title>media-16px-1_button-power</title>
      <g
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-1193 -725) translate(1193 725)"
      >
        <path d="M6 0h2v6H6z" />
        <path d="M11.7 3.8c-.4-.4-1-.3-1.4.1-.4.4-.3 1 .1 1.4 1 .9 1.6 2.3 1.6 3.7 0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.4.6-2.8 1.7-3.7.4-.4.4-1 .1-1.4-.4-.4-1-.4-1.4-.1C.9 5.1 0 7 0 9c0 3.9 3.1 7 7 7s7-3.1 7-7c0-2-.8-3.9-2.3-5.2z" />
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
