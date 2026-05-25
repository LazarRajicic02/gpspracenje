import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllBlogSlugs } from "../../data/blog";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Članak nije pronađen – Cyber Tracking GPS" };
  }
  return {
    title: `${post.title} – Blog | Cyber Tracking GPS`,
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
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-brand-orange-deep hover:text-brand-orange dark:text-brand-orange-muted dark:hover:text-brand-orange-bright"
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
        </header>

        <div className="prose prose-slate dark:prose-invert prose-headings:font-semibold prose-p:text-slate-600 dark:prose-p:text-slate-400 max-w-none">
          {post.intro?.map((p, i) => (
            <p key={`intro-${i}`} className={i === 0 ? "leading-relaxed" : "mt-4 leading-relaxed"}>
              {p}
            </p>
          ))}
          {post.sections.map((section) => (
            <section key={section.heading} className="mb-10">
              <h2 className="mt-10 text-xl font-semibold text-slate-900 dark:text-white">{section.heading}</h2>
              {section.paragraphs.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed">
                  {p}
                </p>
              ))}
            </section>
          ))}
          {post.outro?.map((p, i) => (
            <p key={`outro-${i}`} className="mt-4 leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {post.cta && (
          <div className="mt-10 rounded-2xl border border-teal-200 bg-teal-50 px-6 py-8 text-center dark:border-teal-900/50 dark:bg-teal-950/40">
            <Link
              href={post.cta.href}
              className="inline-flex rounded-xl bg-teal-800 px-6 py-3.5 text-base font-semibold text-white shadow-lg shadow-teal-800/25 transition hover:bg-teal-900 dark:bg-teal-800 dark:hover:bg-teal-700"
            >
              {post.cta.label}
            </Link>
          </div>
        )}

        <div className="mt-14 border-t border-slate-200 pt-8 dark:border-white/10">
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Imate pitanje u vezi GPS praćenja?{" "}
            <Link
              href="/#ponuda"
              className="font-medium text-teal-700 hover:underline dark:text-teal-400"
            >
              Zatražite ponudu putem kontakt forme
            </Link>
          </p>
        </div>
      </div>
    </article>
  );
}
