/**
 * @file-preview Routing middleware routing rules for multi-lingual sub-path matching.
 */

import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    // Supported locale identifiers
    locales: ['en', 'ar'],
    // Default fallback when no locale segment is supplied
    defaultLocale: 'en'
});

export const config = {
    // Pattern matcher to intercept only localized page entries and skip assets
    matcher: ['/', '/(ar|en)/:path*']
};