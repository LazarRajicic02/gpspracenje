export type HeroRouteVanColors = {
  shadow: string;
  shadowOpacity: number;
  wheel: string;
  wheelRim: string;
  skirt: string;
  body: string;
  stroke: string;
  roof: string;
  roofGlow: string;
  windshield: string;
  windshieldStroke: string;
  rear: string;
  sill: string;
};

export const HERO_VAN_ORANGE_LIGHT: HeroRouteVanColors = {
  shadow: "#0f172a",
  shadowOpacity: 0.14,
  wheel: "#1e293b",
  wheelRim: "#334155",
  skirt: "rgba(179,84,12,0.55)",
  body: "#f07f1c",
  stroke: "#b3540c",
  roof: "#faac6a",
  roofGlow: "#fdd4a8",
  windshield: "rgba(255,247,237,0.5)",
  windshieldStroke: "rgba(253,200,150,0.75)",
  rear: "#4a260e",
  sill: "#4a260e",
};

export const HERO_VAN_ORANGE_DARK: HeroRouteVanColors = {
  shadow: "#000000",
  shadowOpacity: 0.28,
  wheel: "#0f172a",
  wheelRim: "#1e293b",
  skirt: "rgba(120,55,14,0.52)",
  body: "#f07f1c",
  stroke: "#ffd4a8",
  roof: "#fca85c",
  roofGlow: "rgba(255,200,150,0.28)",
  windshield: "rgba(255,247,237,0.45)",
  windshieldStroke: "rgba(255,210,170,0.62)",
  rear: "rgba(60,28,8,0.58)",
  sill: "rgba(100,45,12,0.62)",
};

export const HERO_VAN_BLUE_LIGHT: HeroRouteVanColors = {
  shadow: "#0f172a",
  shadowOpacity: 0.14,
  wheel: "#1e293b",
  wheelRim: "#334155",
  skirt: "rgba(30,58,138,0.55)",
  body: "#2563eb",
  stroke: "#1d4ed8",
  roof: "#60a5fa",
  roofGlow: "#93c5fd",
  windshield: "rgba(219,234,254,0.55)",
  windshieldStroke: "rgba(147,197,253,0.85)",
  rear: "#172554",
  sill: "#1e40af",
};

export const HERO_VAN_BLUE_DARK: HeroRouteVanColors = {
  shadow: "#000000",
  shadowOpacity: 0.28,
  wheel: "#0f172a",
  wheelRim: "#1e293b",
  skirt: "rgba(30,58,138,0.72)",
  body: "#3b82f6",
  stroke: "#93c5fd",
  roof: "#60a5fa",
  roofGlow: "rgba(191,219,254,0.28)",
  windshield: "rgba(219,234,254,0.4)",
  windshieldStroke: "rgba(147,197,253,0.65)",
  rear: "rgba(15,23,42,0.62)",
  sill: "rgba(30,64,175,0.55)",
};

export const HERO_VAN_VIOLET_LIGHT: HeroRouteVanColors = {
  shadow: "#0f172a",
  shadowOpacity: 0.14,
  wheel: "#1e293b",
  wheelRim: "#334155",
  skirt: "rgba(91,33,182,0.5)",
  body: "#7c3aed",
  stroke: "#5b21b6",
  roof: "#a78bfa",
  roofGlow: "#c4b5fd",
  windshield: "rgba(237,233,254,0.55)",
  windshieldStroke: "rgba(196,181,253,0.9)",
  rear: "#4c1d95",
  sill: "#5b21b6",
};

export const HERO_VAN_VIOLET_DARK: HeroRouteVanColors = {
  shadow: "#000000",
  shadowOpacity: 0.28,
  wheel: "#0f172a",
  wheelRim: "#1e293b",
  skirt: "rgba(91,33,182,0.48)",
  body: "#8b5cf6",
  stroke: "#c4b5fd",
  roof: "#a78bfa",
  roofGlow: "rgba(196,181,253,0.28)",
  windshield: "rgba(237,233,254,0.38)",
  windshieldStroke: "rgba(196,181,253,0.65)",
  rear: "rgba(46,16,101,0.58)",
  sill: "rgba(91,33,182,0.55)",
};

