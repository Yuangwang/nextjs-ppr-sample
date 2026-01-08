import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file udpa/annotations/versioning.proto.
 */
export declare const file_udpa_annotations_versioning: GenFile;
/**
 * @generated from message udpa.annotations.VersioningAnnotation
 */
export type VersioningAnnotation = Message<"udpa.annotations.VersioningAnnotation"> & {
    /**
     * Track the previous message type. E.g. this message might be
     * udpa.foo.v3alpha.Foo and it was previously udpa.bar.v2.Bar. This
     * information is consumed by UDPA via proto descriptors.
     *
     * @generated from field: string previous_message_type = 1;
     */
    previousMessageType: string;
};
/**
 * Describes the message udpa.annotations.VersioningAnnotation.
 * Use `create(VersioningAnnotationSchema)` to create a new message.
 */
export declare const VersioningAnnotationSchema: GenMessage<VersioningAnnotation>;
