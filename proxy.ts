import {
  NextRequest,
  NextResponse,
} from 'next/server';

export function proxy(
  request: NextRequest
) {
  const adminToken =
    request.cookies.get(
      'admin_token'
    )?.value;

  const userToken =
    request.cookies.get(
      'user_token'
    )?.value;

  const pathname =
    request.nextUrl.pathname;

  // ─── ADMIN ROUTES ─────────────────
  if (
    pathname.startsWith('/admin')
  ) {
    if (!adminToken) {
      return NextResponse.redirect(
        new URL('/login', request.url)
      );
    }
  }

  // ─── USER ROUTES ──────────────────
  if (
    pathname.startsWith('/dashboard')
  ) {
    if (!userToken) {
      return NextResponse.redirect(
        new URL('/login', request.url)
      );
    }
  }

  // ─── LOGIN PAGE ───────────────────
  if (pathname === '/login') {
    if (adminToken) {
      return NextResponse.redirect(
        new URL(
          '/admin/dashboard',
          request.url
        )
      );
    }

    if (userToken) {
      return NextResponse.redirect(
        new URL(
          '/dashboard',
          request.url
        )
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/dashboard/:path*',
    '/login',
  ],
};