import { skillGroups } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="bg-mist-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          icon="code"
          label="TECHNICAL EXPERTISE"
          title="Building with Modern Technologies"
          description="Experienced in modern frontend development with React, Next.js, TypeScript, AI-assisted workflows, and scalable engineering practices for high-quality digital products."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <Reveal
              key={group.label}
              delay={index * 80}
              direction="scale"
              className="group rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_50px_-34px_rgba(46,61,77,0.5)]"
            >
              <h3 className="font-display text-sm font-bold uppercase tracking-[0.14em] text-ink-deep">
                {group.label}
              </h3>
              <span className="mt-3 block h-px w-10 bg-teal transition-all duration-500 group-hover:w-20" />
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-ink px-2.5 py-1.5 text-xs font-medium text-white transition-colors duration-300 hover:bg-teal"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
