"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/results/[id]/page",{

/***/ "(app-pages-browser)/./app/_components/rating/index.tsx":
/*!******************************************!*\
  !*** ./app/_components/rating/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./app/_components/rating/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Star */ \"(app-pages-browser)/./app/_components/rating/Star.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Rating = ()=>{\n    _s();\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const handleStarClick = (value)=>{\n        setRating(value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Evaluate the results\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().ratingContainer),\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5\n                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_3___default().star),\n                        onClick: ()=>handleStarClick(item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Star__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            isFilled: item <= rating\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                            lineNumber: 22,\n                            columnNumber: 13\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                        lineNumber: 21,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Rating, \"z38YjvLLtbN6A1iRiKF1lIyGHjc=\");\n_c = Rating;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9yYXRpbmcvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFnRDtBQUNOO0FBRWhCO0FBRTFCLE1BQU1JLFNBQW1COztJQUVyQixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUM7SUFFckMsTUFBTU0sa0JBQWtCLENBQUNDO1FBQ3JCRixVQUFVRTtJQUNaO0lBSUoscUJBQ0UsOERBQUNDO1FBQVFDLFdBQVdSLHNFQUFnQjs7MEJBQ2xDLDhEQUFDVTswQkFBRTs7Ozs7OzBCQUNILDhEQUFDQztnQkFBSUgsV0FBV1IsNEVBQXNCOzBCQUNuQztvQkFBQztvQkFBRztvQkFBRztvQkFBRztvQkFBRztpQkFBRSxDQUFDYSxHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDQzt3QkFBT1IsV0FBV1IsaUVBQVc7d0JBQUVrQixTQUFTLElBQU1iLGdCQUFnQlM7a0NBQzdELDRFQUFDYiw2Q0FBSUE7NEJBQWFrQixVQUNkTCxRQUFRWDsyQkFERFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVF2QjtHQXhCTWI7S0FBQUE7QUEwQk4sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL3JhdGluZy9pbmRleC50c3g/NjQyNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VFZmZlY3QsdXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3N0eWxlcy5tb2R1bGUuc2Nzc1wiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IFN0YXIgZnJvbSBcIi4vU3RhclwiO1xyXG5cclxuY29uc3QgUmF0aW5nOiBSZWFjdC5GQyA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbcmF0aW5nLCBzZXRSYXRpbmddID0gdXNlU3RhdGUoMCk7XHJcbiAgICBcclxuICAgIGNvbnN0IGhhbmRsZVN0YXJDbGljayA9ICh2YWx1ZTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0UmF0aW5nKHZhbHVlKTtcclxuICAgICAgfTtcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgPHA+RXZhbHVhdGUgdGhlIHJlc3VsdHM8L3A+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmF0aW5nQ29udGFpbmVyfT5cclxuICAgICAgICB7WzEsIDIsIDMsIDQsIDVdLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtzdHlsZXMuc3Rhcn0gb25DbGljaz17KCkgPT4gaGFuZGxlU3RhckNsaWNrKGl0ZW0pfT5cclxuICAgICAgICAgICAgPFN0YXIga2V5PXtpbmRleH0gaXNGaWxsZWQ9e1xyXG4gICAgICAgICAgICAgICAgaXRlbSA8PSByYXRpbmdcclxuICAgICAgICAgICAgfSAvPlxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSYXRpbmc7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiU3RhciIsIlJhdGluZyIsInJhdGluZyIsInNldFJhdGluZyIsImhhbmRsZVN0YXJDbGljayIsInZhbHVlIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInAiLCJkaXYiLCJyYXRpbmdDb250YWluZXIiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJidXR0b24iLCJzdGFyIiwib25DbGljayIsImlzRmlsbGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/rating/index.tsx\n"));

/***/ })

});