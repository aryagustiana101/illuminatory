import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

import { __, locales, type Locale } from "~/lib/translation";
import { formatDate } from "~/lib/utils";
import contents from "~/data/contents";
import { buttonVariants } from "~/components/ui/button";
import Prose from "~/components/prose";

interface DetailBlogPageParams {
  params: { lang: Locale; slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale; slug: string };
}): Promise<Metadata> {
  const blog = contents.blogs.find(({ slug }) => slug === params.slug);

  return { title: blog?.title ?? __("Blogs", { locale: params?.lang }) };
}

export default function DetailBlogPage({
  params: { lang: locale, slug },
}: DetailBlogPageParams) {
  if (!locales.includes(locale)) {
    return notFound();
  }

  const blog = contents.blogs.find(
    ({ slug: _slug, locale: _locale }) => _slug === slug && locale === _locale
  );

  if (!blog) {
    return notFound();
  }

  return (
    <section>
      <div className="mb-8">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {blog.title}
        </h1>
        <p className="text-justify leading-7 text-neutral-600 dark:text-neutral-400 [&:not(:first-child)]:mt-4">
          {formatDate({ date: blog.date, format: "PPP", locale })}
        </p>
      </div>
      <Link
        href={`/${locale}/blogs`}
        className={buttonVariants({ className: "mb-8", variant: "link" })}
      >
        <ArrowLeftIcon className="mr-2 size-4" />
        {__(`Back`, { locale })}
      </Link>
      <Prose content={blog.content} />
    </section>
  );
}
