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
    _this.regSocialHeaderHeight = _this.regSocialHeaderHeight.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
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
    key: "regSocialHeaderHeight",
    value: function regSocialHeaderHeight(header) {
      var _window = window,
          $ = _window.$;

      if (header) {
        this.props.updateSocialHeader({
          height: $(header).outerHeight()
        });
      }
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      console.log;

      if (this.banner) {
        var _window2 = window,
            $ = _window2.$;
        var bannerHeight = $('#banner').height();
        var socailHeaderHeight = $('#socialHeader').outerHeight();
        var headerHeight = this.props.settings.header.height;
        var bannerPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        var socialHeaderPositionTop = Object(_lib_custom__WEBPACK_IMPORTED_MODULE_10__["getCordinates"])(this.banner).top;
        console.log(socialHeaderPositionTop, '||', socailHeaderHeight);

        if ($('html')[0].scrollTop > socailHeaderHeight) {
          this.props.updateHeader({
            fixed: false
          });
        } else {
          console.log('says ');
          this.props.updateHeader({
            fixed: true
          });
        }
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
          lineNumber: 62,
          columnNumber: 7
        }
      }, __jsx("div", {
        id: "homePage",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
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
          lineNumber: 64,
          columnNumber: 11
        }
      }, __jsx("div", {
        id: "socialHeader",
        ref: this.regSocialHeaderHeight,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }
      }, __jsx("span", {
        className: "fa fa-facebook-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-linkedin-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-twitter-square",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 15
        }
      }), __jsx("span", {
        className: "fa fa-instagram",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 15
        }
      })), __jsx("img", {
        src: "/img/heros/5W9IHRVEb5.jpg",
        alt: "Background",
        className: "bk",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 13
        }
      }), __jsx("section", {
        className: "pb-0",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }
      }, __jsx("div", {
        id: "spinner",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 17
        }
      }), __jsx("div", {
        id: "innovationWeb",
        style: {
          display: 'none'
        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-medkit icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-leaf icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-gears icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 21
        }
      })), __jsx("div", {
        className: "innovation",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 21
        }
      }))), __jsx("div", {
        className: "nav-list",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "nav-item education",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "fa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 21
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114,
          columnNumber: 21
        }
      }, "Education")), __jsx("div", {
        className: "nav-item health",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-medkit icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118,
          columnNumber: 21
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 21
        }
      }, "Health")), __jsx("div", {
        className: "nav-item agriculture",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-leaf icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123,
          columnNumber: 21
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 21
        }
      }, "Agriculture")), __jsx("div", {
        className: "nav-item technology",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-gears icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 21
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 21
        }
      }, "Technology")), __jsx("div", {
        className: "nav-item others",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 19
        }
      }, __jsx("span", {
        className: "\tfa fa-book icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 21
        }
      }), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 21
        }
      }, "Others")))))), __jsx("section", {
        id: "missionSection",
        className: "o-hidden",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "col-md-9 col-lg-7 left",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 13
        }
      }, __jsx("h2", {
        className: "section-title text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 15
        }
      }, "Bridging Africa's Mission"), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 15
        }
      }, "Bridging Africa is an initiative that was born from AfricaVsVirus ideation. Working to provide lasting solutions to Covid-19, we realize that the real problem in Africa, is not the lack of innovations but lack of a collaborative network that is performance-driven and focused on impact."), __jsx("p", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 15
        }
      }, "That is how Bridging Africa came to be. A platform that gives visibility to innovations; promote and facilitate collaboration between innovators from across Africa and provide them with the opportunity to access seed funding for their startup phase while connecting them to the social investors."), __jsx("div", {
        className: "text-center",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 15
        }
      }, __jsx("button", {
        type: "button",
        className: "btn btn-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152,
          columnNumber: 17
        }
      }, "Learn more"))), __jsx("div", {
        className: "col-md-9 col-lg-5 right",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "/img/square-2.jpg",
        className: "img-fluid rounded shadow",
        alt: "j",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 15
        }
      }))), __jsx("section", {
        id: "extraSection",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }
      }, __jsx("div", {
        className: "row",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "col-md-9 col-lg-9",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 15
        }
      }, __jsx("h3", {
        className: "display-5 title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 17
        }
      }, "Latest Blog Articles"), __jsx("div", {
        className: "row content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 17
        }
      }, __jsx("div", {
        className: "blog-post col-lg-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/case-studies/thumb-5.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176,
          columnNumber: 25
        }
      }, "Blog Title"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 25
        }
      }, "Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/case-studies/thumb-5.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195,
          columnNumber: 25
        }
      }, "Blog Title"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196,
          columnNumber: 25
        }
      }, "Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 205,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/case-studies/thumb-5.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214,
          columnNumber: 25
        }
      }, "Blog Title"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 25
        }
      }, "Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 25
        }
      }, "Read Story")))), __jsx("div", {
        className: "blog-post col-lg-4 ",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 222,
          columnNumber: 19
        }
      }, __jsx("div", {
        className: "card h-100 hover-box-shadow",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "d-block bg-gradient rounded-top position-relative",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 23
        }
      }, __jsx("img", {
        className: "card-img-top hover-fade-out",
        src: "/img/case-studies/thumb-5.jpg",
        alt: "accompanying Treva testimonial",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225,
          columnNumber: 25
        }
      })), __jsx("div", {
        className: "card-body",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 23
        }
      }, __jsx("h5", {
        className: "card-title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 25
        }
      }, "Blog Title"), __jsx("p", {
        className: "card-info",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 234,
          columnNumber: 25
        }
      }, "Consectetur libero imp faucibus nisl tincidunt. Sansa tellus mauris a diam maecenas sed."), __jsx("a", {
        href: "#",
        className: "stretched-link",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 25
        }
      }, "Read Story")))))), __jsx("div", {
        id: "featuredCompany",
        className: "col-md-6 col-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 15
        }
      }, __jsx("h3", {
        className: "display-5 title",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244,
          columnNumber: 17
        }
      }, "Featured Companies"), __jsx("div", {
        className: "content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 245,
          columnNumber: 17
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-500px company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-amazon company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 251,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 254,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-adn company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-android company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-angellist company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 266,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-apple company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267,
          columnNumber: 21
        }
      })), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 270,
          columnNumber: 19
        }
      }, __jsx("a", {
        className: "fa fa-bandcamp company-icon",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271,
          columnNumber: 21
        }
      })))))), __jsx("section", {
        id: "feedback",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 280,
          columnNumber: 11
        }
      }, __jsx("h2", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 281,
          columnNumber: 13
        }
      }, "Submit your email and we will reach out to you once our website is operational"), __jsx("div", {
        id: "box",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 282,
          columnNumber: 13
        }
      }, __jsx("input", {
        placeholder: "Input email",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283,
          columnNumber: 15
        }
      }), __jsx("button", {
        type: "button",
        className: "btn btn-primary ml-lg-4 mr-3 mr-md-4 mr-lg-0 d-none d-sm-block order-lg-3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 284,
          columnNumber: 15
        }
      }, "Submit")))));
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
//# sourceMappingURL=index.js.44e378eff6ffc1efa82c.hot-update.js.map