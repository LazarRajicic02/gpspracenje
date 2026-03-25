import type { ReactNode } from "react";
import Image from "next/image";
import type { BlogAuthor } from "../../data/blog";

export function BlogAuthorAvatar({ author }: { author: BlogAuthor }) {
  if (author.avatarSrc) {
    return (
      <Image
        src={author.avatarSrc}
        alt=""
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover ring-2 ring-white dark:ring-slate-900"
      />
    );
  }
  const initials = author.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  return (
    <span
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-orange-soft text-sm font-bold text-brand-orange-ink ring-2 ring-white dark:bg-brand-orange/25 dark:text-brand-orange-muted dark:ring-slate-900"
      aria-hidden
    >
      {initials}
    </span>
  );
}

export function BlogCategoryPill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-brand-orange-soft px-3 py-1 text-xs font-semibold text-brand-orange-ink dark:bg-brand-orange/20 dark:text-brand-orange-muted">
      {children}
    </span>
  );
}
