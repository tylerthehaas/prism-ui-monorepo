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
        d="M8,0C3.6,0,0,3.6,0,8c0,4.4,3.6,8,8,8s8-3.6,8-8C16,3.6,12.4,0,8,0z M8,10c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2 s2,0.9,2,2C10,9.1,9.1,10,8,10z M8,2c0.9,0,1.8,0.2,2.6,0.6L9.044,4.156c-0.761-0.207-1.327-0.207-2.089,0L5.4,2.6 C6.2,2.2,7.1,2,8,2z M2,8c0-0.9,0.2-1.8,0.6-2.6l1.556,1.556c-0.207,0.761-0.207,1.327,0,2.089L2.6,10.6C2.2,9.8,2,8.9,2,8z M8,14 c-0.9,0-1.8-0.2-2.6-0.6l1.556-1.556c0.761,0.207,1.327,0.207,2.089,0L10.6,13.4C9.8,13.8,8.9,14,8,14z M13.4,10.6l-1.556-1.556 c0.207-0.761,0.207-1.327,0-2.089L13.4,5.4C13.8,6.2,14,7.1,14,8C14,8.9,13.8,9.8,13.4,10.6z"
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
