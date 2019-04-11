import { unit, unitless } from "./utils/unit";
import parseUnit from "parse-unit";
import defaultOptions from "./defaults";

const gutenberg = (options = defaultOptions) => {
  const {
    theme,
    baseFontSize,
    baseFontSizeDesktop,
    lineHeight: baseLineHeight,

    maxWidth,

    modularScale,
    leading
  } = options;

  let googleFonts = options.googleFonts;

  if (theme === "Merriweather") {
    googleFonts.push({
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    });
  }
  if (theme === "OpenSans") {
    googleFonts.push({
      name: "Open Sans",
      styles: ["400", "400i", "700"]
    });
  }

  const mediaString = `@media screen and (min-width: ${unitless(maxWidth) +
    5}rem)`;

  return {
    includeNormalize: true,
    title: "gutenberg",

    googleFonts,
    baseFontSize,
    baseFontSizeDesktop,
    baseLineHeight,

    headerFontFamily: ["Merriweather"],
    bodyFontFamily: ["Merriweather"],
    blockMarginBottom: leading,

    overrideStyles: (
      { adjustFontSizeTo, rhythm, scale, establishBaseline },
      options
    ) => ({
      ":root": {
        ...establishBaseline({ baseFontSize })
      },
      "*": {
        marginLeft: "auto !important",
        marginRight: "auto !important"
      },
      [mediaString]: {
        article: {
          maxWidth:
            (unitless(maxWidth) * unitless(baseFontSizeDesktop)) / 100 + "rem"
        }
      },
      body: {
        padding: 0
      }
      //   article: {
      //     maxWidth: `${scale(1.5, maxWidth)} !important`
      //   },
      //   "article p": {
      //     maxWidth: maxWidth,
      //     textSizeAdjust: "112.5%"
      //   },
      //   "figure.floatLeft, figure.floatRight": {
      //     padding: `0 ${leading}`,
      //     maxWidth: scale(0.5, maxWidth)
      //   },
      //   "figure.floatLeft": {
      //     float: "left"
      //   },
      //   "figure.floatRight": {
      //     float: "right"
      //   },
      //   figcaption: {
      //     fontSize: implode([modularScale.xxxxs, "rem"]),
      //     textAlign: "center",
      //     // TODO: this one is wrong
      //     lineHeight: implode([baseLineHeight, "rem"])
      //   },
      //   "h1,h2,h3,h4,h5,h6": {
      //     maxWidth: maxWidth
      //   },
      //   h1: {
      //     marginTop: rhythm(modularScale.xxxl),
      //     fontSize: implode([modularScale.l, "rem"]),
      //     lineHeight: scale(2, leading)
      //   },
      //   // TODO: put other selectors that require media query here
      //   "@media screen and (min-width: 40rem)": {
      //     blockquote: {
      //       paddingLeft: "2rem",
      //       maxWidth: implode(maxWidth)
      //     }
      //   },
      //   // TODO: headers
      //   ".attention-grabber": {
      //     fontSize: scale(1.2, baseFontSize),
      //     ...adjustFontSizeTo(`${desktopFontSizeRhythm}%`)
      //   }
    })
  };
};

export default gutenberg;
