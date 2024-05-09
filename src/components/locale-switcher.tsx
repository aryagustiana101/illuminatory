"use client";

import * as React from "react";
import Link from "next/link";

import { __, type Locale } from "~/lib/translation";
import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

interface LocaleSwitcherProps {
  locale: Locale;
}

export default function LocaleSwitcher({ locale }: LocaleSwitcherProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {locale === "en" ? (
            <UnitedStatesOfAmericaFlag className="h-[1.2rem] w-[1.2rem]" />
          ) : null}
          {locale === "id" ? (
            <IndonesiaFlag className="h-[1.2rem] w-[1.2rem]" />
          ) : null}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
          <Link href={`/en`}>{__("English", { locale })}</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href={`/id`}>{__("Indonesia", { locale })}</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function IndonesiaFlag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_331_1040)">
        <path d="M0 0.904755H16V6.99999H0V0.904755Z" fill="#E70011" />
        <path d="M0 7H16V13.0952H0V7Z" fill="white" />
      </g>
      <rect
        x="0.25"
        y="1.15475"
        width="15.5"
        height="11.6905"
        stroke="#F5F5F5"
        strokeWidth="0.5"
      />
      <defs>
        <clipPath id="clip0_331_1040">
          <rect y="0.904755" width="16" height="12.1905" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export function UnitedStatesOfAmericaFlag(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="16"
      height="12"
      fill="none"
      viewBox="0 0 16 12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_331_1045)">
        <path d="M0 0H16V12H0" fill="#BD3D44" />
        <path
          d="M0 1.38251H16H0ZM0 3.22501H16H0ZM0 5.07501H16H0ZM0 6.92501H16H0ZM0 8.77501H16H0ZM0 10.625H16H0Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 1.84501H0V0.920013H16V1.84501ZM16 3.68751H0V2.76251H16V3.68751ZM16 5.53751H0V4.61251H16V5.53751ZM16 7.38751H0V6.46251H16V7.38751ZM16 9.23751H0V8.31251H16V9.23751ZM16 11.0875H0V10.1625H16V11.0875Z"
          fill="white"
        />
        <path d="M0 0H9.12V6.4625H0" fill="#192F5D" />
      </g>
      <defs>
        <clipPath id="clip0_331_1045">
          <rect width="16" height="12" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
