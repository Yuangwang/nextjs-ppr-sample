import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file envoy/extensions/filters/http/ext_proc/v3/processing_mode.proto.
 */
export declare const file_envoy_extensions_filters_http_ext_proc_v3_processing_mode: GenFile;
/**
 * [#next-free-field: 7]
 *
 * @generated from message envoy.extensions.filters.http.ext_proc.v3.ProcessingMode
 */
export type ProcessingMode = Message<"envoy.extensions.filters.http.ext_proc.v3.ProcessingMode"> & {
    /**
     * How to handle the request header. Default is "SEND".
     * Note this field is ignored in :ref:`mode_override
     * <envoy_v3_api_field_service.ext_proc.v3.ProcessingResponse.mode_override>`, since mode
     * overrides can only affect messages exchanged after the request header is processed.
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode request_header_mode = 1;
     */
    requestHeaderMode: ProcessingMode_HeaderSendMode;
    /**
     * How to handle the response header. Default is "SEND".
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode response_header_mode = 2;
     */
    responseHeaderMode: ProcessingMode_HeaderSendMode;
    /**
     * How to handle the request body. Default is "NONE".
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.BodySendMode request_body_mode = 3;
     */
    requestBodyMode: ProcessingMode_BodySendMode;
    /**
     * How do handle the response body. Default is "NONE".
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.BodySendMode response_body_mode = 4;
     */
    responseBodyMode: ProcessingMode_BodySendMode;
    /**
     * How to handle the request trailers. Default is "SKIP".
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode request_trailer_mode = 5;
     */
    requestTrailerMode: ProcessingMode_HeaderSendMode;
    /**
     * How to handle the response trailers. Default is "SKIP".
     *
     * @generated from field: envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode response_trailer_mode = 6;
     */
    responseTrailerMode: ProcessingMode_HeaderSendMode;
};
/**
 * Describes the message envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.
 * Use `create(ProcessingModeSchema)` to create a new message.
 */
export declare const ProcessingModeSchema: GenMessage<ProcessingMode>;
/**
 * Control how headers and trailers are handled
 *
 * @generated from enum envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode
 */
export declare enum ProcessingMode_HeaderSendMode {
    /**
     * When used to configure the ext_proc filter :ref:`processing_mode
     * <envoy_v3_api_field_extensions.filters.http.ext_proc.v3.ExternalProcessor.processing_mode>`,
     * the default HeaderSendMode depends on which part of the message is being processed. By
     * default, request and response headers are sent, while trailers are skipped.
     *
     * When used in :ref:`mode_override
     * <envoy_v3_api_field_service.ext_proc.v3.ProcessingResponse.mode_override>` or
     * :ref:`allowed_override_modes
     * <envoy_v3_api_field_extensions.filters.http.ext_proc.v3.ExternalProcessor.allowed_override_modes>`,
     * a value of DEFAULT indicates that there is no change from the behavior that is configured for
     * the filter in :ref:`processing_mode
     * <envoy_v3_api_field_extensions.filters.http.ext_proc.v3.ExternalProcessor.processing_mode>`.
     *
     * @generated from enum value: DEFAULT = 0;
     */
    DEFAULT = 0,
    /**
     * Send the header or trailer.
     *
     * @generated from enum value: SEND = 1;
     */
    SEND = 1,
    /**
     * Do not send the header or trailer.
     *
     * @generated from enum value: SKIP = 2;
     */
    SKIP = 2
}
/**
 * Describes the enum envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.HeaderSendMode.
 */
export declare const ProcessingMode_HeaderSendModeSchema: GenEnum<ProcessingMode_HeaderSendMode>;
/**
 * Control how the request and response bodies are handled
 * When body mutation by external processor is enabled, ext_proc filter will always remove
 * the content length header in four cases below because content length can not be guaranteed
 * to be set correctly:
 * 1) STREAMED BodySendMode: header processing completes before body mutation comes back.
 * 2) BUFFERED_PARTIAL BodySendMode: body is buffered and could be injected in different phases.
 * 3) BUFFERED BodySendMode + SKIP HeaderSendMode: header processing (e.g., update content-length) is skipped.
 * 4) FULL_DUPLEX_STREAMED BodySendMode: header processing completes before body mutation comes back.
 *
 * In Envoy's http1 codec implementation, removing content length will enable chunked transfer
 * encoding whenever feasible. The recipient (either client or server) must be able
 * to parse and decode the chunked transfer coding.
 * (see `details in RFC9112 <https://tools.ietf.org/html/rfc9112#section-7.1>`_).
 *
 * In BUFFERED BodySendMode + SEND HeaderSendMode, content length header is allowed but it is
 * external processor's responsibility to set the content length correctly matched to the length
 * of mutated body. If they don't match, the corresponding body mutation will be rejected and
 * local reply will be sent with an error message.
 *
 * @generated from enum envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.BodySendMode
 */
export declare enum ProcessingMode_BodySendMode {
    /**
     * Do not send the body at all. This is the default.
     *
     * @generated from enum value: NONE = 0;
     */
    NONE = 0,
    /**
     * Stream the body to the server in pieces as they are seen.
     *
     * @generated from enum value: STREAMED = 1;
     */
    STREAMED = 1,
    /**
     * Buffer the message body in memory and send the entire body at once.
     * If the body exceeds the configured buffer limit, then the
     * downstream system will receive an error.
     *
     * @generated from enum value: BUFFERED = 2;
     */
    BUFFERED = 2,
    /**
     * Buffer the message body in memory and send the entire body in one
     * chunk. If the body exceeds the configured buffer limit, then the body contents
     * up to the buffer limit will be sent.
     *
     * @generated from enum value: BUFFERED_PARTIAL = 3;
     */
    BUFFERED_PARTIAL = 3,
    /**
     * @generated from enum value: FULL_DUPLEX_STREAMED = 4;
     */
    FULL_DUPLEX_STREAMED = 4
}
/**
 * Describes the enum envoy.extensions.filters.http.ext_proc.v3.ProcessingMode.BodySendMode.
 */
export declare const ProcessingMode_BodySendModeSchema: GenEnum<ProcessingMode_BodySendMode>;
