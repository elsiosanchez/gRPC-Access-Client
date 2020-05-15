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

// TODO: Change ValueType using grpc-core-client definition
const convertValues = {

  /**
   * convert the value obtained from gRPC according to the type of value
   * @param {object} valueToConvert
   * @returns {mixed}
   */
  convertContextValue(valueToConvert) {
    const { ContextValue } = require('./grpc/proto/access_pb.js');
    const { ValueType } = ContextValue;

    if (valueToConvert === undefined || valueToConvert === null) {
      return undefined;
    }

    let returnValue;
    switch (valueToConvert.getValuetype()) {
      // data type Null or undefined
      default:
      case ValueType.NULL:
        returnValue = undefined;
        break;
      // data type Number (integer)
      case ValueType.INTEGER:
        returnValue = valueToConvert.getIntvalue();
        break;
      // data type Number (integer)
      case ValueType.LONG:
        returnValue = valueToConvert.getLongvalue();
        break;
      // data type Number (float)
      case ValueType.DOUBLE:
        returnValue = valueToConvert.getDoublevalue();
        break;
      // data type Boolean
      case ValueType.BOOLEAN:
        returnValue = valueToConvert.getBooleanvalue();
        break;
      // data type String
      case ValueType.STRING:
        returnValue = valueToConvert.getStringvalue();
        break;
      // data type Date
      case ValueType.DATE:
        returnValue = new Date(valueToConvert.getLongvalue());
        break;
    }
    return returnValue;
  },

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
          returnValues[key] = convertValues.convertContextValue(value);
        });
        break;

      case 'array':
        returnValues = [];
        mapToConvert.forEach((value, key) => {
          const item = {}
          item[keyName] = key;
          item['value'] = convertValues.convertContextValue(value);
          returnValues.push(item);
        });
        break;

      default:
      case 'map':
        returnValues = new Map();
        mapToConvert.forEach((value, key) => {
          returnValues.set(key, convertValues.convertContextValue(value));
        });
        break;
    }

    return returnValues;
  }
};

module.exports = convertValues;
