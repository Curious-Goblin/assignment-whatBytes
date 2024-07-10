/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./components/Update.tsx":
/*!*******************************!*\
  !*** ./components/Update.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Update: function() { return /* binding */ Update; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Updatebox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Updatebox */ \"(app-pages-browser)/./components/Updatebox.tsx\");\n/* harmony import */ var _Updatebox__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Updatebox__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Update(param) {\n    let { rank, setRank, percentile, setPercentile, score, setScore } = param;\n    _s();\n    const [showUpdateScores, setShowUpdateScores] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                onClick: ()=>setShowUpdateScores(true),\n                className: \"bg-blue-900 h-fit p-3 text-md rounded-lg cursor-pointer font-bold text-white px-4 ml-4 mt-2\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    children: \"Update\"\n                }, void 0, false, {\n                    fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Update.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Update.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this),\n            showUpdateScores && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Updatebox__WEBPACK_IMPORTED_MODULE_2__.UpdateScores, {\n                rank: rank,\n                setRank: setRank,\n                percentile: percentile,\n                setPercentile: setPercentile,\n                score: score,\n                setScore: setScore,\n                onClose: ()=>setShowUpdateScores(false)\n            }, void 0, false, {\n                fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Update.tsx\",\n                lineNumber: 23,\n                columnNumber: 34\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/sourabh/Desktop/assignment-whatBytes/components/Update.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(Update, \"oenDTQ+DPinJyxmVpJur+1tuzY4=\");\n_c = Update;\nvar _c;\n$RefreshReg$(_c, \"Update\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvVXBkYXRlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFpQztBQUNVO0FBV3BDLFNBQVNFLE9BQU8sS0FBOEU7UUFBOUUsRUFBRUMsSUFBSSxFQUFFQyxPQUFPLEVBQUVDLFVBQVUsRUFBRUMsYUFBYSxFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBbUIsR0FBOUU7O0lBQ25CLE1BQU0sQ0FBQ0Msa0JBQWtCQyxvQkFBb0IsR0FBR1YsK0NBQVFBLENBQUM7SUFFekQscUJBQ0ksOERBQUNXOzswQkFDRyw4REFBQ0E7Z0JBQUlDLFNBQVMsSUFBTUYsb0JBQW9CO2dCQUFPRyxXQUFVOzBCQUNyRCw0RUFBQ0M7OEJBQU87Ozs7Ozs7Ozs7O1lBSVhMLGtDQUFvQiw4REFBQ1Isb0RBQVlBO2dCQUM5QkUsTUFBTUE7Z0JBQ05DLFNBQVNBO2dCQUNUQyxZQUFZQTtnQkFDWkMsZUFBZUE7Z0JBQ2ZDLE9BQU9BO2dCQUNQQyxVQUFVQTtnQkFDVk8sU0FBUyxJQUFNTCxvQkFBb0I7Ozs7Ozs7Ozs7OztBQUluRDtHQXJCZ0JSO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVXBkYXRlLnRzeD8wYjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBVcGRhdGVTY29yZXMgfSBmcm9tIFwiLi9VcGRhdGVib3hcIjtcblxuaW50ZXJmYWNlIFVwZGF0ZVByb3BzVHlwZSB7XG4gICAgcmFuaz86IHN0cmluZztcbiAgICBwZXJjZW50aWxlPzogc3RyaW5nO1xuICAgIHNjb3JlPzogc3RyaW5nO1xuICAgIHNldFJhbms6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHNldFBlcmNlbnRpbGU6ICh2YWx1ZTogc3RyaW5nKSA9PiB2b2lkO1xuICAgIHNldFNjb3JlOiAodmFsdWU6IHN0cmluZykgPT4gdm9pZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIFVwZGF0ZSh7IHJhbmssIHNldFJhbmssIHBlcmNlbnRpbGUsIHNldFBlcmNlbnRpbGUsIHNjb3JlLCBzZXRTY29yZSB9OiBVcGRhdGVQcm9wc1R5cGUpIHtcbiAgICBjb25zdCBbc2hvd1VwZGF0ZVNjb3Jlcywgc2V0U2hvd1VwZGF0ZVNjb3Jlc10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VXBkYXRlU2NvcmVzKHRydWUpfSBjbGFzc05hbWU9XCJiZy1ibHVlLTkwMCBoLWZpdCBwLTMgdGV4dC1tZCByb3VuZGVkLWxnIGN1cnNvci1wb2ludGVyIGZvbnQtYm9sZCB0ZXh0LXdoaXRlIHB4LTQgbWwtNCBtdC0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgVXBkYXRlXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtzaG93VXBkYXRlU2NvcmVzICYmIDxVcGRhdGVTY29yZXNcbiAgICAgICAgICAgICAgICByYW5rPXtyYW5rfVxuICAgICAgICAgICAgICAgIHNldFJhbms9e3NldFJhbmt9XG4gICAgICAgICAgICAgICAgcGVyY2VudGlsZT17cGVyY2VudGlsZX1cbiAgICAgICAgICAgICAgICBzZXRQZXJjZW50aWxlPXtzZXRQZXJjZW50aWxlfVxuICAgICAgICAgICAgICAgIHNjb3JlPXtzY29yZX1cbiAgICAgICAgICAgICAgICBzZXRTY29yZT17c2V0U2NvcmV9XG4gICAgICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0U2hvd1VwZGF0ZVNjb3JlcyhmYWxzZSl9XG4gICAgICAgICAgICAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlVwZGF0ZVNjb3JlcyIsIlVwZGF0ZSIsInJhbmsiLCJzZXRSYW5rIiwicGVyY2VudGlsZSIsInNldFBlcmNlbnRpbGUiLCJzY29yZSIsInNldFNjb3JlIiwic2hvd1VwZGF0ZVNjb3JlcyIsInNldFNob3dVcGRhdGVTY29yZXMiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbG9zZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Update.tsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Updatebox.tsx":
/*!**********************************!*\
  !*** ./components/Updatebox.tsx ***!
  \**********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ })

});