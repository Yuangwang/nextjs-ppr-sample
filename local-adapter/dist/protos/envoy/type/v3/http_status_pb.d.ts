import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv2";
import type { Message } from "@bufbuild/protobuf";
/**
 * Describes the file envoy/type/v3/http_status.proto.
 */
export declare const file_envoy_type_v3_http_status: GenFile;
/**
 * HTTP status.
 *
 * @generated from message envoy.type.v3.HttpStatus
 */
export type HttpStatus = Message<"envoy.type.v3.HttpStatus"> & {
    /**
     * Supplies HTTP response code.
     *
     * @generated from field: envoy.type.v3.StatusCode code = 1;
     */
    code: StatusCode;
};
/**
 * Describes the message envoy.type.v3.HttpStatus.
 * Use `create(HttpStatusSchema)` to create a new message.
 */
export declare const HttpStatusSchema: GenMessage<HttpStatus>;
/**
 * HTTP response codes supported in Envoy.
 * For more details: https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
 *
 * @generated from enum envoy.type.v3.StatusCode
 */
export declare enum StatusCode {
    /**
     * Empty - This code not part of the HTTP status code specification, but it is needed for proto
     * `enum` type.
     *
     * @generated from enum value: Empty = 0;
     */
    Empty = 0,
    /**
     * Continue - ``100`` status code.
     *
     * @generated from enum value: Continue = 100;
     */
    Continue = 100,
    /**
     * OK - ``200`` status code.
     *
     * @generated from enum value: OK = 200;
     */
    OK = 200,
    /**
     * Created - ``201`` status code.
     *
     * @generated from enum value: Created = 201;
     */
    Created = 201,
    /**
     * Accepted - ``202`` status code.
     *
     * @generated from enum value: Accepted = 202;
     */
    Accepted = 202,
    /**
     * NonAuthoritativeInformation - ``203`` status code.
     *
     * @generated from enum value: NonAuthoritativeInformation = 203;
     */
    NonAuthoritativeInformation = 203,
    /**
     * NoContent - ``204`` status code.
     *
     * @generated from enum value: NoContent = 204;
     */
    NoContent = 204,
    /**
     * ResetContent - ``205`` status code.
     *
     * @generated from enum value: ResetContent = 205;
     */
    ResetContent = 205,
    /**
     * PartialContent - ``206`` status code.
     *
     * @generated from enum value: PartialContent = 206;
     */
    PartialContent = 206,
    /**
     * MultiStatus - ``207`` status code.
     *
     * @generated from enum value: MultiStatus = 207;
     */
    MultiStatus = 207,
    /**
     * AlreadyReported - ``208`` status code.
     *
     * @generated from enum value: AlreadyReported = 208;
     */
    AlreadyReported = 208,
    /**
     * IMUsed - ``226`` status code.
     *
     * @generated from enum value: IMUsed = 226;
     */
    IMUsed = 226,
    /**
     * MultipleChoices - ``300`` status code.
     *
     * @generated from enum value: MultipleChoices = 300;
     */
    MultipleChoices = 300,
    /**
     * MovedPermanently - ``301`` status code.
     *
     * @generated from enum value: MovedPermanently = 301;
     */
    MovedPermanently = 301,
    /**
     * Found - ``302`` status code.
     *
     * @generated from enum value: Found = 302;
     */
    Found = 302,
    /**
     * SeeOther - ``303`` status code.
     *
     * @generated from enum value: SeeOther = 303;
     */
    SeeOther = 303,
    /**
     * NotModified - ``304`` status code.
     *
     * @generated from enum value: NotModified = 304;
     */
    NotModified = 304,
    /**
     * UseProxy - ``305`` status code.
     *
     * @generated from enum value: UseProxy = 305;
     */
    UseProxy = 305,
    /**
     * TemporaryRedirect - ``307`` status code.
     *
     * @generated from enum value: TemporaryRedirect = 307;
     */
    TemporaryRedirect = 307,
    /**
     * PermanentRedirect - ``308`` status code.
     *
     * @generated from enum value: PermanentRedirect = 308;
     */
    PermanentRedirect = 308,
    /**
     * BadRequest - ``400`` status code.
     *
     * @generated from enum value: BadRequest = 400;
     */
    BadRequest = 400,
    /**
     * Unauthorized - ``401`` status code.
     *
     * @generated from enum value: Unauthorized = 401;
     */
    Unauthorized = 401,
    /**
     * PaymentRequired - ``402`` status code.
     *
     * @generated from enum value: PaymentRequired = 402;
     */
    PaymentRequired = 402,
    /**
     * Forbidden - ``403`` status code.
     *
     * @generated from enum value: Forbidden = 403;
     */
    Forbidden = 403,
    /**
     * NotFound - ``404`` status code.
     *
     * @generated from enum value: NotFound = 404;
     */
    NotFound = 404,
    /**
     * MethodNotAllowed - ``405`` status code.
     *
     * @generated from enum value: MethodNotAllowed = 405;
     */
    MethodNotAllowed = 405,
    /**
     * NotAcceptable - ``406`` status code.
     *
     * @generated from enum value: NotAcceptable = 406;
     */
    NotAcceptable = 406,
    /**
     * ProxyAuthenticationRequired - ``407`` status code.
     *
     * @generated from enum value: ProxyAuthenticationRequired = 407;
     */
    ProxyAuthenticationRequired = 407,
    /**
     * RequestTimeout - ``408`` status code.
     *
     * @generated from enum value: RequestTimeout = 408;
     */
    RequestTimeout = 408,
    /**
     * Conflict - ``409`` status code.
     *
     * @generated from enum value: Conflict = 409;
     */
    Conflict = 409,
    /**
     * Gone - ``410`` status code.
     *
     * @generated from enum value: Gone = 410;
     */
    Gone = 410,
    /**
     * LengthRequired - ``411`` status code.
     *
     * @generated from enum value: LengthRequired = 411;
     */
    LengthRequired = 411,
    /**
     * PreconditionFailed - ``412`` status code.
     *
     * @generated from enum value: PreconditionFailed = 412;
     */
    PreconditionFailed = 412,
    /**
     * PayloadTooLarge - ``413`` status code.
     *
     * @generated from enum value: PayloadTooLarge = 413;
     */
    PayloadTooLarge = 413,
    /**
     * URITooLong - ``414`` status code.
     *
     * @generated from enum value: URITooLong = 414;
     */
    URITooLong = 414,
    /**
     * UnsupportedMediaType - ``415`` status code.
     *
     * @generated from enum value: UnsupportedMediaType = 415;
     */
    UnsupportedMediaType = 415,
    /**
     * RangeNotSatisfiable - ``416`` status code.
     *
     * @generated from enum value: RangeNotSatisfiable = 416;
     */
    RangeNotSatisfiable = 416,
    /**
     * ExpectationFailed - ``417`` status code.
     *
     * @generated from enum value: ExpectationFailed = 417;
     */
    ExpectationFailed = 417,
    /**
     * MisdirectedRequest - ``421`` status code.
     *
     * @generated from enum value: MisdirectedRequest = 421;
     */
    MisdirectedRequest = 421,
    /**
     * UnprocessableEntity - ``422`` status code.
     *
     * @generated from enum value: UnprocessableEntity = 422;
     */
    UnprocessableEntity = 422,
    /**
     * Locked - ``423`` status code.
     *
     * @generated from enum value: Locked = 423;
     */
    Locked = 423,
    /**
     * FailedDependency - ``424`` status code.
     *
     * @generated from enum value: FailedDependency = 424;
     */
    FailedDependency = 424,
    /**
     * UpgradeRequired - ``426`` status code.
     *
     * @generated from enum value: UpgradeRequired = 426;
     */
    UpgradeRequired = 426,
    /**
     * PreconditionRequired - ``428`` status code.
     *
     * @generated from enum value: PreconditionRequired = 428;
     */
    PreconditionRequired = 428,
    /**
     * TooManyRequests - ``429`` status code.
     *
     * @generated from enum value: TooManyRequests = 429;
     */
    TooManyRequests = 429,
    /**
     * RequestHeaderFieldsTooLarge - ``431`` status code.
     *
     * @generated from enum value: RequestHeaderFieldsTooLarge = 431;
     */
    RequestHeaderFieldsTooLarge = 431,
    /**
     * InternalServerError - ``500`` status code.
     *
     * @generated from enum value: InternalServerError = 500;
     */
    InternalServerError = 500,
    /**
     * NotImplemented - ``501`` status code.
     *
     * @generated from enum value: NotImplemented = 501;
     */
    NotImplemented = 501,
    /**
     * BadGateway - ``502`` status code.
     *
     * @generated from enum value: BadGateway = 502;
     */
    BadGateway = 502,
    /**
     * ServiceUnavailable - ``503`` status code.
     *
     * @generated from enum value: ServiceUnavailable = 503;
     */
    ServiceUnavailable = 503,
    /**
     * GatewayTimeout - ``504`` status code.
     *
     * @generated from enum value: GatewayTimeout = 504;
     */
    GatewayTimeout = 504,
    /**
     * HTTPVersionNotSupported - ``505`` status code.
     *
     * @generated from enum value: HTTPVersionNotSupported = 505;
     */
    HTTPVersionNotSupported = 505,
    /**
     * VariantAlsoNegotiates - ``506`` status code.
     *
     * @generated from enum value: VariantAlsoNegotiates = 506;
     */
    VariantAlsoNegotiates = 506,
    /**
     * InsufficientStorage - ``507`` status code.
     *
     * @generated from enum value: InsufficientStorage = 507;
     */
    InsufficientStorage = 507,
    /**
     * LoopDetected - ``508`` status code.
     *
     * @generated from enum value: LoopDetected = 508;
     */
    LoopDetected = 508,
    /**
     * NotExtended - ``510`` status code.
     *
     * @generated from enum value: NotExtended = 510;
     */
    NotExtended = 510,
    /**
     * NetworkAuthenticationRequired - ``511`` status code.
     *
     * @generated from enum value: NetworkAuthenticationRequired = 511;
     */
    NetworkAuthenticationRequired = 511
}
/**
 * Describes the enum envoy.type.v3.StatusCode.
 */
export declare const StatusCodeSchema: GenEnum<StatusCode>;
