"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavbarMenu } from "~/types";
import { siteConfig } from "~/lib/config";
import { cn, isRouteActive } from "~/lib/utils";
import Logo from "~/components/logo";

interface DesktopNavbarProps {
  menus: Array<NavbarMenu>;
}

export function DesktopNavbar({ menus }: DesktopNavbarProps) {
  const pathname = usePathname();

  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
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
              "hover:text-foreground/80 transition-colors",
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
