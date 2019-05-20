import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  fill = '#000',
  height = '100%',
  width = '100%',
  className = '',
  viewBox = '0 0 20 16',
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
      <g
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-806 -597) translate(806 597)"
      >
        <path d="M15.7.3L4 12v4h4L19.7 4.3c.4-.4.4-1 0-1.4L17.1.3c-.4-.4-1-.4-1.4 0z" />
        <path d="M0 0h11v2H0z" />
        <path d="M0 4h6v2H0z" />
        <path d="M0 8h3v2H0z" />
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
