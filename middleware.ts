import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // Define valid routes - add your actual routes here
  const validRoutes = [
    '/',
    '/feed.xml',
    '/robots.txt',
    '/sitemap.xml'
  ]

  // Check if the current path is a valid route
  // For dynamic routes or if you have many routes, you might want to 
  // implement a more sophisticated check
  const isValidRoute = validRoutes.includes(pathname) || 
                      pathname.startsWith('/api/') ||
                      pathname.startsWith('/_next/') ||
                      pathname.includes('.')

  // If route is not valid, redirect to home
  if (!isValidRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)  
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js)$).*)',
  ],
}