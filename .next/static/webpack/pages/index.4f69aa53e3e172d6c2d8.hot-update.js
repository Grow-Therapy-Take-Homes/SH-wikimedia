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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/chakra-ui-react.esm.js\");\n/* harmony import */ var _styles_shop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/shop */ \"./styles/shop.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jihye13621/Documents/GitHub/wikimedia/components/WikiArticleViewInfo.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar WikiArticleViewInfo = function WikiArticleViewInfo(_ref) {\n  _s();\n\n  var wikiViewInfo = _ref.wikiViewInfo;\n\n  // console.log('wikiViewInfo: ', wikiViewInfo);\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      wikiDescriptionData = _useState[0],\n      setWikiDescriptionData = _useState[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    fetch(\"https://api.wikimedia.org/core/v1/wikipedia/en/page/\".concat(wikiViewInfo.article, \"/description\") // `https://wikimedia.org/api/rest_v1/metrics/pageviews/top/${countrycode\n    //     ? countrycode\n    //     : 'en'}.wikipedia/all-access/2015/10/10`\n    ) // fetch(`https://wikimedia.org/api/rest_v1/metrics/pageviews/top/en.wikipedia/all-access/2015/10/10`)\n    .then(function (res) {\n      return res.json();\n    }).then(function (data) {\n      return setWikiDescriptionData(data);\n    });\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n    children: wikiViewInfo ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n      mb: \"4\",\n      style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardStyle,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        style: _styles_shop__WEBPACK_IMPORTED_MODULE_1__.cardBodyStyle,\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              w: \"60px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: wikiViewInfo.rank\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 29,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 28,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              ml: \"3\",\n              size: \"150px\",\n              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                style: {\n                  fontWeight: 'bold'\n                },\n                fontSize: \"md\",\n                children: wikiViewInfo.article\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 34,\n                columnNumber: 37\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Spacer, {}, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 38,\n              columnNumber: 33\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Center, {\n              textAlign: \"right\",\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                fontSize: \"sm\",\n                color: \"gray\",\n                children: [wikiViewInfo.views, \" views\"]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 40,\n                columnNumber: 37\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                children: wikiDescriptionData.description ? wikiDescriptionData.description : ''\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 43,\n                columnNumber: 37\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 39,\n              columnNumber: 33\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 25\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 21\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 17\n    }, _this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n      fontSize: \"sm\",\n      children: \"No Results...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 17\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(WikiArticleViewInfo, \"cjkkmKQ4fJXpBqcg02LJXFcSuZo=\");\n\n_c = WikiArticleViewInfo;\n/* harmony default export */ __webpack_exports__[\"default\"] = (WikiArticleViewInfo); // Object.freeze numResults = 25, 50, 75, 100, 200, default=100\n//status\": 404,\n// \"type\": \"not_found\",\n// \"title\": \"Short description not found\",\n// \"detail\": \"404: not_found\",\n// \"method\": \"GET\",\n// \"uri\": \"/en.wikipedia.org/v1/page/description/Template:Geotemplate\"\n\nvar _c;\n\n$RefreshReg$(_c, \"WikiArticleViewInfo\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9XaWtpQXJ0aWNsZVZpZXdJbmZvLnRzeD9lNThiIl0sIm5hbWVzIjpbIldpa2lBcnRpY2xlVmlld0luZm8iLCJ3aWtpVmlld0luZm8iLCJ1c2VTdGF0ZSIsIndpa2lEZXNjcmlwdGlvbkRhdGEiLCJzZXRXaWtpRGVzY3JpcHRpb25EYXRhIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJhcnRpY2xlIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2FyZFN0eWxlIiwiY2FyZEJvZHlTdHlsZSIsInJhbmsiLCJmb250V2VpZ2h0Iiwidmlld3MiLCJkZXNjcmlwdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsbUJBQW1CLEdBQUcsU0FBdEJBLG1CQUFzQixPQUFzQjtBQUFBOztBQUFBLE1BQW5CQyxZQUFtQixRQUFuQkEsWUFBbUI7O0FBQzlDO0FBRDhDLGtCQUVVQywrQ0FBUSxDQUFDLElBQUQsQ0FGbEI7QUFBQSxNQUV0Q0MsbUJBRnNDO0FBQUEsTUFFakJDLHNCQUZpQjs7QUFJOUNDLGtEQUFTLENBQUMsWUFBTTtBQUNaQyxTQUFLLCtEQUNzREwsWUFBWSxDQUFDTSxPQURuRSxrQkFFRDtBQUNBO0FBQ0E7QUFKQyxLQUFMLENBTUk7QUFOSixLQU9LQyxJQVBMLENBT1UsVUFBQ0MsR0FBRDtBQUFBLGFBQVNBLEdBQUcsQ0FBQ0MsSUFBSixFQUFUO0FBQUEsS0FQVixFQVFLRixJQVJMLENBUVUsVUFBQ0csSUFBRDtBQUFBLGFBQVVQLHNCQUFzQixDQUFDTyxJQUFELENBQWhDO0FBQUEsS0FSVjtBQVNILEdBVlEsRUFVTixFQVZNLENBQVQ7QUFZQSxzQkFDSSw4REFBQyxpREFBRDtBQUFBLGNBQ0tWLFlBQVksZ0JBQ1QsOERBQUMsaURBQUQ7QUFBSyxRQUFFLEVBQUMsR0FBUjtBQUFZLFdBQUssRUFBRVcsbURBQW5CO0FBQUEsNkJBQ0ksOERBQUMsaURBQUQ7QUFBSyxhQUFLLEVBQUVDLHVEQUFaO0FBQUEsK0JBQ0ksOERBQUMsbURBQUQ7QUFBQSxpQ0FDSSw4REFBQyxrREFBRDtBQUFBLG9DQUNJLDhEQUFDLG9EQUFEO0FBQVEsZUFBQyxFQUFDLE1BQVY7QUFBQSxxQ0FDSSw4REFBQyxrREFBRDtBQUFNLHdCQUFRLEVBQUMsSUFBZjtBQUFvQixxQkFBSyxFQUFDLE1BQTFCO0FBQUEsMEJBQ0taLFlBQVksQ0FBQ2E7QUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFNSSw4REFBQyxvREFBRDtBQUFRLGdCQUFFLEVBQUMsR0FBWDtBQUFlLGtCQUFJLEVBQUMsT0FBcEI7QUFBQSxxQ0FDSSw4REFBQyxrREFBRDtBQUFNLHFCQUFLLEVBQUU7QUFBRUMsNEJBQVUsRUFBRTtBQUFkLGlCQUFiO0FBQXFDLHdCQUFRLEVBQUMsSUFBOUM7QUFBQSwwQkFDS2QsWUFBWSxDQUFDTTtBQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQVdJLDhEQUFDLG9EQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWEosZUFZSSw4REFBQyxvREFBRDtBQUFRLHVCQUFTLEVBQUMsT0FBbEI7QUFBQSxzQ0FDSSw4REFBQyxrREFBRDtBQUFNLHdCQUFRLEVBQUMsSUFBZjtBQUFvQixxQkFBSyxFQUFDLE1BQTFCO0FBQUEsMkJBQ0tOLFlBQVksQ0FBQ2UsS0FEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUksOERBQUMsa0RBQUQ7QUFBQSwwQkFDS2IsbUJBQW1CLENBQUNjLFdBQXBCLEdBQWtDZCxtQkFBbUIsQ0FBQ2MsV0FBdEQsR0FBb0U7QUFEekU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRFMsZ0JBNkJULDhEQUFDLGtEQUFEO0FBQU0sY0FBUSxFQUFDLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUE5QlI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBbUNILENBbkREOztHQUFNakIsbUI7O0tBQUFBLG1CO0FBb0ROLCtEQUFlQSxtQkFBZixFLENBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1dpa2lBcnRpY2xlVmlld0luZm8udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFkZ2UsIEJveCwgQ2VudGVyLCBGbGV4LCBJbWFnZSwgU3BhY2VyLCBTdGFjaywgdXNlRGlzY2xvc3VyZSwgVGV4dCB9IGZyb20gJ0BjaGFrcmEtdWkvcmVhY3QnO1xuaW1wb3J0IHsgY2FyZEJvZHlTdHlsZSwgY2FyZEltYWdlLCBjYXJkU3R5bGUsIGxhYmVsUHJpY2VQZWFjaCB9IGZyb20gJy4uL3N0eWxlcy9zaG9wJztcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFdpa2lBcnRpY2xlVmlld0luZm8gPSAoeyB3aWtpVmlld0luZm8gfSkgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKCd3aWtpVmlld0luZm86ICcsIHdpa2lWaWV3SW5mbyk7XG4gICAgY29uc3QgWyB3aWtpRGVzY3JpcHRpb25EYXRhLCBzZXRXaWtpRGVzY3JpcHRpb25EYXRhIF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGZldGNoKFxuICAgICAgICAgICAgYGh0dHBzOi8vYXBpLndpa2ltZWRpYS5vcmcvY29yZS92MS93aWtpcGVkaWEvZW4vcGFnZS8ke3dpa2lWaWV3SW5mby5hcnRpY2xlfS9kZXNjcmlwdGlvbmBcbiAgICAgICAgICAgIC8vIGBodHRwczovL3dpa2ltZWRpYS5vcmcvYXBpL3Jlc3RfdjEvbWV0cmljcy9wYWdldmlld3MvdG9wLyR7Y291bnRyeWNvZGVcbiAgICAgICAgICAgIC8vICAgICA/IGNvdW50cnljb2RlXG4gICAgICAgICAgICAvLyAgICAgOiAnZW4nfS53aWtpcGVkaWEvYWxsLWFjY2Vzcy8yMDE1LzEwLzEwYFxuICAgICAgICApXG4gICAgICAgICAgICAvLyBmZXRjaChgaHR0cHM6Ly93aWtpbWVkaWEub3JnL2FwaS9yZXN0X3YxL21ldHJpY3MvcGFnZXZpZXdzL3RvcC9lbi53aWtpcGVkaWEvYWxsLWFjY2Vzcy8yMDE1LzEwLzEwYClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0V2lraURlc2NyaXB0aW9uRGF0YShkYXRhKSk7XG4gICAgfSwgW10pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJveD5cbiAgICAgICAgICAgIHt3aWtpVmlld0luZm8gPyAoXG4gICAgICAgICAgICAgICAgPEJveCBtYj0nNCcgc3R5bGU9e2NhcmRTdHlsZX0+XG4gICAgICAgICAgICAgICAgICAgIDxCb3ggc3R5bGU9e2NhcmRCb2R5U3R5bGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHc9JzYwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby5yYW5rfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENlbnRlciBtbD0nMycgc2l6ZT0nMTUwcHgnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19IGZvbnRTaXplPSdtZCc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby5hcnRpY2xlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwYWNlciAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2VudGVyIHRleHRBbGlnbj0ncmlnaHQnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJyBjb2xvcj0nZ3JheSc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3dpa2lWaWV3SW5mby52aWV3c30gdmlld3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt3aWtpRGVzY3JpcHRpb25EYXRhLmRlc2NyaXB0aW9uID8gd2lraURlc2NyaXB0aW9uRGF0YS5kZXNjcmlwdGlvbiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0NlbnRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXg+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPFRleHQgZm9udFNpemU9J3NtJz5ObyBSZXN1bHRzLi4uPC9UZXh0PlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9Cb3g+XG4gICAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBXaWtpQXJ0aWNsZVZpZXdJbmZvO1xuXG4vLyBPYmplY3QuZnJlZXplIG51bVJlc3VsdHMgPSAyNSwgNTAsIDc1LCAxMDAsIDIwMCwgZGVmYXVsdD0xMDBcblxuLy9zdGF0dXNcIjogNDA0LFxuLy8gXCJ0eXBlXCI6IFwibm90X2ZvdW5kXCIsXG4vLyBcInRpdGxlXCI6IFwiU2hvcnQgZGVzY3JpcHRpb24gbm90IGZvdW5kXCIsXG4vLyBcImRldGFpbFwiOiBcIjQwNDogbm90X2ZvdW5kXCIsXG4vLyBcIm1ldGhvZFwiOiBcIkdFVFwiLFxuLy8gXCJ1cmlcIjogXCIvZW4ud2lraXBlZGlhLm9yZy92MS9wYWdlL2Rlc2NyaXB0aW9uL1RlbXBsYXRlOkdlb3RlbXBsYXRlXCJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/WikiArticleViewInfo.tsx\n");

/***/ })

});