"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// ../firebase-framework-tools/packages/@apphosting/adapter-nextjs/src/bin/serve.ts
var import_http = require("http");
var import_url = require("url");
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
process.env["NODE_ENV"] = "production";
process.env["NEXT_PRIVATE_MINIMAL_MODE"] = "1";
console.log("\u{1F680} Starting Native Adapter...");
async function start() {
  const currentDir = process.cwd();
  try {
    const configPath = import_path.default.join(currentDir, "firebase-next-config.json");
    console.log(`\u{1F4E5} Loading config from ${configPath}`);
    const rawConfig = import_fs.default.readFileSync(configPath, "utf-8");
    const buildContext = JSON.parse(rawConfig);
    const nextPath = require.resolve("next/dist/server/next-server", { paths: [currentDir] });
    const NextServer = require(nextPath).default;
    const server = new NextServer({
      dir: currentDir,
      hostname: "0.0.0.0",
      port: parseInt(process.env.PORT || "8080"),
      conf: buildContext.config
      // <--- Pass the simple JSON object
    });
    console.log("\u23F3 Preparing server...");
    const requestHandler = server.getRequestHandler();
    await server.prepare();
    (0, import_http.createServer)(async (req, res) => {
      try {
        const parsedUrl = (0, import_url.parse)(req.url, true);
        if (!req.headers["x-matched-path"]) {
          req.headers["x-matched-path"] = parsedUrl.pathname;
        }
        await requestHandler(req, res, parsedUrl);
      } catch (err) {
        console.error("Request Error:", err);
        res.statusCode = 500;
        res.end("Internal Error");
      }
    }).listen(parseInt(process.env.PORT || "8080"), () => {
      console.log(`> Ready on http://localhost:${process.env.PORT || 8080}`);
    });
  } catch (e) {
    console.error("\u274C Critical Error:", e);
    process.exit(1);
  }
}
start();
