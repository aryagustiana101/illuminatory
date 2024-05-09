import { APP_DEVELOPER } from "~/lib/constants";
import { __, type Locale } from "~/lib/translation";

interface FooterProps {
  locale?: Locale;
}

export default function Footer({ locale = "en" }: FooterProps) {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          {__(`© Copyright {year} - {developer}`, {
            locale,
            vars: {
              developer: APP_DEVELOPER,
              year: String(new Date().getFullYear()),
            },
          })}
        </p>
      </div>
    </footer>
  );
}
