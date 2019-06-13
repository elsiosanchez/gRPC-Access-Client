/*************************************************************************************
 * Product: ADempiere gRPC Dictionary Client                       		               *
 * Copyright (C) 2012-2018 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Yamel Senih ysenih@erpya.com				  		                         *
 * This program is free software: you can redistribute it and/or modify              *
 * it under the terms of the GNU General Public License as published by              *
 * the Free Software Foundation, either version 3 of the License, or                 *
 * (at your option) any later version.                                               *
 * This program is distributed in the hope that it will be useful,                   *
 * but WITHOUT ANY WARRANTY; without even the implied warranty of                    *
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                     *
 * GNU General Public License for more details.                                      *
 * You should have received a copy of the GNU General Public License                 *
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.            *
 ************************************************************************************/
class Access {

  /**
   * Constructor, No authentication required
   * @param {string} host
   * @param {string} version
   * @param {string} language
   */
  constructor(host, version, language = 'en_US') {
    this.host = host;
    this.version = version;
    this.language = language;
  }

  /**
   * Load gRPC Connection
   * @return {Object} Return request for get data
   */
  getService() {
    const grpc_promise = require('grpc-promise');
    const { AccessServicePromiseClient } = require('./src/grpc/proto/access_grpc_web_pb.js');
    var requestService = new AccessServicePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
  }

  /**
   * Get user roles assigned
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @return {UserRoles} Roles Assigned to User
   */
  requestUserInfo(userName, userPass) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LoginRequest();
    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setClientversion(this.version);
    request.setLanguage(this.language);
    return this.getService().requestUserInfo(request);
  }

  /**
   * User Info
   * @param {string} sessionUuid Session
   * @return {UserInfoValue} User Info Value
   */
  requestUserInfoFromSession(sessionUuid) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new UserInfoRequest();
    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);
    return this.getService().requestUserInfoFromSession(request);
  }

  /**
   * Make login
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @param {string} organizationUuid Organization
   * @param {string} language Login Language
   * @param {string} warehouseUuid Warehouse
   * @return {Session} Session assigned
   */
  requestLogin(userName, userPass, roleUuid, organizationUuid = null, language = 'en_US', warehouseUuid = null) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LoginRequest();
    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setRoleuuid(roleUuid);
    request.setOrganizationuuid(organizationUuid);
    request.setLanguage(language);
    request.setWarehouseuuid(warehouseUuid);
    request.setClientversion(this.version);
    return this.getService().requestLogin(request);
  }

  /**
   * Make login with Role, Organization and Warehouse as default values
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @param {string} language Login Language
   * @return {Session} Session assigned
   */
  requestLoginDefault(userName, userPass, language = 'en_US') {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LoginRequest();
    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setLanguage(language);
    request.setClientversion(this.version);
    return this.getService().requestLoginDefault(request);
  }

  /**
   * Logout Session
   * @param {string} sessionUuid Session
   * @return {Session} Session Logout
   */
  requestLogout(sessionUuid) {
    const { LogoutRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LogoutRequest();
    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    return this.getService().requestLogout(request);
  }

  /**
   * get User Menu
   * @param {string} sessionUuid Session
   * @return {UserInfoValue} User Info Value
   */
  requestUserMenuFromSession(sessionUuid) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new UserInfoRequest();
    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);
    return this.getService().requestMenuAndChild(request);
  }

  /**
   * Role Change
   * @param {object} attributes Session
   */
  requestChangeRole(attributes) {
    const { ChangeRoleRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new ChangeRoleRequest();

    request.setSessionuuid(attributes.sessionUuid);
    request.setRoleuuid(attributes.roleUuid);
    request.setOrganizationuuid(attributes.organizationUuid);
    request.setWarehouseuuid(attributes.warehouseUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);
    return this.getService().RrquestChangeRole(request);
  }
}

module.exports = Access;
