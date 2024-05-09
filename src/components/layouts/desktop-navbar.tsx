"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { type NavbarMenu } from "~/types";
import { siteConfig } from "~/lib/config";
import { cn, isRouteActive } from "~/lib/utils";
import Logo from "~/components/logo";

interface DesktopNavbarProps {
  logoHref?: string;
  menus: Array<NavbarMenu>;
}

export function DesktopNavbar({ menus, logoHref = "/" }: DesktopNavbarProps) {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href={logoHref} className="mr-6 flex items-center space-x-2">
        <Logo className="size-6" />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {menus?.map((menu, i) => (
          <Link
            key={i}
            href={menu.href}
            className={cn(
              "transition-colors hover:text-foreground/80",
              isRouteActive(menu.href, pathname)
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            {menu.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
