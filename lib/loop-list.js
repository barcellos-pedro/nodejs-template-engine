import { isFirstIndex, isLastIndex } from "./utils.js";

/**
 * @param {string} section html section from splitted document string
 * @param {string|number} value value to replace expression
 * @returns
 */
function loopList(section, value) {
  const tag = section.substring(
    section.lastIndexOf("<") + 1, // after opening angle bracket
    section.length - 1 // before closing angle bracket
  );

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
