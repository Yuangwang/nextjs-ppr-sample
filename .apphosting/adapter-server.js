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

// ../firebase-framework-tools/packages/@apphosting/adapter-nextjs/dist/bin/serve.js
var import_http = require("http");
var import_url = require("url");
var import_path = __toESM(require("path"), 1);
var import_fs = __toESM(require("fs"), 1);
process.env["NODE_ENV"] = "production";
process.env["NEXT_PRIVATE_MINIMAL_MODE"] = "1";
async function start() {
  const serverDir = __dirname;
  const nextMetaPath = require.resolve("next/dist/server/request-meta", { paths: [serverDir] });
  const { NEXT_REQUEST_META } = require(nextMetaPath);
  const configPath = import_path.default.join(serverDir, "firebase-next-config.json");
  const rawConfig = import_fs.default.readFileSync(configPath, "utf-8");
  const buildContext = JSON.parse(rawConfig);
  const getPostponedState = (path2) => {
    let prerender = buildContext.outputs.prerenders.find((it) => it.pathname === path2);
    if (!prerender) {
      const dynamicMatch = buildContext.routes.dynamicRoutes.find((it) => path2.match(new RegExp(it.sourceRegex)))?.source;
      prerender = buildContext.outputs.prerenders.find((it) => it.pathname === dynamicMatch);
    }
    return prerender?.fallback?.postponedState;
  };
  const nextPath = require.resolve("next/dist/server/next-server", { paths: [serverDir] });
  const NextServer = require(nextPath).default;
  const server = new NextServer({
    dir: serverDir,
    hostname: "0.0.0.0",
    port: parseInt(process.env.PORT || "8080"),
    conf: buildContext.config
  });
  await server.prepare();
  const requestHandler = server.getRequestHandler();
  (0, import_http.createServer)(async (req, res) => {
    try {
      const parsedUrl = (0, import_url.parse)(req.url, true);
      const { pathname } = parsedUrl;
      if (req.headers["next-resume"] === "1" && pathname) {
        const postponed = getPostponedState(pathname);
        if (postponed) {
          console.log(`\u26A1\uFE0F Injecting Postponed State for ${pathname}`);
          req[NEXT_REQUEST_META] = {
            postponed
          };
        }
      }
      if (!req.headers["x-matched-path"]) {
        req.headers["x-matched-path"] = pathname;
      }
      await requestHandler(req, res, parsedUrl);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      res.end("Internal Error");
    }
  }).listen(parseInt(process.env.PORT || "8080"));
}
start();
