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

/***/ "(app-pages-browser)/./app/_components/rating/api/useRatingMutation.ts":
/*!*********************************************************!*\
  !*** ./app/_components/rating/api/useRatingMutation.ts ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useRatingMutation: function() { return /* binding */ useRatingMutation; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/interceptor/axiosInstance */ \"(app-pages-browser)/./app/interceptor/axiosInstance.ts\");\n\n\nconst updateRating = async (processedDocumentId, rating)=>{\n    const response = await _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].put(\"results/update-rating/\".concat(id), {\n        rating: rating\n    });\n    if (!response.data) {\n        throw new Error(\"Error updating rating\");\n    }\n    return response.data;\n};\nconst useRatingMutation = ()=>{\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQueryClient)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useMutation)({\n        mutationFn: (data)=>updateRating(data.processedDocumentId, data.rating),\n        onSuccess: ()=>{\n            queryClient.invalidateQueries({\n                queryKey: [\n                    \"packageDetails\"\n                ]\n            });\n        },\n        onError: (error)=>{\n            console.log(error);\n        }\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9yYXRpbmcvYXBpL3VzZVJhdGluZ011dGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBbUU7QUFDUDtBQUU1RCxNQUFNRyxlQUFlLE9BQU1DLHFCQUE0QkM7SUFDbkQsTUFBTUMsV0FBVyxNQUFNSixzRUFBYUEsQ0FBQ0ssR0FBRyxDQUFDLHlCQUE0QixPQUFIQyxLQUM5RDtRQUNJSCxRQUFRQTtJQUNaO0lBR0osSUFBSSxDQUFDQyxTQUFTRyxJQUFJLEVBQUU7UUFDaEIsTUFBTSxJQUFJQyxNQUFNO0lBQ3BCO0lBQ0EsT0FBT0osU0FBU0csSUFBSTtBQUV4QjtBQUVPLE1BQU1FLG9CQUFvQjtJQUM3QixNQUFNQyxjQUFjWCxxRUFBY0E7SUFDbEMsT0FBT0Qsa0VBQVdBLENBQUM7UUFDbkJhLFlBQVksQ0FBQ0osT0FBY04sYUFBYU0sS0FBS0wsbUJBQW1CLEVBQUVLLEtBQUtKLE1BQU07UUFDN0VTLFdBQVc7WUFDVEYsWUFBWUcsaUJBQWlCLENBQUM7Z0JBQUVDLFVBQVU7b0JBQUM7aUJBQWlCO1lBQUM7UUFDL0Q7UUFDQUMsU0FBUyxDQUFDQztZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtBQUdGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL3JhdGluZy9hcGkvdXNlUmF0aW5nTXV0YXRpb24udHM/NWJkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNdXRhdGlvbix1c2VRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIkAvYXBwL2ludGVyY2VwdG9yL2F4aW9zSW5zdGFuY2VcIjtcclxuXHJcbmNvbnN0IHVwZGF0ZVJhdGluZyA9IGFzeW5jKHByb2Nlc3NlZERvY3VtZW50SWQ6c3RyaW5nLCByYXRpbmc6bnVtYmVyKTogUHJvbWlzZTxhbnk+ID0+IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3NJbnN0YW5jZS5wdXQoYHJlc3VsdHMvdXBkYXRlLXJhdGluZy8ke2lkfWAsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByYXRpbmc6IHJhdGluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHVwZGF0aW5nIHJhdGluZ1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVJhdGluZ011dGF0aW9uID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcXVlcnlDbGllbnQgPSB1c2VRdWVyeUNsaWVudCgpO1xyXG4gICAgcmV0dXJuIHVzZU11dGF0aW9uKHtcclxuICAgIG11dGF0aW9uRm46IChkYXRhOiBhbnkpID0+IHVwZGF0ZVJhdGluZyhkYXRhLnByb2Nlc3NlZERvY3VtZW50SWQsIGRhdGEucmF0aW5nKSxcclxuICAgIG9uU3VjY2VzczogKCkgPT4ge1xyXG4gICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJwYWNrYWdlRGV0YWlsc1wiXSB9KTtcclxuICAgIH0sXHJcbiAgICBvbkVycm9yOiAoZXJyb3I6IEVycm9yKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgIH0sXHJcbiAgfSlcclxuXHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeUNsaWVudCIsImF4aW9zSW5zdGFuY2UiLCJ1cGRhdGVSYXRpbmciLCJwcm9jZXNzZWREb2N1bWVudElkIiwicmF0aW5nIiwicmVzcG9uc2UiLCJwdXQiLCJpZCIsImRhdGEiLCJFcnJvciIsInVzZVJhdGluZ011dGF0aW9uIiwicXVlcnlDbGllbnQiLCJtdXRhdGlvbkZuIiwib25TdWNjZXNzIiwiaW52YWxpZGF0ZVF1ZXJpZXMiLCJxdWVyeUtleSIsIm9uRXJyb3IiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/rating/api/useRatingMutation.ts\n"));

/***/ })

});