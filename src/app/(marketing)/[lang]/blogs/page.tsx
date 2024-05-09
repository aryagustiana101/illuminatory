import { type Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import contents from "~/data/contents";

import { __, locales, type Locale } from "~/lib/translation";
import { formatDate, fullUrl } from "~/lib/utils";

interface BlogsPageProps {
  params: { lang: Locale };
}

export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  return { title: __("Blogs", { locale: params?.lang }) };
}

export default function BlogsPage({
  params: { lang: locale },
}: BlogsPageProps) {
  if (!locales.includes(locale)) {
    return notFound();
  }

  const blogs = contents.blogs
    .filter(({ locale: _locale }) => _locale === locale)
    .map(({ title, slug, date }) => ({
      title,
      href: fullUrl(`/${locale}/blogs/${slug}`),
      date: formatDate({ date, format: "PPP", locale }),
    }));

  return (
    <section>
      <div className="mb-16">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          {__("Your Guide to Business Success", { locale })}
        </h1>
        <p className="text-justify leading-7 [&:not(:first-child)]:mt-6">
          {__(
            "Explore our articles, tips, and strategies spanning entrepreneurship, leadership, marketing, finance, and more. Join our community of forward-thinkers as we illuminate the path to success together. Start your journey with Illuminatory today and unlock the knowledge to thrive in the dynamic realm of commerce.",
            { locale }
          )}
        </p>
      </div>
      {blogs.map((blog, i) => (
        <Link key={i} href={blog.href} className="mb-4 flex flex-col space-y-1">
          <div className="flex w-full  flex-col border-b pb-4">
            <p className="tracking-tight text-neutral-900 dark:text-neutral-100">
              {blog.title}
            </p>
            <p className="text-neutral-600 dark:text-neutral-400">
              {blog.date}
            </p>
          </div>
        </Link>
      ))}
    </section>
  );
}
