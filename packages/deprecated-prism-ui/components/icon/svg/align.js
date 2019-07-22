import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  fill = '#000',
  height = '24px',
  width = '10px',
  className = '',
  viewBox = '0 0 10 24',
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
    <g fill={fill} id="v9" stroke="none" strokeWidth="1">
      <g id="Group-3" transform="translate(0.000000, 0.031738)">
        <path d="M9.84714393,5.00378692 C9.84703178,7.72296449 7.64273271,9.92726355 4.92366729,9.92726355 C2.20448972,9.92726355 7.85046729e-05,7.72307664 0.000190654206,5.00389907 C0.000190654206,2.2847215 2.20460187,0.0805345794 4.92377944,0.0804224299 C7.64284486,0.0804224299 9.84714393,2.2847215 9.84714393,5.00378692" />
      </g>
      <g id="Group-6" transform="translate(0.000000, 14.050430)">
        <path d="M9.84691963,4.94573832 C9.84691963,7.66480374 7.64262056,9.8691028 4.92344299,9.8691028 C2.20426542,9.86921495 -3.36448598e-05,7.66491589 -3.36448598e-05,4.94573832 C-3.36448598e-05,2.2266729 2.20437757,0.0223738318 4.92355514,0.0223738318 C7.64273271,0.0223738318 9.84691963,2.22656075 9.84691963,4.94573832" />
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
