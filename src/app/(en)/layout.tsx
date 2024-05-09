import * as React from "react";

import MarketingLayout from "~/components/layouts/marketing-layout";

interface EnLayoutProps {
  children: React.ReactNode;
}

export default function EnLayout({ children }: EnLayoutProps) {
  return <MarketingLayout locale="en">{children}</MarketingLayout>;
}
