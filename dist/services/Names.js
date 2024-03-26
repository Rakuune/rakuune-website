"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _axios = _interopRequireDefault(require("axios"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const baseUrl = "/api/names";
const getAll = async () => {
  try {
    const response = await _axios.default.get(baseUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching data: ', error);
    return [];
  }
};
const create = async newObject => {
  try {
    const response = await _axios.default.post(baseUrl, newObject);
    return response.data;
  } catch (error) {
    console.error('Error creating object: ', error);
    return null;
  }
};
const update = async (id, newObject) => {
  try {
    const response = await _axios.default.put(`${baseUrl}/${id}`, newObject);
    return response.data;
  } catch (error) {
    console.error('Error updating object: ', error);
    return null;
  }
};
var _default = exports.default = {
  getAll,
  create,
  update
};