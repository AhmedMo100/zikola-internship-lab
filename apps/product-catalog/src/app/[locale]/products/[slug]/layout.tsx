/**
 * @file layout.tsx
 * @description Server-side layout boundary providing dynamic runtime metadata for specific product slug profiles.
 */

import { Metadata } from "next";
import React from "react";

interface SingleProductLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string; slug: string }>;
}

/**
 * ─── DYNAMIC SINGLE PRODUCT METADATA GENERATOR ───
 * Interacts with the backend API core to pull the dynamic title, description, and image assets
 * ensuring rich embedded previews on WhatsApp, Instagram, and LinkedIn hooks.
 */
export async function generateMetadata({ params }: SingleProductLayoutProps): Promise<Metadata> {
    const { locale, slug } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zikola-internship-lab.vercel.app";

    try {
        // Standard absolute pipeline lookup path to prevent dynamic server resolution drops
        const response = await fetch(`${baseUrl}/api/products/${slug}?locale=${locale}`);
        if (!response.ok) throw new Error();

        const jsonResult = await response.json();
        const product = jsonResult?.data;

        if (!product) return {};

        return {
            title: `${product.title} | Zikola`,
            description: product.description,
            metadataBase: new URL(baseUrl),
            openGraph: {
                title: product.title,
                description: product.description,
                url: `${baseUrl}/${locale}/products/${slug}`,
                type: "article", // Tailored specific semantic indexing strategy
                locale: locale === "ar" ? "ar_EG" : "en_US",
                images: [
                    {
                        url: product.image, // 📸 Dynamic image asset bound strictly to the target product frame
                        width: 1200,
                        height: 630,
                        alt: product.title,
                    },
                ],
            },
            twitter: {
                card: "summary_large_image",
                title: product.title,
                description: product.description,
                images: [product.image],
            },
        };
    } catch {
        // Graceful semantic fallback logic in case of upstream tracking failures
        return {
            title: "Product Specifications | Zikola Lab",
        };
    }
}

export default function SingleProductLayout({ children }: SingleProductLayoutProps) {
    return <>{children}</>;
}