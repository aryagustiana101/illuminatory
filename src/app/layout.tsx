import "~/styles/globals.css";

import * as React from "react";
import { type Metadata } from "next";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { siteConfig } from "~/lib/config";
import { cn, fullUrl } from "~/lib/utils";
import MainProvider from "~/components/providers/main-provider";

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(fullUrl()),
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["business", "technology", "stock"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  manifest: fullUrl("/site.webmanifest"),
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          `bg-background min-h-screen font-sans antialiased`,
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
