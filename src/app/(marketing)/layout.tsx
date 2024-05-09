import * as React from "react";

import Footer from "~/components/layouts/footer";
import Navbar from "~/components/layouts/navbar";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <React.Fragment>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </React.Fragment>
  );
}
