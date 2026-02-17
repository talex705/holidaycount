import { NextResponse, type NextRequest } from 'next/server';

/** Locales that use the /[locale]/ prefix */
const SUPPORTED_LOCALES = new Set(['fr', 'es']);

/** Legacy URL redirects: old slug → new country/holiday path */
const LEGACY_REDIRECTS: Record<string, string> = {
  '/christmas': '/united-states/christmas',
  '/thanksgiving': '/united-states/thanksgiving',
  '/easter': '/united-states/easter',
  '/canada-day': '/canada/canada-day',
  '/independence-day': '/united-states/independence-day',
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip static files, API routes, Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') // static files like .ico, .png, .js
  ) {
    return NextResponse.next();
  }

  // Legacy URL redirects (301)
  const legacyTarget = LEGACY_REDIRECTS[pathname];
  if (legacyTarget) {
    const url = request.nextUrl.clone();
    url.pathname = legacyTarget;
    return NextResponse.redirect(url, 301);
  }

  // Validate [locale] segment — only fr and es are valid
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length > 0) {
    const firstSegment = segments[0];
    // If the first segment looks like it could be a locale but isn't supported,
    // and it's exactly 2 characters, it might be a bad locale attempt
    if (
      firstSegment.length === 2 &&
      !SUPPORTED_LOCALES.has(firstSegment) &&
      firstSegment !== 'en' // 'en' is handled by (en) route group, no prefix
    ) {
      // Don't redirect — it might be a valid country slug like 'uk'
      // Let it fall through to Next.js routing
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (browser icon)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
