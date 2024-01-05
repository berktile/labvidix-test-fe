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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUpdatePackageNameMutation: function() { return /* binding */ useUpdatePackageNameMutation; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/interceptor/axiosInstance */ \"(app-pages-browser)/./app/interceptor/axiosInstance.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst updatePackageName = async (id, newName)=>{\n    const response = await _app_interceptor_axiosInstance__WEBPACK_IMPORTED_MODULE_0__[\"default\"].patch(\"/package/edit-package-name/\".concat(id), {\n        packageName: newName\n    });\n    if (!response.data) {\n        throw new Error(\"Error updating package name\");\n    }\n    return response.data;\n};\nconst useUpdatePackageNameMutation = ()=>{\n    const queryClient = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQueryClient)();\n    const getPreviousData = queryClient.getQueryData([\n        \"packages\"\n    ]);\n    //now we will compare the previous data with the new data and update the package name if it has changed\n    const previousData = getPreviousData === null || getPreviousData === void 0 ? void 0 : getPreviousData.find((item)=>item._id === _id);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({\n        mutationFn: (data)=>updatePackageName(data.id, data.packageName),\n        onSuccess: (data, variables)=>{\n            queryClient.invalidateQueries({\n                queryKey: [\n                    \"packages\"\n                ]\n            });\n            // Eğer _id değerine erişmek istiyorsanız:\n            const _id1 = variables.id;\n        // Diğer işlemler...\n        },\n        onError: (error)=>{\n            console.error(\"Error updating package name:\", error);\n            // Örnek: Kullanıcıya bir hata mesajı gösterme veya başka bir işlem yapma\n            alert(\"Error updating package name. Please try again.\");\n        // Eğer kullanıcıyı belirli bir sayfaya yönlendirmek istiyorsanız:\n        // router.push(\"/error-page\");\n        },\n        onSettled: (data, error, variables)=>{\n        // Eğer işlem başarılı veya başarısız olsa da yapılmasını istediğiniz işlemler varsa:\n        // Örnek: Kullanıcıya bir bildirim gösterme\n        // Örnek: Kullanıcıya bir yükleme çubuğu gösterme\n        }\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC8ocm91dGVzKS9oaXN0b3J5L2FwaS91c2VVcGRhdGVQYWNrYWdlTmFtZU11dGF0aW9uLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUE0RTtBQUNoQjtBQUVoQjtBQU01QyxNQUFNSSxvQkFBb0IsT0FBTUMsSUFBV0M7SUFDdkMsTUFBTUMsV0FBVyxNQUFNTCxzRUFBYUEsQ0FBQ00sS0FBSyxDQUFDLDhCQUFpQyxPQUFISCxLQUN6RTtRQUNJSSxhQUFhSDtJQUNqQjtJQUdBLElBQUksQ0FBQ0MsU0FBU0csSUFBSSxFQUFFO1FBQ2hCLE1BQU0sSUFBSUMsTUFBTTtJQUNwQjtJQUNBLE9BQU9KLFNBQVNHLElBQUk7QUFHeEI7QUFFTyxNQUFNRSwrQkFBK0I7SUFDeEMsTUFBTUMsY0FBY1oscUVBQWNBO0lBQ2xDLE1BQU1hLGtCQUFrQkQsWUFBWUUsWUFBWSxDQUFnQjtRQUFDO0tBQVc7SUFFNUUsdUdBQXVHO0lBRXhHLE1BQU1DLGVBQWVGLDRCQUFBQSxzQ0FBQUEsZ0JBQWlCRyxJQUFJLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsR0FBRyxLQUFLQTtJQUlqRSxNQUFNQyxTQUFTakIsMERBQVNBO0lBQ3hCLE9BQU9ILGtFQUFXQSxDQUFDO1FBQ2pCcUIsWUFBWSxDQUFDWCxPQUFjTixrQkFBa0JNLEtBQUtMLEVBQUUsRUFBRUssS0FBS0QsV0FBVztRQUN0RWEsV0FBVyxDQUFDWixNQUFNYTtZQUNoQlYsWUFBWVcsaUJBQWlCLENBQUM7Z0JBQUVDLFVBQVU7b0JBQUM7aUJBQVc7WUFBQztZQUV2RCwwQ0FBMEM7WUFDMUMsTUFBTU4sT0FBTUksVUFBVWxCLEVBQUU7UUFDeEIsb0JBQW9CO1FBQ3RCO1FBQ0FxQixTQUFTLENBQUNDO1lBQ1JDLFFBQVFELEtBQUssQ0FBQyxnQ0FBZ0NBO1lBRTlDLHlFQUF5RTtZQUN6RUUsTUFBTTtRQUVOLGtFQUFrRTtRQUNsRSw4QkFBOEI7UUFDaEM7UUFDQUMsV0FBVyxDQUFDcEIsTUFBTWlCLE9BQU9KO1FBQ3ZCLHFGQUFxRjtRQUNyRiwyQ0FBMkM7UUFDM0MsaURBQWlEO1FBR25EO0lBQ0Y7QUFDSixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC8ocm91dGVzKS9oaXN0b3J5L2FwaS91c2VVcGRhdGVQYWNrYWdlTmFtZU11dGF0aW9uLnRzP2ViYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VNdXRhdGlvbiwgdXNlUXVlcnksIHVzZVF1ZXJ5Q2xpZW50fSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XHJcbmltcG9ydCBheGlvc0luc3RhbmNlIGZyb20gXCJAL2FwcC9pbnRlcmNlcHRvci9heGlvc0luc3RhbmNlXCI7XHJcbmltcG9ydCB7UGFja2FnZURhdGEgfSBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvY29sbGFwc2libGUtcGFja2FnZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcblxyXG5pbnRlcmZhY2UgSHR0cFJlc3BvbnNlIHtcclxuICAgIG1lc3NhZ2U6c3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCB1cGRhdGVQYWNrYWdlTmFtZSA9IGFzeW5jKGlkOnN0cmluZywgbmV3TmFtZTpzdHJpbmcpOiBQcm9taXNlPEh0dHBSZXNwb25zZT4gPT4ge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvc0luc3RhbmNlLnBhdGNoKGAvcGFja2FnZS9lZGl0LXBhY2thZ2UtbmFtZS8ke2lkfWAsIFxyXG4gICAge1xyXG4gICAgICAgIHBhY2thZ2VOYW1lOiBuZXdOYW1lXHJcbiAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICBpZiAoIXJlc3BvbnNlLmRhdGEpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFcnJvciB1cGRhdGluZyBwYWNrYWdlIG5hbWVcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YSBhcyBIdHRwUmVzcG9uc2U7XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVVwZGF0ZVBhY2thZ2VOYW1lTXV0YXRpb24gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBxdWVyeUNsaWVudCA9IHVzZVF1ZXJ5Q2xpZW50KCk7XHJcbiAgICBjb25zdCBnZXRQcmV2aW91c0RhdGEgPSBxdWVyeUNsaWVudC5nZXRRdWVyeURhdGE8UGFja2FnZURhdGFbXT4oW1wicGFja2FnZXNcIl0pO1xyXG5cclxuICAgIC8vbm93IHdlIHdpbGwgY29tcGFyZSB0aGUgcHJldmlvdXMgZGF0YSB3aXRoIHRoZSBuZXcgZGF0YSBhbmQgdXBkYXRlIHRoZSBwYWNrYWdlIG5hbWUgaWYgaXQgaGFzIGNoYW5nZWRcclxuXHJcbiAgIGNvbnN0IHByZXZpb3VzRGF0YSA9IGdldFByZXZpb3VzRGF0YT8uZmluZCgoaXRlbSkgPT4gaXRlbS5faWQgPT09IF9pZCk7XHJcbiAgIFxyXG5cclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIHJldHVybiB1c2VNdXRhdGlvbih7XHJcbiAgICAgIG11dGF0aW9uRm46IChkYXRhOiBhbnkpID0+IHVwZGF0ZVBhY2thZ2VOYW1lKGRhdGEuaWQsIGRhdGEucGFja2FnZU5hbWUpLFxyXG4gICAgICBvblN1Y2Nlc3M6IChkYXRhLCB2YXJpYWJsZXMpID0+IHtcclxuICAgICAgICBxdWVyeUNsaWVudC5pbnZhbGlkYXRlUXVlcmllcyh7IHF1ZXJ5S2V5OiBbXCJwYWNrYWdlc1wiXSB9KTtcclxuICBcclxuICAgICAgICAvLyBFxJ9lciBfaWQgZGXEn2VyaW5lIGVyacWfbWVrIGlzdGl5b3JzYW7EsXo6XHJcbiAgICAgICAgY29uc3QgX2lkID0gdmFyaWFibGVzLmlkO1xyXG4gICAgICAgIC8vIERpxJ9lciBpxZ9sZW1sZXIuLi5cclxuICAgICAgfSxcclxuICAgICAgb25FcnJvcjogKGVycm9yOiBFcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciB1cGRhdGluZyBwYWNrYWdlIG5hbWU6XCIsIGVycm9yKTtcclxuICBcclxuICAgICAgICAvLyDDlnJuZWs6IEt1bGxhbsSxY8SxeWEgYmlyIGhhdGEgbWVzYWrEsSBnw7ZzdGVybWUgdmV5YSBiYcWfa2EgYmlyIGnFn2xlbSB5YXBtYVxyXG4gICAgICAgIGFsZXJ0KFwiRXJyb3IgdXBkYXRpbmcgcGFja2FnZSBuYW1lLiBQbGVhc2UgdHJ5IGFnYWluLlwiKTtcclxuICBcclxuICAgICAgICAvLyBFxJ9lciBrdWxsYW7EsWPEsXnEsSBiZWxpcmxpIGJpciBzYXlmYXlhIHnDtm5sZW5kaXJtZWsgaXN0aXlvcnNhbsSxejpcclxuICAgICAgICAvLyByb3V0ZXIucHVzaChcIi9lcnJvci1wYWdlXCIpO1xyXG4gICAgICB9LFxyXG4gICAgICBvblNldHRsZWQ6IChkYXRhLCBlcnJvciwgdmFyaWFibGVzKSA9PiB7XHJcbiAgICAgICAgLy8gRcSfZXIgacWfbGVtIGJhxZ9hcsSxbMSxIHZleWEgYmHFn2FyxLFzxLF6IG9sc2EgZGEgeWFwxLFsbWFzxLFuxLEgaXN0ZWRpxJ9pbml6IGnFn2xlbWxlciB2YXJzYTpcclxuICAgICAgICAvLyDDlnJuZWs6IEt1bGxhbsSxY8SxeWEgYmlyIGJpbGRpcmltIGfDtnN0ZXJtZVxyXG4gICAgICAgIC8vIMOWcm5lazogS3VsbGFuxLFjxLF5YSBiaXIgecO8a2xlbWUgw6d1YnXEn3UgZ8O2c3Rlcm1lXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJ1c2VRdWVyeUNsaWVudCIsImF4aW9zSW5zdGFuY2UiLCJ1c2VSb3V0ZXIiLCJ1cGRhdGVQYWNrYWdlTmFtZSIsImlkIiwibmV3TmFtZSIsInJlc3BvbnNlIiwicGF0Y2giLCJwYWNrYWdlTmFtZSIsImRhdGEiLCJFcnJvciIsInVzZVVwZGF0ZVBhY2thZ2VOYW1lTXV0YXRpb24iLCJxdWVyeUNsaWVudCIsImdldFByZXZpb3VzRGF0YSIsImdldFF1ZXJ5RGF0YSIsInByZXZpb3VzRGF0YSIsImZpbmQiLCJpdGVtIiwiX2lkIiwicm91dGVyIiwibXV0YXRpb25GbiIsIm9uU3VjY2VzcyIsInZhcmlhYmxlcyIsImludmFsaWRhdGVRdWVyaWVzIiwicXVlcnlLZXkiLCJvbkVycm9yIiwiZXJyb3IiLCJjb25zb2xlIiwiYWxlcnQiLCJvblNldHRsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/(routes)/history/api/useUpdatePackageNameMutation.ts\n"));

/***/ })

});