/**
 * Get tag from html section
 *
 * Like `<p>, <li>, etc...`
 *
 * @param {string} section - html section
 * @returns {string} tag without brackets
 */
function getTag(section) {
  return section.substring(
    section.lastIndexOf("<") + 1, // after opening angle bracket '<'
    section.length - 1 // before closing angle bracket '>'
  );
}

export default getTag;
