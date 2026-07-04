/**
 * @file-preview Core root layout establishing the foundational HTML and body context required by Next.js.
 */

import React from "react";
import "./globals.css";

export interface GlobalRootLayoutProps {
  /** The nested localized views and layout segments to safely inject */
  children: React.ReactNode;
}

/**
 * Global entry wrapper satisfying strict framework layout compilation.
 * * @param {GlobalRootLayoutProps} props - The component property arguments.
 * @returns {React.JSX.Element} The baseline document scaffolding node tree.
 */
export default function GlobalRootLayout({ children }: GlobalRootLayoutProps) {
  return (
    <html>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}