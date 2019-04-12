import { unit, unitless } from "./utils/unit";
import parseUnit from "parse-unit";
import defaultOptions from "./defaults";

const gutenberg = (options = defaultOptions) => {
  const {
    theme,

    customFontBody,
    customFontHeading,
    defaultFonts,

    baseFontSize: baseFontSizeFromGutenberg,
    baseFontSizeDesktop: desktopFontSizeInPercentage,
    lineHeight,
    lineHeightDesktop,

    maxWidth,

    modularScale,
    leading
  } = options;

  let googleFonts = options.googleFonts,
    headerFontFamily = [],
    bodyFontFamily = [];

  // TODO: Allow custom google fonts
  if (theme === "Merriweather") {
    googleFonts.push({
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    });
    bodyFontFamily.push(...defaultFonts);
    headerFontFamily = bodyFontFamily;
  } else if (theme === "OpenSans") {
    googleFonts.push({
      name: "Open Sans",
      styles: ["400", "400i", "700"]
    });
    bodyFontFamily.push("Open Sans", "Arial", "Helvetica", "Sans-serif");
    headerFontFamily = bodyFontFamily;
  } else {
    bodyFontFamily = customFontBody || defaultFonts;
    headerFontFamily = customFontHeading || defaultFonts;
  }

  const isDesktop = true; // TODO: check for desktop UA

  // different from Gutenberg because it treats leading differently with Typographyjs
  // TODO: is it a good idea to introduce the semantic definition for leading?
  const baseLineHeight = isDesktop ? lineHeightDesktop : lineHeight;

  const mediaString = `@media screen and (min-width: ${unitless(maxWidth) +
    5}rem)`;

  const baseFontSize = isDesktop ? "18px" : baseFontSizeFromGutenberg;

  return {
    includeNormalize: true,
    title: "gutenberg",

    googleFonts,
    baseFontSize,

    // typography does not need this value
    // baseFontSizeDesktop,
    baseLineHeight,

    headerFontFamily,
    bodyFontFamily,
    blockMarginBottom: leading,

    overrideStyles: (
      { adjustFontSizeTo, rhythm, establishBaseline },
      options
    ) => ({
      "*": {
        boxSizing: "inherit",
        lineHeight: rhythm(1),
        marginBottom: rhythm()
      },
      [mediaString]: {
        ":root": {
          fontSize: baseFontSize
        },
        "*": {
          maxWidth,
          marginLeft: "auto !important",
          marginRight: "auto !important"
          // marginBottom: rhy
        },
        article: {
          maxWidth: unitless(maxWidth) * 1.5 + "rem"
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
