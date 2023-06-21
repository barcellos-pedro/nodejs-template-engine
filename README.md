# nodejs-template-engine

Implementation of tagged templates to build a simple template engine for JavaScript and Node.js

Based on [MDN Template Literals - Tagged Templates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#tagged_templates)

```js
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

const template = render({
  pageTitle: "Tagged Templates - Home",
  firstName: "Pedro",
  hobbies: ["movies", "games"],
});

console.log(template);
```
![image](https://github.com/barcellos-pedro/nodejs-template-engine/assets/33139500/96078b52-0804-4f08-ade3-61b130f97941)
