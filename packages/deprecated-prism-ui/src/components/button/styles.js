import colors from '../vars/colors';

const buttonHeight = '9rem';
const borderWidth = '1px';

const styles = {
  button: {
    backgroundColor: `${colors.gray[50]}`,
    border: `${borderWidth} solid ${colors.gray[300]}`,
    borderRadius: '3px',
    boxSizing: 'border-box',
    color: `${colors.gray[900]}`,
    display: 'inline-block',
    fontFamily: 'Arial',
    height: `${buttonHeight}`,
    lineHeight: `${buttonHeight} - ${borderWidth * 2}`,
    minWidth: '20rem',
    overflow: 'hidden',
    outline: 'none',
    padding: '0 4rem',
    position: 'relative',
    verticalAlign: 'middle',
    userSelect: 'none',
    '-webkit-appearance': 'none',
    '-webkit-tab-highlight-color': 'rgba(0, 0, 0, 0)',
    font: {
      size: "4rem",
      weight: 600
    },

    '&:active': {
      isolate: false,
      outline: 'none',
      borderColor: `${colors.gray[300]}`,
      backgroundColor: 'white'
    },

    '&:hover': {
      isolate: false,
      cursor: 'pointer',
      backgroundColor: 'white'
    },

    '&::-moz-focus-inner': {
      isolate: false,
      padding: 0,
      border: 0
    },

    '&:disabled': {
      isolate: false,
      cursor: 'default',
      pointerEvents: 'none',
      borderColor: `${colors.gray[50]}`,
      color: `${colors.gray[400]}`
    }
  },

  buttonSmall: {
    minWidth: '18.5rem',
    height: `calc(${buttonHeight} * 2 / 3)`,
    lineHeight: `calc((${buttonHeight} * 2 / 3) - (${borderWidth} * 2))`
  },

  buttonPrimary: {
    backgroundColor: `${colors.primary[500]}`,
    borderColor: `${colors.primary[500]}`,
    color: 'white',

    '&:active': {
      isolate: false,
      borderColor: `${colors.primary[600]}`,
      backgroundColor: `${colors.primary[600]}`
    },

    '&:hover': {
      isolate: false,
      borderColor: `${colors.primary[600]}`,
      backgroundColor: `${colors.primary[600]}`
    },

    '&:disabled': {
      isolate: false,
      borderColor: `${colors.primary[300]}`,
      backgroundColor: `${colors.primary[300]}`,
      color: 'white'
    }
  }
};

export default styles;
