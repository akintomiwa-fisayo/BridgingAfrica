webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/general/Header.js":
/*!**************************************!*\
  !*** ./components/general/Header.js ***!
  \**************************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _redux_settings_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/settings/action */ "./redux/settings/action.js");






var _jsxFileName = "C:\\Users\\phezzy\\Desktop\\WORK\\afrihub\\components\\general\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }







var Header = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Header, _React$Component);

  var _super = _createSuper(Header);

  function Header(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Header);

    _this = _super.call(this, props);
    _this.header = null;
    _this.regHeight = _this.regHeight.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Header, [{
    key: "regHeight",
    value: function regHeight(header) {
      if (header) {
        this.props.updateHeader({
          height: header.offsetHeight
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props; // console.log('header props', props);

      var _props$settings = props.settings,
          header = _props$settings.header,
          socialHeader = _props$settings.socialHeader;
      var headerStyle = {};
      return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_7___default.a, {
        runat: "server",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 9
        }
      }, __jsx("meta", {
        httpEquiv: "content-type",
        content: "text/html;charset=utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }
      }), __jsx("script", {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=UA-52115242-17",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }
      }), __jsx("script", {
        dangerouslySetInnerHTML: {
          __html: "\n                      window.dataLayer = window.dataLayer || [];\n                      function gtag() { dataLayer.push(arguments); }\n                      gtag('js', new Date());\n\n                      gtag('config', 'UA-52115242-17');\n                    "
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35,
          columnNumber: 11
        }
      }), __jsx("meta", {
        charSet: "utf-8",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }
      }), __jsx("title", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }
      }, "Bridging Afrika"), __jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1.0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }
      }), __jsx("meta", {
        name: "description",
        content: "Collaboration for change",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "\n                      window.addEventListener(\"load\", function () { \n                      document.querySelector('body').classList.add('loaded'); });\n                    "
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/css/theme.min.css",
        rel: "stylesheet",
        type: "text/css",
        media: "all",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "/css/demo.css",
        rel: "stylesheet",
        type: "text/css",
        media: "all",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;1,100;1,200;1,300&display=swap",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }
      }), __jsx("link", {
        href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
        rel: "stylesheet",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jquery.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/popper.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/bootstrap.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "\n                (($) => {\n                    var now = new Date;\n                    var day = 864e5;\n                    var weeksToAdd = 2;\n                    var tenWeeksFromNow = new Date(+now + day * 7 * weeksToAdd).toISOString().slice(0, 10).replace(/-/g, 'index-2.html');\n                    $('[data-countdown-date].add-countdown-time').attr('data-countdown-date', tenWeeksFromNow);\n                })(jQuery);\n              "
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/aos.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/clipboard.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jquery.fancybox.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/flatpickr.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/flickity.pkgd.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/ion.rangeSlider.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/isotope.pkgd.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jarallax-video.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jarallax-element.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jquery.countdown.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jquery.smartWizard.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/plyr.polyfilled.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/prism.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/scrollMonitor.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/smooth-scroll.polyfills.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/svg-injector.umd.production.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/twitterFetcher_min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/typed.min.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/theme.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/custom.js",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        dangerouslySetInnerHTML: {
          __html: "\n                    window.addEventListener(\"load\", function () {\n                      setTimeout(function () {\n                          const delayedImages = document.querySelectorAll('[data-delay-src]');\n                          theme.mrUtil.forEach(delayedImages, (index, elem) => {\n                              const source = elem.getAttribute('data-delay-src');\n                              elem.removeAttribute('data-delay-src');\n                              elem.setAttribute('src', source);\n                          });\n                      }, 500);\n                    });\n                    // This script appears only in the demo - it disables forms with no action attribute to prevent \n                    // navigating away from the page.\n                    jQuery(\"form:not([action])\").on('submit', function () { return false; });\n\n              "
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 11
        }
      }), __jsx("script", {
        type: "text/javascript",
        src: "/js/jarallax.min.js",
        defer: true,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 11
        }
      })), __jsx("div", {
        id: "header",
        className: "navbar-container".concat(header.transparent ? ' transparent' : '').concat(!header.fixed ? ' fixed' : ''),
        style: header.fixed ? {
          position: 'absolute',
          top: "".concat(socialHeader.height, "px")
        } : {},
        ref: this.regHeight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 9
        }
      }, __jsx("nav", {
        className: "navbar navbar-expand-lg navbar-light ",
        "data-sticky": "top",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, __jsx("a", {
        id: "logo",
        className: "navbar-brand navbar-brand-dynamic-color fade-page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 15
        }
      }, __jsx("img", {
        alt: "AfriHub",
        src: "/img/logo.png",
        style: {
          borderRadius: '4px',
          height: '50px'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "d-flex align-items-center order-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 13
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/sign-up",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 15
        }
      }, __jsx("a", {
        id: "login",
        className: "btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 17
        }
      }, "Login / Signup ")), __jsx("button", {
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        className: "navbar-toggler",
        "data-target": ".navbar-collapse",
        "data-toggle": "collapse",
        type: "button",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 15
        }
      }, __jsx("img", {
        alt: "Navbar Toggler Open Icon",
        className: "navbar-toggler-open icon icon-sm",
        "data-inject-svg": true,
        src: "/img/icons/interface/icon-menu.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 17
        }
      }), __jsx("img", {
        alt: "Navbar Toggler Close Icon",
        className: "navbar-toggler-close icon icon-sm",
        "data-inject-svg": true,
        src: "/img/icons/interface/icon-x.svg",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 17
        }
      }))), __jsx("div", {
        className: "collapse navbar-collapse order-3 order-lg-2 justify-content-lg-end",
        id: "navigation-menu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 13
        }
      }, __jsx("ul", {
        className: "navbar-nav my-3 my-lg-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 15
        }
      }, __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 207,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-home icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 21
        }
      }), "Accueil")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 21
        }
      }), "\xC0 propos")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-medkit icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 220,
          columnNumber: 21
        }
      }), "Innovations")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-leaf icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 21
        }
      }), "Profils")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 230,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 231,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-gears icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 21
        }
      }), "Crowdfunding")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238,
          columnNumber: 21
        }
      }), "Blog")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 242,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 21
        }
      }), "Forum")), __jsx("li", {
        className: "nav-item",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 17
        }
      }, __jsx("a", {
        className: "nav-link",
        href: "#",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 21
        }
      }), "Contact")))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    settings: state.settings
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateHeader: function updateHeader(props) {
      return dispatch(Object(_redux_settings_action__WEBPACK_IMPORTED_MODULE_10__["updateHeader"])(props));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ })

})
//# sourceMappingURL=index.js.c7ade5388d7d200fc39e.hot-update.js.map