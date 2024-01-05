"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(routes)/history/page",{

/***/ "(app-pages-browser)/./app/(routes)/history/api/useUpdatePackageNameMutation.ts":
/*!******************************************************************!*\
  !*** ./app/(routes)/history/api/useUpdatePackageNameMutation.ts ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUpdatePackageNameMutation: function() { return /* binding */ useUpdatePackageNameMutation; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/interceptor/axiosInstance */ \"(app-pages-browser)/./app/interceptor/axiosInstance.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst updatePackageName = async (id, newName)=>{\n    const response = await _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"/package/edit-package-name/\".concat(id), {\n        packageName: newName\n    });\n    if (!response.data) {\n        throw new Error(\"Error updating package name\");\n    }\n    return response.data;\n};\nconst useUpdatePackageNameMutation = ()=>{\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();\n    const getPreviousData = queryClient.getQueryData([\n        \"packages\"\n    ]);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({\n        mutationFn: (data)=>updatePackageName(data.id, data.packageName),\n        onSuccess: ()=>{\n            queryClient.invalidateQueries({\n                queryKey: [\n                    \"packages\"\n                ]\n            });\n        },\n        onError: (error)=>{\n            console.log(error);\n        }\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9oaXN0b3J5L2FwaS91c2VVcGRhdGVQYWNrYWdlTmFtZU11dGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0RTtBQUNoQjtBQUVoQjtBQU01QyxNQUFNSSxvQkFBb0IsT0FBTUMsSUFBV0M7SUFDdkMsTUFBTUMsV0FBVyxNQUFNTCxzRUFBYUEsQ0FBQ00sS0FBSyxDQUFDLDhCQUFpQyxPQUFISCxLQUN6RTtRQUNJSSxhQUFhSDtJQUNqQjtJQUdBLElBQUksQ0FBQ0MsU0FBU0csSUFBSSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUNBLE9BQU9KLFNBQVNHLElBQUk7QUFHeEI7QUFFTyxNQUFNRSwrQkFBK0I7SUFDeEMsTUFBTUMsY0FBY1oscUVBQWNBO0lBQ2xDLE1BQU1hLGtCQUFrQkQsWUFBWUUsWUFBWSxDQUMvQztRQUFDO0tBQVc7SUFHYixNQUFNQyxTQUFTYiwwREFBU0E7SUFDeEIsT0FBT0gsa0VBQVdBLENBQUM7UUFDbkJpQixZQUFZLENBQUNQLE9BQWNOLGtCQUFrQk0sS0FBS0wsRUFBRSxFQUFFSyxLQUFLRCxXQUFXO1FBQ3RFUyxXQUFXO1lBQ1RMLFlBQVlNLGlCQUFpQixDQUFDO2dCQUFFQyxVQUFVO29CQUFDO2lCQUFXO1lBQUM7UUFDekQ7UUFDQUMsU0FBUyxDQUFDQztZQUNSQyxRQUFRQyxHQUFHLENBQUNGO1FBQ2Q7SUFDRjtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwLyhyb3V0ZXMpL2hpc3RvcnkvYXBpL3VzZVVwZGF0ZVBhY2thZ2VOYW1lTXV0YXRpb24udHM/ZWJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZU11dGF0aW9uLCB1c2VRdWVyeSwgdXNlUXVlcnlDbGllbnR9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcclxuaW1wb3J0IGF4aW9zSW5zdGFuY2UgZnJvbSBcIkAvYXBwL2ludGVyY2VwdG9yL2F4aW9zSW5zdGFuY2VcIjtcclxuaW1wb3J0IHtQYWNrYWdlRGF0YSB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9jb2xsYXBzaWJsZS1wYWNrYWdlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuXHJcbmludGVyZmFjZSBIdHRwUmVzcG9uc2Uge1xyXG4gICAgbWVzc2FnZTpzdHJpbmc7XHJcbn1cclxuXHJcbmNvbnN0IHVwZGF0ZVBhY2thZ2VOYW1lID0gYXN5bmMoaWQ6c3RyaW5nLCBuZXdOYW1lOnN0cmluZyk6IFByb21pc2U8SHR0cFJlc3BvbnNlPiA9PiB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zSW5zdGFuY2UucGF0Y2goYC9wYWNrYWdlL2VkaXQtcGFja2FnZS1uYW1lLyR7aWR9YCwgXHJcbiAgICB7XHJcbiAgICAgICAgcGFja2FnZU5hbWU6IG5ld05hbWVcclxuICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgIGlmICghcmVzcG9uc2UuZGF0YSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVycm9yIHVwZGF0aW5nIHBhY2thZ2UgbmFtZVwiKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhIGFzIEh0dHBSZXNwb25zZTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlVXBkYXRlUGFja2FnZU5hbWVNdXRhdGlvbiA9ICgpID0+IHtcclxuICAgIGNvbnN0IHF1ZXJ5Q2xpZW50ID0gdXNlUXVlcnlDbGllbnQoKTtcclxuICAgIGNvbnN0IGdldFByZXZpb3VzRGF0YSA9IHF1ZXJ5Q2xpZW50LmdldFF1ZXJ5RGF0YTxQYWNrYWdlRGF0YVtdPlxyXG4gICAgKFtcInBhY2thZ2VzXCJdKTtcclxuICAgIFxyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgcmV0dXJuIHVzZU11dGF0aW9uKHtcclxuICAgIG11dGF0aW9uRm46IChkYXRhOiBhbnkpID0+IHVwZGF0ZVBhY2thZ2VOYW1lKGRhdGEuaWQsIGRhdGEucGFja2FnZU5hbWUpLFxyXG4gICAgb25TdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgIHF1ZXJ5Q2xpZW50LmludmFsaWRhdGVRdWVyaWVzKHsgcXVlcnlLZXk6IFtcInBhY2thZ2VzXCJdIH0pO1xyXG4gICAgfSxcclxuICAgIG9uRXJyb3I6IChlcnJvcjogRXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgfSxcclxuICB9KVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeUNsaWVudCIsImF4aW9zSW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVQYWNrYWdlTmFtZSIsImlkIiwibmV3TmFtZSIsInJlc3BvbnNlIiwicGF0Y2giLCJwYWNrYWdlTmFtZSIsImRhdGEiLCJFcnJvciIsInVzZVVwZGF0ZVBhY2thZ2VOYW1lTXV0YXRpb24iLCJxdWVyeUNsaWVudCIsImdldFByZXZpb3VzRGF0YSIsImdldFF1ZXJ5RGF0YSIsInJvdXRlciIsIm11dGF0aW9uRm4iLCJvblN1Y2Nlc3MiLCJpbnZhbGlkYXRlUXVlcmllcyIsInF1ZXJ5S2V5Iiwib25FcnJvciIsImVycm9yIiwiY29uc29sZSIsImxvZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/history/api/useUpdatePackageNameMutation.ts\n"));

/***/ })

});