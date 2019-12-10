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
    const requestService = new AccessServicePromiseClient(this.host);
    grpc_promise.promisifyAll(requestService);
    return requestService;
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
        return {
          userInfo: this.convertUserInfo(responseUserInfo.getUserinfo()),
          rolesList: responseUserInfo.getRolesList().map(itemRole => {
            return this.convertRole(itemRole);
          })
        };
      });
  }

  // User information
  convertUserInfo(userInfoToConvert) {
    if (userInfoToConvert) {
      return {
        id: userInfoToConvert.getId(),
        uuid: userInfoToConvert.getUuid(),
        name: userInfoToConvert.getName(),
        description: userInfoToConvert.getDescription(),
        comments: userInfoToConvert.getComments()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      description: undefined,
      comments: undefined
    };
  }

  // Role Definition
  convertRole(roleToConvert) {
    if (roleToConvert) {
      return {
        id: roleToConvert.getId(),
        uuid: roleToConvert.getUuid(),
        name: roleToConvert.getName(),
        description: roleToConvert.getDescription(),
        clientId: roleToConvert.getClientid(),
        clientName: roleToConvert.getClientname(),
        isCanReport: roleToConvert.getIscanreport(),
        isCanExport: roleToConvert.getIscanexport(),
        isPersonalLock: roleToConvert.getIspersonallock(),
        isPersonalAccess: roleToConvert.getIspersonalaccess(),
        organizationsList: roleToConvert.getOrganizationsList().map(organizationItem => {
          return this.convertAccess(organizationItem);
        }),
        windowsList: roleToConvert.getWindowsList().map(windowItem => {
          return this.convertAccess(windowItem);
        }),
        processList: roleToConvert.getProcessList().map(processItem => {
          return this.convertAccess(processItem);
        }),
        formsList: roleToConvert.getFormsList().map(formItem => {
          return this.convertAccess(formItem);
        }),
        browsersList: roleToConvert.getBrowsersList().map(browserItem => {
          return this.convertAccess(browserItem);
        }),
        workflowsList: roleToConvert.getWorkflowsList().map(workflowItem => {
          return this.convertAccess(workflowItem);
        }),
        tasksList: roleToConvert.getTasksList().map(taskItem => {
          return this.convertAccess(taskItem);
        }),
        dashboardsList: roleToConvert.getDashboardsList().map(dashboardItem => {
          return this.convertAccess(dashboardItem);
        }),
        documentActionsList: roleToConvert.getDocumentactionsList().map(documentActionItem => {
          return this.convertAccess(documentActionItem);
        }),
        tablesList: roleToConvert.getTablesList().map(tableItem => {
          return this.convertTableAccess(tableItem);
        }),
        columnsList: roleToConvert.getColumnsList().map(columnItem => {
          return this.convertColumnAccess(columnItem);
        }),
        recordsList: roleToConvert.getRecordsList().map(recordItem => {
          return this.convertRecordAccess(recordItem);
        })
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      description: undefined,
      clientId: undefined,
      clientName: undefined,
      isCanReport: undefined,
      isCanExport: undefined,
      isPersonalLock: undefined,
      isPersonalAccess: undefined,
      organizationsList: [],
      windowsList: [],
      processList: [],
      formsList: [],
      browsersList: [],
      workflowsList: [],
      tasksList: [],
      dashboardsList: [],
      documentActionsList: [],
      tablesList: [],
      columnsList: [],
      recordsList: []
    };
  }

  convertAccess(accessToConvert) {
    if (accessToConvert) {
      return {
        uuid: accessToConvert.getUuid(),
        isReadOnly: accessToConvert.getIsreadonly(),
        action: accessToConvert.getAction()
      };
    }
    return {
      uuid: undefined,
      isReadOnly: undefined,
      action: undefined
    };
  }

  convertTableAccess(tableAccess) {
    if (tableAccess) {
      return {
        tableName: tableAccess.getTablename(),
        isExclude: tableAccess.getIsexclude(),
        isCanReport: tableAccess.getIscanreport(),
        isCanExport: tableAccess.getIscanexport(),
        accessTypeRules: tableAccess.getAccesstyperules()
      };
    }
    return {
      tableName: undefined,
      isExclude: undefined,
      isCanReport: undefined,
      isCanExport: undefined,
      accessTypeRules: undefined,
    };
  }

  /**
   * Get all access type rule or get key name from value
   * @param {integer} keyFind
   */
  getAccessTypeRules(keyFind) {
    const { TableAccess } = require('./src/grpc/proto/access_pb.js');

    if (keyFind !== undefined) {
      return Object.keys(TableAccess.AccessTypeRule).find(key => {
        return TableAccess.AccessTypeRule[key] === keyFind;
      });
    } else {
      return TableAccess.AccessTypeRule;
    }
  }

  convertColumnAccess(columnAccessToConvert) {
    if (columnAccessToConvert) {
      return {
        tableName: columnAccessToConvert.getTablename(),
        columnName: columnAccessToConvert.getColumnname(),
        isExclude: columnAccessToConvert.getIsexclude(),
        isReadOnly: columnAccessToConvert.getIsreadonly()
      };
    }
    return {
      tableName: undefined,
      columnName: undefined,
      isExclude: undefined,
      isReadOnly: undefined
    };
  }

  convertRecordAccess(recordAccessToConvert) {
    if (recordAccessToConvert) {
      return {
        tableName: recordAccessToConvert.getTablename(),
        recordId: recordAccessToConvert.getRecordid(),
        recordUuid: recordAccessToConvert.getRecorduuid(),
        isExclude: recordAccessToConvert.getIsexclude(),
        isReadOnly: recordAccessToConvert.getIsreadonly(),
        isDependentEntities: recordAccessToConvert.getIsdependententities()
      };
    }
    return {
      tableName: undefined,
      recordId: undefined,
      recordUuid: undefined,
      isExclude: undefined,
      isReadOnly: undefined,
      isDependentEntities: undefined
    };
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
        return {
          userInfo: this.convertUserInfo(responseUserInfo.getUserinfo()),
          rolesList: responseUserInfo.getRolesList().map(itemRole => {
            return this.convertRole(itemRole);
          })
        };
      });
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
  requestLogin({
    userName,
    userPass,
    roleUuid,
    organizationUuid = null,
    language = 'en_US',
    warehouseUuid = null
  }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LoginRequest();

    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setRoleuuid(roleUuid);
    request.setOrganizationuuid(organizationUuid);
    request.setLanguage(language);
    request.setWarehouseuuid(warehouseUuid);
    request.setClientversion(this.version);

    return this.getService().runLogin(request)
      .then(logInResponse => {
        return this.convertSession(logInResponse);
      });
  }

  /**
   * Make login with Role, Organization and Warehouse as default values
   * @param {string} userName User Name
   * @param {string} userPass User Pass
   * @param {string} language Login Language
   * @return {Session} Session assigned
   */
  requestLoginDefault({ userName, userPass, language = 'en_US' }) {
    const { LoginRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new LoginRequest();

    request.setUsername(userName);
    request.setUserpass(userPass);
    request.setLanguage(language);
    request.setClientversion(this.version);

    return this.getService().runLoginDefault(request)
      .then(logInResponse => {
        return this.convertSession(logInResponse);
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
        return this.convertSession(logOutResponse);
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
        return this.convertSession(sessionResponse);
      });
  }

  convertSession(sessionToConvert) {
    if (sessionToConvert) {
      return {
        id: sessionToConvert.getId(),
        uuid: sessionToConvert.getUuid(),
        name: sessionToConvert.getName(),
        userInfo: this.convertUserInfo(
          sessionToConvert.getUserinfo()
        ),
        role: this.convertRole(
          sessionToConvert.getRole()
        ),
        processed: sessionToConvert.getProcessed(),
        defaultContextMap: this.convertValuesMap({
          mapToConvert: sessionToConvert.getDefaultcontextMap()
        })
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      userInfo: this.convertUserInfo(),
      role: this.convertRole(),
      processed: undefined,
      defaultContextMap: new Map()
    };
  }

  /**
   * convert the value obtained from gRPC according to the type of value
   * @param {object} valueToConvert
   * @returns {mixed}
   */
  convertContextValue(valueToConvert) {
    const { ContextValue } = require('./src/grpc/proto/access_pb.js');

    if (valueToConvert === undefined || valueToConvert === null) {
      return undefined;
    }

    let returnValue;
    switch (valueToConvert.getValuetype()) {
      // data type Null or undefined
      default:
      case ContextValue.ValueType.NULL:
        returnValue = undefined;
        break;
      // data type Number (integer)
      case ContextValue.ValueType.INTEGER:
        returnValue = valueToConvert.getIntvalue();
        break;
      // data type Number (integer)
      case ContextValue.ValueType.LONG:
        returnValue = valueToConvert.getLongvalue();
        break;
      // data type Number (float)
      case ContextValue.ValueType.DOUBLE:
        returnValue = valueToConvert.getDoublevalue();
        break;
      // data type Boolean
      case ContextValue.ValueType.BOOLEAN:
        returnValue = valueToConvert.getBooleanvalue();
        break;
      // data type String
      case ContextValue.ValueType.STRING:
        returnValue = valueToConvert.getStringvalue();
        break;
      // data type Date
      case ContextValue.ValueType.DATE:
        returnValue = new Date(valueToConvert.getLongvalue());
        break;
    }
    return returnValue;
  }

  /**
   *
   * @param {map} mapToConvert
   * @param {string} returnType
   */
  convertValuesMap({ mapToConvert, returnType = 'map', keyName = 'key' }) {
    let returnValues;
    switch (returnType) {
      case 'object':
        returnValues = {};
        mapToConvert.forEach((value, key) => {
          returnValues[key] = this.convertContextValue(value);
        });
        break;

      case 'array':
        returnValues = [];
        mapToConvert.forEach((value, key) => {
          const item = {}
          item[keyName] = key;
          item['value'] = this.convertContextValue(value);
          returnValues.push(item);
        });
        break;

      default:
      case 'map':
        returnValues = new Map();
        mapToConvert.forEach((value, key) => {
          returnValues.set(key, this.convertContextValue(value));
        });
        break;
    }

    return returnValues;
  }

  /**
   * get User Menu
   * @param {string} sessionUuid Session
   * @return {UserInfoValue} User Info Value
   */
  requestUserMenuFromSession(sessionUuid) {
    const { UserInfoRequest } = require('./src/grpc/proto/access_pb.js');
    const request = new UserInfoRequest();

    request.setSessionuuid(sessionUuid);
    request.setClientversion(this.version);
    request.setLanguage(this.language);

    return this.getService().getMenuAndChild(request)
      .then(menuResponse => {
        return this.convertMenu(menuResponse);
      });
  }

  convertMenu(menuToConvert) {
    if (menuToConvert) {
      return {
        id: menuToConvert.getId(),
        uuid: menuToConvert.getUuid(),
        parentUuid: menuToConvert.getParentuuid(),
        name: menuToConvert.getName(),
        description: menuToConvert.getDescription(),
        sequence: menuToConvert.getSequence(),
        isReadOnly: menuToConvert.getIsreadonly(),
        isSummary: menuToConvert.getIssummary(),
        isSOTrx: menuToConvert.getIssotrx(),
        action: menuToConvert.getAction(),
        referenceUuid: menuToConvert.getReferenceuuid(),
        childsList: menuToConvert.getChildsList().map(menuItem => {
          return this.convertMenu(menuItem)
        }),
        isActive: menuToConvert.getIsactive()
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      parentUuid: undefined,
      name: undefined,
      description: undefined,
      sequence: undefined,
      isReadOnly: undefined,
      isSummary: undefined,
      isSOTrx: undefined,
      action: undefined,
      referenceUuid: undefined,
      childsList: [],
      isActive: undefined
    };
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
        return this.convertSession(changeRoleResponse);
      });
  }
}

module.exports = Access;
