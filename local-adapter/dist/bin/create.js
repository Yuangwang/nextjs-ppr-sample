#! /usr/bin/env node
import { spawn } from "child_process";
import { isMain } from "../utils.js";
export const CREATE_NEXT_APP_VERSION = "~14.0.0";
const main = isMain(import.meta);
export async function create(projectDirectory = process.argv[2], cwd = process.cwd()) {
    return await new Promise((resolve, reject) => {
        const typescript = true;
        const packageManager = "npm";
        const tailwind = false;
        const eslint = false;
        const app = false;
        const srcDir = false;
        const importAlias = undefined;
        const example = "hello-world";
        const examplePath = undefined;
        // TODO create-next-app doesn't like an existing directory, that includes a firebase-debug.log use tmpdir & move
        const args = [
            "-y",
            "-p",
            `create-next-app@${CREATE_NEXT_APP_VERSION}`,
            "create-next-app",
            projectDirectory,
            `--use-${packageManager}`,
            typescript ? "--typescript" /* Options.typescript */ : "--javascript" /* Options.javascript */,
        ];
        if (tailwind)
            args.push("--tailwind" /* Options.tailwind */);
        if (eslint)
            args.push("--eslint" /* Options.eslint */);
        if (app)
            args.push("--app" /* Options.app */);
        if (srcDir)
            args.push("--src-dir" /* Options.srcDir */);
        if (importAlias)
            args.push("--import-alias" /* Options.importAlias */, importAlias);
        if (example)
            args.push("--example" /* Options.example */, example);
        if (examplePath)
            args.push("--example-path" /* Options.examplePath */, examplePath);
        const process = spawn("npx", args, { cwd, shell: true, stdio: "inherit" });
        process.on("exit", (code) => {
            if (code === 0)
                return resolve();
            reject();
        });
    });
}
if (main) {
    await create().catch(() => process.exit(1));
}
