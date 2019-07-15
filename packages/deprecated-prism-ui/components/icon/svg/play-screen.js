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
      <title>tech-16px_desktop</title>
      <g
        fill={fill}
        fillRule="evenodd"
        stroke="none"
        strokeWidth="1"
        transform="translate(-872 -725) translate(872 725)"
      >
        <path d="M15 0H1C.4 0 0 .4 0 1v11c0 .6.4 1 1 1h5v1H3v2h10v-2h-3v-1h5c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1zm-1 2v7H2V2h12z" />
        <path d="M6 3v5l5-2.5z" />
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
