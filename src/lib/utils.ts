import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { APP_URL } from "~/lib/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fullUrl(path?: string) {
  return `${APP_URL}${path ?? ""}`;
}
