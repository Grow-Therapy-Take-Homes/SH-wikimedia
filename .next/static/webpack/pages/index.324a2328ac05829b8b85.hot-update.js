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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionTitle = _useState[0],\n      setWikiDescriptionTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionSource = _useState2[0],\n      setWikiDescriptionSource = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState3[0],\n      setWikiDescriptionData = _useState3[1]; // const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article) // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return (// console.log('d: ', data)\n        data ? setWikiDescriptionData(data) : 's'\n      );\n    } // (data.title ? setWikiDescriptionTitle(data.title) : 's');\n    // (data.source ? setWikiDescriptionSource(data.source) : 's');\n    );\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {\n      children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n          mb: \"4\",\n          style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionButton, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: wikiViewInfo.rank\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 55,\n                      columnNumber: 14\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 13\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    ml: \"6\",\n                    size: \"150px\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      style: {\n                        fontWeight: 'bold'\n                      },\n                      fontSize: \"md\",\n                      children: wikiViewInfo.article\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 60,\n                      columnNumber: 14\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 59,\n                    columnNumber: 13\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 69,\n                    columnNumber: 13\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      position: \"absolute\",\n                      right: \"20px\",\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: [wikiViewInfo.views, \" views\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 71,\n                      columnNumber: 14\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 70,\n                    columnNumber: 13\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 12\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 11\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 10\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionPanel, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            sx: {\n              // white-space: pre;\n              // text-overflow: ellipsis;\n              maxHeight: '66px',\n              overflow: 'hidden'\n            },\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n              style: styles.clampStyle,\n              children: wikiDescriptionData && wikiDescriptionData.source ? wikiDescriptionData.source : 'No description'\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 110,\n            columnNumber: 9\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            fontSize: \"sm\",\n            pt: \"6\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n              fontSize: \"xs\",\n              pb: \"4\",\n              style: {\n                fontWeight: 'bold'\n              },\n              children: \"TOP VIEWS THIS MONTH\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 112,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              children: [\"June 5, 2023 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                \"float\": \"right\",\n                as: \"span\",\n                children: \"568,000 views\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 116,\n                columnNumber: 24\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              children: [\"October 18, 2023 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                \"float\": \"right\",\n                as: \"span\",\n                children: \"320,000 views\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 28\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 10\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              children: [\"December 16, 2023 \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                \"float\": \"right\",\n                as: \"span\",\n                children: \"160,000 views\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 122,\n                columnNumber: 29\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 10\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 111,\n            columnNumber: 9\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 8\n        }, _this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n        fontSize: \"sm\",\n        children: \"No Results...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 128,\n        columnNumber: 25\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"LTVvmwuBqO91GZ6+Mape/RNHLRo=\");\n\n_c = WikiArticleViewInfo;\nvar styles = {\n  clampStyle: {\n    display: 'webkit-box',\n    maxWidth: '200px',\n    webkitLineClamp: '4',\n    webkitBoxOrient: 'vertical',\n    overflow: 'hidden'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo);\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvblRpdGxlIiwic2V0V2lraURlc2NyaXB0aW9uVGl0bGUiLCJ3aWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJ3aWtpRGVzY3JpcHRpb25EYXRhIiwic2V0V2lraURlc2NyaXB0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwiYXJ0aWNsZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsImNhcmRCb2R5U3R5bGUiLCJyYW5rIiwiZm9udFdlaWdodCIsInZpZXdzIiwibWF4SGVpZ2h0Iiwib3ZlcmZsb3ciLCJzdHlsZXMiLCJjbGFtcFN0eWxlIiwic291cmNlIiwiZGlzcGxheSIsIm1heFdpZHRoIiwid2Via2l0TGluZUNsYW1wIiwid2Via2l0Qm94T3JpZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWVBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQzlDO0FBRDhDLGtCQUVZQywrQ0FBUSxDQUFDLElBQUQsQ0FGcEI7QUFBQSxNQUV0Q0Msb0JBRnNDO0FBQUEsTUFFaEJDLHVCQUZnQjs7QUFBQSxtQkFHY0YsK0NBQVEsQ0FBQyxJQUFELENBSHRCO0FBQUEsTUFHdENHLHFCQUhzQztBQUFBLE1BR2ZDLHdCQUhlOztBQUFBLG1CQUlVSiwrQ0FBUSxDQUFDLElBQUQsQ0FKbEI7QUFBQSxNQUl0Q0ssbUJBSnNDO0FBQUEsTUFJakJDLHNCQUppQixrQkFLOUM7OztBQUVBQyxrREFBUyxDQUFDLFlBQU07QUFDWkMsU0FB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QVVBLCtEQUFldEIsbUJBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpa2lBcnRpY2xlVmlld0luZm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBBY2NvcmRpb24sXG4gICAgQWNjb3JkaW9uQnV0dG9uLFxuICAgIEFjY29yZGlvbkl0ZW0sXG4gICAgQWNjb3JkaW9uUGFuZWwsXG4gICAgQmFkZ2UsXG4gICAgQm94LFxuICAgIENlbnRlcixcbiAgICBGbGV4LFxuICAgIEltYWdlLFxuICAgIFNwYWNlcixcbiAgICBTdGFjayxcbiAgICB1c2VEaXNjbG9zdXJlLFxuICAgIFRleHRcbn0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBjYXJkQm9keVN0eWxlLCBjYXJkSW1hZ2UsIGNhcmRTdHlsZSwgbGFiZWxQcmljZVBlYWNoIH0gZnJvbSAnLi4vc3R5bGVzL3Nob3AnO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuY29uc3QgV2lraUFydGljbGVWaWV3SW5mbyA9ICh7IHdpa2lWaWV3SW5mbyB9KSA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coJ3dpa2lWaWV3SW5mbzogJywgd2lraVZpZXdJbmZvKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvblRpdGxlLCBzZXRXaWtpRGVzY3JpcHRpb25UaXRsZSBdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB3aWtpRGVzY3JpcHRpb25Tb3VyY2UsIHNldFdpa2lEZXNjcmlwdGlvblNvdXJjZSBdID0gdXNlU3RhdGUobnVsbCk7XG4gICAgY29uc3QgWyB3aWtpRGVzY3JpcHRpb25EYXRhLCBzZXRXaWtpRGVzY3JpcHRpb25EYXRhIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICAvLyBjb25zdCBbIHdpa2lEZXNjcmlwdGlvbkRhdGEsIHNldFdpa2lEZXNjcmlwdGlvbkRhdGEgXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2goXG4gICAgICAgICAgICBgaHR0cHM6Ly9hcGkud2lraW1lZGlhLm9yZy9jb3JlL3YxL3dpa2lwZWRpYS9lbi9wYWdlLyR7d2lraVZpZXdJbmZvLmFydGljbGV9YFxuICAgICAgICAgICAgLy8gYGh0dHBzOi8vd2lraW1lZGlhLm9yZy9hcGkvcmVzdF92MS9tZXRyaWNzL3BhZ2V2aWV3cy90b3AvJHtjb3VudHJ5Y29kZVxuICAgICAgICAgICAgLy8gICAgID8gY291bnRyeWNvZGVcbiAgICAgICAgICAgIC8vICAgICA6ICdlbid9Lndpa2lwZWRpYS9hbGwtYWNjZXNzLzIwMTUvMTAvMTBgXG4gICAgICAgIClcbiAgICAgICAgICAgIC8vIGZldGNoKGBodHRwczovL3dpa2ltZWRpYS5vcmcvYXBpL3Jlc3RfdjEvbWV0cmljcy9wYWdldmlld3MvdG9wL2VuLndpa2lwZWRpYS9hbGwtYWNjZXNzLzIwMTUvMTAvMTBgKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgICAgIC50aGVuKFxuICAgICAgICAgICAgICAgIChkYXRhKSA9PlxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZDogJywgZGF0YSlcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA/IHNldFdpa2lEZXNjcmlwdGlvbkRhdGEoZGF0YSkgOiAncydcbiAgICAgICAgICAgICAgICAvLyAoZGF0YS50aXRsZSA/IHNldFdpa2lEZXNjcmlwdGlvblRpdGxlKGRhdGEudGl0bGUpIDogJ3MnKTtcbiAgICAgICAgICAgICAgICAvLyAoZGF0YS5zb3VyY2UgPyBzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UoZGF0YS5zb3VyY2UpIDogJ3MnKTtcbiAgICAgICAgICAgICk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtPlxuXHRcdFx0XHR7d2lraVZpZXdJbmZvID8gKFxuXHRcdFx0XHRcdDw+XHRcblx0XHRcdFx0XHRcdDxCb3ggbWI9JzQnIHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHQ8QWNjb3JkaW9uQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveCBzdHlsZT17Y2FyZEJvZHlTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxTdGFjaz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8RmxleD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxDZW50ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPSdzbScgY29sb3I9J2dyYXknPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt3aWtpVmlld0luZm8ucmFua31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2VudGVyIG1sPSc2JyBzaXplPScxNTBweCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IHN0eWxlPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fSBmb250U2l6ZT0nbWQnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt3aWtpVmlld0luZm8uYXJ0aWNsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7Lyoge3dpa2lEZXNjcmlwdGlvbkRhdGEgJiYgd2lraURlc2NyaXB0aW9uRGF0YS50aXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpa2lEZXNjcmlwdGlvbkRhdGEudGl0bGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lraVZpZXdJbmZvLmFydGljbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpfSAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9DZW50ZXI+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3BhY2VyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2VudGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBwb3NpdGlvbj1cImFic29sdXRlXCIgcmlnaHQ9XCIyMHB4XCIgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dpa2lWaWV3SW5mby52aWV3c30gdmlld3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7LyogPEJveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBzdHlsZT17c3R5bGVzLmNsYW1wU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dpa2lEZXNjcmlwdGlvbkRhdGEgJiYgd2lraURlc2NyaXB0aW9uRGF0YS5zb3VyY2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHdpa2lEZXNjcmlwdGlvbkRhdGEuc291cmNlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpIDogKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PiAqL31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvQ2VudGVyPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvRmxleD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0XHRcdDwvQWNjb3JkaW9uQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdFx0PEFjY29yZGlvblBhbmVsPlxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggc3g9e3tcblx0XHRcdFx0XHRcdFx0XHRcdC8vIHdoaXRlLXNwYWNlOiBwcmU7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblx0XHRcdFx0XHRcdFx0XHRcdG1heEhlaWdodDogJzY2cHgnLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3ZlcmZsb3c6ICdoaWRkZW4nfX1cblx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0PFRleHQgc3R5bGU9e3N0eWxlcy5jbGFtcFN0eWxlfT5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aWtpRGVzY3JpcHRpb25EYXRhICYmIHdpa2lEZXNjcmlwdGlvbkRhdGEuc291cmNlID8gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZVxuXHRcdFx0XHRcdFx0XHRcdFx0KSA6IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0J05vIGRlc2NyaXB0aW9uJ1xuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHR7LyogPFRleHQgZm9udFNpemU9XCJzbVwiIGNvbG9yPVwiZ3JleVwiIHBiPVwiNFwiPlxuXHRcdFx0XHRcdFx0XHRcdFx0e3dpa2lEZXNjcmlwdGlvbkRhdGEgJiYgd2lraURlc2NyaXB0aW9uRGF0YS5zb3VyY2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHR3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZSk6IChcblx0XHRcdFx0XHRcdFx0XHRcdDxDZW50ZXI+J05vIGRlc2NyaXB0aW9uJzwvQ2VudGVyPil9XG5cdFx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+ICovfVxuXHRcdFx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdFx0PGhyLz5cblx0XHRcdFx0XHRcdFx0XHQ8Qm94IGZvbnRTaXplPVwic21cIiBwdD1cIjZcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPVwieHNcIiBwYj1cIjRcIiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRUT1AgVklFV1MgVEhJUyBNT05USFxuXHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0SnVuZSA1LCAyMDIzIDxUZXh0IGZsb2F0PVwicmlnaHRcIiBhcz1cInNwYW5cIj41NjgsMDAwIHZpZXdzPC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRPY3RvYmVyIDE4LCAyMDIzIDxUZXh0IGZsb2F0PVwicmlnaHRcIiBhcz1cInNwYW5cIj4zMjAsMDAwIHZpZXdzPC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHRcdFx0XHQ8Qm94PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHREZWNlbWJlciAxNiwgMjAyMyA8VGV4dCBmbG9hdD1cInJpZ2h0XCIgYXM9XCJzcGFuXCI+MTYwLDAwMCB2aWV3czwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0XHQ8L0FjY29yZGlvblBhbmVsPlxuXHRcdFx0XHRcdFx0PC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nPk5vIFJlc3VsdHMuLi48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY2xhbXBTdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnd2Via2l0LWJveCcsXG4gICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxuICAgICAgICB3ZWJraXRMaW5lQ2xhbXA6ICc0JyxcbiAgICAgICAgd2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWtpQXJ0aWNsZVZpZXdJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});