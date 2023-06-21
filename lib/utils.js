/** @param {number} index */
export const isFirstIndex = (index) => index == 0;

/**
 * @param {number} index
 * @param {any[]} arr
 */
export const isLastIndex = (index, arr) => index === arr.length - 1;

/** @param {any} value */
export function isArray(value) {
  return typeof value === "object" && value instanceof Array;
}

/** @param {any} value */
export const isBoolean = (value) => typeof value === "boolean";
