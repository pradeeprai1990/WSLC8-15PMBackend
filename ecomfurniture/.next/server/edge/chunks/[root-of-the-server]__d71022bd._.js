(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["chunks/[root-of-the-server]__d71022bd._.js",
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/src/middleware.js [middleware-edge] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "config",
    ()=>config,
    "middleware",
    ()=>middleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$esm$2f$api$2f$server$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/next/dist/esm/api/server.js [middleware-edge] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/next/dist/esm/server/web/exports/index.js [middleware-edge] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/New folder/19-04-2025/New folder (7)/backend/ecom/client/ecomfurniture/node_modules/js-cookie/dist/js.cookie.mjs [middleware-edge] (ecmascript)");
;
;
function middleware(request) {
    if (!request.cookies.get('USER')) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/login', request.url));
    } else {
        if (request.nextUrl.pathname.startsWith('/login')) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].redirect(new URL('/my-dashboard', request.url));
        }
    }
    // Perform logic here
    // For example, redirecting based on a condition
    //   if (request.nextUrl.pathname.startsWith('/old-path')) {
    //     return NextResponse.redirect(new URL('/new-path', request.url));
    //   }
    // Continue to the next handler if no action is taken
    return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$New__folder$2f$19$2d$04$2d$2025$2f$New__folder__$28$7$292f$backend$2f$ecom$2f$client$2f$ecomfurniture$2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$web$2f$exports$2f$index$2e$js__$5b$middleware$2d$edge$5d$__$28$ecmascript$29$__["NextResponse"].next();
}
const config = {
    matcher: [
        '/my-dashboard',
        '/wishlist'
    ]
};
}),
]);

//# sourceMappingURL=%5Broot-of-the-server%5D__d71022bd._.js.map