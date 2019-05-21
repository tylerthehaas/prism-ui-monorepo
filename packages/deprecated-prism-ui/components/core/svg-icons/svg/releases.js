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
    {/* Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch */}
    <title>Group 4</title>
    <desc>Created with Sketch.</desc>
    <defs />
    <g
      fill="none"
      fill-Rule="evenodd"
      id="Page-1"
      stroke="none"
      stroke-Width="1"
    >
      <g id="Group-4" transform="translate(-3.000000, -4.000000)">
        <g fill={fill} id="Group-3" transform="translate(3.000000, 4.000000)">
          <polygon
            id="Fill-1"
            points="6.19311429 14.7263429 11.1948286 15.6943429 11.2391143 1.97577143 6.24082857 0.778057143"
          />
          <polygon
            id="Fill-3"
            points="0.156857143 1.96917143 0.0862857143 15.9634571 5.44914286 14.7960286 5.51971429 0.755742857"
          />
          <polygon
            id="Fill-6"
            points="11.9074 15.5477714 17.2788286 13.4203429 17.3551143 0.113771429 11.9868286 1.89491429"
          />
        </g>
        <rect
          fillRule="nonzero"
          height="24"
          id="Rectangle"
          width="24"
          x="0"
          y="0"
        />
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
