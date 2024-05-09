import * as React from "react";

import MarketingLayout from "~/components/layouts/marketing-layout";

interface IdLayoutProps {
  children: React.ReactNode;
}

export default function IdLayout({ children }: IdLayoutProps) {
  return <MarketingLayout locale="id">{children}</MarketingLayout>;
}