export function HeroRouteVan3dBody({
  c,
  bodyShadowClass,
}: {
  c: HeroRouteVanColors;
  bodyShadowClass: string;
}) {
  return (
    <>
      <ellipse cx="0" cy="11" rx="15" ry="3.6" fill={c.shadow} opacity={c.shadowOpacity} />
      <g fill={c.wheel}>
        <ellipse cx="-11" cy="-6.4" rx="2.5" ry="5" />
        <ellipse cx="-11" cy="6.4" rx="2.5" ry="5" />
        <ellipse cx="11" cy="-6.4" rx="2.5" ry="5" />
        <ellipse cx="11" cy="6.4" rx="2.5" ry="5" />
      </g>
      <g fill={c.wheelRim} opacity={0.85}>
        <ellipse cx="-11" cy="-6.4" rx="1.2" ry="2.8" />
        <ellipse cx="-11" cy="6.4" rx="1.2" ry="2.8" />
        <ellipse cx="11" cy="-6.4" rx="1.2" ry="2.8" />
        <ellipse cx="11" cy="6.4" rx="1.2" ry="2.8" />
      </g>
      <rect x="-17" y="-3" width="34" height="10" rx="3" fill={c.skirt} />
      <rect
        x="-16"
        y="-8"
        width="32"
        height="16"
        rx="4.5"
        fill={c.body}
        stroke={c.stroke}
        strokeWidth="1.05"
        className={bodyShadowClass}
      />
      <path d="M -12 -6 L 12 -6 L 10.5 -2.5 L -10.5 -2.5 Z" fill={c.roof} opacity={0.92} />
      <rect x="-10" y="-5.5" width="20" height="7" rx="2.2" fill={c.roofGlow} opacity={0.35} />
      <path
        d="M 8.5 -4.5 L 15.5 -2.8 L 15.5 2.8 L 8.5 4.5 Z"
        fill={c.windshield}
        stroke={c.windshieldStroke}
        strokeWidth="0.45"
      />
      <path d="M -15.5 -2.8 L -9 -4.2 L -9 4.2 L -15.5 2.8 Z" fill={c.rear} opacity={0.42} />
      <line x1="-16" y1="6" x2="16" y2="6" stroke={c.sill} strokeWidth="0.9" opacity={0.35} />
    </>
  );
}

export function HeroRouteVan3d({
  cx,
  cy,
  deg,
  c,
  opacity,
  bodyShadowClass,
}: {
  cx: number;
  cy: number;
  deg: number;
  c: HeroRouteVanColors;
  opacity: number;
  bodyShadowClass: string;
}) {
  return (
    <g transform={`translate(${cx}, ${cy}) rotate(${deg})`} opacity={opacity}>
      <HeroRouteVan3dBody c={c} bodyShadowClass={bodyShadowClass} />
    </g>
  );
}

/** Kretanje duž rute (SVG SMIL); roditelj <svg> mora da sadrži <path id={pathId}> za mpath. */
export function HeroRouteVanAlongPath({
  pathId,
  durSec,
  begin,
  c,
  opacity,
  bodyShadowClass,
}: {
  pathId: string;
  durSec: number;
  begin: string;
  c: HeroRouteVanColors;
  opacity: number;
  bodyShadowClass: string;
}) {
  return (
    <g opacity={opacity}>
      <animateMotion
        dur={`${durSec}s`}
        repeatCount="indefinite"
        rotate="auto"
        calcMode="linear"
        keyPoints="0;1"
        keyTimes="0;1"
        begin={begin}
      >
        <mpath href={`#${pathId}`} />
      </animateMotion>
      <HeroRouteVan3dBody c={c} bodyShadowClass={bodyShadowClass} />
    </g>
  );
}
