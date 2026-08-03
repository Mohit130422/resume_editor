import { contact, profile, stats } from "@/data/portfolio";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import Icon, { type IconName } from "@/components/Icon";
import Reveal from "@/components/Reveal";

const contactRows: {
  icon: IconName;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: "mail",
    label: "Email",
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: "phone",
    label: "Phone",
    value: contact.phone,
    href: `tel:${contact.phone.replace(/\s/g, "")}`,
  },
  { icon: "pin", label: "Based in", value: contact.location },
  {
    icon: "github",
    label: "GitHub",
    value: contact.githubLabel,
    href: contact.github,
  },
  {
    icon: "linkedin",
    label: "LinkedIn",
    value: contact.linkedinLabel,
    href: contact.linkedin,
  },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-28 sm:pt-32">
      {/* soft teal wash — hero ka background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-teal/10 blur-3xl"
      />

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* Signature: resume ka header layout hi web par — mist card + navy card */}
        <div className="grid gap-5 lg:grid-cols-[1.6fr_1fr]">
          <div className="animate-rise rounded-2xl bg-mist p-7 sm:p-10">
            {profile.availableForWork ? (
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-ink">
                <span className="animate-pulse-dot h-1.5 w-1.5 rounded-full bg-teal" />
                Open to frontend roles
              </span>
            ) : null}

            <h1 className="mt-5 font-display text-4xl font-bold uppercase leading-[1.05] tracking-tight text-ink-deep sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-display text-base font-semibold text-teal sm:text-lg">
              {profile.role}
            </p>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
              {profile.summary}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <DownloadResumeButton />
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-teal hover:text-teal"
              >
                See the work
              </a>
            </div>
          </div>

          <div
            className="animate-rise rounded-2xl bg-ink p-7 sm:p-8"
            style={{ animationDelay: "120ms" }}
          >
            <p className="flex items-center gap-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              <Icon name="send" size={15} />
              Get in touch
            </p>
            <ul className="mt-6 space-y-5">
              {contactRows.map((row) => (
                <li key={row.label} className="group flex items-start gap-3.5">
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal text-white transition-transform duration-300 group-hover:scale-110">
                    <Icon name={row.icon} size={13} strokeWidth={2} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[10px] uppercase tracking-[0.16em] text-white/45">
                      {row.label}
                    </span>
                    {row.href ? (
                      <a
                        href={row.href}
                        target={
                          row.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel="noreferrer"
                        className="link-sweep break-words text-sm text-white/90 transition-colors duration-300 hover:text-teal"
                      >
                        {row.value}
                      </a>
                    ) : (
                      <span className="break-words text-sm text-white/90">
                        {row.value}
                      </span>
                    )}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* stats strip */}
        <div className="mt-5 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-5">
          {stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              className="bg-white p-5 transition-colors duration-300 hover:bg-mist-soft sm:p-6"
            >
              <div className="font-display text-2xl font-bold text-ink-deep sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.14em] text-muted">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
