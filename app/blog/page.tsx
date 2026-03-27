import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../data/blog";

export const metadata: Metadata = {
  title: "Blog o GPS praćenju vozila – Cyber Tracking",
  description: "Saveti, informacije i novosti o praćenju, zaštiti i kontroli vozila",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  return (
    <div className="bg-white px-4 py-12 dark:bg-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-orange-deep hover:text-brand-orange dark:text-brand-orange-muted dark:hover:text-brand-orange-bright"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Nazad na početnu
        </Link>

        <header className="mb-10 lg:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            Blog o GPS praćenju vozila
          </h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Saveti, informacije i novosti o praćenju, zaštiti i kontroli vozila
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sorted.map((post, i) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.04]"
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="relative aspect-[3/2] w-full overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={post.coverImage}
                    alt=""
                    fill
                    className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={i < 2}
                  />
                </div>
                <div className="px-5 pb-7 pt-5 text-center">
                  <h2 className="line-clamp-2 text-2xl font-extrabold leading-[1.18] tracking-tight text-slate-900 underline decoration-2 underline-offset-2 transition group-hover:text-brand-orange-deep dark:text-white dark:group-hover:text-brand-orange-muted sm:text-3xl lg:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-lg leading-relaxed text-slate-600 dark:text-slate-300 sm:text-xl lg:text-lg">
                    {post.excerpt}
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
