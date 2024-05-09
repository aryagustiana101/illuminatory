"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

import { type NavbarMenu } from "~/types";
import { siteConfig } from "~/lib/config";
import { cn, isRouteActive } from "~/lib/utils";
import useWindowSize from "~/hooks/use-window-size";
import { Button } from "~/components/ui/button";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "~/components/ui/sheet";
import Logo from "~/components/logo";

interface MobileNavbarProps {
  logoHref?: string;
  menus: Array<NavbarMenu>;
}
export default function MobileNavbar({
  menus,
  logoHref = "/",
}: MobileNavbarProps) {
  const pathname = usePathname();
  const windowSize = useWindowSize();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (!!windowSize?.width && windowSize?.width >= 640) {
      setOpen(false);
    }
  }, [windowSize]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          className="mr-2 px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
        >
          <HamburgerMenuIcon className="size-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="pr-0">
        <Link
          href={logoHref}
          className="flex items-center"
          onClick={() => setOpen(false)}
        >
          <Logo className="mr-2 size-4" />
          <span className="font-semibold">{siteConfig.name}</span>
        </Link>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10 pl-6">
          <div className="flex flex-col space-y-3">
            {menus?.map((menu, i) => (
              <MobileNavbarLink
                key={i}
                href={menu.href}
                setOpen={setOpen}
                active={isRouteActive(menu.href, pathname)}
              >
                {menu.title}
              </MobileNavbarLink>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

function MobileNavbarLink({
  href,
  active,
  setOpen,
  children,
  disabled,
}: React.PropsWithChildren<{
  href: string;
  active?: boolean;
  disabled?: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}>) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={cn(
        "transition-colors hover:text-foreground",
        disabled && "pointer-events-none opacity-60",
        active ? "text-foreground" : "text-foreground/70"
      )}
    >
      {children}
    </Link>
  );
}
