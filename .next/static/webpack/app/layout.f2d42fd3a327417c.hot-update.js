"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/_components/navbar/index.tsx":
/*!******************************************!*\
  !*** ./app/_components/navbar/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./app/_components/navbar/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_homepage_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_assets/homepage/logo.svg */ \"(app-pages-browser)/./app/_assets/homepage/logo.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_homepage_User_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_assets/homepage/User.svg */ \"(app-pages-browser)/./app/_assets/homepage/User.svg\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown */ \"(app-pages-browser)/./app/_components/dropdown/index.tsx\");\n/* harmony import */ var _app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_hooks/useUser */ \"(app-pages-browser)/./app/_hooks/useUser.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst items = [\n    {\n        icon: \"/images/signout.svg\",\n        link: \"/\",\n        text: \"Sign Out\"\n    }\n];\nconst menuItems = [\n    {\n        to: \"/\",\n        text: \"Extract\"\n    },\n    {\n        to: \"/history\",\n        text: \"History\"\n    }\n];\nfunction Navbar() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter)();\n    const closeDropdown = ()=>{\n        setIsMenuOpen(false);\n    };\n    const { data, isLoading, error, isError, status } = (0,_app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", closeDropdown);\n        return ()=>{\n            window.removeEventListener(\"click\", closeDropdown);\n        };\n    }, []);\n    const handleAvatarClick = (event)=>{\n        event.stopPropagation();\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            href: \"/\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_homepage_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Logo\",\n                                width: 0,\n                                height: 0\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),\n                            children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item), \" \").concat(pathname === item.to ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: item.to,\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                }, item.to, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().rightSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().userMail),\n                            children: status === \"success\" && data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: data.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: isLoading ? \"Loading...\" : isError ? \"An error has occurred while logging in: \" + error : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatar),\n                            onClick: handleAvatarClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_homepage_User_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"Avatar\",\n                                    width: 0,\n                                    height: 0\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    isOpen: isMenuOpen,\n                                    menuItems: items\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"8odBDx6Ck3zxWBHiCNxT2StuTmo=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname,\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.useRouter,\n        _app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9uYXZiYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ1g7QUFDb0I7QUFDdEI7QUFDc0I7QUFDaEI7QUFFVztBQUNGO0FBQ0U7QUFFOUMsTUFBTVksUUFBUTtJQUNaO1FBQ0VDLE1BQU07UUFDTkMsTUFBTTtRQUNOQyxNQUFNO0lBQ1I7Q0FDRDtBQUVELE1BQU1DLFlBQVk7SUFDaEI7UUFDRUMsSUFBSTtRQUNKRixNQUFNO0lBRVI7SUFDQTtRQUNFRSxJQUFJO1FBQ0pGLE1BQU07SUFFUjtDQUNEO0FBRWMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHbEIsK0NBQVFBLENBQUM7SUFDN0MsTUFBTW1CLFdBQVdWLDREQUFXQTtJQUM1QixNQUFNVyxTQUFTWiwwREFBU0E7SUFDeEIsTUFBTWEsZ0JBQWdCO1FBQ3BCSCxjQUFjO0lBQ2hCO0lBRUEsTUFBTSxFQUFFSSxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHbkIsOERBQVVBO0lBRTlEUixnREFBU0EsQ0FBQztRQUNSNEIsT0FBT0MsZ0JBQWdCLENBQUMsU0FBU1A7UUFDakMsT0FBTztZQUNMTSxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTUjtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLG9CQUFvQixDQUN4QkM7UUFFQUEsTUFBTUMsZUFBZTtRQUNyQmQsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDZ0I7UUFBSUMsV0FBV2pDLHNFQUFnQjtrQkFDOUIsNEVBQUNtQztZQUFJRixXQUFXakMsbUVBQWE7OzhCQUMzQiw4REFBQ21DO29CQUFJRixXQUFXakMsd0VBQWtCOztzQ0FDaEMsOERBQUNHLGtEQUFJQTs0QkFBQzhCLFdBQVdqQyxpRUFBVzs0QkFBRXVDLE1BQUs7c0NBQ2pDLDRFQUFDdEMsbURBQUtBO2dDQUFDdUMsS0FBS3RDLGlFQUFJQTtnQ0FBRXVDLEtBQUk7Z0NBQU9DLE9BQU87Z0NBQUdDLFFBQVE7Ozs7Ozs7Ozs7O3NDQUVqRCw4REFBQ0M7NEJBQUdYLFdBQVdqQyxpRUFBVztzQ0FDdkJhLFVBQVVpQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ2QsOERBQUNDO29DQUVDZixXQUFXLEdBQ1RmLE9BRFlsQixpRUFBVyxFQUFDLEtBRXpCLE9BRENrQixhQUFhNkIsS0FBS2pDLEVBQUUsR0FBR2QsbUVBQWEsR0FBRzs4Q0FHekMsNEVBQUNHLGtEQUFJQTt3Q0FBQ29DLE1BQU1RLEtBQUtqQyxFQUFFO2tEQUFHaUMsS0FBS25DLElBQUk7Ozs7OzttQ0FMMUJtQyxLQUFLakMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFVcEIsOERBQUNxQjtvQkFBSUYsV0FBV2pDLHlFQUFtQjs7c0NBQ2pDLDhEQUFDbUM7NEJBQUlGLFdBQVdqQyxxRUFBZTtzQ0FDNUJ5QixXQUFXLGFBQWFKLHFCQUN2Qiw4REFBQytCOzBDQUFHL0IsS0FBS2dDLEtBQUs7Ozs7O3FEQUVkLDhEQUFDRDswQ0FDRTlCLFlBQ0csZUFDQUUsVUFDQSw2Q0FBNkNELFFBQzdDOzs7Ozs7Ozs7OztzQ0FJViw4REFBQ1k7NEJBQUlGLFdBQVdqQyxtRUFBYTs0QkFBRXVELFNBQVMxQjs7OENBQ3RDLDhEQUFDNUIsbURBQUtBO29DQUFDdUMsS0FBS3BDLGlFQUFJQTtvQ0FBRXFDLEtBQUk7b0NBQVNDLE9BQU87b0NBQUdDLFFBQVE7Ozs7Ozs4Q0FDakQsOERBQUN0QyxpREFBUUE7b0NBQUNtRCxRQUFReEM7b0NBQVlILFdBQVdKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQWxFd0JNOztRQUVMUCx3REFBV0E7UUFDYkQsc0RBQVNBO1FBSzRCRCwwREFBVUE7OztLQVJ4Q1MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL19jb21wb25lbnRzL25hdmJhci9pbmRleC50c3g/ZGI2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHlsZXMubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBMb2dvIGZyb20gXCIuLi8uLi9fYXNzZXRzL2hvbWVwYWdlL2xvZ28uc3ZnXCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFVzZXIgZnJvbSBcIi4uLy4uL19hc3NldHMvaG9tZXBhZ2UvVXNlci5zdmdcIjtcclxuaW1wb3J0IERyb3Bkb3duIGZyb20gXCIuLi9kcm9wZG93blwiO1xyXG5pbXBvcnQgTG9nb3V0IGZyb20gXCIuLi8uLi9fYXNzZXRzL2hvbWVwYWdlL3NpZ25vdXQuc3ZnXCI7XHJcbmltcG9ydCB1c2VQcm9maWxlIGZyb20gXCJAL2FwcC9faG9va3MvdXNlVXNlclwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogXCIvaW1hZ2VzL3NpZ25vdXQuc3ZnXCIsXHJcbiAgICBsaW5rOiBcIi9cIixcclxuICAgIHRleHQ6IFwiU2lnbiBPdXRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHRvOiBcIi9cIixcclxuICAgIHRleHQ6IFwiRXh0cmFjdFwiLFxyXG4gXHJcbiAgfSxcclxuICB7XHJcbiAgICB0bzogXCIvaGlzdG9yeVwiLFxyXG4gICAgdGV4dDogXCJIaXN0b3J5XCIsXHJcbiAgIFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBjbG9zZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgc2V0SXNNZW51T3BlbihmYWxzZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgeyBkYXRhLCBpc0xvYWRpbmcsIGVycm9yLCBpc0Vycm9yLCBzdGF0dXMgfSA9IHVzZVByb2ZpbGUoKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xvc2VEcm9wZG93bik7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRHJvcGRvd24pO1xyXG4gICAgfTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUF2YXRhckNsaWNrID0gKFxyXG4gICAgZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTERpdkVsZW1lbnQsIE1vdXNlRXZlbnQ+XHJcbiAgKSA9PiB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHNldElzTWVudU9wZW4oIWlzTWVudU9wZW4pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmF2YmFyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxlZnRTZWN0aW9ufT5cclxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD1cIkxvZ29cIiB3aWR0aD17MH0gaGVpZ2h0PXswfSAvPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLm1lbnV9PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAga2V5PXtpdGVtLnRvfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMuaXRlbX0gJHtcclxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUgPT09IGl0ZW0udG8gPyBzdHlsZXMuYWN0aXZlIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS50b30+e2l0ZW0udGV4dH08L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMucmlnaHRTZWN0aW9ufT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudXNlck1haWx9PlxyXG4gICAgICAgICAgICB7c3RhdHVzID09PSBcInN1Y2Nlc3NcIiAmJiBkYXRhID8gKFxyXG4gICAgICAgICAgICAgIDxwPntkYXRhLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIHtpc0xvYWRpbmdcclxuICAgICAgICAgICAgICAgICAgPyBcIkxvYWRpbmcuLi5cIlxyXG4gICAgICAgICAgICAgICAgICA6IGlzRXJyb3JcclxuICAgICAgICAgICAgICAgICAgPyBcIkFuIGVycm9yIGhhcyBvY2N1cnJlZCB3aGlsZSBsb2dnaW5nIGluOiBcIiArIGVycm9yXHJcbiAgICAgICAgICAgICAgICAgIDogXCJcIn1cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXZhdGFyfSBvbkNsaWNrPXtoYW5kbGVBdmF0YXJDbGlja30+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e1VzZXJ9IGFsdD1cIkF2YXRhclwiIHdpZHRoPXswfSBoZWlnaHQ9ezB9IC8+XHJcbiAgICAgICAgICAgIDxEcm9wZG93biBpc09wZW49e2lzTWVudU9wZW59IG1lbnVJdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L25hdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiSW1hZ2UiLCJMb2dvIiwiTGluayIsIlVzZXIiLCJEcm9wZG93biIsInVzZVByb2ZpbGUiLCJ1c2VSb3V0ZXIiLCJ1c2VQYXRobmFtZSIsIml0ZW1zIiwiaWNvbiIsImxpbmsiLCJ0ZXh0IiwibWVudUl0ZW1zIiwidG8iLCJOYXZiYXIiLCJpc01lbnVPcGVuIiwic2V0SXNNZW51T3BlbiIsInBhdGhuYW1lIiwicm91dGVyIiwiY2xvc2VEcm9wZG93biIsImRhdGEiLCJpc0xvYWRpbmciLCJlcnJvciIsImlzRXJyb3IiLCJzdGF0dXMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUF2YXRhckNsaWNrIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJuYXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJkaXYiLCJuYXZiYXIiLCJsZWZ0U2VjdGlvbiIsImxvZ28iLCJocmVmIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsIm1lbnUiLCJtYXAiLCJpdGVtIiwibGkiLCJhY3RpdmUiLCJyaWdodFNlY3Rpb24iLCJ1c2VyTWFpbCIsInAiLCJlbWFpbCIsImF2YXRhciIsIm9uQ2xpY2siLCJpc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/navbar/index.tsx\n"));

/***/ })

});