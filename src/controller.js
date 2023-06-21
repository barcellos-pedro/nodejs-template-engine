import parseTemplate from "../lib/parse-template.js";
import * as Types from "../lib/types/types.js";

/** @param {Types.ViewData} data*/
function render(data) {
  const renderView = parseTemplate/*html*/ `
    <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>${"pageTitle"}</title>
      <style>
        :root {
          --black: #222;
          --white: #f8f8f8;
        }
        
        body {
          background-color: var(--black);
        }

        h1, h2, p, i, li {
          color: var(--white);
        }
      </style>
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

  return renderView(data);
}

export default render;
