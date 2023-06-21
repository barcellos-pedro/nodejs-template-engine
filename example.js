import fs from "node:fs/promises";
import parseTemplate from "./lib/parse-template.js";
import * as Types from "./lib/types/types.js";

const render = parseTemplate/*html*/ `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${"pageTitle"}</title>
  </head>
  <body>
    <!-- This comment will be ignored -->
    <h1>Current page: ${"pageTitle"}</h1>
    <p>Name: ${"firstName"}</p>
    <p>Ocupation ${"ocupation"}</p>
    <p>Am i alive? (ternary) <i>${"alive ? 'yes' : 'no'"}</i></p>
    <p>${"alive && 'I am alive'"}</p>
    <p>${"!alive && 'I am dead'"}</p>
    <h2>My hobbies</h2>
    <ul>
      <li>${"hobbies"}</li>
    </ul>
  </body>
</html>
`;

/** @type {Types.ViewData} */
const viewData = {
  pageTitle: "Tagged Templates - Home",
  firstName: "Pedro",
  ocupation: "worker",
  alive: true,
  hobbies: ["movies", "games"],
};

const template = render(viewData);
console.log(template);

fs.writeFile("index.html", template).catch(console.err);
