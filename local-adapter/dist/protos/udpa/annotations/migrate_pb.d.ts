import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file udpa/annotations/migrate.proto.
 */
export declare const file_udpa_annotations_migrate: GenFile;
/**
 * @generated from message udpa.annotations.FileMigrateAnnotation
 */
export type FileMigrateAnnotation = Message<"udpa.annotations.FileMigrateAnnotation"> & {
    /**
     * Move all types in the file to another package, this implies changing proto
     * file path.
     *
     * @generated from field: string move_to_package = 2;
     */
    moveToPackage: string;
};
/**
 * Describes the message udpa.annotations.FileMigrateAnnotation.
 * Use `create(FileMigrateAnnotationSchema)` to create a new message.
 */
export declare const FileMigrateAnnotationSchema: GenMessage<FileMigrateAnnotation>;
