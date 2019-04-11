// @flow
import parseUnit from "parse-unit";

export const unit = value => parseUnit(value)[1];
export const unitless = value => parseUnit(value)[0];
