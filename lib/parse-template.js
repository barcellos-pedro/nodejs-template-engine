import updateDom from "./update-dom.js";

/**
 * @param {string[]} html template as array of string split on each expression
 * @param {string[]} tokens expressions declared
 */
function parseTemplate(html, ...tokens) {
  /**
   * @param {ViewData} data data to render inside template
   * @returns {string} document html as string
   */
  return function render(data) {
    html = updateDom(html, tokens, data);
    return html.join(""); // remounts html document string
  };
}

export default parseTemplate;
