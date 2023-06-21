import { createServer } from "node:http";
import render from "./controller.js";
import dbData from "./data.json" assert { type: "json" };
import * as Types from "../lib/types/types.js";

const server = createServer((req, res) => {
  /** @type{Types.ViewData} */
  const data = dbData;
  const html = render(data);

  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(html);
});

server.listen(8080, () => {
  console.log("running on http://localhost:8080");
});
