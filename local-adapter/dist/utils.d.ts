/// <reference types="node" resolution-mode="require"/>
import fsExtra from "fs-extra";
import { OutputBundleOptions, AdapterMetadata, RoutesManifest } from "./interfaces.js";
import type { NextConfigComplete } from "next/dist/server/config-shared.js";
export declare const copy: typeof fsExtra.copy, exists: typeof import("fs").exists.__promisify__ & typeof import("fs").exists, writeFile: typeof import("fs").writeFile.__promisify__ & typeof import("fs").writeFile, readJson: typeof import("jsonfile").readFile, readdir: typeof import("fs").readdir.__promisify__ & typeof import("fs").readdir, readFileSync: typeof fsExtra.readFileSync, existsSync: typeof fsExtra.existsSync, ensureDir: typeof fsExtra.ensureDir;
export declare const isMain: (meta: ImportMeta) => boolean;
export declare function loadConfig(root: string, projectRoot: string): Promise<NextConfigComplete>;
/**
 * Provides the paths in the output bundle for the built artifacts.
 * @param rootDir The root directory of the uploaded source code.
 * @param appDir The path to the application source code, relative to the root.
 * @return The output bundle paths.
 */
export declare function populateOutputBundleOptions(rootDir: string, appDir: string, nextBuildDirectory: string): OutputBundleOptions;
/**
 * Loads the route manifest from the standalone directory.
 * @param standalonePath The path to the standalone directory.
 * @param distDir The path to the dist directory.
 * @return The route manifest.
 */
export declare function loadRouteManifest(distDir: string): RoutesManifest;
/**
 * Writes the route manifest to the standalone directory.
 * @param standalonePath The path to the standalone directory.
 * @param distDir The path to the dist directory.
 * @param customManifest The route manifest to write.
 */
export declare function writeRouteManifest(distDir: string, customManifest: RoutesManifest): Promise<void>;
/**
 * Copy static assets and other resources into the standalone directory, also generates the bundle.yaml
 * @param rootDir The root directory of the uploaded source code.
 * @param outputBundleOptions The target location of built artifacts in the output bundle.
 * @param nextBuildDirectory The location of the .next directory.
 */
export declare function generateBuildOutput(rootDir: string, appDir: string, opts: OutputBundleOptions, nextBuildDirectory: string): Promise<void>;
export declare function getAdapterMetadata(): AdapterMetadata;
export declare function generateBundleYaml(opts: OutputBundleOptions, cwd: string, nextVersion: string, adapterMetadata: AdapterMetadata): Promise<void>;
export declare function validateOutputDirectory(opts: OutputBundleOptions, nextBuildDirectory: string): Promise<void>;
