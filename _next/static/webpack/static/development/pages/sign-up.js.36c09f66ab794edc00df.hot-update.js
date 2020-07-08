webpackHotUpdate("static\\development\\pages\\sign-up.js",{

/***/ "./pages/sign-up.js":
/*!**************************!*\
  !*** ./pages/sign-up.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _components_general_Header__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/general/Header */ "./components/general/Header.js");
/* harmony import */ var _components_general_Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/general/Footer */ "./components/general/Footer.js");
/* harmony import */ var _components_general_Layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/general/Layout */ "./components/general/Layout.js");
/* harmony import */ var _components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/general/FormInput */ "./components/general/FormInput.js");





var _jsxFileName = "C:\\Users\\phezzy\\Desktop\\WORK\\afrihub\\pages\\sign-up.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var SignUp = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(SignUp, _React$Component);

  var _super = _createSuper(SignUp);

  function SignUp(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, SignUp);

    _this = _super.call(this, props);
    _this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
      submitting: false,
      formType: 'signUp'
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(SignUp, [{
    key: "onChangeFormType",
    value: function onChangeFormType(e, formType) {
      e.preventDefault();
      this.setState({
        formType: formType
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props,
          state = this.state;
      var header = props.settings.header;
      var firstName = state.firstName,
          lastName = state.lastName,
          email = state.email,
          password = state.password,
          password2 = state.password2;
      return __jsx(_components_general_Layout__WEBPACK_IMPORTED_MODULE_10__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "signUpPage",
        style: {
          paddingTop: "".concat(header.height, "px")
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 9
        }
      }, __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 11
        }
      }, __jsx("section", {
        className: "left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 15
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 17
        }
      }, __jsx("span", {
        className: "fa fa-long-arrow-left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 19
        }
      }))), __jsx("img", {
        src: "/img/sign-up.jpg",
        alt: "sign up",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 15
        }
      })), __jsx("section", {
        className: "right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "forms",
        "data-form": state.formType,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 19
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 21
        }
      }, "Register"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }
      }, "Already have an account?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 23
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          _this2.onChangeFormType(e, 'logIn');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, " Login ")))), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "First Name",
        value: firstName,
        onChange: function onChange(value) {
          _this2.setState({
            firstName: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 19
        }
      }), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Last Name",
        value: lastName,
        onChange: function onChange(value) {
          _this2.setState({
            lastName: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 19
        }
      }), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Email",
        value: email,
        onChange: function onChange(value) {
          _this2.setState({
            email: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 19
        }
      }), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "password",
        label: "Password",
        value: password,
        onChange: function onChange(value) {
          _this2.setState({
            password: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 19
        }
      }), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        type: "password",
        label: "Re-type Password",
        value: password2,
        onChange: function onChange(value) {
          _this2.setState({
            password2: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 19
        }
      }), __jsx("div", {
        id: "agreement",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 19
        }
      }, __jsx("input", {
        type: "checkBox",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 21
        }
      }), __jsx("span", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }
      }, "you need to agree to our ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 52
        }
      }, __jsx("a", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 67
        }
      }, "Terms and conditions")))), __jsx("button", {
        id: "signUpBtn",
        className: "btn btn-success form-action",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 19
        }
      }, "SIGN UP")), __jsx("div", {
        className: "form",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 19
        }
      }, __jsx("h1", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }
      }, "Log In"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }
      }, "Don't have an account?", __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 23
        }
      }, __jsx("a", {
        onClick: function onClick(e) {
          _this2.onChangeFormType(e, 'signUp');
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 25
        }
      }, " Sign up ")))), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Email",
        value: state.loginEmail,
        onChange: function onChange(value) {
          _this2.setState({
            loginEmail: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 19
        }
      }), __jsx(_components_general_FormInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
        label: "Password",
        type: "password",
        value: state.loginPassword,
        onChange: function onChange(value) {
          _this2.setState({
            loginPassword: value
          });
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 19
        }
      }), __jsx("button", {
        className: "btn btn-success form-action",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 19
        }
      }, "SIGN UP")))))));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {// return store;

      var store = _ref.store;
    }
  }]);

  return SignUp;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {// updateHeader: (props) => dispatch(updateHeader(props)),
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(SignUp));

/***/ })

})
//# sourceMappingURL=sign-up.js.36c09f66ab794edc00df.hot-update.js.map