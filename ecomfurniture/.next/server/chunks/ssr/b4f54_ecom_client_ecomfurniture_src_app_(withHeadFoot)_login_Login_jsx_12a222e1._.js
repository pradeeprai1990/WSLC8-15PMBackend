module.exports = [
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Login() {
    let [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        userEmail: '',
        userPassword: ''
    });
    let apiBaseurl = ("TURBOPACK compile-time value", "http://localhost:8000/web/");
    let login = (e)=>{
        e.preventDefault();
        console.log(userData);
        axios.post(`${apiBaseurl}user/login`, userData).then((res)=>res.data).then((finalres)=>{
            if (finalres.status) {}
        });
    // setOtpForm(true)
    // setForm(false)
    };
    let getValueorSetValue = (e)=>{
        let obj = {
            ...userData
        };
        obj[e.target.name] = e.target.value;
        setUserData(obj);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "login-form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-xl md:text-2xl font-bold text-center text-gray-800 mb-6",
                        children: "Log In"
                    }, void 0, false, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                        lineNumber: 39,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("center", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            className: "w-[200px] py-2",
                            src: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png",
                            alt: ""
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                        lineNumber: 40,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: login,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                onChange: getValueorSetValue,
                                name: "userEmail",
                                placeholder: "Email",
                                className: "w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "password",
                                onChange: getValueorSetValue,
                                name: "userPassword",
                                placeholder: "Password",
                                className: "w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200",
                                children: "Log In"
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-center text-gray-600 mt-6",
                                children: [
                                    "Don’t have an account? ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: '/register',
                                        className: "text-purple-500 hover:underline",
                                        children: "Sign Up"
                                    }, void 0, false, {
                                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                                        lineNumber: 50,
                                        columnNumber: 52
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                                lineNumber: 49,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
                lineNumber: 38,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
            lineNumber: 37,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/app/(withHeadFoot)/login/Login.jsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=b4f54_ecom_client_ecomfurniture_src_app_%28withHeadFoot%29_login_Login_jsx_12a222e1._.js.map