import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const locales = ['en', 'it']
const defaultLocale = 'en'

function getLocale(request: NextRequest) {
  const acceptLanguage = request.headers.get('accept-language')
  if (!acceptLanguage) return defaultLocale
  
  if (acceptLanguage.toLowerCase().includes('it')) {
    return 'it'
  }
  return 'en'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl
  
  // Exclude static files, images, api, etc.
  if (
    pathname.startsWith('/_next') ||
    pathname.includes('/api/') ||
    pathname.match(/\.(.*)$/)
  ) {
    return
  }

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect if there is no locale
  const locale = getLocale(request)
  request.nextUrl.pathname = `/${locale}${pathname}`
  
  // e.g. redirect to /en/ or /it/
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    '/((?!_next|api|favicon.ico).*)',
  ],
}
