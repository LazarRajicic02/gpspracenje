import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { PlanId } from "../../components/Order";
import { PorucivanjeTipForm } from "./PorucivanjeTipForm";

const PLAN_IDS = ["pro", "smart", "renewal"] as const satisfies readonly PlanId[];

function isPlanId(value: string): value is PlanId {
  return (PLAN_IDS as readonly string[]).includes(value);
}

type Props = { params: Promise<{ tip: string }> };

export function generateStaticParams() {
  return PLAN_IDS.map((tip) => ({ tip }));
}

const META_TITLE: Record<PlanId, string> = {
  pro: "Poručivanje PRO GPS sistema – Cyber Tracking",
  smart: "Poručivanje Smart GPS sistema – Cyber Tracking",
  renewal: "Produžavanje pretplate – Cyber Tracking",
};

const META_DESC: Record<PlanId, string> = {
  pro: "Popunite formu za narudžbinu PRO GPS sistema sa daljinskim gašenjem i praćenjem u realnom vremenu.",
  smart: "Popunite formu za narudžbinu Smart GPS sistema za praćenje vozila u realnom vremenu.",
  renewal: "Produžite pretplatu za postojeći GPS sistem — bez novog uređaja.",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { tip } = await params;
  if (!isPlanId(tip)) {
    return { title: "Poručivanje – Cyber Tracking" };
  }
  return {
    title: META_TITLE[tip],
    description: META_DESC[tip],
  };
}

export default async function PorucivanjeTipPage({ params }: Props) {
  const { tip } = await params;
  if (!isPlanId(tip)) notFound();
  return <PorucivanjeTipForm tip={tip} />;
}
