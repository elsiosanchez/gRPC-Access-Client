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
  constructor(host, version) {
    this.host = host;
    this.version = version;
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
  requestUserRoles(userName, userPass) {
    const { RoleRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new RoleRequest();
    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setClientversion(this.version);
    return this.getService().requestUserRoles(request);
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
  requestLogin(userName, userPass, roleUuid, organizationUuid, language = 'en_US', warehouseUuid = null) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LoginRequest();
    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setOrganizationuuid(userPass);
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
  requestLoginDefault(userName, userPass, roleUuid, language = 'en_US') {
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
   * @param {string} userPass User Pass
   * @param {string} language Login Language
   * @return {Session} Session Logout
   */
  requestLogout(sessionUuid) {
    const { LogoutRequest } = require('./src/grpc/proto/access_pb.js');
    let request = new LogoutRequest();
    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    return this.getService().requestLogout(request);
  }
}

module.exports = Access;
