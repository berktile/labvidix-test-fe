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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst Modal = (param)=>{\n    let { isOpen, onClose, imgUrl } = param;\n    _s();\n    const modalRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const handleOutsideClick = (event)=>{\n            if (modalRef.current && !modalRef.current.contains(event.target) && isOpen) {\n                onClose();\n            }\n        };\n        window.addEventListener(\"click\", handleOutsideClick);\n        return ()=>{\n            window.removeEventListener(\"click\", handleOutsideClick);\n        };\n    }, [\n        onClose,\n        isOpen\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.AnimatePresence, {\n        children: isOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 0.3\n            },\n            style: {\n                position: \"fixed\",\n                top: 0,\n                left: 0,\n                width: \"100%\",\n                height: \"100%\",\n                background: \"rgba(0, 0, 0, 0.5)\",\n                display: \"flex\",\n                alignItems: \"center\",\n                justifyContent: \"center\",\n                zIndex: 999999999\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: {\n                    scale: 0.5\n                },\n                animate: {\n                    scale: 1\n                },\n                exit: {\n                    scale: 0.5\n                },\n                transition: {\n                    duration: 0.3\n                },\n                style: {\n                    background: \"white\",\n                    padding: \"20px\",\n                    borderRadius: \"8px\",\n                    boxShadow: \"0 0 10px rgba(0, 0, 0, 0.3)\"\n                },\n                ref: modalRef,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: imgUrl,\n                    alt: \"Logo\",\n                    width: 300,\n                    height: 300,\n                    className: \"\",\n                    priority: true\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n                    lineNumber: 69,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n                lineNumber: 56,\n                columnNumber: 11\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n            lineNumber: 37,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\modal\\\\index.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Modal, \"iXNJws+mDn9J+ZcpHudMXHGV85c=\");\n_c = Modal;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Modal);\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9tb2RhbC9pbmRleC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF3RDtBQUNQO0FBQ2xCO0FBVS9CLE1BQU1NLFFBQVE7UUFBQyxFQUFFQyxNQUFNLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFjOztJQUNwRCxNQUFNQyxXQUFXTiw2Q0FBTUEsQ0FBaUI7SUFFeENELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVEscUJBQXFCLENBQUNDO1lBQzFCLElBQ0VGLFNBQVNHLE9BQU8sSUFDaEIsQ0FBQ0gsU0FBU0csT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sS0FDdkNSLFFBQ0E7Z0JBQ0FDO1lBQ0Y7UUFDRjtRQUVBUSxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTTjtRQUVqQyxPQUFPO1lBQ0xLLE9BQU9FLG1CQUFtQixDQUFDLFNBQVNQO1FBQ3RDO0lBQ0YsR0FBRztRQUFDSDtRQUFTRDtLQUFPO0lBRXBCLHFCQUNFLDhEQUFDTiwwREFBZUE7a0JBQ2JNLHdCQUNDLDhEQUFDUCxpREFBTUEsQ0FBQ21CLEdBQUc7WUFDVEMsU0FBUztnQkFBRUMsU0FBUztZQUFFO1lBQ3RCQyxTQUFTO2dCQUFFRCxTQUFTO1lBQUU7WUFDdEJFLE1BQU07Z0JBQUVGLFNBQVM7WUFBRTtZQUNuQkcsWUFBWTtnQkFBRUMsVUFBVTtZQUFJO1lBQzVCQyxPQUFPO2dCQUNMQyxVQUFVO2dCQUNWQyxLQUFLO2dCQUNMQyxNQUFNO2dCQUNOQyxPQUFPO2dCQUNQQyxRQUFRO2dCQUNSQyxZQUFZO2dCQUNaQyxTQUFTO2dCQUNUQyxZQUFZO2dCQUNaQyxnQkFBZ0I7Z0JBQ2hCQyxRQUFRO1lBRVY7c0JBRUEsNEVBQUNwQyxpREFBTUEsQ0FBQ21CLEdBQUc7Z0JBQ1RDLFNBQVM7b0JBQUVpQixPQUFPO2dCQUFJO2dCQUN0QmYsU0FBUztvQkFBRWUsT0FBTztnQkFBRTtnQkFDcEJkLE1BQU07b0JBQUVjLE9BQU87Z0JBQUk7Z0JBQ25CYixZQUFZO29CQUFFQyxVQUFVO2dCQUFJO2dCQUM1QkMsT0FBTztvQkFDTE0sWUFBWTtvQkFDWk0sU0FBUztvQkFDVEMsY0FBYztvQkFDZEMsV0FBVztnQkFDYjtnQkFDQUMsS0FBSy9COzBCQUVMLDRFQUFDTCxtREFBS0E7b0JBQ0pxQyxLQUFLakM7b0JBQ0xrQyxLQUFJO29CQUNKYixPQUFPO29CQUNQQyxRQUFRO29CQUNSYSxXQUFVO29CQUNSQyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFReEI7R0F0RU12QztLQUFBQTtBQXdFTiwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvX2NvbXBvbmVudHMvbW9kYWwvaW5kZXgudHN4P2QzZDAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbW90aW9uLCBBbmltYXRlUHJlc2VuY2UgfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcblxyXG5cclxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xyXG4gIGlzT3BlbjogYm9vbGVhbjtcclxuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xyXG4gIGltZ1VybDogc3RyaW5nO1xyXG59XHJcblxyXG5jb25zdCBNb2RhbCA9ICh7IGlzT3Blbiwgb25DbG9zZSwgaW1nVXJsIH06IE1vZGFsUHJvcHMpID0+IHtcclxuICBjb25zdCBtb2RhbFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBoYW5kbGVPdXRzaWRlQ2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIG1vZGFsUmVmLmN1cnJlbnQgJiZcclxuICAgICAgICAhbW9kYWxSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSkgJiZcclxuICAgICAgICBpc09wZW5cclxuICAgICAgKSB7XHJcbiAgICAgICAgb25DbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlT3V0c2lkZUNsaWNrKTtcclxuXHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XHJcbiAgICB9O1xyXG4gIH0sIFtvbkNsb3NlLCBpc09wZW5dKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBbmltYXRlUHJlc2VuY2U+XHJcbiAgICAgIHtpc09wZW4gJiYgKFxyXG4gICAgICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cclxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxyXG4gICAgICAgICAgZXhpdD17eyBvcGFjaXR5OiAwIH19XHJcbiAgICAgICAgICB0cmFuc2l0aW9uPXt7IGR1cmF0aW9uOiAwLjMgfX1cclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBcImZpeGVkXCIsXHJcbiAgICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMCwgMCwgMCwgMC41KVwiLFxyXG4gICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIHpJbmRleDogOTk5OTk5OTk5LFxyXG5cclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPG1vdGlvbi5kaXZcclxuICAgICAgICAgICAgaW5pdGlhbD17eyBzY2FsZTogMC41IH19XHJcbiAgICAgICAgICAgIGFuaW1hdGU9e3sgc2NhbGU6IDEgfX1cclxuICAgICAgICAgICAgZXhpdD17eyBzY2FsZTogMC41IH19XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDAuMyB9fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKVwiLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICByZWY9e21vZGFsUmVmfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e2ltZ1VybH1cclxuICAgICAgICAgICAgICBhbHQ9XCJMb2dvXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MzAwfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MzAwfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cclxuICAgICAgICA8L21vdGlvbi5kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XHJcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJBbmltYXRlUHJlc2VuY2UiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVJlZiIsIkltYWdlIiwiTW9kYWwiLCJpc09wZW4iLCJvbkNsb3NlIiwiaW1nVXJsIiwibW9kYWxSZWYiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaW5pdGlhbCIsIm9wYWNpdHkiLCJhbmltYXRlIiwiZXhpdCIsInRyYW5zaXRpb24iLCJkdXJhdGlvbiIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0Iiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInpJbmRleCIsInNjYWxlIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsInJlZiIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsInByaW9yaXR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/modal/index.tsx\n"));

/***/ })

});