import Link from "next/link";
import { ctaOfferButtonClass } from "@/lib/ctaStyles";
import { TrackedTelLink } from "./TrackedTelLink";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-0 pt-4 sm:px-6 sm:pb-8 sm:pt-6 lg:px-8">
      <div
        className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-100 dark:hidden"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />
      <div className="absolute inset-0 hidden bg-black dark:block" />
      <div
        className="absolute inset-0 hidden opacity-[0.06] dark:block"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-4xl pt-3 text-center sm:pt-6">
        <h1 className="min-h-[1em] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-slate-100">
          Preuzmite potpunu kontrolu nad vozilima u realnom vremenu
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg font-semibold text-teal-600 dark:text-teal-400">
          Smanjite troškove, zaštitite vozila od krađe i sprečite zloupotrebu
        </p>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Rešenje za firme i privatna vozila
        </p>

        <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:mt-10">
          <TrackedTelLink
            href="tel:+381614030888"
            className="transition-smooth w-full rounded-xl bg-teal-600 px-8 py-4 text-center text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-teal-500/30 hover:bg-teal-500 hover:shadow-teal-500/40 hover:-translate-y-0.5 sm:w-auto dark:bg-[#00ff9d] dark:text-black dark:hover:bg-[#00e699] dark:hover:shadow-[0_0_24px_rgba(0,255,157,0.35)]"
          >
            Pozovite: 061 4030 888
          </TrackedTelLink>
          <Link href="#ponuda" className={`${ctaOfferButtonClass} w-full sm:w-auto`}>
            Zatraži ponudu
          </Link>
        </div>
        <p className="mt-4 text-center text-sm text-slate-500 dark:text-slate-300">
          Bez ugovorne obaveze i uz potpunu tehničku podršku.
        </p>
      </div>
    </section>
  );
}
