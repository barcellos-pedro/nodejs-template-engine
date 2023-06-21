import { isArray, isBoolean } from "./utils.js";
import loopList from "./loop-list.js";
import * as Types from "./types/types.js";

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

    // concatenate value next to the end of the section
    if (!isArray(value)) {
      return (section += value);
    }

    // Create list of html elements based on surrounding tag
    if (isArray(value) && value.length) {
      const list = loopList(section, value);
      section += list.join("\n");
      return section;
    }

    return section;
  });
}

export default updateDom;
