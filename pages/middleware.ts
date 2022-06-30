import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  console.log('Middleware called with', request);
  if (request.nextUrl.pathname.startsWith('about')) {
    return NextResponse.redirect(new URL('/redirected'));
  }
  return NextResponse.next();
}
