import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { APP_GITHUB_REPO_URL } from "~/lib/constants";
import { __, type Locale } from "~/lib/translation";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { DesktopNavbar } from "~/components/layouts/desktop-navbar";
import MobileNavbar from "~/components/layouts/mobile-navbar";
import LocaleSwitcher from "~/components/locale-switcher";
import ThemeToggle from "~/components/theme-toggle";

interface NavbarProps {
  locale?: Locale;
}

export default function Navbar({ locale = "en" }: NavbarProps) {
  const menus = [
    { href: `/${locale}`, title: __("Home", { locale }) },
    { href: `/${locale}/blogs`, title: __("Blogs", { locale }) },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <MobileNavbar logoHref={`/${locale}`} menus={menus} />
        <DesktopNavbar logoHref={`/${locale}`} menus={menus} />
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center gap-4">
            <ThemeToggle />
            <LocaleSwitcher locale={locale} />
            <Link target="_blank" rel="noreferrer" href={APP_GITHUB_REPO_URL}>
              <div
                className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </div>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
