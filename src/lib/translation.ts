import en from "~/dictionaries/en";
import id from "~/dictionaries/id";

export type Locale = keyof typeof dictionaries;

// eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
export type DictionariesType =
  // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
  | keyof (typeof dictionaries)["en"]
  // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
  | keyof (typeof dictionaries)["id"];

export const dictionaries = { en, id };

export function __<T extends DictionariesType>(
  // eslint-disable-next-line @typescript-eslint/ban-types
  value: T | (string & {}),
  options?: {
    locale?: "en" | "id";
    vars?: Record<string, string>;
  }
) {
  const vars = options?.vars;
  const locale = options?.locale ?? "en";

  const text =
    dictionaries?.[locale]?.[
      // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
      value as keyof (typeof dictionaries)["en"] &
        // eslint-disable-next-line @typescript-eslint/no-duplicate-type-constituents
        keyof (typeof dictionaries)["id"]
    ] ?? value;

  return !!vars
    ? Object.keys(vars).reduce(
        (acc, key) => acc.replace(`{${key}}`, vars?.[key] ?? ""),
        text
      )
    : text;
}
