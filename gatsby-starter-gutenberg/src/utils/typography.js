import Typography from "typography";
import gutenberg from "typography-theme-gutenberg-merriweather";
import CodePlugin from "typography-plugin-code";

const typography = new Typography(gutenberg);
typography.plugins = [new CodePlugin()];

export default typography;
