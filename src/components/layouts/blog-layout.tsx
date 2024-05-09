import React from "react";

import { type Locale } from "~/lib/translation";

interface BlogLayoutProps extends React.PropsWithChildren {
  locale?: Locale;
}

export default function BlogLayout({ children }: BlogLayoutProps) {
  return (
    <div className="mx-4 mb-40 mt-8 flex max-w-2xl flex-col antialiased md:flex-row lg:mx-auto">
      {children}
    </div>
  );
}
