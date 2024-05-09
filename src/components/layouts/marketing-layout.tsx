import * as React from "react";

import { type Locale } from "~/lib/translation";
import Footer from "~/components/layouts/footer";
import Navbar from "~/components/layouts/navbar";

interface MarketingLayoutProps {
  locale?: Locale;
  children: React.ReactNode;
}

export default function MarketingLayout({
  children,
  locale = "en",
}: MarketingLayoutProps) {
  return (
    <React.Fragment>
      <Navbar locale={locale} />
      <main className="mx-4 mb-40 mt-8 flex max-w-2xl flex-1 flex-col antialiased md:flex-row lg:mx-auto">
        {children}
      </main>
      <Footer locale={locale} />
    </React.Fragment>
  );
}
