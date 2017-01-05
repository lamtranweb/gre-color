var parse = require('parse-color')

/*const getLinearChannelValue = (c) => {
  c = c / 255;
  return c < 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}
const parseColor = (index, color) => {
  return parse(color).rgb[index];
}
*/
/*
const rgba = (color, alpha) => {
  return 'rgba('+parse(`rgb(${parse(color).rgb.join(',')}, ${alpha})`).rgba.join(', ')+')';
}*/

const black = '#000', white = '#FFF';

/*const getRed = parseColor.bind(undefined, 0),
      getGreen = parseColor.bind(undefined, 1),
      getBlue = parseColor.bind(undefined, 2);*/

/**
 * Calculate the luminance for a color.
 * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 */
/*const luminance = (color) => {
  let redColor = getLinearChannelValue(getRed(color)),
      greenColor = getLinearChannelValue(getGreen(color)),
      blueColor = getLinearChannelValue(getBlue(color));
  return .2126 * redColor + .7152 * greenColor + .0722 * blueColor;
}*/

/**
 * Calculate the contrast ratio between two colors.
 * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 */
/*const contrast = (back, front) => {
  let backLum = luminance(back) + 0.05,
      foreLum = luminance(front) + 0.05;

  return Math.max(backLum, foreLum) / Math.min(backLum, foreLum);
}*/

/**
 * Determine whether to use dark or light text on top of given color.
 * Returns "dark" for dark text and "light" for light text.
 */
/*const lightOrDark = (color) => {
  let minimumContrast = 3.1,
      lightContrast = contrast(color, white),
      darkContrast = contrast(color, rgba(black, .87));

  if ((lightContrast < minimumContrast) && (darkContrast > lightContrast)) {
    return "dark";
  }
  else {
    return "light";
  }
}*/

module.exports = {
  // luminance,
  // contrast,
  // lightOrDark,
  // getRed,
  // getGreen,
  // getBlue,
  white,
  black//,
  // rgba
}
