# nodejs-template-engine

Implementation of tagged templates to build a simple template engine for JavaScript.

Based on [MDN Template Literals - Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

## Sever-side mode

You can run the server-side example from src/app.js

```bash
npm start
```

## Console mode

Or run the example that outputs to the console and creates a index.html

```bash
node example.js
```

Or

```bash
npm run demo
```

# [example.js](https://github.com/barcellos-pedro/nodejs-template-engine/blob/main/example.js)

```js
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
    <p>
      Am i alive? (ternary)
      ${`alive ? '<span>yes</span>' : '<span>no</span>'`}
    </p>
    
    ${`alive && '
      <div>'I am alive (short-circuit)'</div>
    '`}

    ${"!alive && '<p>I am dead (short-circuit)</p>'"}

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
  hobbies: ["movies", "games", "tech", "dates"],
};

const template = render(viewData);
console.log(template);
```

# Screenshots

Rendered template

![image](https://github.com/barcellos-pedro/nodejs-template-engine/assets/33139500/1195fcb5-46fe-4e0f-9708-904f5d7f2c08)

![image](https://github.com/barcellos-pedro/nodejs-template-engine/assets/33139500/2e74f606-847d-4b65-af6e-d327ac076a09)
