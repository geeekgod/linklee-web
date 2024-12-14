import { NextResponse } from "next/server";

async function nativeFetch(url, payload) {
  const req = await fetch(url, {
    body: JSON.stringify(payload),
    headers: { "Content-Type": "application/json" },
    method: "POST",
  });
  let data = await req.json();

  return data;
}

const appendHttpsIfNotPresent = (url) => {
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    return `https://${url}`;
  }
  return url;
};

export async function middleware(request) {
  if (matcher.includes(request.nextUrl.pathname)) return NextResponse.next();
  const { pathname } = request.nextUrl;
  // remove trailing slash
  if (pathname !== "/" && pathname.startsWith("/")) {
    let newPath = pathname.slice(1);
    const apiUrl = process.env.NEXT_PUBLIC_APP_URL;
    const usernameRes = await nativeFetch(`${apiUrl}/api/links/get-username`, {
      username: newPath,
    });
    let usernameData = usernameRes?.data;
    if (!usernameData?.link?.url) return NextResponse.next();
    // Skip if the app is in production and the url is not from linklee.xyz
    if (
      process.env.NEXT_PUBLIC_APP_ENV === "prod" &&
      !usernameData?.link?.url?.includes("linklee.xyz/")
    )
      return NextResponse.next();
    const redirectUrl =
      process.env.NEXT_PUBLIC_APP_ENV === "prod"
        ? new URL(appendHttpsIfNotPresent(usernameData?.link?.url))
        : new URL(usernameData?.link?.url);
    return NextResponse.redirect(redirectUrl);
  }
  return NextResponse.next();
}

const matcher = [
  "/api",
  "/connect",
  "/claimed",
  "/_next",
  "/favicon.ico",
  "/manifest.json",
  "/service-worker.js",
  "/robots.txt",
  "/sitemap.xml",
  "/og-image",
];
