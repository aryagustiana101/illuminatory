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
      <main className="flex-1">{children}</main>
      <Footer locale={locale} />
    </React.Fragment>
  );
}
