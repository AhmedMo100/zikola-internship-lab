/**
 * @file-preview Next-intl request configuration loader with strict TypeScript locale type validation.
 */

import { getRequestConfig } from 'next-intl/server';

/**
 * Loads the corresponding JSON language dictionary file based on the parsed locale segment.
 * Includes a fallback logic layer to satisfy strict string type declarations.
 */
export default getRequestConfig(async ({ requestLocale }) => {
    // Await and resolve the request locale parameter
    const resolvedLocale = await requestLocale;

    // Enforce a safe fallback string if the parsed locale turns out undefined
    const locale = resolvedLocale || 'en';

    return {
        locale,
        messages: (await import(`../messages/${locale}.json`)).default
    };
});