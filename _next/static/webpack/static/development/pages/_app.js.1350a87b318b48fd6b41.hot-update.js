webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./redux/settings/reducer.js":
/*!***********************************!*\
  !*** ./redux/settings/reducer.js ***!
  \***********************************/
/*! exports provided: initState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initState", function() { return initState; });
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./redux/settings/action.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var initState = {
  header: {
    height: 0,
    fixed: false,
    fixedTop: null
  },
  socialHeader: {
    height: 0
  }
};

function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SETTINGS_SET_INFO:
      return _objectSpread({}, state, {}, action.props);

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SETTINGS_UPDATE_HEADER:
      return _objectSpread({}, state, {
        header: _objectSpread({}, state.header, {}, action.props)
      });

    case _action__WEBPACK_IMPORTED_MODULE_1__["actionTypes"].SETTINGS_SOCIAL_UPDATE_HEADER:
      return _objectSpread({}, state, {
        socialHeader: _objectSpread({}, state.socialHeader, {}, action.props)
      });

    default:
      return state;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ })

})
//# sourceMappingURL=_app.js.1350a87b318b48fd6b41.hot-update.js.map