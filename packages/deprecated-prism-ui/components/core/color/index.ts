import './_variables.scss';

function validateHexColor(str: string) {
  let color = '';
  if (typeof str === 'string') {
    color = str.toString().replace(/[^0-9a-f]/gi, '');
  }
  if (color.length === 3) {
    color = color[0] + color[0] + color[1] + color[1] + color[2] + color[2];
  }
  if (color.length !== 6) {
    throw new Error(
      'Please pass 3- or 6-digit hex color string to validateHexColor',
    );
  }
  return color;
}

export default validateHexColor;
