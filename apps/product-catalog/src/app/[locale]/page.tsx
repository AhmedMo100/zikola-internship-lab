/**
 * @file-preview Primary landing homepage leveraging strict next-intl server translation dictionaries to support deep multi-lingual rendering.
 */

import React from "react";
import Link from "next/link";
import { getTranslations } from "next-intl/server"; // IMPORT FROM /server
import { Hero } from "@zikola/ui";

interface HomePageProps {
  /** Asynchronous route parameters provided automatically by Next.js dynamic language segment */
  params: Promise<{ locale: string }>;
}

/**
 * Automated landing page structure parsing architectural metadata.
 * Renders core layout sections alongside direct commercial product route boundaries.
 * * @param {HomePageProps} props - The structural layout properties containing the async params.
 * @returns {Promise<React.JSX.Element>} The asynchronous marketplace portal landing framework.
 */
export default async function HomePage({ params }: HomePageProps) {
  // Resolve both the locale parameters and server-side dictionary lookup asynchronously
  const { locale } = await params;
  const t = await getTranslations("HomePage");

  return (
    <div className="w-full flex-1 flex flex-col bg-white">

      {/* ─── MAIN HERO AREA ─── */}
      <Hero className="bg-brand-dark text-white py-24 px-6 rounded-b-2xl shadow-xl border border-brand-orange/20">
        <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

          {/* 1. Task Structural Metric Identifier */}
          <span className="text-7xl font-black tracking-tighter block mb-2 drop-shadow-md selection:bg-white selection:text-brand-orange">
            02
          </span>

          {/* 2. Highly Fluid Localized Design Title */}
          <Hero.Title className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 drop-shadow-sm text-brand-orange bg-clip-text">
            {t("title")}
          </Hero.Title>

          {/* 3. Deep Architectural Product Abstract Description */}
          <Hero.Description className="text-base md:text-lg text-gray-300 max-w-3xl font-medium leading-relaxed">
            {t("description")}
          </Hero.Description>

        </div>
      </Hero>

      {/* ─── INTERMEDIATE SEAMLESS GATEWAY ROUTING SECTION ─── */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center flex flex-col items-center gap-6 bg-white">

        {/* Dynamic Subsection Header Label */}
        <h2 className="text-2xl font-black tracking-tight text-brand-dark md:text-3xl">
          {t("exploreTitle")}
        </h2>

        {/* Descriptive Direction Context */}
        <p className="text-base text-brand-muted max-w-xl font-medium leading-relaxed">
          {t("exploreDesc")}
        </p>

        {/* Action Link Button injecting the dynamically resolved active locale prefix */}
        <div className="mt-6">
          <Link
            href={`/${locale}/products`}
            className="inline-block bg-brand-gradient text-white font-extrabold text-sm tracking-widest uppercase px-10 py-4 rounded-xl shadow-lg hover:shadow-brand-orange/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            {t("button")}
          </Link>
        </div>

      </section>

    </div>
  );
}