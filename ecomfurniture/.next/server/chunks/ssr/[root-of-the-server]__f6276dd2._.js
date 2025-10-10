module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/slice/counterSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "counterDecrement",
    ()=>counterDecrement,
    "counterIncrement",
    ()=>counterIncrement,
    "counterSlice",
    ()=>counterSlice,
    "default",
    ()=>__TURBOPACK__default__export__
]);
const { createSlice } = __turbopack_context__.r("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript)");
let counterSlice = createSlice({
    name: "counter",
    initialState: {
        count: 1
    },
    reducers: {
        counterIncrement: function(state, reqData) {
            state.count += 1;
        },
        counterDecrement: function(state) {
            state.count -= 1;
        }
    }
});
const __TURBOPACK__default__export__ = counterSlice.reducer;
const { counterIncrement, counterDecrement } = counterSlice.actions;
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-icons/fa6/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-icons/io/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$counterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/slice/counterSlice.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function Header() {
    let [menu, setMenu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    let [cartDiv, setCartDiv] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let cart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((myStore)=>myStore.myCart.cart);
    let counter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((myStore)=>myStore.myCounter.count);
    let dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])() //Slice Method Call
    ;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `fixed top-0 right-0 h-full w-85 bg-white shadow-lg z-50 ${cartDiv ? '' : 'hidden'}`,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "p-4 font-bold py-7",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaShoppingCart"], {
                                        className: "text-[20px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 25,
                                        columnNumber: 48
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                    lineNumber: 25,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "p-4 font-bold",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[30px] cursor-pointer",
                                        onClick: ()=>setCartDiv(false),
                                        children: "×"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 26,
                                        columnNumber: 43
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                            lineNumber: 24,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("hr", {
                            className: "border border-[#eee]"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b-1 border-[#eee] py-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1320px] mx-auto text-[14px] flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Contact us 24/7 : +91-9234504642 / furnitureinfo@gmail.com",
                                    counter,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$counterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["counterIncrement"])()),
                                        className: "p-3 bg-fuchsia-500",
                                        children: "Add Counter"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 37,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 34,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: '/login',
                                        children: "Login"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 40,
                                        columnNumber: 18
                                    }, this),
                                    "   ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: '/register',
                                        children: "Register"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 40,
                                        columnNumber: 60
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 40,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                    lineNumber: 32,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "border-b-1 border-[#eee] p-3",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-[1320px] mx-auto text-[13px] flex justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "logo",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    href: '/',
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png",
                                        alt: ""
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "gap-3 flex justify-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        className: "border border-[#eee] w-[280px]"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 51,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "border border-[#eee] p-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaHeart"], {
                                            className: "text-[20px]"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 52,
                                            columnNumber: 57
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 52,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex justify-between gap-3 cursor-pointer",
                                        onClick: ()=>setCartDiv(true),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center border border-[#eee] p-2 gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa6$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaCartShopping"], {
                                                    className: "text-[20px]"
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 56,
                                                    columnNumber: 19
                                                }, this),
                                                cart.length,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-bold flex items-center gap-2 text-[13px]",
                                                    children: [
                                                        "Rs.0.00 ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-[15px]",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$io$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["IoIosArrowDown"], {}, void 0, false, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 58,
                                                                columnNumber: 120
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 58,
                                                            columnNumber: 90
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 58,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 55,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                        lineNumber: 54,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 50,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "bg-white border-gray-200 dark:bg-gray-900",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap items-center justify-center max-w-screen-xl mx-auto p-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "data-collapse-toggle": "mega-menu",
                                    type: "button",
                                    className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                                    "aria-controls": "mega-menu",
                                    "aria-expanded": "false",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "sr-only",
                                            children: "Open main menu"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 71,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            "aria-hidden": "true",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 17 14",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                stroke: "currentColor",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M1 1h15M1 7h15M1 13h15"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 72,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                    lineNumber: 70,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                id: "mega-menu",
                                className: "items-center justify-between hidden w-full md:flex md:w-auto md:order-1",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                    className: "flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: '/login',
                                                className: "block py-2 px-3 text-blue-600 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-blue-500 md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700",
                                                "aria-current": "page",
                                                children: "Home"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 79,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onMouseOver: ()=>setMenu(1),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown-button",
                                                    "data-dropdown-toggle": "mega-menu-dropdown",
                                                    className: "flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700 transition-transform",
                                                    children: [
                                                        "Living ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-2.5 h-2.5 ms-3",
                                                            "aria-hidden": "true",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 10 6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "m1 1 4 4 4-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 85,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 84,
                                                            columnNumber: 28
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 83,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseOver: ()=>setMenu(1),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown",
                                                    className: `absolute z-10 ${menu == 1 ? '' : 'hidden'} grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 pb-0 text-gray-900 md:pb-4 dark:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                "aria-labelledby": "mega-menu-dropdown-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Tables"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 92,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 91,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Side And End Tables"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 97,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 96,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Nest of Tables"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 102,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Coffee Table Sets"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 107,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Coffee Table"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 112,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 90,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 89,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 pb-0 text-gray-900 md:pb-4 dark:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Living Storage"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 121,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 120,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Prayer Units"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 126,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 125,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Display unit"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 131,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 130,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Shoe Rack"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 136,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 135,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Chest of Drawers"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 141,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 140,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Cabinets and sideboard"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 146,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Book Shelves"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 151,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 150,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Tv Units"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 155,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 119,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 118,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Mirror"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 165,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 164,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Wooden Mirror"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 170,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 169,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 163,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 162,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 88,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 82,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onMouseOver: ()=>setMenu(2),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown-button",
                                                    "data-dropdown-toggle": "mega-menu-dropdown",
                                                    className: "flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700",
                                                    children: [
                                                        "Sofa ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-2.5 h-2.5 ms-3",
                                                            "aria-hidden": "true",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 10 6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "m1 1 4 4 4-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 182,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 181,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 180,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseOver: ()=>setMenu(2),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown",
                                                    className: `absolute z-10 ${menu == 2 ? '' : 'hidden'} grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 pb-0 text-gray-900 md:pb-4 dark:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                "aria-labelledby": "mega-menu-dropdown-button",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Sofa Cum Bed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 189,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 188,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Wooden Sofa Cum Bed"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 194,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 193,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 187,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 186,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4 pb-0 text-gray-900 md:pb-4 dark:text-white",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Sofa Sets"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 203,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 202,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "L Shape Sofa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 208,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 207,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "1 Seater Sofa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 213,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 212,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "2 Seater Sofa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 218,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 217,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "3 Seater Sofa"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 223,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 222,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Wooden Sofa Sets"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 228,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 227,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Normal"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 233,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 232,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "p-4",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "space-y-4",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 font-bold",
                                                                            children: "Swing Jhula"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 242,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 241,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                            href: '/product/126',
                                                                            className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                            children: "Wooden Jhula"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                            lineNumber: 247,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 246,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 240,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 239,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 185,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 179,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onMouseOver: ()=>setMenu(3),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown-button",
                                                    "data-dropdown-toggle": "mega-menu-dropdown",
                                                    className: "flex items-center justify-between w-full py-2 px-3 font-medium text-gray-900 border-b border-gray-100 md:w-auto hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700",
                                                    children: [
                                                        "Pages ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-2.5 h-2.5 ms-3",
                                                            "aria-hidden": "true",
                                                            xmlns: "http://www.w3.org/2000/svg",
                                                            fill: "none",
                                                            viewBox: "0 0 10 6",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                stroke: "currentColor",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: "2",
                                                                d: "m1 1 4 4 4-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                lineNumber: 259,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 258,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 257,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    onMouseOver: ()=>setMenu(3),
                                                    onMouseLeave: ()=>setMenu(0),
                                                    id: "mega-menu-dropdown",
                                                    className: `absolute z-10 ${menu == 3 ? '' : 'hidden'} grid w-auto grid-cols-2 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 md:grid-cols-3 dark:bg-gray-700`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-4 pb-0 text-gray-900 md:pb-4 dark:text-white",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "space-y-4",
                                                            "aria-labelledby": "mega-menu-dropdown-button",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                        children: "About Us"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 266,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                    lineNumber: 265,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                        children: "Cart"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 271,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                    lineNumber: 270,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                        children: "Checkout"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 276,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                    lineNumber: 275,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                        href: "#",
                                                                        className: "text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500",
                                                                        children: "Frequently Questions"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                        lineNumber: 281,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                                    lineNumber: 280,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                            lineNumber: 264,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                        lineNumber: 263,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                    lineNumber: 262,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 256,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700",
                                                children: "Team"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                lineNumber: 291,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 290,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                href: '/contact-us',
                                                className: "block py-2 px-3 text-gray-900 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700",
                                                children: "Contact"
                                            }, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                            lineNumber: 293,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/common/Header.jsx",
            lineNumber: 21,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/MainContext.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cartContext",
    ()=>cartContext,
    "default",
    ()=>MainContext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
let cartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])();
function MainContext({ children }) {
    let [cart, setCart] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    let obj = {
        cart,
        setCart
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let saveCart = localStorage.getItem("MONSTACART");
        if (saveCart) {
            setCart(JSON.parse(saveCart));
        }
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem("MONSTACART", JSON.stringify(cart));
    }, [
        cart
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(cartContext.Provider, {
        value: obj,
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/MainContext.jsx",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/slice/cartSlice.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addToCart",
    ()=>addToCart,
    "cartSlice",
    ()=>cartSlice,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCart",
    ()=>deleteCart
]);
const { createSlice } = __turbopack_context__.r("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript)");
let cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state, reqData)=>{
            let { payload } = reqData;
            state.cart.push(payload);
        },
        deleteCart: (state, reqData)=>{
            let { payload } = reqData //{ id:1 }
            ;
            let id = payload.id;
            state.cart = state.cart.filter((obj)=>obj.id != id);
        }
    }
});
const __TURBOPACK__default__export__ = cartSlice.reducer;
let { addToCart, deleteCart } = cartSlice.actions;
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/store/store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$counterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/slice/counterSlice.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$cartSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/slice/cartSlice.js [app-ssr] (ecmascript)");
;
;
;
let store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        myCounter: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$counterSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
        myCart: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$slice$2f$cartSlice$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    }
});
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/MainLayout.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/redux/store/store.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function MainLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$src$2f$app$2f$redux$2f$store$2f$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/MainLayout.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f6276dd2._.js.map