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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionTitle = _useState[0],\n      setWikiDescriptionTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionSource = _useState2[0],\n      setWikiDescriptionSource = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState3[0],\n      setWikiDescriptionData = _useState3[1]; // const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article) // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return (// console.log('d: ', data)\n        data ? setWikiDescriptionData(data) : 's'\n      );\n    } // (data.title ? setWikiDescriptionTitle(data.title) : 's');\n    // (data.source ? setWikiDescriptionSource(data.source) : 's');\n    );\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {\n      children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            mb: \"4\",\n            style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    w: \"60px\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: wikiViewInfo.rank\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 54,\n                      columnNumber: 45\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 53,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    ml: \"3\",\n                    size: \"150px\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      style: {\n                        fontWeight: 'bold'\n                      },\n                      fontSize: \"md\",\n                      children: wikiDescriptionData && wikiDescriptionData.title ? wikiDescriptionData.title : wikiViewInfo.article\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 59,\n                      columnNumber: 45\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 58,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 67,\n                    columnNumber: 41\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    textAlign: \"right\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: [wikiViewInfo.views, \" views\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 69,\n                      columnNumber: 45\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        style: styles.clampStyle,\n                        children: wikiDescriptionData && wikiDescriptionData.source ? wikiDescriptionData.source : ''\n                      }, void 0, false, {\n                        fileName: _jsxFileName,\n                        lineNumber: 73,\n                        columnNumber: 49\n                      }, _this)\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 72,\n                      columnNumber: 45\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 41\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 37\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 33\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 29\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 49,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 48,\n          columnNumber: 27\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionPanel, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n              children: wikiDescriptionData && wikiDescriptionData.source ? wikiDescriptionData.source : ''\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 87,\n              columnNumber: 25\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 21\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 49\n        }, _this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n        fontSize: \"sm\",\n        children: \"No Results...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 25\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"LTVvmwuBqO91GZ6+Mape/RNHLRo=\");\n\n_c = WikiArticleViewInfo;\nvar styles = {\n  clampStyle: {\n    display: 'webkit-box',\n    maxWidth: '200px',\n    webkitLineClamp: '4',\n    webkitBoxOrient: 'vertical',\n    overflow: 'hidden'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo);\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvblRpdGxlIiwic2V0V2lraURlc2NyaXB0aW9uVGl0bGUiLCJ3aWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJ3aWtpRGVzY3JpcHRpb25EYXRhIiwic2V0V2lraURlc2NyaXB0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwiYXJ0aWNsZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsImNhcmRCb2R5U3R5bGUiLCJyYW5rIiwiZm9udFdlaWdodCIsInRpdGxlIiwidmlld3MiLCJzdHlsZXMiLCJjbGFtcFN0eWxlIiwic291cmNlIiwiZGlzcGxheSIsIm1heFdpZHRoIiwid2Via2l0TGluZUNsYW1wIiwid2Via2l0Qm94T3JpZW50Iiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDOUM7QUFEOEMsa0JBRVlDLCtDQUFRLENBQUMsSUFBRCxDQUZwQjtBQUFBLE1BRXRDQyxvQkFGc0M7QUFBQSxNQUVoQkMsdUJBRmdCOztBQUFBLG1CQUdjRiwrQ0FBUSxDQUFDLElBQUQsQ0FIdEI7QUFBQSxNQUd0Q0cscUJBSHNDO0FBQUEsTUFHZkMsd0JBSGU7O0FBQUEsbUJBSVVKLCtDQUFRLENBQUMsSUFBRCxDQUpsQjtBQUFBLE1BSXRDSyxtQkFKc0M7QUFBQSxNQUlqQkMsc0JBSmlCLGtCQUs5Qzs7O0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLCtE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QUE7QUFBQTtBQUFBO0FBQUEsaUJBckN4QjtBQUFBLHNCQURTLGdCQThDVCw4REFBQyxrREFBRDtBQUFNLGdCQUFRLEVBQUMsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQS9DWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBdURILENBaEZEOztHQUFNeEIsbUI7O0tBQUFBLG1CO0FBa0ZOLElBQU1zQixNQUFNLEdBQUc7QUFDWEMsWUFBVSxFQUFFO0FBQ1JFLFdBQU8sRUFBRSxZQUREO0FBRVJDLFlBQVEsRUFBRSxPQUZGO0FBR1JDLG1CQUFlLEVBQUUsR0FIVDtBQUlSQyxtQkFBZSxFQUFFLFVBSlQ7QUFLUkMsWUFBUSxFQUFFO0FBTEY7QUFERCxDQUFmO0FBVUEsK0RBQWU3QixtQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2lraUFydGljbGVWaWV3SW5mby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25CdXR0b24sXG4gICAgQWNjb3JkaW9uSXRlbSxcbiAgICBBY2NvcmRpb25QYW5lbCxcbiAgICBCYWRnZSxcbiAgICBCb3gsXG4gICAgQ2VudGVyLFxuICAgIEZsZXgsXG4gICAgSW1hZ2UsXG4gICAgU3BhY2VyLFxuICAgIFN0YWNrLFxuICAgIHVzZURpc2Nsb3N1cmUsXG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IGNhcmRCb2R5U3R5bGUsIGNhcmRJbWFnZSwgY2FyZFN0eWxlLCBsYWJlbFByaWNlUGVhY2ggfSBmcm9tICcuLi9zdHlsZXMvc2hvcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaWtpQXJ0aWNsZVZpZXdJbmZvID0gKHsgd2lraVZpZXdJbmZvIH0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnd2lraVZpZXdJbmZvOiAnLCB3aWtpVmlld0luZm8pO1xuICAgIGNvbnN0IFsgd2lraURlc2NyaXB0aW9uVGl0bGUsIHNldFdpa2lEZXNjcmlwdGlvblRpdGxlIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvblNvdXJjZSwgc2V0V2lraURlc2NyaXB0aW9uU291cmNlIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvbkRhdGEsIHNldFdpa2lEZXNjcmlwdGlvbkRhdGEgXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIGNvbnN0IFsgd2lraURlc2NyaXB0aW9uRGF0YSwgc2V0V2lraURlc2NyaXB0aW9uRGF0YSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS53aWtpbWVkaWEub3JnL2NvcmUvdjEvd2lraXBlZGlhL2VuL3BhZ2UvJHt3aWtpVmlld0luZm8uYXJ0aWNsZX1gXG4gICAgICAgICAgICAvLyBgaHR0cHM6Ly93aWtpbWVkaWEub3JnL2FwaS9yZXN0X3YxL21ldHJpY3MvcGFnZXZpZXdzL3RvcC8ke2NvdW50cnljb2RlXG4gICAgICAgICAgICAvLyAgICAgPyBjb3VudHJ5Y29kZVxuICAgICAgICAgICAgLy8gICAgIDogJ2VuJ30ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGBcbiAgICAgICAgKVxuICAgICAgICAgICAgLy8gZmV0Y2goYGh0dHBzOi8vd2lraW1lZGlhLm9yZy9hcGkvcmVzdF92MS9tZXRyaWNzL3BhZ2V2aWV3cy90b3AvZW4ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkOiAnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICBkYXRhID8gc2V0V2lraURlc2NyaXB0aW9uRGF0YShkYXRhKSA6ICdzJ1xuICAgICAgICAgICAgICAgIC8vIChkYXRhLnRpdGxlID8gc2V0V2lraURlc2NyaXB0aW9uVGl0bGUoZGF0YS50aXRsZSkgOiAncycpO1xuICAgICAgICAgICAgICAgIC8vIChkYXRhLnNvdXJjZSA/IHNldFdpa2lEZXNjcmlwdGlvblNvdXJjZShkYXRhLnNvdXJjZSkgOiAncycpO1xuICAgICAgICAgICAgKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgIHt3aWtpVmlld0luZm8gPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8PjxBY2NvcmRpb25CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCb3ggbWI9JzQnIHN0eWxlPXtjYXJkU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e2NhcmRCb2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHc9JzYwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nIGNvbG9yPSdncmF5Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWtpVmlld0luZm8ucmFua31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2VudGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDZW50ZXIgbWw9JzMnIHNpemU9JzE1MHB4Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGZvbnRTaXplPSdtZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lraURlc2NyaXB0aW9uRGF0YSAmJiB3aWtpRGVzY3JpcHRpb25EYXRhLnRpdGxlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpa2lEZXNjcmlwdGlvbkRhdGEudGl0bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lraVZpZXdJbmZvLmFydGljbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BhY2VyIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlciB0ZXh0QWxpZ249J3JpZ2h0Jz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lraVZpZXdJbmZvLnZpZXdzfSB2aWV3c1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBzdHlsZT17c3R5bGVzLmNsYW1wU3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWtpRGVzY3JpcHRpb25EYXRhICYmIHdpa2lEZXNjcmlwdGlvbkRhdGEuc291cmNlID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9DZW50ZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Cb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0JveD48L0FjY29yZGlvbkJ1dHRvbj48QWNjb3JkaW9uUGFuZWw+XG4gICAgICAgICAgICAgICAgICAgIDxCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7d2lraURlc2NyaXB0aW9uRGF0YSAmJiB3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZSA/IHdpa2lEZXNjcmlwdGlvbkRhdGEuc291cmNlIDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgIDwvQm94PlxuICAgICAgICAgICAgICAgIDwvQWNjb3JkaW9uUGFuZWw+PC8+XG4gICAgICAgICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBmb250U2l6ZT0nc20nPk5vIFJlc3VsdHMuLi48L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XG4gICAgICAgIDwvQm94PlxuICAgICk7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gICAgY2xhbXBTdHlsZToge1xuICAgICAgICBkaXNwbGF5OiAnd2Via2l0LWJveCcsXG4gICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxuICAgICAgICB3ZWJraXRMaW5lQ2xhbXA6ICc0JyxcbiAgICAgICAgd2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnLFxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBXaWtpQXJ0aWNsZVZpZXdJbmZvO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});