"use client";

import * as React from "react";

import { APP_ENV } from "~/lib/constants";
import ThemeProvider from "~/components/providers/theme-provider";
import TailwindIndicator from "~/components/tailwind-indicator";
import { TopProgressBar } from "~/components/top-progress-bar";

interface MainProviderProps {
  children: React.ReactNode;
}

export default function MainProvider({ children }: MainProviderProps) {
  return (
    <ThemeProvider
      attribute="class"
      enableSystem={true}
      defaultTheme="system"
      disableTransitionOnChange={true}
    >
      {children}
      <React.Suspense>
        <TopProgressBar
          showOnShallow={false}
          options={{ showSpinner: false }}
        />
      </React.Suspense>
      {APP_ENV === "production" ? null : <TailwindIndicator />}
    </ThemeProvider>
  );
}
