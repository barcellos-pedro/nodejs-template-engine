import * as Types from "./types/types.js";

/**
 * @param {string} key - expression from template
 * @param {Types.ViewData} data data to render inside template
 */
function handleTernary(key, data) {
  const ternaryExp = key.substring(key.indexOf("?") + 2);
  const conditionProp = key.split(" ")[0];
  const condition = data[conditionProp];
  const [truthy, falsy] = ternaryExp.split(":");
  const result = condition ? truthy : falsy;
  const value = result.replace(/'/g, " ").trim();
  return value;
}

/**
 * @param {string} key - expression from template
 * @param {Types.ViewData} data data to render inside template
 */
function handleShortCircuit(key, data) {
  let result = key.substring(key.indexOf("&&") + 2);
  let conditionProp = key.split(" ")[0];

  if (!conditionProp.includes("!")) {
    const condition = data[conditionProp];
    result = result.replace(/'/g, " ").trim();
    return condition === true ? result : "";
  }

  conditionProp = conditionProp.substring(1); // removes '!'
  const condition = data[conditionProp];
  result = result.replace(/'/g, " ").trim();
  return condition === false ? result : "";
}

/**
 * @param {string} key expression from template
 * @param {Types.ViewData} data data to render inside template
 */
function handleBoolean(key, data) {
  if (key.includes("?")) {
    return handleTernary(key, data);
  } else if (key.includes("&&")) {
    return handleShortCircuit(key, data);
  }

  throw new Error("Boolean expression not valid");
}

export default handleBoolean;
