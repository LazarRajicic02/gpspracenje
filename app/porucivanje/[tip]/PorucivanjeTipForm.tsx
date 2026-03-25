"use client";

import { useRouter } from "next/navigation";
import { OrderFormBody, type PlanId } from "../../components/Order";

export function PorucivanjeTipForm({ tip }: { tip: PlanId }) {
  const router = useRouter();
  return (
    <section className="min-h-[100dvh] bg-gradient-to-b from-slate-50 via-white to-slate-100/60 dark:from-black dark:via-slate-950 dark:to-black max-lg:pb-16 lg:flex lg:h-[100dvh] lg:max-h-[100dvh] lg:flex-col lg:overflow-x-hidden lg:overflow-y-auto lg:bg-slate-50/90 lg:dark:bg-black">
      <div className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-start px-4 pb-8 pt-3 sm:px-6 sm:pb-10 sm:pt-4 lg:max-h-full lg:min-h-0 lg:flex-none lg:justify-start lg:px-10 lg:pb-6 lg:pt-4 xl:max-w-6xl">
        <OrderFormBody type={tip} variant="page" onDismiss={() => router.push("/porucivanje")} />
      </div>
    </section>
  );
}
