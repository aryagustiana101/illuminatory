import { APP_DEVELOPER } from "~/lib/constants";

export default function Footer() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <p className="text-muted-foreground text-balance text-center text-sm leading-loose md:text-left">
          {`© Copyright ${new Date().getFullYear()} - ${APP_DEVELOPER}`}
        </p>
      </div>
    </footer>
  );
}
