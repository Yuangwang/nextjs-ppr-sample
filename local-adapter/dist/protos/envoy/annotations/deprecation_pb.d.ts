import type { GenExtension, GenFile } from "@bufbuild/protobuf/codegenv2";
import type { FieldOptions } from "@bufbuild/protobuf/wkt";
/**
 * Describes the file envoy/annotations/deprecation.proto.
 */
export declare const file_envoy_annotations_deprecation: GenFile;
/**
 * The API major and minor version on which the field was deprecated
 * (e.g., "3.5" for major version 3 and minor version 5).
 *
 * @generated from extension: string deprecated_at_minor_version = 157299826;
 */
export declare const deprecated_at_minor_version: GenExtension<FieldOptions, string>;
