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

/***/ "(app-pages-browser)/./app/_components/modal/index.tsx":
/*!*****************************************!*\
  !*** ./app/_components/modal/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n\nconst Modal = (param)=>{\n    let { isOpen, onClose, children } = param;\n    _s();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleOutsideClick = (event)=>{\n            if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {\n                onClose();\n            }\n        };\n        window.addEventListener(\"click\", handleOutsideClick);\n        return ()=>{\n            window.removeEventListener(\"click\", handleOutsideClick);\n        };\n    }, [\n        onClose,\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.AnimatePresence, {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 0.3\n            },\n            style: {\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                width: \"100%\",\n                height: \"100%\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\"\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                initial: {\n                    scale: 0.5\n                },\n                animate: {\n                    scale: 1\n                },\n                exit: {\n                    scale: 0.5\n                },\n                transition: {\n                    duration: 0.3\n                },\n                style: {\n                    background: \"white\",\n                    padding: \"20px\",\n                    borderRadius: \"8px\",\n                    boxShadow: \"0 0 10px rgba(0, 0, 0, 0.3)\"\n                },\n                ref: modalRef,\n                children: [\n                    children,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: onClose,\n                        children: \"close\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n                lineNumber: 55,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Modal, \"iXNJws+mDn9J+ZcpHudMXHGV85c=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9tb2RhbC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBd0Q7QUFDUjtBQVVoRCxNQUFNSyxRQUFRO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBYTs7SUFDbkQsTUFBTUMsV0FBV0wsNkNBQU1BLENBQWlCO0lBRXhDRCxnREFBU0EsQ0FBQztRQUNOLE1BQU1PLHFCQUFxQixDQUFDQztZQUMxQixJQUFJRixTQUFTRyxPQUFPLElBQUksQ0FBQ0gsU0FBU0csT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sS0FBYVIsUUFBUTtnQkFDbEZDO1lBQ0Y7UUFDRjtRQUVBUSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTTjtRQUVqQyxPQUFPO1lBQ0xLLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNQO1FBQ3RDO0lBQ0YsR0FBRztRQUFDSDtRQUFTRDtLQUFPO0lBUXhCLHFCQUNFLDhEQUFDTCwwREFBZUE7a0JBQ2JLLHdCQUNDLDhEQUFDTixpREFBTUEsQ0FBQ2tCLEdBQUc7WUFDVEMsU0FBUztnQkFBRUMsU0FBUztZQUFFO1lBQ3RCQyxTQUFTO2dCQUFFRCxTQUFTO1lBQUU7WUFDdEJFLE1BQU07Z0JBQUVGLFNBQVM7WUFBRTtZQUNuQkcsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1lBQzVCQyxPQUFPO2dCQUNMQyxVQUFVO2dCQUNWQyxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxZQUFZO2dCQUNaQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxnQkFBZ0I7WUFDbEI7c0JBRUEsNEVBQUNsQyxpREFBTUEsQ0FBQ2tCLEdBQUc7Z0JBQ1RDLFNBQVM7b0JBQUVnQixPQUFPO2dCQUFJO2dCQUN0QmQsU0FBUztvQkFBRWMsT0FBTztnQkFBRTtnQkFDcEJiLE1BQU07b0JBQUVhLE9BQU87Z0JBQUk7Z0JBQ25CWixZQUFZO29CQUFFQyxVQUFVO2dCQUFJO2dCQUM1QkMsT0FBTztvQkFDTE0sWUFBWTtvQkFDWkssU0FBUztvQkFDVEMsY0FBYztvQkFDZEMsV0FBVztnQkFDYjtnQkFDQUMsS0FBSzlCOztvQkFJSkQ7a0NBQ0QsOERBQUNnQzt3QkFBT0MsU0FBU2xDO2tDQUFTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRDO0dBakVNRjtLQUFBQTtBQW1FTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvbW9kYWwvaW5kZXgudHN4P2QzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gICAgaXNPcGVuOiBib29sZWFuO1xyXG4gICAgb25DbG9zZTogKCkgPT4gdm9pZDtcclxuICAgIGltZ1VybDogUmVhY3QuUmVhY3ROb2RlO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG5jb25zdCBNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgY2hpbGRyZW4gfTpNb2RhbFByb3BzKSA9PiB7XHJcbiAgICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgIGlmIChtb2RhbFJlZi5jdXJyZW50ICYmICFtb2RhbFJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKSAmJiBpc09wZW4pIHtcclxuICAgICAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICBcclxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH0sIFtvbkNsb3NlLCBpc09wZW5dKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICAgIGluaXRpYWw9e3sgc2NhbGU6IDAuNSB9fVxyXG4gICAgICAgICAgICBhbmltYXRlPXt7IHNjYWxlOiAxIH19XHJcbiAgICAgICAgICAgIGV4aXQ9e3sgc2NhbGU6IDAuNSB9fVxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXHJcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMylcIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgcmVmPXttb2RhbFJlZn1cclxuXHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ2xvc2V9PmNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICAgPC9tb3Rpb24uZGl2PlxyXG4gICAgICApfVxyXG4gICAgPC9BbmltYXRlUHJlc2VuY2U+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xyXG4iXSwibmFtZXMiOlsibW90aW9uIiwiQW5pbWF0ZVByZXNlbmNlIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJNb2RhbCIsImlzT3BlbiIsIm9uQ2xvc2UiLCJjaGlsZHJlbiIsIm1vZGFsUmVmIiwiaGFuZGxlT3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsImluaXRpYWwiLCJvcGFjaXR5IiwiYW5pbWF0ZSIsImV4aXQiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzdHlsZSIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJzY2FsZSIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJyZWYiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/modal/index.tsx\n"));

/***/ })

});