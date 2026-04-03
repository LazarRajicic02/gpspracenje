"use client";

import type { ComponentProps } from "react";
import { reportPhoneClickConversion } from "@/lib/googleAdsGtag";

export type TrackedTelLinkProps = ComponentProps<"a">;

/** `tel:` link sa Google Ads click-to-call konverzijom (vidi reportPhoneClickConversion). */
export function TrackedTelLink({ href, onClick, ...rest }: TrackedTelLinkProps) {
  const tel = typeof href === "string" && href.startsWith("tel:");

  return (
    <a
      href={href}
      {...rest}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (!tel) return;
        if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
        if (e.button !== 0) return;
        e.preventDefault();
        reportPhoneClickConversion(href);
      }}
    />
  );
}
