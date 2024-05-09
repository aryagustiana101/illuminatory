import * as React from "react";

import { locales, type Locale } from "~/lib/translation";
import MarketingLayout from "~/components/layouts/marketing-layout";

interface MarketingLayoutProps extends React.PropsWithChildren {
  params: { lang: Locale };
  children: React.ReactNode;
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ lang: locale }));
}

export default function MarketingLayoutProps({
  children,
  params: { lang: locale },
}: MarketingLayoutProps) {
  return <MarketingLayout locale={locale}>{children}</MarketingLayout>;
}
