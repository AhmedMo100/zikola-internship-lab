/**
 * @file-preview Localized workspace layout component establishing next-intl server-side translation dictionaries, global query providers, and shared navigation.
 */

import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { Header, Footer } from "@zikola/ui";
import QueryProvider from "@/providers/QueryProvider";
import "@/app/globals.css";

export interface LocalizedLayoutProps {
    /** The nested localized page content or active child routes to safely render */
    children: React.ReactNode;
    /** Asynchronous layout segment parameters containing the current locale runtime */
    params: Promise<{ locale: string }>;
}

/**
 * Global localized layout shell for managing systemic document language parameters.
 * Automatically distributes typography rules, async caching context providers, and navigation hooks across viewports.
 * * @param {LocalizedLayoutProps} props - The component property arguments.
 * @returns {Promise<React.JSX.Element>} The asynchronous document structure markup tree.
 */
export default async function LocalizedLayout({ children, params }: LocalizedLayoutProps) {
    const { locale } = await params;
    const isRtl = locale === "ar";

    // Fetch server-side translations asynchronously without breaking hook rules
    const t = await getTranslations("Navigation");
    const targetLocale = isRtl ? "en" : "ar";

    return (
        <div
            className="min-h-screen flex flex-col bg-white text-gray-900"
            lang={locale}
            dir={isRtl ? "rtl" : "ltr"}
        >

            {/* ─── HEADER NAVIGATION WITH INTEGRATED LANGUAGE TOGGLE ─── */}
            <Header className="sticky top-0 z-50 py-6 border-b border-gray-100">
                <div className="w-full max-w-7xl mx-auto flex items-center justify-between px-4">

                    {/* 1. Dynamic Localized Brand Identity */}
                    <span className="text-lg font-bold text-brand-orange uppercase tracking-widest">
                        {t("brand")}
                    </span>

                    {/* 2. Language Switcher Trigger Routing */}
                    <Link
                        href={`/${targetLocale}`}
                        className="px-4 py-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-black border border-gray-200 text-white hover:bg-brand-dark hover:text-brand-orange transition-all shadow-sm"
                    >
                        {t("toggle")}
                    </Link>

                </div>
            </Header>

            {/* ─── GLOBAL CLIENT ASYNC STATE PROVIDER BUFFER ─── */}
            <QueryProvider>
                {/* ─── DYNAMIC CONTENT BUFFER ─── */}
                <main className="flex-1 flex flex-col w-full">
                    {children}
                </main>
            </QueryProvider>

            {/* ─── GLOBAL FOOTER ─── */}
            <Footer className="py-8 bg-brand-dark text-white border-t border-brand-border mt-auto">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-7xl mx-auto w-full">
                    <p className="text-white font-medium">
                        {isRtl ? "🧡 تم التطوير بواسطة أحمد طارق 🧡" : "🧡 Created by Ahmed Tarek 🧡"}
                    </p>
                </div>
            </Footer>

        </div>
    );
}