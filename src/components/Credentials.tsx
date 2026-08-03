import { certifications, education } from "@/data/portfolio";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export default function Credentials() {
  return (
    <section id="education" className="bg-mist-soft">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          icon="cap"
          label="Education & certifications"
          title="Continuous Learning"
        />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              <Icon name="cap" size={16} color="#12A4B4" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((item, index) => (
                <Reveal
                  key={item.degree}
                  delay={index * 90}
                  direction="left"
                  className="rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h4 className="font-display text-base font-bold text-ink-deep">
                      {item.degree}
                    </h4>
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-ink-soft">{item.institute}</p>
                  {item.location ? (
                    <p className="mt-0.5 text-xs text-muted">{item.location}</p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-muted">
              <Icon name="award" size={16} color="#12A4B4" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 90}
                  direction="right"
                  className="rounded-2xl border border-line bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40"
                >
                  <h4 className="font-display text-base font-bold text-ink-deep">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-teal">
                    {item.issuer}
                  </p>
                  {item.detail ? (
                    <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                      {item.detail}
                    </p>
                  ) : null}
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
