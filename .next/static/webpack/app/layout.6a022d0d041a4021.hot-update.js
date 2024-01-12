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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./styles.module.scss */ \"(app-pages-browser)/./app/_components/navbar/styles.module.scss\");\n/* harmony import */ var _styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_module_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _assets_homepage_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_assets/homepage/logo.svg */ \"(app-pages-browser)/./app/_assets/homepage/logo.svg\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _assets_homepage_User_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_assets/homepage/User.svg */ \"(app-pages-browser)/./app/_assets/homepage/User.svg\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dropdown */ \"(app-pages-browser)/./app/_components/dropdown/index.tsx\");\n/* harmony import */ var _app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_hooks/useUser */ \"(app-pages-browser)/./app/_hooks/useUser.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst items = [\n    {\n        icon: \"/images/signout.svg\",\n        link: \"/\",\n        text: \"Sign Out\"\n    }\n];\nconst menuItems = [\n    {\n        to: \"/\",\n        text: \"Extract\"\n    },\n    {\n        to: \"/history\",\n        text: \"History\"\n    }\n];\nfunction Navbar() {\n    _s();\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const pathname = (0,next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname)();\n    const closeDropdown = ()=>{\n        setIsMenuOpen(false);\n    };\n    const { data, isLoading, error, isError, status } = (0,_app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.addEventListener(\"click\", closeDropdown);\n        return ()=>{\n            window.removeEventListener(\"click\", closeDropdown);\n        };\n    }, []);\n    const handleAvatarClick = (event)=>{\n        event.stopPropagation();\n        setIsMenuOpen(!isMenuOpen);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().navbar),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().leftSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().logo),\n                            onClick: ()=>router.push(\"/\"),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: _assets_homepage_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                alt: \"Logo\",\n                                width: 0,\n                                height: 0\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 63,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().menu),\n                            children: menuItems.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                    className: \"\".concat((_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().item), \" \").concat(pathname === item.to ? (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().active) : \"\"),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                        href: item.to,\n                                        children: item.text\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 17\n                                    }, this)\n                                }, item.to, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 66,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().rightSection),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().userMail),\n                            children: status === \"success\" && data ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: data.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 15\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: isLoading ? \"Loading...\" : isError ? \"An error has occurred while logging in: \" + error : \"\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                lineNumber: 84,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 80,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_module_scss__WEBPACK_IMPORTED_MODULE_9___default().avatar),\n                            onClick: handleAvatarClick,\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    src: _assets_homepage_User_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                    alt: \"Avatar\",\n                                    width: 0,\n                                    height: 0\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 94,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                    isOpen: isMenuOpen,\n                                    menuItems: items\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                                    lineNumber: 95,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n                    lineNumber: 79,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n            lineNumber: 61,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Taha\\\\Desktop\\\\labvidix-frontend\\\\app\\\\_components\\\\navbar\\\\index.tsx\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"FSC9Df4WdCjWnB6VzK3V28p71T4=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_8__.usePathname,\n        _app_hooks_useUser__WEBPACK_IMPORTED_MODULE_7__[\"default\"]\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9fY29tcG9uZW50cy9uYXZiYXIvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNtRDtBQUNUO0FBQ1g7QUFDb0I7QUFDdEI7QUFDc0I7QUFDaEI7QUFFVztBQUVBO0FBRTlDLE1BQU1XLFFBQVE7SUFDWjtRQUNFQyxNQUFNO1FBQ05DLE1BQU07UUFDTkMsTUFBTTtJQUNSO0NBQ0Q7QUFFRCxNQUFNQyxZQUFZO0lBQ2hCO1FBQ0VDLElBQUk7UUFDSkYsTUFBTTtJQUVSO0lBQ0E7UUFDRUUsSUFBSTtRQUNKRixNQUFNO0lBRVI7Q0FDRDtBQUVjLFNBQVNHOztJQUN0QixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR2pCLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU1rQixXQUFXViw0REFBV0E7SUFFNUIsTUFBTVcsZ0JBQWdCO1FBQ3BCRixjQUFjO0lBQ2hCO0lBRUEsTUFBTSxFQUFFRyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUVDLE1BQU0sRUFBRSxHQUFHakIsOERBQVVBO0lBRTlEUixnREFBU0EsQ0FBQztRQUNSMEIsT0FBT0MsZ0JBQWdCLENBQUMsU0FBU1A7UUFDakMsT0FBTztZQUNMTSxPQUFPRSxtQkFBbUIsQ0FBQyxTQUFTUjtRQUN0QztJQUNGLEdBQUcsRUFBRTtJQUVMLE1BQU1TLG9CQUFvQixDQUN4QkM7UUFFQUEsTUFBTUMsZUFBZTtRQUNyQmIsY0FBYyxDQUFDRDtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFXL0Isc0VBQWdCO2tCQUM5Qiw0RUFBQ2lDO1lBQUlGLFdBQVcvQixtRUFBYTs7OEJBQzNCLDhEQUFDaUM7b0JBQUlGLFdBQVcvQix3RUFBa0I7O3NDQUNoQyw4REFBQ2lDOzRCQUFJRixXQUFXL0IsaUVBQVc7NEJBQUVxQyxTQUFTLElBQU1DLE9BQU9DLElBQUksQ0FBQztzQ0FDdEQsNEVBQUN0QyxtREFBS0E7Z0NBQUN1QyxLQUFLdEMsaUVBQUlBO2dDQUFFdUMsS0FBSTtnQ0FBT0MsT0FBTztnQ0FBR0MsUUFBUTs7Ozs7Ozs7Ozs7c0NBRWpELDhEQUFDQzs0QkFBR2IsV0FBVy9CLGlFQUFXO3NDQUN2QlksVUFBVWtDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDZCw4REFBQ0M7b0NBRUNqQixXQUFXLEdBQ1RkLE9BRFlqQixpRUFBVyxFQUFDLEtBRXpCLE9BRENpQixhQUFhOEIsS0FBS2xDLEVBQUUsR0FBR2IsbUVBQWEsR0FBRzs4Q0FHekMsNEVBQUNHLGtEQUFJQTt3Q0FBQytDLE1BQU1ILEtBQUtsQyxFQUFFO2tEQUFHa0MsS0FBS3BDLElBQUk7Ozs7OzttQ0FMMUJvQyxLQUFLbEMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs4QkFVcEIsOERBQUNvQjtvQkFBSUYsV0FBVy9CLHlFQUFtQjs7c0NBQ2pDLDhEQUFDaUM7NEJBQUlGLFdBQVcvQixxRUFBZTtzQ0FDNUJ1QixXQUFXLGFBQWFKLHFCQUN2Qiw4REFBQ2tDOzBDQUFHbEMsS0FBS21DLEtBQUs7Ozs7O3FEQUVkLDhEQUFDRDswQ0FDRWpDLFlBQ0csZUFDQUUsVUFDQSw2Q0FBNkNELFFBQzdDOzs7Ozs7Ozs7OztzQ0FJViw4REFBQ1k7NEJBQUlGLFdBQVcvQixtRUFBYTs0QkFBRXFDLFNBQVNWOzs4Q0FDdEMsOERBQUMxQixtREFBS0E7b0NBQUN1QyxLQUFLcEMsaUVBQUlBO29DQUFFcUMsS0FBSTtvQ0FBU0MsT0FBTztvQ0FBR0MsUUFBUTs7Ozs7OzhDQUNqRCw4REFBQ3RDLGlEQUFRQTtvQ0FBQ21ELFFBQVF6QztvQ0FBWUgsV0FBV0o7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJEO0dBbEV3Qk07O1FBRUxQLHdEQUFXQTtRQU13QkQsMERBQVVBOzs7S0FSeENRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9fY29tcG9uZW50cy9uYXZiYXIvaW5kZXgudHN4P2RiNmEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vc3R5bGVzLm1vZHVsZS5zY3NzXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgTG9nbyBmcm9tIFwiLi4vLi4vX2Fzc2V0cy9ob21lcGFnZS9sb2dvLnN2Z1wiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBVc2VyIGZyb20gXCIuLi8uLi9fYXNzZXRzL2hvbWVwYWdlL1VzZXIuc3ZnXCI7XHJcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiLi4vZHJvcGRvd25cIjtcclxuaW1wb3J0IExvZ291dCBmcm9tIFwiLi4vLi4vX2Fzc2V0cy9ob21lcGFnZS9zaWdub3V0LnN2Z1wiO1xyXG5pbXBvcnQgdXNlUHJvZmlsZSBmcm9tIFwiQC9hcHAvX2hvb2tzL3VzZVVzZXJcIjtcclxuaW1wb3J0IHVzZVJvdXRlciBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuY29uc3QgaXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogXCIvaW1hZ2VzL3NpZ25vdXQuc3ZnXCIsXHJcbiAgICBsaW5rOiBcIi9cIixcclxuICAgIHRleHQ6IFwiU2lnbiBPdXRcIixcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHRvOiBcIi9cIixcclxuICAgIHRleHQ6IFwiRXh0cmFjdFwiLFxyXG4gXHJcbiAgfSxcclxuICB7XHJcbiAgICB0bzogXCIvaGlzdG9yeVwiLFxyXG4gICAgdGV4dDogXCJIaXN0b3J5XCIsXHJcbiAgIFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XHJcbiAgY29uc3QgW2lzTWVudU9wZW4sIHNldElzTWVudU9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHBhdGhuYW1lID0gdXNlUGF0aG5hbWUoKTtcclxuXHJcbiAgY29uc3QgY2xvc2VEcm9wZG93biA9ICgpID0+IHtcclxuICAgIHNldElzTWVudU9wZW4oZmFsc2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHsgZGF0YSwgaXNMb2FkaW5nLCBlcnJvciwgaXNFcnJvciwgc3RhdHVzIH0gPSB1c2VQcm9maWxlKCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsb3NlRHJvcGRvd24pO1xyXG4gICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbG9zZURyb3Bkb3duKTtcclxuICAgIH07XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVBdmF0YXJDbGljayA9IChcclxuICAgIGV2ZW50OiBSZWFjdC5Nb3VzZUV2ZW50PEhUTUxEaXZFbGVtZW50LCBNb3VzZUV2ZW50PlxyXG4gICkgPT4ge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzZXRJc01lbnVPcGVuKCFpc01lbnVPcGVuKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm5hdmJhcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sZWZ0U2VjdGlvbn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxvZ299IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKFwiL1wiKX0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0xvZ299IGFsdD1cIkxvZ29cIiB3aWR0aD17MH0gaGVpZ2h0PXswfSAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMubWVudX0+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0udG99XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtfSAke1xyXG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSA9PT0gaXRlbS50byA/IHN0eWxlcy5hY3RpdmUgOiBcIlwiXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLnRvfT57aXRlbS50ZXh0fTwvTGluaz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yaWdodFNlY3Rpb259PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy51c2VyTWFpbH0+XHJcbiAgICAgICAgICAgIHtzdGF0dXMgPT09IFwic3VjY2Vzc1wiICYmIGRhdGEgPyAoXHJcbiAgICAgICAgICAgICAgPHA+e2RhdGEuZW1haWx9PC9wPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAge2lzTG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgICA/IFwiTG9hZGluZy4uLlwiXHJcbiAgICAgICAgICAgICAgICAgIDogaXNFcnJvclxyXG4gICAgICAgICAgICAgICAgICA/IFwiQW4gZXJyb3IgaGFzIG9jY3VycmVkIHdoaWxlIGxvZ2dpbmcgaW46IFwiICsgZXJyb3JcclxuICAgICAgICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9IG9uQ2xpY2s9e2hhbmRsZUF2YXRhckNsaWNrfT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17VXNlcn0gYWx0PVwiQXZhdGFyXCIgd2lkdGg9ezB9IGhlaWdodD17MH0gLz5cclxuICAgICAgICAgICAgPERyb3Bkb3duIGlzT3Blbj17aXNNZW51T3Blbn0gbWVudUl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbmF2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIkxvZ28iLCJMaW5rIiwiVXNlciIsIkRyb3Bkb3duIiwidXNlUHJvZmlsZSIsInVzZVBhdGhuYW1lIiwiaXRlbXMiLCJpY29uIiwibGluayIsInRleHQiLCJtZW51SXRlbXMiLCJ0byIsIk5hdmJhciIsImlzTWVudU9wZW4iLCJzZXRJc01lbnVPcGVuIiwicGF0aG5hbWUiLCJjbG9zZURyb3Bkb3duIiwiZGF0YSIsImlzTG9hZGluZyIsImVycm9yIiwiaXNFcnJvciIsInN0YXR1cyIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQXZhdGFyQ2xpY2siLCJldmVudCIsInN0b3BQcm9wYWdhdGlvbiIsIm5hdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImRpdiIsIm5hdmJhciIsImxlZnRTZWN0aW9uIiwibG9nbyIsIm9uQ2xpY2siLCJyb3V0ZXIiLCJwdXNoIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJ1bCIsIm1lbnUiLCJtYXAiLCJpdGVtIiwibGkiLCJhY3RpdmUiLCJocmVmIiwicmlnaHRTZWN0aW9uIiwidXNlck1haWwiLCJwIiwiZW1haWwiLCJhdmF0YXIiLCJpc09wZW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/_components/navbar/index.tsx\n"));

/***/ })

});