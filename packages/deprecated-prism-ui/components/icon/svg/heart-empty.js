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
        d="M7.4,15.5C6.6,14.8,0,9.3,0,5.1c0-2.7,2.2-4.8,4.8-4.8C6,0.3,7.1,0.8,8,1.5c0.9-0.8,2-1.2,3.2-1.2 c2.7,0,4.8,2.2,4.8,4.8c0,4.2-6.6,9.7-7.4,10.3C8.3,15.8,7.7,15.8,7.4,15.5z M4.8,2.3C3.3,2.3,2,3.6,2,5.1c0,2.2,3.5,6,6,8.2 c2.1-1.9,6-5.8,6-8.2c0-1.6-1.3-2.8-2.8-2.8c-0.9,0-1.8,0.5-2.3,1.3c-0.4,0.6-1.3,0.6-1.7,0C6.6,2.8,5.8,2.3,4.8,2.3z"
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
