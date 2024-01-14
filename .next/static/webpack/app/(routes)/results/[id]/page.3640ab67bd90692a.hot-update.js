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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./app/_components/rating/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Star__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Star */ \"(app-pages-browser)/./app/_components/rating/Star.tsx\");\n/* harmony import */ var _api_useRatingMutation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api/useRatingMutation */ \"(app-pages-browser)/./app/_components/rating/api/useRatingMutation.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Rating = (param)=>{\n    let { processedDocumentId, ratingValue } = param;\n    _s();\n    const [rating, setRating] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(ratingValue || 0);\n    const { mutateAsync, isSuccess, isError, error } = (0,_api_useRatingMutation__WEBPACK_IMPORTED_MODULE_3__.useRatingMutation)();\n    const handleStarClick = (value)=>{\n        setRating(value);\n        handleRating(value);\n    };\n    const handleRating = async (value)=>{\n        await mutateAsync({\n            processedDocumentId,\n            rating: value\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (isSuccess && rating !== ratingValue) {\n            console.log(\"success\");\n            setRating(ratingValue || 0);\n        }\n        if (isError) {\n            console.log(error);\n        }\n    }, [\n        isSuccess,\n        isError,\n        error,\n        ratingValue,\n        rating\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Evaluate the results\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ratingContainer),\n                children: [\n                    1,\n                    2,\n                    3,\n                    4,\n                    5\n                ].map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().star), \" \").concat(item <= rating ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_4___default().filled) : \"\"),\n                        onClick: ()=>handleStarClick(item),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Star__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            isFilled: item <= rating\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                        lineNumber: 45,\n                        columnNumber: 13\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\rating\\\\index.tsx\",\n        lineNumber: 41,\n        columnNumber: 7\n    }, undefined);\n};\n_s(Rating, \"lTBrJXVBnV7pBKDoauYGCFt0gMQ=\", false, function() {\n    return [\n        _api_useRatingMutation__WEBPACK_IMPORTED_MODULE_3__.useRatingMutation\n    ];\n});\n_c = Rating;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rating);\nvar _c;\n$RefreshReg$(_c, \"Rating\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9yYXRpbmcvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBbUQ7QUFDVDtBQUVoQjtBQUNrQztBQU81RCxNQUFNTSxTQUFnQztRQUFDLEVBQUVDLG1CQUFtQixFQUFFQyxXQUFXLEVBQUU7O0lBQ3ZFLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBU00sZUFBZTtJQUM1RCxNQUFNLEVBQUVHLFdBQVcsRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLEtBQUssRUFBRSxHQUFHVCx5RUFBaUJBO0lBRXBFLE1BQU1VLGtCQUFrQixDQUFDQztRQUN2Qk4sVUFBVU07UUFDVkMsYUFBYUQ7SUFDZjtJQUVBLE1BQU1DLGVBQWUsT0FBT0Q7UUFDMUIsTUFBTUwsWUFBWTtZQUNoQko7WUFDQUUsUUFBUU87UUFDVjtJQUNGO0lBRUFmLGdEQUFTQSxDQUFDO1FBQ04sSUFBSVcsYUFBYUgsV0FBV0QsYUFBYTtZQUN2Q1UsUUFBUUMsR0FBRyxDQUFDO1lBRVpULFVBQVVGLGVBQWU7UUFDM0I7UUFFQSxJQUFJSyxTQUFTO1lBQ1hLLFFBQVFDLEdBQUcsQ0FBQ0w7UUFDZDtJQUNGLEdBQUc7UUFBQ0Y7UUFBV0M7UUFBU0M7UUFBT047UUFBYUM7S0FBTztJQUVyRCxxQkFDRSw4REFBQ1c7UUFBUUMsV0FBV2xCLHNFQUFnQjs7MEJBQ2xDLDhEQUFDb0I7MEJBQUU7Ozs7OzswQkFDSCw4REFBQ0M7Z0JBQUlILFdBQVdsQiw0RUFBc0I7MEJBQ25DO29CQUFDO29CQUFHO29CQUFHO29CQUFHO29CQUFHO2lCQUFFLENBQUN1QixHQUFHLENBQUMsQ0FBQ0MsTUFBTUMsc0JBQzFCLDhEQUFDQzt3QkFDQ1IsV0FBVyxHQUFrQk0sT0FBZnhCLGlFQUFXLEVBQUMsS0FBdUMsT0FBcEN3QixRQUFRbEIsU0FBU04sbUVBQWEsR0FBRzt3QkFDOUQ2QixTQUFTLElBQU1qQixnQkFBZ0JZO2tDQUkvQiw0RUFBQ3ZCLDZDQUFJQTs0QkFBQzZCLFVBQVVOLFFBQVFsQjs7Ozs7O3VCQUhuQm1COzs7Ozs7Ozs7Ozs7Ozs7O0FBU2pCO0dBN0NJdEI7O1FBRWlERCxxRUFBaUJBOzs7S0FGbEVDO0FBZ0ROLCtEQUFlQSxNQUFNQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9yYXRpbmcvaW5kZXgudHN4PzY0MjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBTdGFyIGZyb20gXCIuL1N0YXJcIjtcclxuaW1wb3J0IHsgdXNlUmF0aW5nTXV0YXRpb24gfSBmcm9tIFwiLi9hcGkvdXNlUmF0aW5nTXV0YXRpb25cIjtcclxuXHJcbmludGVyZmFjZSBSYXRpbmdQcm9wcyB7XHJcbiAgcHJvY2Vzc2VkRG9jdW1lbnRJZDogc3RyaW5nO1xyXG4gIHJhdGluZ1ZhbHVlOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IFJhdGluZzogUmVhY3QuRkM8UmF0aW5nUHJvcHM+ID0gKHsgcHJvY2Vzc2VkRG9jdW1lbnRJZCwgcmF0aW5nVmFsdWUgfSkgPT4ge1xyXG4gICAgY29uc3QgW3JhdGluZywgc2V0UmF0aW5nXSA9IHVzZVN0YXRlPG51bWJlcj4ocmF0aW5nVmFsdWUgfHwgMCk7XHJcbiAgICBjb25zdCB7IG11dGF0ZUFzeW5jLCBpc1N1Y2Nlc3MsIGlzRXJyb3IsIGVycm9yIH0gPSB1c2VSYXRpbmdNdXRhdGlvbigpO1xyXG4gIFxyXG4gICAgY29uc3QgaGFuZGxlU3RhckNsaWNrID0gKHZhbHVlOiBudW1iZXIpID0+IHtcclxuICAgICAgc2V0UmF0aW5nKHZhbHVlKTtcclxuICAgICAgaGFuZGxlUmF0aW5nKHZhbHVlKTtcclxuICAgIH07XHJcbiAgXHJcbiAgICBjb25zdCBoYW5kbGVSYXRpbmcgPSBhc3luYyAodmFsdWU6IG51bWJlcikgPT4ge1xyXG4gICAgICBhd2FpdCBtdXRhdGVBc3luYyh7XHJcbiAgICAgICAgcHJvY2Vzc2VkRG9jdW1lbnRJZCxcclxuICAgICAgICByYXRpbmc6IHZhbHVlLFxyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChpc1N1Y2Nlc3MgJiYgcmF0aW5nICE9PSByYXRpbmdWYWx1ZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgXHJcbiAgICAgICAgICBzZXRSYXRpbmcocmF0aW5nVmFsdWUgfHwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBpZiAoaXNFcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW2lzU3VjY2VzcywgaXNFcnJvciwgZXJyb3IsIHJhdGluZ1ZhbHVlLCByYXRpbmddKTtcclxuICBcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPHA+RXZhbHVhdGUgdGhlIHJlc3VsdHM8L3A+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yYXRpbmdDb250YWluZXJ9PlxyXG4gICAgICAgICAge1sxLCAyLCAzLCA0LCA1XS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGFyfSAke2l0ZW0gPD0gcmF0aW5nID8gc3R5bGVzLmZpbGxlZCA6IFwiXCJ9YH1cclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVTdGFyQ2xpY2soaXRlbSl9XHJcbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIDxTdGFyIGlzRmlsbGVkPXtpdGVtIDw9IHJhdGluZ30gLz5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJhdGluZztcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJTdGFyIiwidXNlUmF0aW5nTXV0YXRpb24iLCJSYXRpbmciLCJwcm9jZXNzZWREb2N1bWVudElkIiwicmF0aW5nVmFsdWUiLCJyYXRpbmciLCJzZXRSYXRpbmciLCJtdXRhdGVBc3luYyIsImlzU3VjY2VzcyIsImlzRXJyb3IiLCJlcnJvciIsImhhbmRsZVN0YXJDbGljayIsInZhbHVlIiwiaGFuZGxlUmF0aW5nIiwiY29uc29sZSIsImxvZyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJwIiwiZGl2IiwicmF0aW5nQ29udGFpbmVyIiwibWFwIiwiaXRlbSIsImluZGV4IiwiYnV0dG9uIiwic3RhciIsImZpbGxlZCIsIm9uQ2xpY2siLCJpc0ZpbGxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/rating/index.tsx\n"));

/***/ })

});