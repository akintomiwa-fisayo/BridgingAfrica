webpackHotUpdate("static\\development\\pages\\about.js",{

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
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





var _jsxFileName = "C:\\Users\\phezzy\\Desktop\\WORK\\afrihub\\pages\\about.js";
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
          lineNumber: 40,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "aboutPage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }
      }, __jsx("img", {
        src: "/img/innovation-5.jpg",
        alt: "",
        className: "banner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }
      }), __jsx("div", {
        className: "container",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "about-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 13
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 15
        }
      }, "Our Mission"), __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 15
        }
      }, "Nostrud ad aute nulla nulla. Ad dolor exercitation incididunt et pariatur magna. Irure laborum et enim aliquip proident. Elit deserunt ipsum amet ut consectetur occaecat et anim consequat mollit. Nulla culpa elit tempor ut reprehenderit cillum esse. Proident proident reprehenderit commodo laborum esse. Ad pariatur anim minim pariatur fugiat eiusmod ullamco consectetur pariatur sint aute in minim. Sunt enim anim reprehenderit labore ipsum irure. Exercitation nulla adipisicing do aliquip. Occaecat magna proident nostrud enim adipisicing veniam ad dolor non aute et quis labore. Labore enim aliqua consequat laborum esse fugiat ad culpa aliquip qui laboris exercitation amet nisi.")))));
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
//# sourceMappingURL=about.js.4b2ad9c79e6c8dc7cc8b.hot-update.js.map