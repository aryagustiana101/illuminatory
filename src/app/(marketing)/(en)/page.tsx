import { type Metadata } from "next";
import Link from "next/link";
import { RocketIcon } from "@radix-ui/react-icons";

import { __, type Locale } from "~/lib/translation";
import { buttonVariants } from "~/components/ui/button";

const locale = "en" as const;

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  return { title: __("Home", { locale: params?.lang }) };
}

export default function HomePage() {
  return (
    <section>
      <div className="mb-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {__("Illuminate Your Business Journey with Illuminatory", { locale })}
        </h1>
        <p className="text-justify leading-7 [&:not(:first-child)]:mt-6">
          {__(
            "Welcome to Illuminatory, your premier destination for illuminating insights and expert guidance in the world of business. Dive into our curated collection of articles, tips, and strategies designed to empower entrepreneurs, executives, and business enthusiasts alike. From entrepreneurship and leadership to marketing and finance, discover invaluable resources to navigate the ever-evolving landscape of commerce. Join our community of forward-thinkers and innovators as we illuminate the path to success together. Start exploring now and unlock the knowledge to propel your business forward with Illuminatory.",
            { locale }
          )}
        </p>
      </div>
      <Link href={`/${locale}/blogs`} className={buttonVariants()}>
        <RocketIcon className="mr-2 size-4" />
        {__("Explore Now!", { locale })}
      </Link>
    </section>
  );
}
