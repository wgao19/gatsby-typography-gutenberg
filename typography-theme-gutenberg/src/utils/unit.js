// @flow
import parseUnit from "parse-unit";

export default {
  unit: value => parseUnit(value)[1],
  unitless: value => parseUnit(value)[0],
  parseUnit
};
