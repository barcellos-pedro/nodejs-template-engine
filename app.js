import fs from "node:fs/promises";
import parseTemplate from "./lib/parse-template.js";

const render = parseTemplate/*html*/ `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${"pageTitle"}</title>
  </head>
  <body>
    <!-- each expression must be inside an element and separate lines -->
    <h1>${"pageTitle"}</h1>
    <p>${"firstName"}</p>
    <p>${"hobbies"}</p>
  </body>
</html>
`;

/**
 * Type definition based on template expressions
 *
 * @typedef{{ pageTitle:string, firstName: string, hobbies: string[] }} ViewData
 */

/** @type ViewData */
const viewData = {
  pageTitle: "Tagged Templates - Home",
  firstName: "Pedro",
  hobbies: ["movies", "games"],
};

const template = render(viewData);
console.log(template);

fs.writeFile("index.html", template).catch(console.err);
