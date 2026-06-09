import { Header, Hero, Footer } from "@zikola/ui";

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