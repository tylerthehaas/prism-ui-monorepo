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
    {/* Generator: Sketch 50 (54983) - http://www.bohemiancoding.com/sketch */}
    <title>Shape</title>
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
        fill={fill}
        fillRule="nonzero"
        id="09_Scheduling_After-scheduling_as_occurance_message"
        transform="translate(-380.000000, -488.000000)"
      >
        <g id="Group-10-Copy" transform="translate(370.000000, 478.000000)">
          <g id="Group-11-Copy" transform="translate(6.000000, 6.000000)">
            <g id="funnel-40" transform="translate(4.000000, 4.000000)">
              <path
                d="M15.895,0.553 C15.725,0.214 15.379,0 15,0 L1,0 C0.621,0 0.275,0.214 0.105,0.553 C-0.063,0.892 -0.027,1.297 0.2,1.6 L6,9.333 L6,15 C6,15.553 6.447,16 7,16 L9,16 C9.553,16 10,15.553 10,15 L10,9.333 L15.8,1.6 C16.027,1.297 16.063,0.892 15.895,0.553 Z"
                id="Shape"
              />
            </g>
          </g>
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
