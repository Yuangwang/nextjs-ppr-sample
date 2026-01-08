// THIS FILE IS DEPRECATED
// Users should instead use the corresponding proto in the xds tree.
// No new changes will be accepted here.
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv2";
/**
 * Describes the file udpa/annotations/status.proto.
 */
export const file_udpa_annotations_status = /*@__PURE__*/ fileDesc("Ch11ZHBhL2Fubm90YXRpb25zL3N0YXR1cy5wcm90bxIQdWRwYS5hbm5vdGF0aW9ucyJ0ChBTdGF0dXNBbm5vdGF0aW9uEhgKEHdvcmtfaW5fcHJvZ3Jlc3MYASABKAgSRgoWcGFja2FnZV92ZXJzaW9uX3N0YXR1cxgCIAEoDjImLnVkcGEuYW5ub3RhdGlvbnMuUGFja2FnZVZlcnNpb25TdGF0dXMqXQoUUGFja2FnZVZlcnNpb25TdGF0dXMSCwoHVU5LTk9XThAAEgoKBkZST1pFThABEgoKBkFDVElWRRACEiAKHE5FWFRfTUFKT1JfVkVSU0lPTl9DQU5ESURBVEUQA0IpWidnaXRodWIuY29tL2NuY2YveGRzL2dvL3VkcGEvYW5ub3RhdGlvbnNiBnByb3RvMw");
/**
 * Describes the message udpa.annotations.StatusAnnotation.
 * Use `create(StatusAnnotationSchema)` to create a new message.
 */
export const StatusAnnotationSchema = /*@__PURE__*/ messageDesc(file_udpa_annotations_status, 0);
/**
 * @generated from enum udpa.annotations.PackageVersionStatus
 */
export var PackageVersionStatus;
(function (PackageVersionStatus) {
    /**
     * Unknown package version status.
     *
     * @generated from enum value: UNKNOWN = 0;
     */
    PackageVersionStatus[PackageVersionStatus["UNKNOWN"] = 0] = "UNKNOWN";
    /**
     * This version of the package is frozen.
     *
     * @generated from enum value: FROZEN = 1;
     */
    PackageVersionStatus[PackageVersionStatus["FROZEN"] = 1] = "FROZEN";
    /**
     * This version of the package is the active development version.
     *
     * @generated from enum value: ACTIVE = 2;
     */
    PackageVersionStatus[PackageVersionStatus["ACTIVE"] = 2] = "ACTIVE";
    /**
     * This version of the package is the candidate for the next major version. It
     * is typically machine generated from the active development version.
     *
     * @generated from enum value: NEXT_MAJOR_VERSION_CANDIDATE = 3;
     */
    PackageVersionStatus[PackageVersionStatus["NEXT_MAJOR_VERSION_CANDIDATE"] = 3] = "NEXT_MAJOR_VERSION_CANDIDATE";
})(PackageVersionStatus || (PackageVersionStatus = {}));
/**
 * Describes the enum udpa.annotations.PackageVersionStatus.
 */
export const PackageVersionStatusSchema = /*@__PURE__*/ enumDesc(file_udpa_annotations_status, 0);
