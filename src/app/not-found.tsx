import Link from "next/link";

import { __ } from "~/lib/translation";
import { buttonVariants } from "~/components/ui/button";

export const metadata = {
  title: __("404"),
  description: __("The page you looking for is not exists"),
};

export default function NotFoundPage() {
  return (
    <div className="container flex h-[100dvh] max-w-2xl flex-col items-center justify-center">
      <main className="space-y-8">
        <div className="text-center">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            {__("404")}
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            {__("The page you looking for is not exists")}
          </p>
        </div>
        <div className="flex w-full justify-center">
          <Link href="/" className={buttonVariants({ variant: "default" })}>
            {__("Back to Home")}
          </Link>
        </div>
      </main>
    </div>
  );
}
