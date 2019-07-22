import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  fill = '#000',
  height = '100%',
  width = '100%',
  className = '',
  viewBox = '0 0 24 20',
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
    <g fill={fill} id="v9" stroke="none">
      <g id="Tablet-Copy-12" transform="translate(-24.000000, -139.000000)">
        <g id="Page-1" transform="translate(24.000000, 139.000000)">
          <path d="M22.2523355,1.57741935 C20.1488516,-0.526064516 16.7393032,-0.526064516 14.6365935,1.57741935 L11.914529,4.29870968 L9.19323871,1.57741935 C7.09052903,-0.526064516 3.68098065,-0.526064516 1.57749677,1.57741935 C-0.525987097,3.68012903 -0.525987097,7.09045161 1.57749677,9.19316129 L11.914529,19.5301935 L22.2523355,9.19316129 C24.3558194,7.09045161 24.3558194,3.68012903 22.2523355,1.57741935" />
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
