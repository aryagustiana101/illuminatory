import { clsx, type ClassValue } from "clsx";
import { format as dateFnsFormat } from "date-fns";
import {
  enUS as dateFnsLocaleEnUS,
  id as dateFnsLocaleId,
} from "date-fns/locale";
import { twMerge } from "tailwind-merge";

import { APP_URL } from "~/lib/constants";
import { type Locale } from "~/lib/translation";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fullUrl(path?: string) {
  return `${APP_URL}${path ?? ""}`;
}

export function isRouteActive(route: string, pathname: string) {
  return pathname === "/"
    ? ["/en", "/id"].includes(route)
    : ["/en", "/id"].includes(route)
      ? pathname === route
      : pathname.startsWith(route);
}

export function formatDate({
  date,
  format,
  options,
  locale = "en",
}: {
  locale?: Locale;
  date: Parameters<typeof dateFnsFormat>[0];
  format: Parameters<typeof dateFnsFormat>[1];
  options?: Parameters<typeof dateFnsFormat>[2];
}) {
  return dateFnsFormat(
    date,
    format,
    options ?? {
      locale:
        { id: dateFnsLocaleId, en: dateFnsLocaleEnUS }?.[locale] ??
        dateFnsLocaleEnUS,
    }
  );
}
