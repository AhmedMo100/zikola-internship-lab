/**
 * @file layout.tsx
 * @description Server-side layout boundary injecting localized metadata for the products catalog route segment.
 */

import { Metadata } from "next";
import React from "react";

interface ProductsLayoutProps {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}

/**
 * ─── PRODUCTS CATALOG METADATA GENERATOR ───
 * Generates semantic preview tags for the entire catalog list view based on active route locale.
 */
export async function generateMetadata({ params }: ProductsLayoutProps): Promise<Metadata> {
    const { locale } = await params;

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://zikola-internship-lab.vercel.app";

    // Localized string variables mirroring your page branding setup
    const title = locale === "ar" ? "متجر المنتجات الذكي | زيكولا" : "Smart Products Store | Zikola";
    const description = locale === "ar"
        ? "تصفح أحدث الأجهزة والمستلزمات المكتبية المجهزة بعناية فائقة من معمل زيكولا."
        : "Explore premium hardware and office ergonomics engineered for performance within Zikola Lab.";

    return {
        title,
        description,
        metadataBase: new URL(baseUrl),
        openGraph: {
            title,
            description,
            url: `${baseUrl}/${locale}/products`,
            siteName: "Zikola DentalOps",
            type: "website",
            locale: locale === "ar" ? "ar_EG" : "en_US",
            images: [
                {
                    url: "/images/og-products-catalog.jpg", // You can put a custom cover representing your shop grid here
                    width: 1200,
                    height: 630,
                    alt: "Zikola Products Grid Catalog Cover",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/images/og-products-catalog.jpg"],
        },
    };
}

export default function ProductsLayout({ children }: ProductsLayoutProps) {
    return <>{children}</>;
}