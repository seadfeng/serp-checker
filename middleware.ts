import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";
import { appConfig } from "./config";

export default async function middleware(req: NextRequest) {

  const intlMiddleware = createMiddleware({
    locales: appConfig.i18n.locales,
    defaultLocale: appConfig.i18n.defaultLocale,
    localePrefix: "as-needed",
    alternateLinks: true
  });

  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
