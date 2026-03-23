import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BlogAuthorAvatar, BlogCategoryPill } from "../components/blog/BlogShared";
import { blogPosts } from "../data/blog";
import { companyLegal } from "../data/company";

export const metadata: Metadata = {
  title: "Blog – Cyber Tracking",
  description:
    "Saveti i vesti o GPS praćenju vozila, kontroli flote i bezbednosti u saobraćaju. Cyber Tracking, Srbija.",
};

function formatDateLong(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function formatDateShort(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("sr-RS", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
  const featured = sorted[0];
  const rest = sorted.slice(1);

  return (
    <div className="bg-white px-4 py-12 dark:bg-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Nazad na početnu
        </Link>

        <header className="mb-10 lg:mb-12">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">Blog</h1>
          <p className="mt-3 max-w-2xl text-base text-slate-600 dark:text-slate-400">
            Saveti o GPS praćenju vozila, kontroli flote i bezbednosti. Izdvajamo najvažnije tekstove i aktuelne teme.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Glavni istaknuti članak */}
          <div className="lg:col-span-7 xl:col-span-8">
            {featured && (
              <article>
                <Link href={`/blog/${featured.slug}`} className="group block">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
                    <Image
                      src={featured.coverImage}
                      alt=""
                      fill
                      className="object-cover object-center transition duration-300 group-hover:scale-[1.02]"
                      sizes="(max-width: 1024px) 100vw, 65vw"
                      priority
                    />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold leading-tight tracking-tight text-slate-900 transition group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400 sm:text-3xl lg:text-[1.75rem] lg:leading-snug xl:text-3xl">
                    {featured.title}
                  </h2>
                </Link>
                <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{featured.excerpt}</p>

                <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-slate-200 pt-6 dark:border-white/10">
                  <div className="flex min-w-0 items-center gap-3">
                    <BlogAuthorAvatar author={featured.author} />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{featured.author.name}</p>
                      <p className="truncate text-xs text-slate-500 dark:text-slate-400">{featured.author.role}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
                    <BlogCategoryPill>{featured.category}</BlogCategoryPill>
                    <span className="text-sm text-slate-500 dark:text-slate-400">
                      {formatDateLong(featured.publishedAt)}
                      <span className="mx-2 text-slate-300 dark:text-slate-600">•</span>
                      {featured.readTimeMinutes} min čitanja
                    </span>
                  </div>
                </div>

                <Link
                  href={`/blog/${featured.slug}`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
                >
                  Pročitaj ceo članak
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            )}
          </div>

          {/* Bočna traka */}
          <aside className="lg:col-span-5 xl:col-span-4">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-orange-950 px-5 py-6 shadow-lg dark:from-black dark:via-slate-950 dark:to-orange-950/90">
              <div className="relative z-10 max-w-[70%]">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-300/90">Blog</p>
                <p className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">
                  U trendu na {companyLegal.brand}
                </p>
              </div>
              <div
                className="pointer-events-none absolute -right-4 -top-4 h-24 w-24 rounded-full bg-orange-500/20 blur-2xl"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute -bottom-8 right-8 h-32 w-32 rounded-full border-2 border-orange-400/30"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute right-4 top-1/2 h-16 w-16 -translate-y-1/2 rounded-lg bg-orange-500/15"
                aria-hidden
              />
            </div>

            <div className="mt-2 divide-y divide-slate-200 dark:divide-white/10">
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex gap-4 py-5 first:pt-6"
                >
                  <div className="relative h-[4.5rem] w-[6.5rem] shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={post.coverImage}
                      alt=""
                      fill
                      className="object-cover object-center transition group-hover:scale-105"
                      sizes="104px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold leading-snug text-slate-900 transition group-hover:text-orange-600 dark:text-white dark:group-hover:text-orange-400">
                      {post.title}
                    </h3>
                    <p className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span>
                        {formatDateShort(post.publishedAt)} · {post.readTimeMinutes} min
                      </span>
                      <BlogCategoryPill>{post.category}</BlogCategoryPill>
                    </p>
                  </div>
                </Link>
              ))}
            </div>

            {rest.length === 0 && (
              <p className="py-8 text-sm text-slate-500 dark:text-slate-400">Još članaka uskoro.</p>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
}
