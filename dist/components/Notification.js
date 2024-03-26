"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Notification = ({
  notification
}) => {
  if (notification === null) {
    return null;
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "notification"
  }, notification);
};
var _default = exports.default = Notification;