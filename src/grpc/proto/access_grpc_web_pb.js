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
proto.access.SecurityClient =
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
proto.access.SecurityPromiseClient =
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
const methodInfo_Security_GetUserInfo = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.getUserInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/GetUserInfo',
      request,
      metadata || {},
      methodInfo_Security_GetUserInfo,
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
proto.access.SecurityPromiseClient.prototype.getUserInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/GetUserInfo',
      request,
      metadata || {},
      methodInfo_Security_GetUserInfo);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_Security_RunLogin = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.runLogin =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/RunLogin',
      request,
      metadata || {},
      methodInfo_Security_RunLogin,
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
proto.access.SecurityPromiseClient.prototype.runLogin =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/RunLogin',
      request,
      metadata || {},
      methodInfo_Security_RunLogin);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LoginRequest,
 *   !proto.access.Session>}
 */
const methodInfo_Security_RunLoginDefault = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.runLoginDefault =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/RunLoginDefault',
      request,
      metadata || {},
      methodInfo_Security_RunLoginDefault,
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
proto.access.SecurityPromiseClient.prototype.runLoginDefault =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/RunLoginDefault',
      request,
      metadata || {},
      methodInfo_Security_RunLoginDefault);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.LogoutRequest,
 *   !proto.access.Session>}
 */
const methodInfo_Security_RunLogout = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.runLogout =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/RunLogout',
      request,
      metadata || {},
      methodInfo_Security_RunLogout,
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
proto.access.SecurityPromiseClient.prototype.runLogout =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/RunLogout',
      request,
      metadata || {},
      methodInfo_Security_RunLogout);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.UserInfoValue>}
 */
const methodInfo_Security_GetUserInfoFromSession = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.getUserInfoFromSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/GetUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_Security_GetUserInfoFromSession,
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
proto.access.SecurityPromiseClient.prototype.getUserInfoFromSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/GetUserInfoFromSession',
      request,
      metadata || {},
      methodInfo_Security_GetUserInfoFromSession);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.Menu>}
 */
const methodInfo_Security_GetMenuAndChild = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.getMenuAndChild =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/GetMenuAndChild',
      request,
      metadata || {},
      methodInfo_Security_GetMenuAndChild,
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
proto.access.SecurityPromiseClient.prototype.getMenuAndChild =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/GetMenuAndChild',
      request,
      metadata || {},
      methodInfo_Security_GetMenuAndChild);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.UserInfoRequest,
 *   !proto.access.Session>}
 */
const methodInfo_Security_RunChangeRole = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.runChangeRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/RunChangeRole',
      request,
      metadata || {},
      methodInfo_Security_RunChangeRole,
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
proto.access.SecurityPromiseClient.prototype.runChangeRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/RunChangeRole',
      request,
      metadata || {},
      methodInfo_Security_RunChangeRole);
};


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.access.SessionRequest,
 *   !proto.access.Session>}
 */
const methodInfo_Security_GetSession = new grpc.web.AbstractClientBase.MethodInfo(
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
proto.access.SecurityClient.prototype.getSession =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/access.Security/GetSession',
      request,
      metadata || {},
      methodInfo_Security_GetSession,
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
proto.access.SecurityPromiseClient.prototype.getSession =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/access.Security/GetSession',
      request,
      metadata || {},
      methodInfo_Security_GetSession);
};


module.exports = proto.access;

