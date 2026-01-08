import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file xds/annotations/v3/status.proto.
 */
export declare const file_xds_annotations_v3_status: GenFile;
/**
 * @generated from message xds.annotations.v3.StatusAnnotation
 */
export type StatusAnnotation = Message<"xds.annotations.v3.StatusAnnotation"> & {
    /**
     * The entity is work-in-progress and subject to breaking changes.
     *
     * @generated from field: bool work_in_progress = 1;
     */
    workInProgress: boolean;
    /**
     * The entity belongs to a package with the given version status.
     *
     * @generated from field: xds.annotations.v3.PackageVersionStatus package_version_status = 2;
     */
    packageVersionStatus: PackageVersionStatus;
};
/**
 * Describes the message xds.annotations.v3.StatusAnnotation.
 * Use `create(StatusAnnotationSchema)` to create a new message.
 */
export declare const StatusAnnotationSchema: GenMessage<StatusAnnotation>;
/**
 * @generated from enum xds.annotations.v3.PackageVersionStatus
 */
export declare enum PackageVersionStatus {
    /**
     * Unknown package version status.
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    UNKNOWN = 0,
    /**
     * This version of the package is frozen.
     *
     * @generated from enum value: FROZEN = 1;
     */
    FROZEN = 1,
    /**
     * This version of the package is the active development version.
     *
     * @generated from enum value: ACTIVE = 2;
     */
    ACTIVE = 2,
    /**
     * This version of the package is the candidate for the next major version. It
     * is typically machine generated from the active development version.
     *
     * @generated from enum value: NEXT_MAJOR_VERSION_CANDIDATE = 3;
     */
    NEXT_MAJOR_VERSION_CANDIDATE = 3
}
/**
 * Describes the enum xds.annotations.v3.PackageVersionStatus.
 */
export declare const PackageVersionStatusSchema: GenEnum<PackageVersionStatus>;
