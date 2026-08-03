/* ============================================================================
 *  Icon — ek hi inline SVG set, website aur resume PDF dono ke liye.
 *
 *  Koi icon library nahi (bundle chhota rehta hai) aur inline SVG hone se
 *  html2canvas isse PDF me theek raster kar leta hai.
 *
 *  Rang: default `currentColor`. Resume ke andar explicit `color` hex do,
 *  kyunki wahan sab kuch inline hex styles me hai.
 * ========================================================================== */

export type IconName =
  | "mail"
  | "phone"
  | "pin"
  | "globe"
  | "linkedin"
  | "github"
  | "briefcase"
  | "code"
  | "folder"
  | "cap"
  | "award"
  | "send"
  | "download"
  | "arrowUpRight";

const PATHS: Record<IconName, React.ReactNode> = {
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3.6 6.6 8.4 5.9 8.4-5.9" />
    </>
  ),
  phone: (
    <path d="M7 3h3l1.8 4.2-2.3 1.7a9.5 9.5 0 0 0 4.6 4.6l1.7-2.3L20 13v3a2 2 0 0 1-2 2A13 13 0 0 1 5 5a2 2 0 0 1 2-2Z" />
  ),
  pin: (
    <>
      <path d="M12 21s6-5.4 6-9.6A6 6 0 0 0 6 11.4C6 15.6 12 21 12 21Z" />
      <circle cx="12" cy="11" r="2.2" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M4 12h16" />
      <path d="M12 4c3.8 4.4 3.8 11.6 0 16-3.8-4.4-3.8-11.6 0-16Z" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="2.5" />
      <path d="M8 10.6V16" />
      <path d="M8 7.5v.1" />
      <path d="M11.9 16v-5.4" />
      <path d="M16.5 16v-3.1a2.3 2.3 0 0 0-4.6 0" />
    </>
  ),
  github: (
    <>
      <path d="M15.5 21v-3.3c0-1 .1-1.5-.5-2.1 2.3-.3 4.5-1.2 4.5-5.1a4 4 0 0 0-1.1-2.8 3.7 3.7 0 0 0-.1-2.8s-1.2-.3-3.9 1.5a9.6 9.6 0 0 0-5 0C6.7 4.6 5.5 4.9 5.5 4.9a3.7 3.7 0 0 0-.1 2.8A4 4 0 0 0 4.3 10.5c0 3.9 2.2 4.8 4.5 5.1-.6.6-.6 1.1-.5 2.1V21" />
      <path d="M8.3 17.7c-3.4 1.1-3.4-1.9-5.1-2.3" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
      <path d="M3 12.6h18" />
    </>
  ),
  code: (
    <>
      <path d="m8.5 8-4.5 4 4.5 4" />
      <path d="m15.5 8 4.5 4-4.5 4" />
      <path d="m13.4 6.5-2.8 11" />
    </>
  ),
  folder: (
    <path d="M3 7.5a2 2 0 0 1 2-2h3.5l1.7 2H19a2 2 0 0 1 2 2V17a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z" />
  ),
  cap: (
    <>
      <path d="M3 9.5 12 5l9 4.5-9 4.5Z" />
      <path d="M7 11.9V16c0 1.5 2.2 2.6 5 2.6s5-1.1 5-2.6v-4.1" />
    </>
  ),
  award: (
    <>
      <circle cx="12" cy="9.3" r="5" />
      <path d="M8.9 13.6 7.6 20l4.4-2.3L16.4 20l-1.3-6.4" />
    </>
  ),
  send: (
    <>
      <path d="m21 4-9.4 16-2.1-6.5L3 11.4Z" />
      <path d="M21 4 9.5 13.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v11" />
      <path d="m7.5 11.5 4.5 4.5 4.5-4.5" />
      <path d="M5 20h14" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8.6 7H17v8.4" />
    </>
  ),
};

export default function Icon({
  name,
  size = 18,
  strokeWidth = 1.75,
  color,
  className,
}: {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  /** Resume ke liye explicit hex; website par chhod do to currentColor use hoga */
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color ?? "currentColor"}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[name]}
    </svg>
  );
}
