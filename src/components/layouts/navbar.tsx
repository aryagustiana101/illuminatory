import Link from "next/link";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

import { APP_GITHUB_REPO_URL } from "~/lib/constants";
import { cn } from "~/lib/utils";
import { buttonVariants } from "~/components/ui/button";
import { DesktopNavbar } from "~/components/layouts/desktop-navbar";
import MobileNavbar from "~/components/layouts/mobile-navbar";
import ThemeToggle from "~/components/theme-toggle";

export default function Navbar() {
  const menus = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/blogs", title: "Blogs" },
  ];

  return (
    <header className="border-border/40 bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <DesktopNavbar menus={menus} />
        <MobileNavbar menus={menus} />
        <div className="flex flex-1 items-center justify-end space-x-2 md:justify-end">
          <nav className="flex items-center gap-4">
            <Link target="_blank" rel="noreferrer" href={APP_GITHUB_REPO_URL}>
              <div
                className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0")}
              >
                <GitHubLogoIcon className="h-4 w-4" />
              </div>
            </Link>
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
