"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const ContactForm = () => {
  const [formData, setFormData] = (0, _react.useState)({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData);
  };
  return /*#__PURE__*/_react.default.createElement("form", {
    onSubmit: handleSubmit,
    style: {
      fontFamily: 'Arial, sans-serif'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    name: "name",
    value: formData.name,
    onChange: handleChange,
    placeholder: "Name",
    style: {
      width: '100%',
      padding: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "email",
    name: "email",
    value: formData.email,
    onChange: handleChange,
    placeholder: "Email",
    style: {
      width: '100%',
      padding: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("input", {
    type: "tel",
    name: "phone",
    value: formData.phone,
    onChange: handleChange,
    placeholder: "Phone",
    style: {
      width: '100%',
      padding: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: '10px'
    }
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    name: "message",
    value: formData.message,
    onChange: handleChange,
    placeholder: "Message",
    rows: "5",
    style: {
      width: '100%',
      padding: '10px'
    }
  })), /*#__PURE__*/_react.default.createElement("button", {
    type: "submit",
    style: {
      padding: '10px 20px',
      backgroundColor: '#0000FF',
      color: 'white',
      border: 'none',
      cursor: 'pointer'
    }
  }, "SUBMIT"));
};
var _default = exports.default = ContactForm;