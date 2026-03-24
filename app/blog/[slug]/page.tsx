import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogAuthorAvatar, BlogCategoryPill } from "../../components/blog/BlogShared";
import { getBlogPostBySlug, getAllBlogSlugs } from "../../data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

function formatDate(iso: string) {
  return new Date(iso + "T12:00:00").toLocaleDateString("sr-RS", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Članak nije pronađen – Cyber Tracking" };
  }
  return {
    title: `${post.title} – Blog | Cyber Tracking`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <article className="bg-white px-4 py-12 dark:bg-black sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/blog"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 dark:hover:text-orange-300"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Nazad na blog
        </Link>

        <div className="relative mb-8 aspect-[16/10] w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900">
          <Image
            src={post.coverImage}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, 48rem"
            priority
          />
        </div>

        <header className="mb-10 border-b border-slate-200 pb-8 dark:border-white/10">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">{post.excerpt}</p>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-4">
            <div className="flex min-w-0 items-center gap-3">
              <BlogAuthorAvatar author={post.author} />
              <div className="min-w-0">
                <p className="truncate text-sm font-semibold text-slate-900 dark:text-white">{post.author.name}</p>
                <p className="truncate text-xs text-slate-500 dark:text-slate-400">{post.author.role}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 sm:ml-auto">
              <BlogCategoryPill>{post.category}</BlogCategoryPill>
              <span className="text-sm text-slate-500 dark:text-slate-400">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="mx-2 text-slate-300 dark:text-slate-600">•</span>
                {post.readTimeMinutes} min čitanja
              </span>
            </div>
          </div>
        </header>

        <div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
        </div>

        <div className="mt-14 border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Imate pitanje u vezi GPS praćenja?{" "}
            <Link href="/kontakt" className="font-medium text-orange-600 hover:underline dark:text-orange-400">
              Kontaktirajte nas
            </Link>
            {" · "}
            <Link href="/porucivanje" className="font-medium text-orange-600 hover:underline dark:text-orange-400">
              Poručite sistem
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
