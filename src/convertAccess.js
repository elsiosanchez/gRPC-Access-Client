/*************************************************************************************
 * Product: ADempiere gRPC Business Data Client Convert Utils                        *
 * Copyright (C) 2012-2020 E.R.P. Consultores y Asociados, C.A.                      *
 * Contributor(s): Edwin Betancourt EdwinBetanc0urt@outlook.com                      *
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

const convertAccess = {
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
  },

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
          return convertAccess.convertAccess(organizationItem);
        }),
        windowsList: roleToConvert.getWindowsList().map(windowItem => {
          return convertAccess.convertAccess(windowItem);
        }),
        processList: roleToConvert.getProcessList().map(processItem => {
          return convertAccess.convertAccess(processItem);
        }),
        formsList: roleToConvert.getFormsList().map(formItem => {
          return convertAccess.convertAccess(formItem);
        }),
        browsersList: roleToConvert.getBrowsersList().map(browserItem => {
          return convertAccess.convertAccess(browserItem);
        }),
        workflowsList: roleToConvert.getWorkflowsList().map(workflowItem => {
          return convertAccess.convertAccess(workflowItem);
        }),
        tasksList: roleToConvert.getTasksList().map(taskItem => {
          return convertAccess.convertAccess(taskItem);
        }),
        dashboardsList: roleToConvert.getDashboardsList().map(dashboardItem => {
          return convertAccess.convertAccess(dashboardItem);
        }),
        documentActionsList: roleToConvert.getDocumentactionsList().map(documentActionItem => {
          return convertAccess.convertAccess(documentActionItem);
        }),
        tablesList: roleToConvert.getTablesList().map(tableItem => {
          return convertAccess.convertTableAccess(tableItem);
        }),
        columnsList: roleToConvert.getColumnsList().map(columnItem => {
          return convertAccess.convertColumnAccess(columnItem);
        }),
        recordsList: roleToConvert.getRecordsList().map(recordItem => {
          return convertAccess.convertRecordAccess(recordItem);
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
  },

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
  },

  convertTableAccess(tableAccess) {
    if (tableAccess) {
      const { getTableAccess_AccessTypeRule } = require('./convertEnums.js');
      return {
        tableName: tableAccess.getTablename(),
        isExclude: tableAccess.getIsexclude(),
        isCanReport: tableAccess.getIscanreport(),
        isCanExport: tableAccess.getIscanexport(),
        accessTypeRules: tableAccess.getAccesstyperules(),
        accessTypeRulesName: getTableAccess_AccessTypeRule({
          value: tableAccess.getAccesstyperules()
        })
      };
    }
    return {
      tableName: undefined,
      isExclude: undefined,
      isCanReport: undefined,
      isCanExport: undefined,
      accessTypeRules: undefined,
    };
  },

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
  },

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
  },

  convertSession(sessionToConvert) {
    if (sessionToConvert) {
      const { convertValuesMap } = require('./convertValues.js');

      return {
        id: sessionToConvert.getId(),
        uuid: sessionToConvert.getUuid(),
        name: sessionToConvert.getName(),
        userInfo: convertAccess.convertUserInfo(
          sessionToConvert.getUserinfo()
        ),
        role: convertAccess.convertRole(
          sessionToConvert.getRole()
        ),
        processed: sessionToConvert.getProcessed(),
        defaultContextMap: convertValuesMap({
          mapToConvert: sessionToConvert.getDefaultcontextMap()
        })
      };
    }
    return {
      id: undefined,
      uuid: undefined,
      name: undefined,
      userInfo: undefined,
      role: undefined,
      processed: undefined,
      defaultContextMap: undefined
    };
  },

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
          return convertAccess.convertMenu(menuItem)
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
      childsList: undefined,
      isActive: undefined
    };
  }
};

module.exports = convertAccess;
