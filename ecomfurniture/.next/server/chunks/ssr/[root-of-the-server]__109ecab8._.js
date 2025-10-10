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
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Register
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Register() {
    let apiBaseurl = ("TURBOPACK compile-time value", "http://localhost:8000/web/");
    let [userData, setUserData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        userName: '',
        userEmail: '',
        userPhone: '',
        userPassword: '',
        otp: ''
    });
    let [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    let [otpForm, setOtpForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    let saveRegistartion = (e)=>{
        e.preventDefault();
        console.log(userData);
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 flex items-center justify-center min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white shadow-lg rounded-lg p-8 max-w-xs md:max-w-md w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    id: "login-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-2xl font-bold text-center text-gray-800 mb-6",
                            children: "Sign Up"
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                            lineNumber: 45,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("center", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "w-[200px] py-2",
                                src: "https://wscubetech.co/Assignments/furniture/storage/app/public/uploads/images/company-profile/logo/cccfbdab-3bec-439f-88b9-5694698cd302-1670132652.png",
                                alt: ""
                            }, void 0, false, {
                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                lineNumber: 47,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                            lineNumber: 46,
                            columnNumber: 25
                        }, this),
                        form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: saveRegistartion,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: userData.userName,
                                    onChange: getValueorSetValue,
                                    name: "userName",
                                    type: "text",
                                    placeholder: "Name",
                                    className: "w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 52,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: userData.userEmail,
                                    onChange: getValueorSetValue,
                                    name: "userEmail",
                                    type: "email",
                                    placeholder: "Email",
                                    className: "w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 55,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: userData.userPhone,
                                    onChange: getValueorSetValue,
                                    name: "userPhone",
                                    type: "number",
                                    placeholder: "Phone",
                                    className: "w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 58,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: userData.userPassword,
                                    onChange: getValueorSetValue,
                                    name: "userPassword",
                                    type: "password",
                                    placeholder: "Password",
                                    className: "w-full mb-6 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 61,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-purple-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200 cursor-pointer",
                                    children: "Sign Up"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 63,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "my-2 flex gap-1 justify-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-red-600 text-white p-1 rounded cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGoogle"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                                lineNumber: 67,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                            lineNumber: 66,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-blue-600 text-white p-1 rounded cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaFacebook"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                                lineNumber: 70,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                            lineNumber: 69,
                                            columnNumber: 38
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "bg-black text-white p-1 rounded cursor-pointer",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {}, void 0, false, {
                                                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                                lineNumber: 73,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                            lineNumber: 72,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 65,
                                    columnNumber: 34
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-600 mt-6",
                                    children: [
                                        "Don’t have an account? ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: '/login',
                                            className: "text-purple-500 hover:underline",
                                            children: "Log In"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                            lineNumber: 78,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 77,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                            lineNumber: 51,
                            columnNumber: 29
                        }, this),
                        otpForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "otp",
                                    value: userData.otp,
                                    onChange: getValueorSetValue,
                                    type: "number",
                                    placeholder: "Enter OTP",
                                    className: "w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 86,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-green-500 text-white py-2 md:py-3 rounded-lg font-semibold hover:bg-purple-600 transition duration-200",
                                    children: "Verify OTP"
                                }, void 0, false, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 88,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-600 mt-6",
                                    children: [
                                        "Don’t have an account? ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$furniture$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            href: '/login',
                                            className: "text-purple-500 hover:underline",
                                            children: "Log In"
                                        }, void 0, false, {
                                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                            lineNumber: 91,
                                            columnNumber: 60
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                                    lineNumber: 90,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                            lineNumber: 85,
                            columnNumber: 29
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                    lineNumber: 44,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/furniture/src/app/(withoutHeadFoot)/register/Register.jsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__109ecab8._.js.map