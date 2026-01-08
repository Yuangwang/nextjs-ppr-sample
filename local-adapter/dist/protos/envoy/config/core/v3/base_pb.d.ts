import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Any } from "@bufbuild/protobuf/wkt";
import type { JsonObject, Message } from "@bufbuild/protobuf";
/**
 * Describes the file envoy/config/core/v3/base.proto.
 */
export declare const file_envoy_config_core_v3_base: GenFile;
/**
 * Metadata provides additional inputs to filters based on matched listeners,
 * filter chains, routes and endpoints. It is structured as a map, usually from
 * filter name (in reverse DNS format) to metadata specific to the filter. Metadata
 * key-values for a filter are merged as connection and request handling occurs,
 * with later values for the same key overriding earlier values.
 *
 * An example use of metadata is providing additional values to
 * http_connection_manager in the envoy.http_connection_manager.access_log
 * namespace.
 *
 * Another example use of metadata is to per service config info in cluster metadata, which may get
 * consumed by multiple filters.
 *
 * For load balancing, Metadata provides a means to subset cluster endpoints.
 * Endpoints have a Metadata object associated and routes contain a Metadata
 * object to match against. There are some well defined metadata used today for
 * this purpose:
 *
 * * ``{"envoy.lb": {"canary": <bool> }}`` This indicates the canary status of an
 *   endpoint and is also used during header processing
 *   (x-envoy-upstream-canary) and for stats purposes.
 * [#next-major-version: move to type/metadata/v2]
 *
 * @generated from message envoy.config.core.v3.Metadata
 */
export type Metadata = Message<"envoy.config.core.v3.Metadata"> & {
    /**
     * Key is the reverse DNS filter name, e.g. com.acme.widget. The ``envoy.*``
     * namespace is reserved for Envoy's built-in filters.
     * If both ``filter_metadata`` and
     * :ref:`typed_filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.typed_filter_metadata>`
     * fields are present in the metadata with same keys,
     * only ``typed_filter_metadata`` field will be parsed.
     *
     * @generated from field: map<string, google.protobuf.Struct> filter_metadata = 1;
     */
    filterMetadata: {
        [key: string]: JsonObject;
    };
    /**
     * Key is the reverse DNS filter name, e.g. com.acme.widget. The ``envoy.*``
     * namespace is reserved for Envoy's built-in filters.
     * The value is encoded as google.protobuf.Any.
     * If both :ref:`filter_metadata <envoy_v3_api_field_config.core.v3.Metadata.filter_metadata>`
     * and ``typed_filter_metadata`` fields are present in the metadata with same keys,
     * only ``typed_filter_metadata`` field will be parsed.
     *
     * @generated from field: map<string, google.protobuf.Any> typed_filter_metadata = 2;
     */
    typedFilterMetadata: {
        [key: string]: Any;
    };
};
/**
 * Describes the message envoy.config.core.v3.Metadata.
 * Use `create(MetadataSchema)` to create a new message.
 */
export declare const MetadataSchema: GenMessage<Metadata>;
/**
 * Header name/value pair.
 *
 * @generated from message envoy.config.core.v3.HeaderValue
 */
export type HeaderValue = Message<"envoy.config.core.v3.HeaderValue"> & {
    /**
     * Header name.
     *
     * @generated from field: string key = 1;
     */
    key: string;
    /**
     * Header value.
     *
     * The same :ref:`format specifier <config_access_log_format>` as used for
     * :ref:`HTTP access logging <config_access_log>` applies here, however
     * unknown header values are replaced with the empty string instead of ``-``.
     * Header value is encoded as string. This does not work for non-utf8 characters.
     * Only one of ``value`` or ``raw_value`` can be set.
     *
     * @generated from field: string value = 2;
     */
    value: string;
    /**
     * Header value is encoded as bytes which can support non-utf8 characters.
     * Only one of ``value`` or ``raw_value`` can be set.
     *
     * @generated from field: bytes raw_value = 3;
     */
    rawValue: Uint8Array;
};
/**
 * Describes the message envoy.config.core.v3.HeaderValue.
 * Use `create(HeaderValueSchema)` to create a new message.
 */
export declare const HeaderValueSchema: GenMessage<HeaderValue>;
/**
 * Header name/value pair plus option to control append behavior.
 *
 * @generated from message envoy.config.core.v3.HeaderValueOption
 */
