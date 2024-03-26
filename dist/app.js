"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = require("react");
var _ContactForm = _interopRequireDefault(require("./components/ContactForm"));
var _Persons = _interopRequireDefault(require("./components/Persons"));
var _handlers = _interopRequireDefault(require("./services/handlers"));
var _Names = _interopRequireDefault(require("./services/Names"));
require("./index.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const App = () => {
  (0, _react.useEffect)(() => {
    _Names.default.getAll().then(initialNames => {
      handle.setPersons(initialNames);
    });
  }, []);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Testi nyt alkuun"), /*#__PURE__*/React.createElement(Notification, {
    notification: _handlers.default.notification
  }), /*#__PURE__*/React.createElement("h2", null, "Contact form"), /*#__PURE__*/React.createElement(_ContactForm.default, {
    newName: _handlers.default.newName,
    newNumber: _handlers.default.newNumber,
    newEmail: _handlers.default.newEmail,
    message: _handlers.default.message,
    handleNameChange: _handlers.default.handleNameChange,
    handleNumberChange: _handlers.default.handleNumberChange,
    addName: _handlers.default.addName
  }));
};
var _default = exports.default = App;