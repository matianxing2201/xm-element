import { isNumber, isString } from "lodash-es";


const isStringNumber = (val: string): boolean => {
    if (!isString(val)) {
      return false;
    }
    return !Number.isNaN(Number(val));
};
export function addUnit(value?: string | number, defaultUnit = "px") {
    if (!value) return "";
    if (isNumber(value) || isStringNumber(value)) {
        return `${value}${defaultUnit}`;
    }
    if (isString(value)) {
        return value;
    }
}