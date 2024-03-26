"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Persons = ({
  persons
}) => {
  return /*#__PURE__*/React.createElement("ul", null, persons.map(person => /*#__PURE__*/React.createElement("li", {
    key: person.id
  }, person.name, " ", person.number)));
};
var _default = exports.default = Persons;