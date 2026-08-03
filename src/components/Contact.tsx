import { contact, profile } from "@/data/portfolio";
import DownloadResumeButton from "@/components/DownloadResumeButton";
import Icon from "@/components/Icon";
import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <footer id="contact" className="bg-ink">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <Reveal>
          <p className="flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
            <span className="grid h-9 w-9 place-items-center rounded-full border-[1.5px] border-teal/50">
              <Icon name="send" size={17} />
            </span>
            LET'S CONNECT
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
            Let's Build Something Exceptional Together.
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
            Whether you're hiring, building a new product, or looking for a
            frontend engineer passionate about performance and user experience,
            I'd love to hear from you.
          </p>
        </Reveal>

        <Reveal delay={120} className="mt-10 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${contact.email}`}
            className="inline-flex items-center gap-2.5 rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-deep"
          >
            <Icon name="mail" size={16} />
            {contact.email}
          </a>
          <DownloadResumeButton variant="light" />
        </Reveal>

        <Reveal
          delay={200}
          className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-7"
        >
          <span className="text-xs text-white/45">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <div className="flex flex-wrap gap-6">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noreferrer"
              className="link-sweep inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors duration-300 hover:text-teal"
            >
              <Icon name="linkedin" size={14} />
              LinkedIn
            </a>
            {contact.github ? (
              <a
                href={contact.github}
                target="_blank"
                rel="noreferrer"
                className="link-sweep inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors duration-300 hover:text-teal"
              >
                <Icon name="github" size={14} />
                GitHub
              </a>
            ) : null}
            <a
              href={`tel:${contact.phone.replace(/\s/g, "")}`}
              className="link-sweep inline-flex items-center gap-2 text-xs font-medium text-white/70 transition-colors duration-300 hover:text-teal"
            >
              <Icon name="phone" size={14} />
              {contact.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
