"use client";

import { useEffect, useState } from "react";
import {
  HERO_VAN_BLUE_DARK,
  HERO_VAN_BLUE_LIGHT,
  HERO_VAN_ORANGE_DARK,
  HERO_VAN_ORANGE_LIGHT,
  HERO_VAN_VIOLET_DARK,
  HERO_VAN_VIOLET_LIGHT,
  HeroRouteVan3d,
  HeroRouteVanAlongPath,
} from "./HeroRouteVan";

/**
 * Tri vozila duž Hero rute. Na serveru i prvom client renderu statično (bez hydration mismatch-a);
 * posle mount-a, ako nije prefers-reduced-motion, SVG animateMotion polako pomera kombije.
 */
export default function HeroRouteVansAnimated({ theme }: { theme: "light" | "dark" }) {
  const [allowMotion, setAllowMotion] = useState(false);

  useEffect(() => {
    setAllowMotion(!window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }, []);

  const sfx = theme === "light" ? "light" : "dark";
  const violet = theme === "light" ? HERO_VAN_VIOLET_LIGHT : HERO_VAN_VIOLET_DARK;
  const blue = theme === "light" ? HERO_VAN_BLUE_LIGHT : HERO_VAN_BLUE_DARK;
  const orange = theme === "light" ? HERO_VAN_ORANGE_LIGHT : HERO_VAN_ORANGE_DARK;
  const shadowSm = "drop-shadow-sm";
  const shadowMd = "drop-shadow-md";

  if (!allowMotion) {
    return (
      <>
        <HeroRouteVan3d cx={230} cy={259} deg={-19.8} c={violet} opacity={theme === "light" ? 0.94 : 0.92} bodyShadowClass={shadowSm} />
        <HeroRouteVan3d cx={640} cy={278} deg={-9.1} c={blue} opacity={theme === "light" ? 0.94 : 0.92} bodyShadowClass={shadowSm} />
        <HeroRouteVan3d
          cx={1018}
          cy={211}
          deg={35.5}
          c={orange}
          opacity={theme === "light" ? 0.96 : 0.94}
          bodyShadowClass={theme === "light" ? shadowSm : shadowMd}
        />
      </>
    );
  }

  return (
    <>
      <HeroRouteVanAlongPath
        pathId={`hero-van-seg-1-${sfx}`}
        durSec={58}
        begin="0s"
        c={violet}
        opacity={theme === "light" ? 0.94 : 0.92}
        bodyShadowClass={shadowSm}
      />
      <HeroRouteVanAlongPath
        pathId={`hero-van-seg-2-${sfx}`}
        durSec={52}
        begin="-20s"
        c={blue}
        opacity={theme === "light" ? 0.94 : 0.92}
        bodyShadowClass={shadowSm}
      />
      <HeroRouteVanAlongPath
        pathId={`hero-van-seg-3-${sfx}`}
        durSec={46}
        begin="-12s"
        c={orange}
        opacity={theme === "light" ? 0.96 : 0.94}
        bodyShadowClass={theme === "light" ? shadowSm : shadowMd}
      />
    </>
  );
}
