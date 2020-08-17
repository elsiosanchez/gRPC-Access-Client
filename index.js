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
  constructor({ host, version, language = 'en_US' }) {
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
    const { SecurityPromiseClient } = require('./src/grpc/proto/access_grpc_web_pb.js');
    const requestService = new SecurityPromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
  }

  /**
   * Make login
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @return {Session} Session assigned
   */
  requestLoginDefault({ userName, userPass }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LoginRequest();

    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setLanguage(this.language);
    request.setClientversion(this.version);

    return this.getService().runLoginDefault(request)
      .then(logInResponse => {
        const { convertSession } = require('./src/convertAccess.js');

        return convertSession(logInResponse);
      });
  }

  /**
   * Make login with Role, Organization and Warehouse as default values
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @param {string} organizationUuid Organization
   * @param {string} warehouseUuid Warehouse
   * @return {Session} Session assigned
   */
  requestLogin({
    userName,
    userPass,
    roleUuid,
    organizationUuid = null,
    warehouseUuid = null
  }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LoginRequest();

    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setRoleuuid(roleUuid);
    request.setOrganizationuuid(organizationUuid);
    request.setLanguage(this.language);
    request.setWarehouseuuid(warehouseUuid);
    request.setClientversion(this.version);

    return this.getService().runLogin(request)
      .then(logInResponse => {
        const { convertSession } = require('./src/convertAccess.js');

        return convertSession(logInResponse);
      });
  }

  /**
   * LogOut Session
   * @param {string} sessionUuid Session
   * @return {Session} Session Logout
   */
  requestLogOut(sessionUuid) {
    const { LogoutRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LogoutRequest();

    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);

    return this.getService().runLogout(request)
      .then(logOutResponse => {
        const { convertSession } = require('./src/convertAccess.js');

        return convertSession(logOutResponse);
      });
  }

  /**
   * Get Session
   * @param {string} sessionUuid Session
   * @return {Session} Session getted
   */
  getSession(sessionUuid) {
    const { SessionRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new SessionRequest();

    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);

    return this.getService().getSession(request)
      .then(sessionResponse => {
        const { convertSession } = require('./src/convertAccess.js');

        return convertSession(sessionResponse);
      });
  }

  /**
   * Get user roles assigned
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @return {UserRoles} Roles Assigned to User
   */
  requestUserInfo({ userName, userPass }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LoginRequest();

    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setClientversion(this.version);
    request.setLanguage(this.language);

    return this.getService().getUserInfo(request)
      .then(responseUserInfo => {
        const { convertUserInfo, convertRole } = require('./src/convertAccess.js');

        return {
          userInfo: convertUserInfo(responseUserInfo.getUserinfo()),
          rolesList: responseUserInfo.getRolesList().map(itemRole => {
            return convertRole(itemRole);
          })
        };
      });
  }

  /**
   * User Info
   * @param {string} sessionUuid Session
   * @return {UserInfoValue} User Info Value
   */
  requestUserInfoFromSession(sessionUuid) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new UserInfoRequest();

    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);

    return this.getService().getUserInfoFromSession(request)
      .then(responseUserInfo => {
        const { convertUserInfo, convertRole } = require('./src/convertAccess.js');

        return {
          userInfo: convertUserInfo(responseUserInfo.getUserinfo()),
          rolesList: responseUserInfo.getRolesList().map(itemRole => {
            return convertRole(itemRole);
          })
        };
      });
  }

  /**
   * get User Menu
   * @param {string} sessionUuid Session
   * @param {string} roleUuid uuid role
   * @param {string} organizationUuid uuid role
   * @param {string} warehouseUuid uuid warehouseUuid
   * @return {UserInfoValue} User Info Value
   */
  requestUserMenuFromSession({ sessionUuid, roleUuid, organizationUuid, warehouseUuid }) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new UserInfoRequest();
    request.setSessionuuid(sessionUuid);
    request.setRoleuuid(roleUuid);
    request.setOrganizationuuid(organizationUuid);
    request.setWarehouseuuid(warehouseUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);

    return this.getService().getMenuAndChild(request)
      .then(menuResponse => {
        const { convertMenu } = require('./src/convertAccess.js');

        return convertMenu(menuResponse);
      });
  }

  /**
   * Role Change
   * @param {string} sessionUuid
   * @param {string} roleUuid
   * @param {string} organizationUuid
   * @param {string} warehouseUuid
   */
  requestChangeRole({ sessionUuid, roleUuid, organizationUuid, warehouseUuid }) {
    const { ChangeRoleRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new ChangeRoleRequest();

    request.setSessionuuid(sessionUuid);
    request.setRoleuuid(roleUuid);
    request.setOrganizationuuid(organizationUuid);
    request.setWarehouseuuid(warehouseUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);

    return this.getService().runChangeRole(request)
      .then(changeRoleResponse => {
        const { convertSession } = require('./src/convertAccess.js');

        return convertSession(changeRoleResponse);
      });
  }
}

module.exports = Access;
