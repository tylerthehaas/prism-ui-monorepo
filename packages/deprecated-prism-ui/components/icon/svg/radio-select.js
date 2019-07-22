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
    <title>Group Copy 37</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <circle cx="8" cy="8" id="path-1" r="3" />
      <filter
        filterUnits="objectBoundingBox"
        height="233.3%"
        id="filter-2"
        width="233.3%"
        x="-66.7%"
        y="-33.3%"
      >
        <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1" />
        <feGaussianBlur
          in="shadowOffsetOuter1"
          result="shadowBlurOuter1"
          stdDeviation="1"
        />
        <feColorMatrix
          in="shadowBlurOuter1"
          type="matrix"
          values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.2 0"
        />
      </filter>
    </defs>
    <g
      fill="none"
      fillRule="evenodd"
      id="Data-Export-Utility"
      stroke="none"
      strokeWidth="1"
    >
      <g id="12_Edit_schedule" transform="translate(-354.000000, -653.000000)">
        <g id="Group-Copy-37" transform="translate(354.000000, 653.000000)">
          <circle cx="8" cy="8" fill="#0078d3" id="Oval-Copy-19" r="8" />
          <g id="Oval-Copy-19">
            <use
              fill="black"
              fillOpacity="1"
              filter="url(#filter-2)"
              xlinkHref="#path-1"
            />
            <use fill="#FFFFFF" fillRule="evenodd" xlinkHref="#path-1" />
          </g>
        </g>
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
