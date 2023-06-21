import { isFirstIndex, isLastIndex } from "./utils.js";
import getTag from "./get-tag.js";

/**
 * Create list of html elements based on surrounding tag
 *
 * @param {string} section html section from splitted document string
 * @param {any[]} value value to render and replace expression (placeholder)
 */
function loopList(section, value) {
  const tag = getTag(section);

  return value.map((val, i) => {
    if (isFirstIndex(i)) {
      return `${val}</${tag}>`;
    }

    if (isLastIndex(i, value)) {
      return `<${tag}>${val}`;
    }

    return `<${tag}>${val}</${tag}>`;
  });
}

export default loopList;
