import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Test: Inject a header that the Page can read
  response.headers.set('x-middleware-injected', 'true');

  // Test: Protection Logic
  // Visiting /admin without ?token=123 should redirect to /
  if (request.nextUrl.pathname.startsWith('/admin')) {
    if (request.nextUrl.searchParams.get('token') !== '123') {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};