import { experience } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        icon="briefcase"
        label="WORK EXPERIENCE"
        title="Professional Experience"
        description="Building scalable, high-performance web applications with React.js, Next.js, and modern frontend technologies while delivering measurable business impact."
      />

      <div className="relative">
        {/* timeline rail — order matters here, so a rail earns its place */}
        <div
          aria-hidden="true"
          className="absolute left-[7px] top-2 hidden h-[calc(100%-1rem)] w-px bg-line sm:block"
        />

        <ol className="space-y-10">
          {experience.map((job, index) => (
            <Reveal
              as="li"
              key={`${job.role}-${job.period}`}
              delay={index * 100}
              direction="left"
              className="relative sm:pl-10"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-2 hidden h-[15px] w-[15px] rounded-full border-2 border-white sm:block ${
                  job.current ? "bg-teal" : "bg-line"
                }`}
              />

              <article className="group rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_50px_-32px_rgba(46,61,77,0.45)] sm:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-ink-deep">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-teal">
                      {job.company}
                      <span className="ml-2 font-normal text-muted">
                        · {job.location}
                      </span>
                    </p>
                  </div>
                  <span
                    className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${
                      job.current
                        ? "bg-teal/10 text-teal-deep"
                        : "bg-mist-soft text-muted"
                    }`}
                  >
                    {job.period}
                  </span>
                </div>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                    >
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
