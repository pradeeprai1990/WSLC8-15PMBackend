  import { NextResponse } from 'next/server';
  import Cookies from "js-cookie"
  export function middleware(request) {

       if( ! request.cookies.get('USER') ){
       
            return NextResponse.redirect(new URL('/login', request.url));
       }

       else{
            if (request.nextUrl.pathname.startsWith('/login')) {
                 return NextResponse.redirect(new URL('/my-dashboard', request.url));
            } 
       }
      // Perform logic here
      // For example, redirecting based on a condition
    //   if (request.nextUrl.pathname.startsWith('/old-path')) {
    //     return NextResponse.redirect(new URL('/new-path', request.url));
    //   }

      // Continue to the next handler if no action is taken
      return NextResponse.next();
    }

     export const config = {
      matcher: ['/my-dashboard','/wishlist'], // Apply middleware to /dashboard and /admin routes
    };