/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/WikiArticleViewInfo.tsx":
/*!********************************************!*\
  !*** ./components/WikiArticleViewInfo.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState[0],\n      setWikiDescriptionData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article, \"/description\") // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return data.description ? setWikiDescriptionData(data.description) : 'setWikiDescriptionData(data)';\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      mb: \"4\",\n      style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              w: \"60px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: wikiViewInfo.rank\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 30,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              ml: \"3\",\n              size: \"150px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                style: {\n                  fontWeight: 'bold'\n                },\n                fontSize: \"md\",\n                children: wikiViewInfo.article\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 36,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              textAlign: \"right\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: [wikiViewInfo.views, \" views\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: wikiDescriptionData\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 45,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 41,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 21\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 17\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontSize: \"sm\",\n      children: \"No Results...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"cjkkmKQ4fJXpBqcg02LJXFcSuZo=\");\n\n_c = WikiArticleViewInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo); // Object.freeze numResults = 25, 50, 75, 100, 200, default=100\n//status\": 404,\n// \"type\": \"not_found\",\n// \"title\": \"Short description not found\",\n// \"detail\": \"404: not_found\",\n// \"method\": \"GET\",\n// \"uri\": \"/en.wikipedia.org/v1/page/description/Template:Geotemplate\"\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvbkRhdGEiLCJzZXRXaWtpRGVzY3JpcHRpb25EYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJhcnRpY2xlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiZGVzY3JpcHRpb24iLCJjYXJkU3R5bGUiLCJjYXJkQm9keVN0eWxlIiwicmFuayIsImZvbnRXZWlnaHQiLCJ2aWV3cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQzlDO0FBRDhDLGtCQUVVQywrQ0FBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUV0Q0MsbUJBRnNDO0FBQUEsTUFFakJDLHNCQUZpQjs7QUFJOUNDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLCtEQUNzREwsWUFBWSxDQUFDTSxPQURuRSxrQkFFRDtBQUNBO0FBQ0E7QUFKQyxLQUFMLENBTUk7QUFOSixLQU9LQyxJQVBMLENBT1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FQVixFQVFLRixJQVJMLENBU1EsVUFBQ0csSUFBRDtBQUFBLGFBQVdBLElBQUksQ0FBQ0MsV0FBTCxHQUFtQlIsc0JBQXNCLENBQUNPLElBQUksQ0FBQ0MsV0FBTixDQUF6QyxHQUE4RCw4QkFBekU7QUFBQSxLQVRSO0FBV0gsR0FaUSxFQVlOLEVBWk0sQ0FBVDtBQWNBLHNCQUNJLDhEQUFDLGlEQUFEO0FBQUEsY0FDS1gsWUFBWSxnQkFDVCw4REFBQyxpREFBRDtBQUFLLFFBQUUsRUFBQyxHQUFSO0FBQVksV0FBSyxFQUFFWSxtREFBbkI7QUFBQSw2QkFDSSw4REFBQyxpREFBRDtBQUFLLGFBQUssRUFBRUMsdURBQVo7QUFBQSwrQkFDSSw4REFBQyxtREFBRDtBQUFBLGlDQUNJLDhEQUFDLGtEQUFEO0FBQUEsb0NBQ0ksOERBQUMsb0RBQUQ7QUFBUSxlQUFDLEVBQUMsTUFBVjtBQUFBLHFDQUNJLDhEQUFDLGtEQUFEO0FBQU0sd0JBQVEsRUFBQyxJQUFmO0FBQW9CLHFCQUFLLEVBQUMsTUFBMUI7QUFBQSwwQkFDS2IsWUFBWSxDQUFDYztBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JLDhEQUFDLG9EQUFEO0FBQVEsZ0JBQUUsRUFBQyxHQUFYO0FBQWUsa0JBQUksRUFBQyxPQUFwQjtBQUFBLHFDQUNJLDhEQUFDLGtEQUFEO0FBQU0scUJBQUssRUFBRTtBQUFFQyw0QkFBVSxFQUFFO0FBQWQsaUJBQWI7QUFBcUMsd0JBQVEsRUFBQyxJQUE5QztBQUFBLDBCQUNLZixZQUFZLENBQUNNO0FBRGxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQU5KLGVBV0ksOERBQUMsb0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFYSixlQVlJLDhEQUFDLG9EQUFEO0FBQVEsdUJBQVMsRUFBQyxPQUFsQjtBQUFBLHNDQUNJLDhEQUFDLGtEQUFEO0FBQU0sd0JBQVEsRUFBQyxJQUFmO0FBQW9CLHFCQUFLLEVBQUMsTUFBMUI7QUFBQSwyQkFDS04sWUFBWSxDQUFDZ0IsS0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUksOERBQUMsa0RBQUQ7QUFBQSwwQkFBT2Q7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFEUyxnQkEyQlQsOERBQUMsa0RBQUQ7QUFBTSxjQUFRLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTVCUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFpQ0gsQ0FuREQ7O0dBQU1ILG1COztLQUFBQSxtQjtBQW9ETiwrREFBZUEsbUJBQWYsRSxDQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhZGdlLCBCb3gsIENlbnRlciwgRmxleCwgSW1hZ2UsIFNwYWNlciwgU3RhY2ssIHVzZURpc2Nsb3N1cmUsIFRleHQgfSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IGNhcmRCb2R5U3R5bGUsIGNhcmRJbWFnZSwgY2FyZFN0eWxlLCBsYWJlbFByaWNlUGVhY2ggfSBmcm9tICcuLi9zdHlsZXMvc2hvcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaWtpQXJ0aWNsZVZpZXdJbmZvID0gKHsgd2lraVZpZXdJbmZvIH0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnd2lraVZpZXdJbmZvOiAnLCB3aWtpVmlld0luZm8pO1xuICAgIGNvbnN0IFsgd2lraURlc2NyaXB0aW9uRGF0YSwgc2V0V2lraURlc2NyaXB0aW9uRGF0YSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS53aWtpbWVkaWEub3JnL2NvcmUvdjEvd2lraXBlZGlhL2VuL3BhZ2UvJHt3aWtpVmlld0luZm8uYXJ0aWNsZX0vZGVzY3JpcHRpb25gXG4gICAgICAgICAgICAvLyBgaHR0cHM6Ly93aWtpbWVkaWEub3JnL2FwaS9yZXN0X3YxL21ldHJpY3MvcGFnZXZpZXdzL3RvcC8ke2NvdW50cnljb2RlXG4gICAgICAgICAgICAvLyAgICAgPyBjb3VudHJ5Y29kZVxuICAgICAgICAgICAgLy8gICAgIDogJ2VuJ30ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGBcbiAgICAgICAgKVxuICAgICAgICAgICAgLy8gZmV0Y2goYGh0dHBzOi8vd2lraW1lZGlhLm9yZy9hcGkvcmVzdF92MS9tZXRyaWNzL3BhZ2V2aWV3cy90b3AvZW4ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+IChkYXRhLmRlc2NyaXB0aW9uID8gc2V0V2lraURlc2NyaXB0aW9uRGF0YShkYXRhLmRlc2NyaXB0aW9uKSA6ICdzZXRXaWtpRGVzY3JpcHRpb25EYXRhKGRhdGEpJylcbiAgICAgICAgICAgICk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHt3aWtpVmlld0luZm8gPyAoXG4gICAgICAgICAgICAgICAgPEJveCBtYj0nNCcgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e2NhcmRCb2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHc9JzYwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlciBtbD0nMycgc2l6ZT0nMTUwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGZvbnRTaXplPSdtZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby5hcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHRleHRBbGlnbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby52aWV3c30gdmlld3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0Pnt3aWtpRGVzY3JpcHRpb25EYXRhfTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9TdGFjaz5cbiAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdzbSc+Tm8gUmVzdWx0cy4uLjwvVGV4dD5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuZXhwb3J0IGRlZmF1bHQgV2lraUFydGljbGVWaWV3SW5mbztcblxuLy8gT2JqZWN0LmZyZWV6ZSBudW1SZXN1bHRzID0gMjUsIDUwLCA3NSwgMTAwLCAyMDAsIGRlZmF1bHQ9MTAwXG5cbi8vc3RhdHVzXCI6IDQwNCxcbi8vIFwidHlwZVwiOiBcIm5vdF9mb3VuZFwiLFxuLy8gXCJ0aXRsZVwiOiBcIlNob3J0IGRlc2NyaXB0aW9uIG5vdCBmb3VuZFwiLFxuLy8gXCJkZXRhaWxcIjogXCI0MDQ6IG5vdF9mb3VuZFwiLFxuLy8gXCJtZXRob2RcIjogXCJHRVRcIixcbi8vIFwidXJpXCI6IFwiL2VuLndpa2lwZWRpYS5vcmcvdjEvcGFnZS9kZXNjcmlwdGlvbi9UZW1wbGF0ZTpHZW90ZW1wbGF0ZVwiXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});