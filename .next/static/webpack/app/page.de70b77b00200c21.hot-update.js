"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Comparision.tsx":
/*!************************************!*\
  !*** ./components/Comparision.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Comparision: function() { return /* binding */ Comparision; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _Graph__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Graph */ \"(app-pages-browser)/./components/Graph.tsx\");\n\n\nfunction Comparision(param) {\n    let { percentile } = param;\n    let comparisonText;\n    if (parseInt(percentile) < 72) {\n        comparisonText = \"lower than\";\n    } else if (parseInt(percentile) > 72) {\n        comparisonText = \"greater than\";\n    } else {\n        comparisonText = \"equal to\";\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"mt-8 border rounded-lg m-3 p-2 lg:p-5 flex flex-col gap-6\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-extrabold text-xl\",\n                children: \"Comparision Graph\"\n            }, void 0, false, {\n                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex justify-between mb-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"text-gray-600 text-lg w-9/12 md: md:text-xl font-medium\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"font-extrabold\",\n                                        children: [\n                                            \"You scored \",\n                                            percentile,\n                                            \"% percentile\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                                        lineNumber: 22,\n                                        columnNumber: 25\n                                    }, this),\n                                    \" \",\n                                    \"which is \",\n                                    comparisonText,\n                                    \" the \",\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                                        lineNumber: 25,\n                                        columnNumber: 55\n                                    }, this),\n                                    \"average percentile 72% of all engineers who took this assessment\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-2\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: \"graph.png\"\n                                }, void 0, false, {\n                                    fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                                    lineNumber: 29,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                                lineNumber: 28,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-full\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Graph__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                            lineNumber: 33,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Comparision.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_c = Comparision;\nvar _c;\n$RefreshReg$(_c, \"Comparision\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvQ29tcGFyaXNpb24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBZ0M7QUFFekIsU0FBU0MsWUFBWSxLQUFzQztRQUF0QyxFQUFFQyxVQUFVLEVBQTBCLEdBQXRDO0lBQ3hCLElBQUlDO0lBRUosSUFBSUMsU0FBU0YsY0FBYyxJQUFJO1FBQzNCQyxpQkFBaUI7SUFDckIsT0FBTyxJQUFJQyxTQUFTRixjQUFjLElBQUk7UUFDbENDLGlCQUFpQjtJQUNyQixPQUFPO1FBQ0hBLGlCQUFpQjtJQUNyQjtJQUVBLHFCQUNJLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQXlCOzs7Ozs7MEJBR3hDLDhEQUFDRDs7a0NBQ0csOERBQUNBO3dCQUFJQyxXQUFVOzswQ0FDWCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDQzt3Q0FBS0QsV0FBVTs7NENBQWlCOzRDQUNqQko7NENBQVc7Ozs7Ozs7b0NBQ25CO29DQUFJO29DQUNGQztvQ0FBZTtrREFBSyw4REFBQ0s7Ozs7O29DQUFROzs7Ozs7OzBDQUczQyw4REFBQ0g7Z0NBQUlDLFdBQVU7MENBQ1gsNEVBQUNHO29DQUFJQyxLQUFJOzs7Ozs7Ozs7Ozs7Ozs7OztrQ0FHakIsOERBQUNMO3dCQUFJQyxXQUFVO2tDQUNYLDRFQUFDTiw4Q0FBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLOUI7S0FuQ2dCQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0NvbXBhcmlzaW9uLnRzeD9kNDA3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5lQ2hhcnQgZnJvbSBcIi4vR3JhcGhcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIENvbXBhcmlzaW9uKHsgcGVyY2VudGlsZSB9OiB7IHBlcmNlbnRpbGU6IHN0cmluZyB9KSB7XG4gICAgbGV0IGNvbXBhcmlzb25UZXh0O1xuXG4gICAgaWYgKHBhcnNlSW50KHBlcmNlbnRpbGUpIDwgNzIpIHtcbiAgICAgICAgY29tcGFyaXNvblRleHQgPSBcImxvd2VyIHRoYW5cIjtcbiAgICB9IGVsc2UgaWYgKHBhcnNlSW50KHBlcmNlbnRpbGUpID4gNzIpIHtcbiAgICAgICAgY29tcGFyaXNvblRleHQgPSBcImdyZWF0ZXIgdGhhblwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBhcmlzb25UZXh0ID0gXCJlcXVhbCB0b1wiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtOCBib3JkZXIgcm91bmRlZC1sZyBtLTMgcC0yIGxnOnAtNSBmbGV4IGZsZXgtY29sIGdhcC02XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtZXh0cmFib2xkIHRleHQteGxcIj5cbiAgICAgICAgICAgICAgICBDb21wYXJpc2lvbiBHcmFwaFxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gbWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwIHRleHQtbGcgdy05LzEyIG1kOiBtZDp0ZXh0LXhsIGZvbnQtbWVkaXVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LWV4dHJhYm9sZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFlvdSBzY29yZWQge3BlcmNlbnRpbGV9JSBwZXJjZW50aWxlXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+e1wiIFwifVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpY2ggaXMge2NvbXBhcmlzb25UZXh0fSB0aGUgPGJyPjwvYnI+XG4gICAgICAgICAgICAgICAgICAgICAgICBhdmVyYWdlIHBlcmNlbnRpbGUgNzIlIG9mIGFsbCBlbmdpbmVlcnMgd2hvIHRvb2sgdGhpcyBhc3Nlc3NtZW50XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciB3LTEyIGgtMTIgYmctc2xhdGUtMjAwIHJvdW5kZWQtZnVsbCBwLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiZ3JhcGgucG5nXCI+PC9pbWc+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxMaW5lQ2hhcnQgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkxpbmVDaGFydCIsIkNvbXBhcmlzaW9uIiwicGVyY2VudGlsZSIsImNvbXBhcmlzb25UZXh0IiwicGFyc2VJbnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcGFuIiwiYnIiLCJpbWciLCJzcmMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Comparision.tsx\n"));

/***/ })

});