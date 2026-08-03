import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function SectionHeading({
  icon,
  label,
  title,
  description,
}: {
  icon: IconName;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="group mb-10 md:mb-14">
      {/* Resume ke section marker ka hi echo — ring + icon */}
      <div className="flex items-center gap-3">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border-[1.5px] border-ink text-teal transition-colors duration-500 group-hover:border-teal group-hover:bg-teal group-hover:text-white">
          <Icon name={icon} size={17} />
        </span>
        <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
          {label}
        </span>
      </div>
      <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-ink-deep sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-soft sm:text-base">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
