import Typography from "typography";
import CodePlugin from "typography-plugin-code";

const typography = new Typography({
  title: "gutenberg",
  headerFontFamily: ["Merriweather"],
  googleFonts: [
    {
      name: "Merriweather",
      styles: ["400", "400i", "700", "700i"]
    },
    {
      name: "Open Sans",
      styles: ["400"]
    }
  ]
});

typography.plugins = [new CodePlugin()];

export default typography;
