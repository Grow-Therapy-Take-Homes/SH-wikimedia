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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionTitle = _useState[0],\n      setWikiDescriptionTitle = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionSource = _useState2[0],\n      setWikiDescriptionSource = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState3[0],\n      setWikiDescriptionData = _useState3[1]; // const [ wikiDescriptionData, setWikiDescriptionData ] = useState(null);\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article) // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return (// console.log('d: ', data)\n        data ? setWikiDescriptionData(data) : 's'\n      );\n    } // (data.title ? setWikiDescriptionTitle(data.title) : 's');\n    // (data.source ? setWikiDescriptionSource(data.source) : 's');\n    );\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionItem, {\n      children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionButton, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            mb: \"4\",\n            style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n              style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n                  children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    w: \"60px\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: wikiViewInfo.rank\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 55,\n                      columnNumber: 13\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 54,\n                    columnNumber: 12\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    ml: \"3\",\n                    size: \"150px\",\n                    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      style: {\n                        fontWeight: 'bold'\n                      },\n                      fontSize: \"md\",\n                      children: wikiDescriptionData && wikiDescriptionData.title ? wikiDescriptionData.title : wikiViewInfo.article\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 60,\n                      columnNumber: 13\n                    }, _this)\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 59,\n                    columnNumber: 12\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 68,\n                    columnNumber: 12\n                  }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n                    textAlign: \"right\",\n                    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                      fontSize: \"sm\",\n                      color: \"gray\",\n                      children: [wikiViewInfo.views, \" views\"]\n                    }, void 0, true, {\n                      fileName: _jsxFileName,\n                      lineNumber: 70,\n                      columnNumber: 13\n                    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {}, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 73,\n                      columnNumber: 13\n                    }, _this)]\n                  }, void 0, true, {\n                    fileName: _jsxFileName,\n                    lineNumber: 69,\n                    columnNumber: 12\n                  }, _this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 53,\n                  columnNumber: 11\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 10\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 7\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.AccordionPanel, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n              children: wikiDescriptionData && wikiDescriptionData.source ? wikiDescriptionData.source : ''\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 90,\n              columnNumber: 9\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 8\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 7\n        }, _this)]\n      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n        fontSize: \"sm\",\n        children: \"No Results...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 25\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"LTVvmwuBqO91GZ6+Mape/RNHLRo=\");\n\n_c = WikiArticleViewInfo;\nvar styles = {\n  clampStyle: {\n    display: 'webkit-box',\n    maxWidth: '200px',\n    webkitLineClamp: '4',\n    webkitBoxOrient: 'vertical',\n    overflow: 'hidden'\n  }\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo);\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvblRpdGxlIiwic2V0V2lraURlc2NyaXB0aW9uVGl0bGUiLCJ3aWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJzZXRXaWtpRGVzY3JpcHRpb25Tb3VyY2UiLCJ3aWtpRGVzY3JpcHRpb25EYXRhIiwic2V0V2lraURlc2NyaXB0aW9uRGF0YSIsInVzZUVmZmVjdCIsImZldGNoIiwiYXJ0aWNsZSIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSIsImNhcmRTdHlsZSIsImNhcmRCb2R5U3R5bGUiLCJyYW5rIiwiZm9udFdlaWdodCIsInRpdGxlIiwidmlld3MiLCJzb3VyY2UiLCJzdHlsZXMiLCJjbGFtcFN0eWxlIiwiZGlzcGxheSIsIm1heFdpZHRoIiwid2Via2l0TGluZUNsYW1wIiwid2Via2l0Qm94T3JpZW50Iiwib3ZlcmZsb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZUE7QUFDQTs7QUFFQSxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLE9BQXNCO0FBQUE7O0FBQUEsTUFBbkJDLFlBQW1CLFFBQW5CQSxZQUFtQjs7QUFDOUM7QUFEOEMsa0JBRVlDLCtDQUFRLENBQUMsSUFBRCxDQUZwQjtBQUFBLE1BRXRDQyxvQkFGc0M7QUFBQSxNQUVoQkMsdUJBRmdCOztBQUFBLG1CQUdjRiwrQ0FBUSxDQUFDLElBQUQsQ0FIdEI7QUFBQSxNQUd0Q0cscUJBSHNDO0FBQUEsTUFHZkMsd0JBSGU7O0FBQUEsbUJBSVVKLCtDQUFRLENBQUMsSUFBRCxDQUpsQjtBQUFBLE1BSXRDSyxtQkFKc0M7QUFBQSxNQUlqQkMsc0JBSmlCLGtCQUs5Qzs7O0FBRUFDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLCtE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dEIsbUI7O0tBQUFBLG1CO0FBc0ZOLElBQU11QixNQUFNLEdBQUc7QUFDWEMsWUFBVSxFQUFFO0FBQ1JDLFdBQU8sRUFBRSxZQUREO0FBRVJDLFlBQVEsRUFBRSxPQUZGO0FBR1JDLG1CQUFlLEVBQUUsR0FIVDtBQUlSQyxtQkFBZSxFQUFFLFVBSlQ7QUFLUkMsWUFBUSxFQUFFO0FBTEY7QUFERCxDQUFmO0FBVUEsK0RBQWU3QixtQkFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvV2lraUFydGljbGVWaWV3SW5mby50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEFjY29yZGlvbixcbiAgICBBY2NvcmRpb25CdXR0b24sXG4gICAgQWNjb3JkaW9uSXRlbSxcbiAgICBBY2NvcmRpb25QYW5lbCxcbiAgICBCYWRnZSxcbiAgICBCb3gsXG4gICAgQ2VudGVyLFxuICAgIEZsZXgsXG4gICAgSW1hZ2UsXG4gICAgU3BhY2VyLFxuICAgIFN0YWNrLFxuICAgIHVzZURpc2Nsb3N1cmUsXG4gICAgVGV4dFxufSBmcm9tICdAY2hha3JhLXVpL3JlYWN0JztcbmltcG9ydCB7IGNhcmRCb2R5U3R5bGUsIGNhcmRJbWFnZSwgY2FyZFN0eWxlLCBsYWJlbFByaWNlUGVhY2ggfSBmcm9tICcuLi9zdHlsZXMvc2hvcCc7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBXaWtpQXJ0aWNsZVZpZXdJbmZvID0gKHsgd2lraVZpZXdJbmZvIH0pID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZygnd2lraVZpZXdJbmZvOiAnLCB3aWtpVmlld0luZm8pO1xuICAgIGNvbnN0IFsgd2lraURlc2NyaXB0aW9uVGl0bGUsIHNldFdpa2lEZXNjcmlwdGlvblRpdGxlIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvblNvdXJjZSwgc2V0V2lraURlc2NyaXB0aW9uU291cmNlIF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCBbIHdpa2lEZXNjcmlwdGlvbkRhdGEsIHNldFdpa2lEZXNjcmlwdGlvbkRhdGEgXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIC8vIGNvbnN0IFsgd2lraURlc2NyaXB0aW9uRGF0YSwgc2V0V2lraURlc2NyaXB0aW9uRGF0YSBdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBmZXRjaChcbiAgICAgICAgICAgIGBodHRwczovL2FwaS53aWtpbWVkaWEub3JnL2NvcmUvdjEvd2lraXBlZGlhL2VuL3BhZ2UvJHt3aWtpVmlld0luZm8uYXJ0aWNsZX1gXG4gICAgICAgICAgICAvLyBgaHR0cHM6Ly93aWtpbWVkaWEub3JnL2FwaS9yZXN0X3YxL21ldHJpY3MvcGFnZXZpZXdzL3RvcC8ke2NvdW50cnljb2RlXG4gICAgICAgICAgICAvLyAgICAgPyBjb3VudHJ5Y29kZVxuICAgICAgICAgICAgLy8gICAgIDogJ2VuJ30ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGBcbiAgICAgICAgKVxuICAgICAgICAgICAgLy8gZmV0Y2goYGh0dHBzOi8vd2lraW1lZGlhLm9yZy9hcGkvcmVzdF92MS9tZXRyaWNzL3BhZ2V2aWV3cy90b3AvZW4ud2lraXBlZGlhL2FsbC1hY2Nlc3MvMjAxNS8xMC8xMGApXG4gICAgICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oXG4gICAgICAgICAgICAgICAgKGRhdGEpID0+XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdkOiAnLCBkYXRhKVxuICAgICAgICAgICAgICAgICAgICBkYXRhID8gc2V0V2lraURlc2NyaXB0aW9uRGF0YShkYXRhKSA6ICdzJ1xuICAgICAgICAgICAgICAgIC8vIChkYXRhLnRpdGxlID8gc2V0V2lraURlc2NyaXB0aW9uVGl0bGUoZGF0YS50aXRsZSkgOiAncycpO1xuICAgICAgICAgICAgICAgIC8vIChkYXRhLnNvdXJjZSA/IHNldFdpa2lEZXNjcmlwdGlvblNvdXJjZShkYXRhLnNvdXJjZSkgOiAncycpO1xuICAgICAgICAgICAgKTtcbiAgICB9LCBbXSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8Qm94PlxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW0+XG5cdFx0XHRcdHt3aWtpVmlld0luZm8gPyAoXG5cdFx0XHRcdFx0PD5cblx0XHRcdFx0XHRcdDxBY2NvcmRpb25CdXR0b24+XG5cdFx0XHRcdFx0XHRcdDxCb3ggbWI9JzQnIHN0eWxlPXtjYXJkU3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdDxCb3ggc3R5bGU9e2NhcmRCb2R5U3R5bGV9PlxuXHRcdFx0XHRcdFx0XHRcdFx0PFN0YWNrPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8RmxleD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2VudGVyIHc9JzYwcHgnPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt3aWtpVmlld0luZm8ucmFua31cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8Q2VudGVyIG1sPSczJyBzaXplPScxNTBweCc+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8VGV4dCBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0gZm9udFNpemU9J21kJz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dpa2lEZXNjcmlwdGlvbkRhdGEgJiYgd2lraURlc2NyaXB0aW9uRGF0YS50aXRsZSA/IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWtpRGVzY3JpcHRpb25EYXRhLnRpdGxlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0d2lraVZpZXdJbmZvLmFydGljbGVcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8U3BhY2VyIC8+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PENlbnRlciB0ZXh0QWxpZ249J3JpZ2h0Jz5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxUZXh0IGZvbnRTaXplPSdzbScgY29sb3I9J2dyYXknPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7d2lraVZpZXdJbmZvLnZpZXdzfSB2aWV3c1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9UZXh0PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ey8qIDxUZXh0IHN0eWxlPXtzdHlsZXMuY2xhbXBTdHlsZX0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3dpa2lEZXNjcmlwdGlvbkRhdGEgJiYgd2lraURlc2NyaXB0aW9uRGF0YS5zb3VyY2UgPyAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWtpRGVzY3JpcHRpb25EYXRhLnNvdXJjZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCkgOiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnJ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvVGV4dD4gKi99XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0NlbnRlcj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9GbGV4PlxuXHRcdFx0XHRcdFx0XHRcdFx0PC9TdGFjaz5cblx0XHRcdFx0XHRcdFx0XHQ8L0JveD5cblx0XHRcdFx0XHRcdFx0PC9Cb3g+XG5cdFx0XHRcdFx0XHQ8L0FjY29yZGlvbkJ1dHRvbj5cblx0XHRcdFx0XHRcdDxBY2NvcmRpb25QYW5lbD5cblx0XHRcdFx0XHRcdFx0PEJveD5cblx0XHRcdFx0XHRcdFx0XHQ8VGV4dD5cblx0XHRcdFx0XHRcdFx0XHRcdHt3aWtpRGVzY3JpcHRpb25EYXRhICYmIHdpa2lEZXNjcmlwdGlvbkRhdGEuc291cmNlID8gd2lraURlc2NyaXB0aW9uRGF0YS5zb3VyY2UgOiAnJ31cblx0XHRcdFx0XHRcdFx0XHQ8L1RleHQ+XG5cdFx0XHRcdFx0XHRcdDwvQm94PlxuXHRcdFx0XHRcdFx0PC9BY2NvcmRpb25QYW5lbD5cblx0XHRcdFx0XHQ8Lz5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGZvbnRTaXplPSdzbSc+Tm8gUmVzdWx0cy4uLjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgICBjbGFtcFN0eWxlOiB7XG4gICAgICAgIGRpc3BsYXk6ICd3ZWJraXQtYm94JyxcbiAgICAgICAgbWF4V2lkdGg6ICcyMDBweCcsXG4gICAgICAgIHdlYmtpdExpbmVDbGFtcDogJzQnLFxuICAgICAgICB3ZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCcsXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJ1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFdpa2lBcnRpY2xlVmlld0luZm87XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});