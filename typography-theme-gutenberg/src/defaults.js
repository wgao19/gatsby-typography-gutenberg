// consts from gutenberg config
// https://github.com/matejlatin/Gutenberg/blob/master/src/style/_gutenberg-config.scss

// Theme / Fonts
const theme = "Merriweather"; // [ Merriweather / OpenSans / custom ]
const customFontBody = null; // [ "Libre Baskerville", Georgia, serif ]
const customFontHeading = null;

// Paragraph indenting
const paragraphIndent = false; // [ true / false ]

// Base sizes
const baseFontSize = 100; // In %. Also used for mobile. Number only, no units.
const baseFontSizeDesktop = 112.5; // In %. Used to calculate the desktop font size. Number only, no units.
const lineHeight = 1.625;
const lineHeightDesktop = 1.7;
const maxWidth = 35; // Number only, no units. Gets converted to REMs and pixels.

// Modular Scale
const modularScale = {
  xxxl: 4.3,
  xxl: 3.5,
  xl: 3,
  l: 2.5,
  m: 2,
  s: 1.6875,
  xs: 1.4375,
  xxs: 1.2,
  xxxs: 1,
  xxxxs: 0.8125
};

// Colors
const colorFontBody = "#222";
const colorFontHeadings = colorFontBody;
const colorFontLight = "#888";
const colorFontFigcaption = colorFontBody;

// Mobile base & leading
const base = 16 * (baseFontSize / 100);
const leading = Math.ceil(base * lineHeight);
const leadingRem = leading / base;

// Desktop base & leading
const baseDesktop = 16 * (baseFontSizeDesktop / 100);
const leadingDesktop = Math.ceil(baseDesktop * lineHeightDesktop);
const leadingRemDesktop = leadingDesktop / baseDesktop;

export default {
  theme,
  customFontBody,
  customFontHeading,

  paragraphIndent,
  baseFontSize,
  baseFontSizeDesktop,
  lineHeight,
  lineHeightDesktop,
  maxWidth,

  // Modular Scale
  modularScale,

  // Colors
  colorFontBody,
  colorFontHeadings,
  colorFontLight,
  colorFontFigcaption,

  // Mobile base & leading
  base,
  leading,
  leadingRem,

  // Desktop base & leading
  baseDesktop,
  leadingDesktop,
  leadingRemDesktop
};
