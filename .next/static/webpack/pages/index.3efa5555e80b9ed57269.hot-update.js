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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionTitle = _useState[0],\n      setWikiDescriptionTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionSource = _useState2[0],\n      setWikiDescriptionSource = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState3[0],\n      setWikiDescriptionData = _useState3[1]; // const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article) // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return (// console.log('d: ', data)\n        data ? setWikiDescriptionData(data) : 's'\n      );\n    } // (data.title ? setWikiDescriptionTitle(data.title) : 's');\n    // (data.source ? setWikiDescriptionSource(data.source) : 's');\n    );\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      mb: \"4\",\n      style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              w: \"60px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: wikiViewInfo.rank\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 38,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 37,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              ml: \"3\",\n              size: \"150px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                style: {\n                  fontWeight: 'bold'\n                },\n                fontSize: \"md\",\n                children: wikiDescriptionData.title\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 42,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              textAlign: \"right\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: [wikiViewInfo.views, \" views\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 50,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {}, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 53,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 49,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 36,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 35,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 21\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 17\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontSize: \"sm\",\n      children: \"No Results...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 17\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"LTVvmwuBqO91GZ6+Mape/RNHLRo=\");\n\n_c = WikiArticleViewInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo);\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvblRpdGxlIiwic2V0V2lraURlc2NyaXB0aW9uVGl0bGUiLCJ3aWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJ3aWtpRGVzY3JpcHRpb25EYXRhIiwic2V0V2lraURlc2NyaXB0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwiYXJ0aWNsZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsImNhcmRCb2R5U3R5bGUiLCJyYW5rIiwiZm9udFdlaWdodCIsInRpdGxlIiwidmlld3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLG1CQUFtQixHQUFHLFNBQXRCQSxtQkFBc0IsT0FBc0I7QUFBQTs7QUFBQSxNQUFuQkMsWUFBbUIsUUFBbkJBLFlBQW1COztBQUM5QztBQUQ4QyxrQkFFWUMsK0NBQVEsQ0FBQyxJQUFELENBRnBCO0FBQUEsTUFFdENDLG9CQUZzQztBQUFBLE1BRWhCQyx1QkFGZ0I7O0FBQUEsbUJBR2NGLCtDQUFRLENBQUMsSUFBRCxDQUh0QjtBQUFBLE1BR3RDRyxxQkFIc0M7QUFBQSxNQUdmQyx3QkFIZTs7QUFBQSxtQkFJVUosK0NBQVEsQ0FBQyxJQUFELENBSmxCO0FBQUEsTUFJdENLLG1CQUpzQztBQUFBLE1BSWpCQyxzQkFKaUIsa0JBSzlDOzs7QUFFQUMsa0RBQVMsQ0FBQyxZQUFNO0FBQ1pDLFNBQUssK0RBQ3NEVCxZQUFZLENBQUNVLE9BRG5FLEVBRUQ7QUFDQTtBQUNBO0FBSkMsS0FBTCxDQU1JO0FBTkosS0FPS0MsSUFQTCxDQU9VLFVBQUNDLEdBQUQ7QUFBQSxhQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLEtBUFYsRUFRS0YsSUFSTCxDQVNRLFVBQUNHLElBQUQ7QUFBQSxhQUNJO0FBQ0FBLFlBQUksR0FBR1Asc0JBQXNCLENBQUNPLElBQUQsQ0FBekIsR0FBa0M7QUFGMUM7QUFBQSxLQVRSLENBWVE7QUFDQTtBQWJSO0FBZUgsR0FoQlEsRUFnQk4sRUFoQk0sQ0FBVDtBQWtCQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLGNBQ0tkLFlBQVksZ0JBQ1QsOERBQUMsaURBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFZLFdBQUssRUFBRWUsbURBQW5CO0FBQUEsNkJBQ0ksOERBQUMsaURBQUQ7QUFBSyxhQUFLLEVBQUVDLHVEQUFaO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFBLG9DQUNJLDhEQUFDLG9EQUFEO0FBQVEsZUFBQyxFQUFDLE1BQVY7QUFBQSxxQ0FDSSw4REFBQyxrREFBRDtBQUFNLHdCQUFRLEVBQUMsSUFBZjtBQUFvQixxQkFBSyxFQUFDLE1BQTFCO0FBQUEsMEJBQ0toQixZQUFZLENBQUNpQjtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESixlQU1JLDhEQUFDLG9EQUFEO0FBQVEsZ0JBQUUsRUFBQyxHQUFYO0FBQWUsa0JBQUksRUFBQyxPQUFwQjtBQUFBLHFDQUNJLDhEQUFDLGtEQUFEO0FBQU0scUJBQUssRUFBRTtBQUFFQyw0QkFBVSxFQUFFO0FBQWQsaUJBQWI7QUFBcUMsd0JBQVEsRUFBQyxJQUE5QztBQUFBLDBCQUVLWixtQkFBbUIsQ0FBQ2E7QUFGekI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkosZUFZSSw4REFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpKLGVBYUksOERBQUMsb0RBQUQ7QUFBUSx1QkFBUyxFQUFDLE9BQWxCO0FBQUEsc0NBQ0ksOERBQUMsa0RBQUQ7QUFBTSx3QkFBUSxFQUFDLElBQWY7QUFBb0IscUJBQUssRUFBQyxNQUExQjtBQUFBLDJCQUNLbkIsWUFBWSxDQUFDb0IsS0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUksOERBQUMsaURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFMsZ0JBNEJULDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE3QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBa0NILENBM0REOztHQUFNckIsbUI7O0tBQUFBLG1CO0FBNEROLCtEQUFlQSxtQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2lraUFydGljbGVWaWV3SW5mby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYWRnZSwgQm94LCBDZW50ZXIsIEZsZXgsIEltYWdlLCBTcGFjZXIsIFN0YWNrLCB1c2VEaXNjbG9zdXJlLCBUZXh0IH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBjYXJkQm9keVN0eWxlLCBjYXJkSW1hZ2UsIGNhcmRTdHlsZSwgbGFiZWxQcmljZVBlYWNoIH0gZnJvbSAnLi4vc3R5bGVzL3Nob3AnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2lraUFydGljbGVWaWV3SW5mbyA9ICh7IHdpa2lWaWV3SW5mbyB9KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dpa2lWaWV3SW5mbzogJywgd2lraVZpZXdJbmZvKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvblRpdGxlLCBzZXRXaWtpRGVzY3JpcHRpb25UaXRsZSBdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB3aWtpRGVzY3JpcHRpb25Tb3VyY2UsIHNldFdpa2lEZXNjcmlwdGlvblNvdXJjZSBdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB3aWtpRGVzY3JpcHRpb25EYXRhLCBzZXRXaWtpRGVzY3JpcHRpb25EYXRhIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBjb25zdCBbIHdpa2lEZXNjcmlwdGlvbkRhdGEsIHNldFdpa2lEZXNjcmlwdGlvbkRhdGEgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkud2lraW1lZGlhLm9yZy9jb3JlL3YxL3dpa2lwZWRpYS9lbi9wYWdlLyR7d2lraVZpZXdJbmZvLmFydGljbGV9YFxuICAgICAgICAgICAgLy8gYGh0dHBzOi8vd2lraW1lZGlhLm9yZy9hcGkvcmVzdF92MS9tZXRyaWNzL3BhZ2V2aWV3cy90b3AvJHtjb3VudHJ5Y29kZVxuICAgICAgICAgICAgLy8gICAgID8gY291bnRyeWNvZGVcbiAgICAgICAgICAgIC8vICAgICA6ICdlbid9Lndpa2lwZWRpYS9hbGwtYWNjZXNzLzIwMTUvMTAvMTBgXG4gICAgICAgIClcbiAgICAgICAgICAgIC8vIGZldGNoKGBodHRwczovL3dpa2ltZWRpYS5vcmcvYXBpL3Jlc3RfdjEvbWV0cmljcy9wYWdldmlld3MvdG9wL2VuLndpa2lwZWRpYS9hbGwtYWNjZXNzLzIwMTUvMTAvMTBgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChkYXRhKSA9PlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZDogJywgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA/IHNldFdpa2lEZXNjcmlwdGlvbkRhdGEoZGF0YSkgOiAncydcbiAgICAgICAgICAgICAgICAvLyAoZGF0YS50aXRsZSA/IHNldFdpa2lEZXNjcmlwdGlvblRpdGxlKGRhdGEudGl0bGUpIDogJ3MnKTtcbiAgICAgICAgICAgICAgICAvLyAoZGF0YS5zb3VyY2UgPyBzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UoZGF0YS5zb3VyY2UpIDogJ3MnKTtcbiAgICAgICAgICAgICk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHt3aWtpVmlld0luZm8gPyAoXG4gICAgICAgICAgICAgICAgPEJveCBtYj0nNCcgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e2NhcmRCb2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHc9JzYwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlciBtbD0nMycgc2l6ZT0nMTUwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGZvbnRTaXplPSdtZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt3aWtpVmlld0luZm8uYXJ0aWNsZX0gICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWtpRGVzY3JpcHRpb25EYXRhLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHRleHRBbGlnbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby52aWV3c30gdmlld3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+ey8qIDxUZXh0Pnt3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZX08L1RleHQ+ICovfTwvQm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJz5ObyBSZXN1bHRzLi4uPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBXaWtpQXJ0aWNsZVZpZXdJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});