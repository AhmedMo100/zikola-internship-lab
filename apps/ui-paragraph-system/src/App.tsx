import { Header, Hero, Footer } from "@zikola/ui";
import { Paragraph } from "./components/ui/paragraph";

/**
 * Main Application Root Component.
 * Implements the atomic brand design system layout.
 */
function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900">

      {/* ─── HEADER NAVIGATION ─── */}
      <Header>
        {/* Brand Label: Centered, minimal typography matching the official logo identity */}
        <span className="text- font-bold text-brand-orange uppercase tracking-widest">
          zikola internship lab
        </span>
      </Header>

      {/* ─── MAIN CONTENT AREA ─── */}
      <main className="flex-1">
        <Hero className="bg-black text-white py-24 px-6 rounded-b-2xl shadow-xl border border-orange-400/20">
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">

            {/* 1. Task Number Identifier (Massive Typography) */}
            <span className="text-7xl font-black tracking-tighter block mb-2 drop-shadow-md selection:bg-white selection:text-brand-orange">
              01
            </span>

            {/* 2. Task Name / Title */}
            <Hero.Title className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4 drop-shadow-sm text-brand-orange bg-clip-text">
              Typography & Paragraph Design System
            </Hero.Title>

            {/* 3. Task Description */}
            <Hero.Description className="text-base md:text-lg text-gray-50/80 max-w-3xl font-medium leading-relaxed">
              A highly scalable and reusable atomic typography system engineered within a Monorepo workspace architecture.
              This component leverages Class Variance Authority (CVA) to seamlessly manage dynamic font sizes, weights,
              and leading behaviors, fully compiled under Tailwind CSS v4 and strictly typed using TypeScript for ultimate design token integrity.
            </Hero.Description>

          </div>
        </Hero>

        {/* ─── PARAGRAPH COMPONENT DEMO SHOWCASE ─── */}
        {/* Expanded workspace container to take over 70%+ screen bounds for professional horizontal flow */}
        <section className="max-w-6xl mx-auto py-16 px-8 flex flex-col gap-12 bg-white">
          
          {/* Section 1: Dynamic Component Variants */}
          {/* 💡 Clean implementation: Colors are strictly handled by CVA variants without utility duplication */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-8 w-full">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">1. System Design Variants</h2>
            <Paragraph variant="default" className="w-full">
              <strong>Default Layout:</strong> This baseline typography standard is highly optimized for generic enterprise-level data layout reading environments, maximizing sentence structure consistency across global viewport spans.
            </Paragraph>
            <Paragraph variant="success" className="w-full">
              <strong>Success Token:</strong> Formally executed to map operational execution success boundaries, validating persistent system transactions, and highlighting accurate infrastructure deployment metrics safely.
            </Paragraph>
            <Paragraph variant="warning" className="w-full">
              <strong>Warning Token:</strong> Handles intermediate structural visual telemetry context notifications, alerting data engineers regarding non-blocking layout overlaps or required workspace configurations.
            </Paragraph>
            <Paragraph variant="error" className="w-full">
              <strong>Error Token:</strong> Built specifically to interrupt sequential viewport tracing, establishing clear error diagnostic footprints and highlighting unmitigated exceptions across localized workspaces.
            </Paragraph>
          </div>

          {/* Section 2: Fluid Typography Sizes */}
          {/* 💡 Clean implementation: Sizes are driven entirely by the component tokens inheriting the default slate color */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-8 w-full">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">2. Fluid Scale Sizing Matrix</h2>
            <Paragraph size="sm" className="w-full">
              <strong>Small Scale (sm):</strong> Targeted towards infrastructure logs, minor documentation metadata properties, localized contextual sub-labels, or globally embedded footer layout credentials.
            </Paragraph>
            <Paragraph size="md" className="w-full">
              <strong>Medium Scale (md):</strong> Serving as the main configuration baseline standard for continuous dashboard tracking, maximizing readable inline paragraph lengths across variable grid containers.
            </Paragraph>
            <Paragraph size="lg" className="w-full">
              <strong>Large Scale (lg):</strong> Reserved for feature documentation abstracts, introductory contextual landing pitches, secondary component descriptors, or standalone descriptive design statements.
            </Paragraph>
            <Paragraph size="xl" className="w-full">
              <strong>Extra Large Scale (xl):</strong> Deployed inside prominent layout emphasis bounds where textual hierarchy requires distinct architectural visibility over typical layout tokens.
            </Paragraph>
            <Paragraph size="2xl" className="w-full">
              <strong>Double Extra Large Scale (2xl):</strong> Represents the ultimate typographic boundary ceiling for paragraph layout contexts, ideal for maximum structural weight focus areas.
            </Paragraph>
          </div>

          {/* Section 3: Safe Custom Tailored Class Overrides */}
          {/* 💡 Testing utility extension: Appending only layout modifications safely via twMerge */}
          <div className="flex flex-col gap-4 border-b border-gray-100 pb-8 w-full">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">3. Style Customization Boundaries</h2>
            <Paragraph className="font-bold underline tracking-wider uppercase w-full text-orange-700">
              <strong>Tailwind Mixin Test:</strong> Confirming our inline design engine integration by merging native library variance parameters alongside custom brand design utility tokens smoothly without core class collisions.
            </Paragraph>
          </div>

          {/* Section 4: Advanced Polymorphic Mapping (asChild) */}
          {/* 💡 Polymorphic composition: CVA variants style the underlying native span element perfectly */}
          <div className="flex flex-col gap-4 w-full">
            <h2 className="text-xl font-bold tracking-tight text-slate-900 mb-2">4. Polymorphic Element Interfacing (asChild)</h2>
            <Paragraph asChild variant="success" size="lg" className="w-full">
              <span className="font-semibold block italic bg-emerald-50/50 p-5 rounded-xl border-2 border-emerald-800 leading-relaxed">
                <strong>Polymorphic Context Hook:</strong> Executing atomic composition rules to convert a semantic root paragraph element directly into a native inline span element while keeping system tokens fully preserved.
              </span>
            </Paragraph>
          </div>

        </section>
      </main>

      {/* ─── GLOBAL FOOTER ─── */}
      <Footer>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 max-w-7xl mx-auto w-full">
          <p className="text-white"><span className="text-brand-orange text-lg"></span>🧡 Craeted by Ahmed Tarek 🧡</p>
        </div>
      </Footer>

    </div>
  );
}

export default App;