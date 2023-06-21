import { isArray, isBoolean } from "./utils.js";
import handleList from "./handle-list.js";
import * as Types from "./types/types.js";
import handleBoolean from "./handle-boolean.js";

/**
 * @param {string[]} html template as array of string split on each expression
 * @param {string[]} tokens list of expression values as placeholders to be replaced
 * @param {Types.ViewData} data data to render inside template
 */
function updateDom(html, tokens, data) {
  return html.map((section, i) => {
    const key = tokens[i];
    const value = data[key];

    // returns html section without modification
    if (!value && !key) {
      return section;
    }

    // handle boolean expressions
    if (!value && key.length) {
      const result = handleBoolean(key, data);
      return (section += " " + result);
    }

    // concatenate value next to the end of the section
    if (!isArray(value)) {
      return (section += value);
    }

    // Create list of html elements based on surrounding tag
    if (isArray(value) && value.length) {
      const list = handleList(section, value);
      section += list.join("\n");
      return section;
    }

    return section;
  });
}

export default updateDom;
