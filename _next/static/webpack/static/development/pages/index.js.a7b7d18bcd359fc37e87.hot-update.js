webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_general_Layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/general/Layout */ "./components/general/Layout.js");
/* harmony import */ var _lib_custom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../lib/custom */ "./lib/custom.js");
/* harmony import */ var _redux_settings_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../redux/settings/action */ "./redux/settings/action.js");
/* harmony import */ var _components_SlideShow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/SlideShow */ "./components/SlideShow.js");






var _jsxFileName = "C:\\Users\\phezzy\\Desktop\\WORK\\afrihub\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }









var Index = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Index, _React$Component);

  var _super = _createSuper(Index);

  function Index(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = _super.call(this, props);
    _this.banner = null;
    _this.onScroll = _this.onScroll.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.onScroll();
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      console.log;

      if (this.banner) {
        var _window = window,
            $ = _window.$;
        var bannerHeight = $('#banner').height();
        var socialHeaderHeight = $('#socialHeader').outerHeight();
        var headerHeight = this.props.settings.header.height;
        var bannerPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        var socialHeaderPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        console.log(socialHeaderPositionTop, '||', socialHeaderHeight);
        this.props.updateHeader({
          fixed: $('html')[0].scrollTop > socialHeaderHeight
        });
        /* if (bannerHeight + bannerPositionTop <= headerHeight) {
          this.props.updateHeader({ transparent: false });
        } else {
          console.log('says ');
          this.props.updateHeader({ transparent: true });
        } */
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(_components_general_Layout__WEBPACK_IMPORTED_MODULE_9__["default"], {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "homePage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 9
        }
      }, __jsx("div", {
        id: "banner",
        ref: function ref(e) {
          _this2.banner = e;
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "socialHeader",
        ref: this.regSocialHeaderHeight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "fa fa-facebook-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-linkedin-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-twitter-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }
      })), __jsx("img", {
        src: "/img/heros/5W9IHRVEb5.jpg",
        alt: "Background",
        className: "bk",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 13
        }
      }), __jsx("section", {
        className: "pb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 15
        }
      }, __jsx("div", {
        id: "spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 17
        }
      }), __jsx("div", {
        id: "innovationWeb",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-medkit icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-leaf icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-gears icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 21
        }
      }))), __jsx(_components_SlideShow__WEBPACK_IMPORTED_MODULE_12__["default"], {
        items: [{
          label: 'Technology',
          content: __jsx("img", {
            src: "/img/innovation-1.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 32
            }
          })
        }, {
          label: 'Education',
          content: __jsx("img", {
            src: "/img/innovation-2.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 32
            }
          })
        }, {
          label: 'Health',
          content: __jsx("img", {
            src: "/img/innovation-3.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 114,
              columnNumber: 32
            }
          })
        }, {
          label: 'Agriculture',
          content: __jsx("img", {
            src: "/img/innovation-4.jpg",
            alt: "martfury",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 121,
              columnNumber: 32
            }
          })
        }],
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 17
        }
      })))), __jsx("section", {
        className: "single-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }
      }, __jsx("h2", {
        className: "section-title bolder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 13
        }
      }, "Bridging Africa's Pr\xE9sentation "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }
      }, "Bridging Afrika est une plateforme d\u2019innovation en ligne dont l\u2019objectif principal est la r\xE9solution des probl\xE8mes africains gr\xE2ce \xE0 des innovations cr\xE9\xE9es par des africains pour des africains."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, "Nous voulons faciliter la r\xE9solution de crises en cr\xE9ant un espace o\xF9 toutes les innovations, solutions de ces crises, sont r\xE9f\xE9renc\xE9es et mises en avant."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, "En promouvant ces innovations, nous cr\xE9erons avec les innovateurs une communaut\xE9 pr\xEAte \xE0 \xEAtre d\xE9ploy\xE9e quelque soit le challenge.")), __jsx("section", {
        className: "double-sides",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "section-title bolder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 15
        }
      }, "Bridging Africa's Pr\xE9sentation "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 15
        }
      }, "Bridging Afrika est une plateforme d\u2019innovation en ligne dont l\u2019objectif principal est la r\xE9solution des probl\xE8mes africains gr\xE2ce \xE0 des innovations cr\xE9\xE9es par des africains pour des africains."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 15
        }
      }, "Nous voulons faciliter la r\xE9solution de crises en cr\xE9ant un espace o\xF9 toutes les innovations, solutions de ces crises, sont r\xE9f\xE9renc\xE9es et mises en avant."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 15
        }
      }, "En promouvant ces innovations, nous cr\xE9erons avec les innovateurs une communaut\xE9 pr\xEAte \xE0 \xEAtre d\xE9ploy\xE9e quelque soit le challenge."), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 15
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193,
          columnNumber: 17
        }
      }, "En savoir plus"))), __jsx("div", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/img/square-2.jpg",
        className: "img-fluid rounded shadow",
        alt: "j",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 15
        }
      }))), __jsx("section", {
        className: "double-sides",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "text",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "section-title bolder",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 15
        }
      }, "Bridging Africa's Pr\xE9sentation "), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 15
        }
      }, "Bridging Afrika est une plateforme d\u2019innovation en ligne dont l\u2019objectif principal est la r\xE9solution des probl\xE8mes africains gr\xE2ce \xE0 des innovations cr\xE9\xE9es par des africains pour des africains."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 209,
          columnNumber: 15
        }
      }, "Nous voulons faciliter la r\xE9solution de crises en cr\xE9ant un espace o\xF9 toutes les innovations, solutions de ces crises, sont r\xE9f\xE9renc\xE9es et mises en avant."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 15
        }
      }, "En promouvant ces innovations, nous cr\xE9erons avec les innovateurs une communaut\xE9 pr\xEAte \xE0 \xEAtre d\xE9ploy\xE9e quelque soit le challenge."), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 15
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, "En savoir plus"))), __jsx("div", {
        className: "media",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 221,
          columnNumber: 13
        }
      }, __jsx("iframe", {
        src: "https://www.youtube.com/embed/4ce-Hk6pVsg",
        className: "rounded shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 15
        }
      }))), __jsx("div", {
        id: "partners",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }
      }, __jsx("h3", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 15
        }
      }, "Our Partners"), __jsx("div", {
        className: "rocker",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229,
          columnNumber: 15
        }
      }, __jsx("div", {
        className: "partners",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-amazon partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-adn partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-android partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 240,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-apple partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-adn partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-apple partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-amazon partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 256,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-adn partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-android partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 264,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-apple partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-adn partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-apple partner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276,
          columnNumber: 21
        }
      })))))), __jsx("section", {
        id: "extraSection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "blogs",
        className: "col-md-12 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285,
          columnNumber: 15
        }
      }, __jsx("h2", {
        className: "display-5 title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 286,
          columnNumber: 17
        }
      }, "Latest Articles"), __jsx("div", {
        className: "row content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "blog-post col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/blog/1.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 298,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299,
          columnNumber: 25
        }
      }, "Comment s\u2019organise la riposte contre le Covid-19 au Cameroun ?"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300,
          columnNumber: 25
        }
      }, "Face au d\xE9fi du coronavirus, le Cameroun a mis en place un syst\xE8me de d\xE9tection qui ob\xE9it \xE0 une proc\xE9dure conforme aux orientations propos\xE9es par l\u2019Organisation mondiale de la sant\xE9 (OMS)."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 303,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/blog/2.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 310,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 317,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 318,
          columnNumber: 25
        }
      }, "Acc\xE8s prioritaire au vaccin chinois contre la Covid-19 pour l\u2019Afrique ?"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 319,
          columnNumber: 25
        }
      }, "(Agence Ecofin) - Bient\xF4t l\u2019\xE9pilogue ? Point de d\xE9part de la maladie \xE0 Coronavirus 2019 et ancien \xE9picentre de la pand\xE9mie, la Chine peut aujourd\u2019hui se targuer d\u2019avoir acquis une certaine exp\xE9rience pour ce qui est de la gestion de cette crise. Mieux, selon Ding Yifang, conseiller aupr\xE8s du gouvernement, un vaccin sera bient\xF4t produit en masse."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 322,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 327,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/blog/4.webp",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 336,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 337,
          columnNumber: 25
        }
      }, "Covid-19 : nette acc\xE9l\xE9ration de la pand\xE9mie en Afrique, avertit l'OMS"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 338,
          columnNumber: 25
        }
      }, "La vitesse \xE0 laquelle le nombre de cas confirm\xE9s de Covid-19 a doubl\xE9 \u2014 moins de 20 jours \u2014 montre l'acc\xE9l\xE9ration de la propagation du nouveau coronavirus en Afrique, a averti, jeudi 11 juin, l'Organisation mondiale de Sant\xE9 (OMS)."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 341,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 345,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 346,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 347,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/case-studies/thumb-5.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 348,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 355,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 356,
          columnNumber: 25
        }
      }, "Covid-19: voici le top 10 Africain des pays les plus touch\xE9s"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 357,
          columnNumber: 25
        }
      }, "Avec plus de 9 420 cas d\xE9clar\xE9s de covid-19 et 186 morts, l\u2019Afrique du Sud pr\xE9sente le bilan le plus lourd en termes de personnes infect\xE9es selon les donn\xE9es de l\u2019Universit\xE9 Johns Hopkins. Le pays de Mandela est suivi de l\u2019Egypte, avec 8 964 cas positifs et \xE0 ce jour 514 d\xE9c\xE8s. Le Maroc pr\xE9sente, lui, 6 038 cas pour 188 d\xE9c\xE8s contre 5 558 cas et 494 morts pour l\u2019Alg\xE9rie."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 360,
          columnNumber: 25
        }
      }, "Read Story")))))))), __jsx("section", {
        id: "feedback",
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 369,
          columnNumber: 11
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 370,
          columnNumber: 13
        }
      }, "Laissez-nous votre adresse e-mail, nous vous recontacterons une fois que le site internet sera fonctionnel "), __jsx("div", {
        id: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 371,
          columnNumber: 13
        }
      }, __jsx("input", {
        placeholder: "Input email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 372,
          columnNumber: 15
        }
      }), __jsx("button", {
        type: "button",
        className: "btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 373,
          columnNumber: 15
        }
      }, "Envoyer")))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateHeader: function updateHeader(props) {
      return dispatch(Object(_redux_settings_action__WEBPACK_IMPORTED_MODULE_11__["updateHeader"])(props));
    },
    updateSocialHeader: function updateSocialHeader(props) {
      return dispatch(Object(_redux_settings_action__WEBPACK_IMPORTED_MODULE_11__["updateSocialHeader"])(props));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ })

})
//# sourceMappingURL=index.js.a7b7d18bcd359fc37e87.hot-update.js.map