import { isArray } from "./utils.js";
import loopList from "./loop-list.js";

/**
 *
 * @param {string[]} html template as array of string split on each expression
 * @param {string[]} tokens list of expression values to be replaced
 * @param {ViewData} data data to render inside template
 */
function updateDom(html, tokens, data) {
  return html.map((section, i) => {
    const key = tokens[i];
    const value = data[key];

    if (!value) {
      return section;
    }

    if (!isArray(value)) {
      section += value;
    }

    if (isArray(value) && value.length) {
      const list = loopList(section, value);
      section += list.join("\n");
    }

    return section;
  });
}

export default updateDom;
