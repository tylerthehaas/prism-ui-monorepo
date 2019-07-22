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
      <path
        d="M15.144,5.438l-4.316-0.627L8.897,0.9c-0.338-0.683-1.456-0.683-1.794,0l-1.93,3.911L0.856,5.438 C0.039,5.557-0.292,6.565,0.302,7.145l3.124,3.044l-0.737,4.299c-0.139,0.814,0.717,1.439,1.451,1.054L8,13.513l3.861,2.03 c0.728,0.381,1.591-0.234,1.451-1.054l-0.737-4.299l3.124-3.044C16.292,6.565,15.961,5.557,15.144,5.438z"
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
