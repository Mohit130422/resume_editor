import { projects, smallProjects } from "@/data/portfolio";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28"
    >
      <SectionHeading
        icon="folder"
        label="FEATURED PROJECTS"
        title="Production Ready Applications"
        description="A collection of enterprise applications and client projects focused on scalability, performance, SEO, and exceptional user experiences."
      />

      <div className="grid gap-5 lg:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal
            key={project.name}
            delay={index * 90}
            className="group flex flex-col rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1.5 hover:border-teal/40 hover:shadow-[0_28px_60px_-34px_rgba(46,61,77,0.5)] sm:p-8"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-display text-xl font-bold text-ink-deep">
                  {project.name}
                </h3>
                {project.period ? (
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                    {project.period}
                  </p>
                ) : null}
              </div>
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line text-ink transition-all duration-300 group-hover:border-teal group-hover:bg-teal group-hover:text-white"
                >
                  <Icon name="arrowUpRight" size={15} strokeWidth={2} />
                </a>
              ) : null}
            </div>

            <ul className="mt-5 flex-1 space-y-2.5">
              {project.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-sm leading-relaxed text-ink-soft"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal/70" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="link-sweep mt-6 self-start break-all text-xs font-medium text-teal"
              >
                {project.url.replace(/^https?:\/\//, "")}
              </a>
            ) : null}
          </Reveal>
        ))}
      </div>

      {smallProjects.length ? (
        <div className="mt-14">
          <Reveal className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
            <Icon name="folder" size={16} color="#12A4B4" />
            Also built
          </Reveal>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {smallProjects.map((item, index) => (
              <Reveal
                key={item.name}
                delay={index * 80}
                className="bg-white transition-colors duration-300 hover:bg-mist-soft"
              >
                <a
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="block p-6"
                >
                  <span className="font-display text-sm font-bold text-ink-deep">
                    {item.name}
                  </span>
                  <span className="mt-1 block break-all text-xs text-teal">
                    {item.url.replace(/^https?:\/\//, "")}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