export type HeaderValueOption = Message<"envoy.config.core.v3.HeaderValueOption"> & {
    /**
     * Header name/value pair that this option applies to.
     *
     * @generated from field: envoy.config.core.v3.HeaderValue header = 1;
     */
    header?: HeaderValue;
    /**
     * Should the value be appended? If true (default), the value is appended to
     * existing values. Otherwise it replaces any existing values.
     * This field is deprecated and please use
     * :ref:`append_action <envoy_v3_api_field_config.core.v3.HeaderValueOption.append_action>` as replacement.
     *
     * .. note::
     *   The :ref:`external authorization service <envoy_v3_api_msg_service.auth.v3.CheckResponse>` and
     *   :ref:`external processor service <envoy_v3_api_msg_service.ext_proc.v3.ProcessingResponse>` have
     *   default value (``false``) for this field.
     *
     * @generated from field: google.protobuf.BoolValue append = 2 [deprecated = true];
     * @deprecated
     */
    append?: boolean;
    /**
     * Describes the action taken to append/overwrite the given value for an existing header
     * or to only add this header if it's absent.
     * Value defaults to :ref:`APPEND_IF_EXISTS_OR_ADD
     * <envoy_v3_api_enum_value_config.core.v3.HeaderValueOption.HeaderAppendAction.APPEND_IF_EXISTS_OR_ADD>`.
     *
     * @generated from field: envoy.config.core.v3.HeaderValueOption.HeaderAppendAction append_action = 3;
     */
    appendAction: HeaderValueOption_HeaderAppendAction;
    /**
     * Is the header value allowed to be empty? If false (default), custom headers with empty values are dropped,
     * otherwise they are added.
     *
     * @generated from field: bool keep_empty_value = 4;
     */
    keepEmptyValue: boolean;
};
/**
 * Describes the message envoy.config.core.v3.HeaderValueOption.
 * Use `create(HeaderValueOptionSchema)` to create a new message.
 */
export declare const HeaderValueOptionSchema: GenMessage<HeaderValueOption>;
/**
 * Describes the supported actions types for header append action.
 *
 * @generated from enum envoy.config.core.v3.HeaderValueOption.HeaderAppendAction
 */
export declare enum HeaderValueOption_HeaderAppendAction {
    /**
     * If the header already exists, this action will result in:
     *
     * - Comma-concatenated for predefined inline headers.
     * - Duplicate header added in the ``HeaderMap`` for other headers.
     *
     * If the header doesn't exist then this will add new header with specified key and value.
     *
     * @generated from enum value: APPEND_IF_EXISTS_OR_ADD = 0;
     */
    APPEND_IF_EXISTS_OR_ADD = 0,
    /**
     * This action will add the header if it doesn't already exist. If the header
     * already exists then this will be a no-op.
     *
     * @generated from enum value: ADD_IF_ABSENT = 1;
     */
    ADD_IF_ABSENT = 1,
    /**
     * This action will overwrite the specified value by discarding any existing values if
     * the header already exists. If the header doesn't exist then this will add the header
     * with specified key and value.
     *
     * @generated from enum value: OVERWRITE_IF_EXISTS_OR_ADD = 2;
     */
    OVERWRITE_IF_EXISTS_OR_ADD = 2,
    /**
     * This action will overwrite the specified value by discarding any existing values if
     * the header already exists. If the header doesn't exist then this will be no-op.
     *
     * @generated from enum value: OVERWRITE_IF_EXISTS = 3;
     */
    OVERWRITE_IF_EXISTS = 3
}
/**
 * Describes the enum envoy.config.core.v3.HeaderValueOption.HeaderAppendAction.
 */
export declare const HeaderValueOption_HeaderAppendActionSchema: GenEnum<HeaderValueOption_HeaderAppendAction>;
/**
 * Wrapper for a set of headers.
 *
 * @generated from message envoy.config.core.v3.HeaderMap
 */
export type HeaderMap = Message<"envoy.config.core.v3.HeaderMap"> & {
    /**
     * A list of header names and their values.
     *
     * @generated from field: repeated envoy.config.core.v3.HeaderValue headers = 1;
     */
    headers: HeaderValue[];
};
/**
 * Describes the message envoy.config.core.v3.HeaderMap.
 * Use `create(HeaderMapSchema)` to create a new message.
 */
export declare const HeaderMapSchema: GenMessage<HeaderMap>;
