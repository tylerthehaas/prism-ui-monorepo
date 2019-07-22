import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
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
    {/* Generator: Sketch 50 (54983) - http://www.bohemiancoding.com/sketch */}
    <title>Oval Copy 150</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      fill="none"
      fillRule="evenodd"
      id="Data-Export-Utility"
      stroke="none"
      strokeWidth="1"
    >
      <g
        fill="#FFFFFF"
        id="12_Edit_schedule"
        stroke="#DADCDD"
        transform="translate(-354.000000, -705.000000)"
      >
        <circle cx="362" cy="713" id="Oval-Copy-150" r="7.5" />
      </g>
    </g>
  </svg>
);

SVG.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SVG;
