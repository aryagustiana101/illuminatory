import * as React from "react";

import MarketingLayout from "~/components/layouts/marketing-layout";

interface MarketingEnLayoutProps {
  children: React.ReactNode;
}

export default function MarketingEnLayoutProps({
  children,
}: MarketingEnLayoutProps) {
  return <MarketingLayout locale="en">{children}</MarketingLayout>;
}
