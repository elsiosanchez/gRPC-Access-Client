/**
 * @fileoverview gRPC-Web generated client stub for access
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.access = require('./access_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.access.AccessServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.access.AccessServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.UserInfoValue>}
 */
const methodInfo_AccessService_GetUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.UserInfoValue,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.UserInfoValue.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.UserInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.UserInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/GetUserInfo',
      request,
      metadata || {},
      methodInfo_AccessService_GetUserInfo,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.UserInfoValue>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/GetUserInfo',
      request,
      metadata || {},
      methodInfo_AccessService_GetUserInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RunLogin = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.runLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RunLogin',
      request,
      metadata || {},
      methodInfo_AccessService_RunLogin,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.runLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RunLogin',
      request,
      metadata || {},
      methodInfo_AccessService_RunLogin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RunLoginDefault = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LoginRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.runLoginDefault =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RunLoginDefault',
      request,
      metadata || {},
      methodInfo_AccessService_RunLoginDefault,
      callback);
};


/**
 * @param {!proto.access.LoginRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.runLoginDefault =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RunLoginDefault',
      request,
      metadata || {},
      methodInfo_AccessService_RunLoginDefault);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LogoutRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RunLogout = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.LogoutRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.runLogout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RunLogout',
      request,
      metadata || {},
      methodInfo_AccessService_RunLogout,
      callback);
};


/**
 * @param {!proto.access.LogoutRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.runLogout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RunLogout',
      request,
      metadata || {},
      methodInfo_AccessService_RunLogout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.UserInfoValue>}
 */
const methodInfo_AccessService_GetUserInfoFromSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.UserInfoValue,
  /** @param {!proto.access.UserInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.UserInfoValue.deserializeBinary
);


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.UserInfoValue)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.UserInfoValue>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.getUserInfoFromSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/GetUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_AccessService_GetUserInfoFromSession,
      callback);
};


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.UserInfoValue>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.getUserInfoFromSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/GetUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_AccessService_GetUserInfoFromSession);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.Menu>}
 */
const methodInfo_AccessService_GetMenuAndChild = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Menu,
  /** @param {!proto.access.UserInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Menu.deserializeBinary
);


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Menu)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Menu>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.getMenuAndChild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/GetMenuAndChild',
      request,
      metadata || {},
      methodInfo_AccessService_GetMenuAndChild,
      callback);
};


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Menu>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.getMenuAndChild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/GetMenuAndChild',
      request,
      metadata || {},
      methodInfo_AccessService_GetMenuAndChild);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_RunChangeRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.UserInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.runChangeRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/RunChangeRole',
      request,
      metadata || {},
      methodInfo_AccessService_RunChangeRole,
      callback);
};


/**
 * @param {!proto.access.UserInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.runChangeRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/RunChangeRole',
      request,
      metadata || {},
      methodInfo_AccessService_RunChangeRole);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.SessionRequest,
 *   !proto.access.Session>}
 */
const methodInfo_AccessService_GetSession = new grpc.web.AbstractClientBase.MethodInfo(
  proto.access.Session,
  /** @param {!proto.access.SessionRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.access.Session.deserializeBinary
);


/**
 * @param {!proto.access.SessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.access.Session)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.access.Session>|undefined}
 *     The XHR Node Readable Stream
 */
proto.access.AccessServiceClient.prototype.getSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.AccessService/GetSession',
      request,
      metadata || {},
      methodInfo_AccessService_GetSession,
      callback);
};


/**
 * @param {!proto.access.SessionRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.access.Session>}
 *     A native promise that resolves to the response
 */
proto.access.AccessServicePromiseClient.prototype.getSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.AccessService/GetSession',
      request,
      metadata || {},
      methodInfo_AccessService_GetSession);
};


module.exports = proto.access;

