import Typography from "typography";
import CodePlugin from "typography-plugin-code";

const getUnit = ([_, u]) => u;
const getNumber = ([n, _]) => n;
const scale = (ratio, [n, _]) => [n * ratio, _];
const implode = value => value.join("");

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

const baseLineHeight = 1.625;
const baseFontSize = [16, "px"];
const desktopFontSizeRhythm = 112.5;
const maxWidth = [35, "rem"];
const leading = scale(baseLineHeight, baseFontSize);

const typography = new Typography({
  includeNormalize: true,
  title: "gutenberg",
  headerFontFamily: ["Merriweather"],
  bodyFontFamily: ["Merriweather"],
  blockMarginBottom: implode(leading),
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"]
    }
  ],
  overrideStyles: ({ adjustFontSizeTo, rhythm }) => ({
    "*": {
      marginLeft: "auto !important",
      marginRight: "auto !important"
    },
    article: {
      maxWidth: `${implode(scale(1.5, maxWidth))} !important`
    },
    "article p": {
      maxWidth: implode(maxWidth),
      textSizeAdjust: "112.5%"
    },
    "figure.floatLeft, figure.floatRight": {
      padding: `0 ${implode(leading)}`,
      maxWidth: implode(scale(0.5, maxWidth))
    },
    "figure.floatLeft": {
      float: "left"
    },
    "figure.floatRight": {
      float: "right"
    },
    figcaption: {
      fontSize: implode([modularScale.xxxxs, "rem"]),
      textAlign: "center",
      // TODO: this one is wrong
      lineHeight: implode([baseLineHeight, "rem"])
    },
    "h1,h2,h3,h4,h5,h6": {
      maxWidth: implode(maxWidth)
    },
    h1: {
      marginTop: rhythm(modularScale.xxxl),
      fontSize: implode([modularScale.l, "rem"]),
      lineHeight: implode(scale(2, leading))
    },
    // TODO: headers
    ".attention-grabber": {
      fontSize: implode(scale(1.2, baseFontSize)),
      ...adjustFontSizeTo(`${desktopFontSizeRhythm}%`)
    }
  }),
  baseFontSize: implode(scale(1.125, baseFontSize)),
  baseLineHeight
});

typography.plugins = [new CodePlugin()];

export default typography;
