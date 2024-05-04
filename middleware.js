import { NextResponse } from 'next/server'
import fetcher from '@utils/fetcher'

export async function middleware(request) {
    if (request.nextUrl.pathname.startsWith('/api') || request.nextUrl.pathname.startsWith('/connect') || request.nextUrl.pathname.startsWith('/claimed') || request.nextUrl.pathname.startsWith('/_next') || request.nextUrl.pathname.startsWith('/favicon.ico') || request.nextUrl.pathname.startsWith('/manifest.json') || request.nextUrl.pathname.startsWith('/service-worker.js') || request.nextUrl.pathname.startsWith('/robots.txt') || request.nextUrl.pathname.startsWith('/sitemap.xml')) {
        return NextResponse.next()
    } else {
        console.log("PAGE REQUEST ", request.nextUrl)
        const { pathname } = request.nextUrl
        // remove trailing slash
        if (pathname !== '/' && pathname.startsWith('/')) {
            let newPath = pathname.slice(1)
            const usernameRes = await fetcher("http://localhost:3000/api/links/get-username", {
                username: newPath
            })
            let usernameData = await usernameRes?.data
            if (usernameData?.link?.url?.length > 0 && usernameData?.link?.url !== null && usernameData?.link?.url !== undefined && usernameData?.link?.url !== "" && !usernameData?.link?.url?.includes("linklee.app/")) {
                return NextResponse.redirect(new URL(usernameData?.link?.url))
            } else {
                return NextResponse.next()
            }
        }
        return NextResponse.next()
    }
}