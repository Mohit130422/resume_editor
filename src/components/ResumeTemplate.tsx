"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";
import Icon, { type IconName } from "@/components/Icon";
import {
  certifications,
  contact,
  education,
  experience,
  profile,
  projects,
  skillGroups,
  smallProjects,
  theme,
} from "@/data/portfolio";

/* ------------------------------- geometry -------------------------------- */

export const RESUME_ROOT_ID = "resume-print-root";
export const RESUME_PAGE_CLASS = "resume-page";

const PAGE_W = 794; // A4 width  @ 96dpi
const PAGE_H = 1123; // A4 height @ 96dpi
const MARGIN = 32; // page margin (~8.5mm)
const COL_GAP = 14;
const HEADER_GAP = 16; // header ke neeche divider ki jagah

const CONTENT_W = PAGE_W - MARGIN * 2; // 730
const MAIN_W = 452;
const SIDE_W = CONTENT_W - MAIN_W - COL_GAP; // 288
const SIDE_PAD = 14;
const SIDE_INNER_W = SIDE_W - SIDE_PAD * 2; // 260

/* -------------------------------- palette -------------------------------- */

const C = {
  ink: theme.ink,
  inkDeep: theme.inkDeep,
  teal: theme.teal,
  mist: theme.mist,
  mistSoft: theme.mistSoft,
  body: theme.body,
  muted: theme.muted,
  line: theme.line,
  white: "#FFFFFF",
};

const FONT = "Helvetica, Arial, sans-serif";

/* ------------------------------- primitives ------------------------------ */

function SectionTitle({ icon, label }: { icon: IconName; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        paddingBottom: 9,
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 20,
          border: `1.5px solid ${C.ink}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={11} strokeWidth={2} color={C.teal} />
      </span>
      <span
        style={{
          fontSize: 12.5,
          letterSpacing: 1.2,
          fontWeight: 700,
          color: C.inkDeep,
          textTransform: "uppercase",
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li
      style={{
        display: "flex",
        gap: 6,
        paddingBottom: 2.5,
        lineHeight: 1.4,
        fontSize: 8.3,
        color: C.body,
      }}
    >
      <span
        style={{
          color: C.teal,
          fontWeight: 700,
          lineHeight: 1.4,
          flexShrink: 0,
        }}
      >
        &#9656;
      </span>
      <span style={{ flex: 1 }}>{children}</span>
    </li>
  );
}

function ContactRow({ icon, text }: { icon: IconName; text: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 9,
        paddingBottom: 8,
      }}
    >
      <span
        style={{
          width: 20,
          height: 20,
          borderRadius: 20,
          backgroundColor: C.teal,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Icon name={icon} size={11} strokeWidth={1.9} color={C.white} />
      </span>
      <span
        style={{
          fontSize: 8.3,
          color: "#E9EEF1",
          lineHeight: 1.3,
          wordBreak: "break-word",
        }}
      >
        {text}
      </span>
    </div>
  );
}

function Chip({ label }: { label: string }) {
  return (
    <span
      style={{
        display: "inline-block",
        backgroundColor: C.ink,
        color: C.white,
        fontSize: 7.4,
        fontWeight: 600,
        padding: "3px 6.5px",
        borderRadius: 3,
        marginRight: 4,
        marginBottom: 4,
        lineHeight: 1.35,
      }}
    >
      {label}
    </span>
  );
}

const sideItemTitle: CSSProperties = {
  fontSize: 8.8,
  fontWeight: 700,
  color: C.inkDeep,
  lineHeight: 1.3,
};

/* --------------------------------- blocks -------------------------------- */

type Block = {
  id: string;
  node: ReactNode;
  /** Section title ko akela page ke end me nahi chhodna */
  keepWithNext?: boolean;
};

function buildMainBlocks(): Block[] {
  const blocks: Block[] = [];

  blocks.push({
    id: "work-title",
    keepWithNext: true,
    node: <SectionTitle icon="briefcase" label="Work Experience" />,
  });

  experience.forEach((job, index) => {
    blocks.push({
      id: `job-${index}`,
      node: (
        <div style={{ paddingBottom: 12 }}>
          <div style={{ fontSize: 10.2, fontWeight: 700, color: C.inkDeep }}>
            {job.role}
          </div>
          <div
            style={{
              fontSize: 9.4,
              fontWeight: 700,
              color: C.teal,
              paddingTop: 1,
            }}
          >
            {job.company}
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 7.7,
              color: C.muted,
              fontStyle: "italic",
              paddingTop: 2,
              paddingBottom: 5,
            }}
          >
            <span>{job.period}</span>
            <span>{job.location}</span>
          </div>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {job.points.map((point) => (
              <Bullet key={point}>{point}</Bullet>
            ))}
          </ul>
        </div>
      ),
    });
  });

  blocks.push({
    id: "projects-title",
    keepWithNext: true,
    node: (
      <div style={{ paddingTop: 4 }}>
        <SectionTitle icon="folder" label="Projects" />
      </div>
    ),
  });

  projects.forEach((project, index) => {
    blocks.push({
      id: `project-${index}`,
      node: (
        <div style={{ paddingBottom: 10 }}>
          <div style={{ fontSize: 9.8, fontWeight: 700, color: C.inkDeep }}>
            {project.name}
            {project.period ? (
              <span
                style={{
                  fontSize: 7.7,
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: C.muted,
                }}
              >
                {"  "}({project.period})
              </span>
            ) : null}
          </div>
          {project.url ? (
            <div
              style={{
                fontSize: 7.7,
                color: C.teal,
                paddingTop: 1,
                paddingBottom: 3,
                wordBreak: "break-all",
              }}
            >
              {project.url}
            </div>
          ) : null}
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {project.points.map((point) => (
              <Bullet key={point}>{point}</Bullet>
            ))}
          </ul>
        </div>
      ),
    });
  });

  return blocks;
}

function buildSideBlocks(): Block[] {
  const blocks: Block[] = [];
  const allSkills = skillGroups.flatMap((group) => group.items);

  blocks.push({
    id: "skills-title",
    keepWithNext: true,
    node: <SectionTitle icon="code" label="Skills" />,
  });
  blocks.push({
    id: "skills-chips",
    node: (
      <div style={{ paddingBottom: 10 }}>
        {allSkills.map((skill) => (
          <Chip key={skill} label={skill} />
        ))}
      </div>
    ),
  });

  blocks.push({
    id: "certs-title",
    keepWithNext: true,
    node: (
      <div style={{ paddingTop: 4 }}>
        <SectionTitle icon="award" label="Certifications" />
      </div>
    ),
  });
  certifications.forEach((cert, index) => {
    blocks.push({
      id: `cert-${index}`,
      node: (
        <div style={{ paddingBottom: 8 }}>
          <div style={sideItemTitle}>{cert.title}</div>
          <div
            style={{
              fontSize: 7.6,
              fontStyle: "italic",
              color: C.muted,
              lineHeight: 1.4,
              paddingTop: 1,
            }}
          >
            {cert.issuer}
            {cert.detail ? ` — ${cert.detail}` : ""}
          </div>
        </div>
      ),
    });
  });

  if (smallProjects.length) {
    blocks.push({
      id: "other-title",
      keepWithNext: true,
      node: (
        <div style={{ paddingTop: 4 }}>
          <SectionTitle icon="folder" label="Other Projects" />
        </div>
      ),
    });
    smallProjects.forEach((item, index) => {
      blocks.push({
        id: `small-${index}`,
        node: (
          <div style={{ paddingBottom: 7 }}>
            <div style={sideItemTitle}>{item.name}</div>
            <div
              style={{
                fontSize: 7.4,
                fontStyle: "italic",
                color: C.teal,
                wordBreak: "break-all",
                lineHeight: 1.35,
              }}
            >
              {item.url}
            </div>
          </div>
        ),
      });
    });
  }

  blocks.push({
    id: "education-title",
    keepWithNext: true,
    node: (
      <div style={{ paddingTop: 4 }}>
        <SectionTitle icon="cap" label="Education" />
      </div>
    ),
  });
  education.forEach((item, index) => {
    blocks.push({
      id: `edu-${index}`,
      node: (
        <div style={{ paddingBottom: 7 }}>
          <div style={sideItemTitle}>{item.degree}</div>
          <div style={{ fontSize: 7.7, color: C.body, lineHeight: 1.4 }}>
            {item.institute}
          </div>
          <div style={{ fontSize: 7.4, color: C.muted, lineHeight: 1.4 }}>
            {item.period}
            {item.location ? ` · ${item.location}` : ""}
          </div>
        </div>
      ),
    });
  });

  return blocks;
}

/* --------------------------------- header -------------------------------- */

function Header() {
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "stretch" }}>
      <div
        style={{
          width: MAIN_W,
          backgroundColor: C.mist,
          padding: "20px 22px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 26,
            fontWeight: 700,
            letterSpacing: 0.4,
            color: C.inkDeep,
            textTransform: "uppercase",
            lineHeight: 1.08,
          }}
        >
          {profile.name}
        </div>
        <div
          style={{
            fontSize: 10.5,
            fontWeight: 700,
            color: C.teal,
            paddingTop: 3,
            paddingBottom: 9,
          }}
        >
          {profile.role}
        </div>
        <div style={{ fontSize: 8.4, lineHeight: 1.5, color: C.body }}>
          {profile.summary}
        </div>
      </div>

      <div
        style={{
          flex: 1,
          backgroundColor: C.ink,
          padding: "17px 15px 8px",
          boxSizing: "border-box",
        }}
      >
        <ContactRow icon="mail" text={contact.email} />
        <ContactRow icon="phone" text={contact.phone} />
        <ContactRow icon="pin" text={contact.location} />
        <ContactRow icon="github" text={contact.githubLabel} />
        <ContactRow icon="linkedin" text={contact.linkedinLabel} />
      </div>
    </div>
  );
}

function Divider() {
  return (
    <div style={{ position: "relative", height: HEADER_GAP }}>
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 7,
          height: 1,
          backgroundColor: C.line,
        }}
      />
      <div
        style={{
          position: "absolute",
          left: MAIN_W - 5,
          top: 2,
          width: 11,
          height: 11,
          borderRadius: 11,
          backgroundColor: C.teal,
        }}
      />
    </div>
  );
}

/* ------------------------------- pagination ------------------------------- */

type Page = { main: Block[]; side: Block[]; available: number };

/**
 * Agar content ek page se thoda hi zyada hai to poore body ko 14% tak chhota
 * kar dete hain — taaki ek adhoore doosre page ki jagah ek saaf single-page
 * resume nikle. Isse zyada content hone par normal pagination chalti hai.
 */
const MIN_FIT_SCALE = 0.86;

function flow(
  blocks: Block[],
  heights: Record<string, number>,
  capacityFor: (pageIndex: number) => number,
): Block[][] {
  const pages: Block[][] = [];
  let index = 0;
  let pageIndex = 0;

  while (index < blocks.length) {
    const capacity = capacityFor(pageIndex);
    const page: Block[] = [];
    let used = 0;

    while (index < blocks.length) {
      const height = heights[blocks[index].id] ?? 0;
      if (used + height > capacity && page.length > 0) break;
      page.push(blocks[index]);
      used += height;
      index += 1;
      // ek block khud page se bada ho to usi page par rehne do (infinite loop se bacho)
      if (used > capacity) break;
    }

    // orphan section title ko agle page par bhejo
    while (page.length > 1 && page[page.length - 1].keepWithNext) {
      page.pop();
      index -= 1;
    }

    pages.push(page);
    pageIndex += 1;
  }

  return pages;
}

/* -------------------------------- component ------------------------------ */

export default function ResumeTemplate({
  preview = false,
}: {
  preview?: boolean;
}) {
  const mainBlocks = useMemo(buildMainBlocks, []);
  const sideBlocks = useMemo(buildSideBlocks, []);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const blockRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const [measured, setMeasured] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [heights, setHeights] = useState<Record<string, number>>({});

  const aliveRef = useRef(true);

  const measure = () => {
    if (!aliveRef.current) return;
    const next: Record<string, number> = {};
    [...mainBlocks, ...sideBlocks].forEach((block) => {
      const node = blockRefs.current[block.id];
      next[block.id] = node ? node.getBoundingClientRect().height : 0;
    });
    setHeaderHeight(headerRef.current?.getBoundingClientRect().height ?? 0);
    setHeights(next);
    setMeasured(true);
  };

  useEffect(() => {
    aliveRef.current = true;
    measure();
    // Fonts settle hone ke baad dobara measure — warna heights thodi galat aati hain
    if (typeof document !== "undefined" && document.fonts) {
      document.fonts.ready.then(measure).catch(() => undefined);
    }
    return () => {
      aliveRef.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { pages, scale } = useMemo<{ pages: Page[]; scale: number }>(() => {
    if (!measured) return { pages: [], scale: 1 };

    const bodyHeight = PAGE_H - MARGIN * 2;
    const firstPage = bodyHeight - headerHeight - HEADER_GAP;
    const capacityFor = (pageIndex: number) =>
      pageIndex === 0 ? firstPage : bodyHeight;

    const total = (blocks: Block[]) =>
      blocks.reduce((sum, block) => sum + (heights[block.id] ?? 0), 0);
    const tallestColumn = Math.max(total(mainBlocks), total(sideBlocks));

    // Single page me fit ho sakta hai?
    const fit = tallestColumn > 0 ? firstPage / tallestColumn : 1;
    if (fit >= MIN_FIT_SCALE) {
      const singleScale = Math.min(1, fit);
      return {
        scale: singleScale,
        pages: [
          {
            main: mainBlocks,
            side: sideBlocks,
            available: firstPage / singleScale,
          },
        ],
      };
    }

    const mainPages = flow(mainBlocks, heights, capacityFor);
    const sidePages = flow(sideBlocks, heights, capacityFor);
    const count = Math.max(mainPages.length, sidePages.length, 1);

    return {
      scale: 1,
      pages: Array.from({ length: count }, (_, index) => ({
        main: mainPages[index] ?? [],
        side: sidePages[index] ?? [],
        available: capacityFor(index),
      })),
    };
  }, [measured, heights, headerHeight, mainBlocks, sideBlocks]);

  return (
    <div
      id={RESUME_ROOT_ID}
      style={{
        fontFamily: FONT,
        color: C.body,
        display: "flex",
        flexDirection: "column",
        gap: preview ? 20 : 0,
        width: PAGE_W,
        position: "relative",
      }}
    >
      {/* -------- measuring pass: offscreen, sirf heights ke liye -------- */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: -30000,
          top: 0,
          width: PAGE_W,
          visibility: "hidden",
          pointerEvents: "none",
        }}
      >
        <div ref={headerRef} style={{ width: CONTENT_W }}>
          <Header />
        </div>
        {mainBlocks.map((block) => (
          <div
            key={block.id}
            ref={(node) => {
              blockRefs.current[block.id] = node;
            }}
            style={{ width: MAIN_W }}
          >
            {block.node}
          </div>
        ))}
        {sideBlocks.map((block) => (
          <div
            key={block.id}
            ref={(node) => {
              blockRefs.current[block.id] = node;
            }}
            style={{ width: SIDE_INNER_W }}
          >
            {block.node}
          </div>
        ))}
      </div>

      {/* ----------------------- asli A4 pages ----------------------- */}
      {pages.map((page, index) => (
        <div
          key={`page-${index}`}
          className={RESUME_PAGE_CLASS}
          style={{
            width: PAGE_W,
            height: PAGE_H,
            padding: MARGIN,
            boxSizing: "border-box",
            backgroundColor: C.white,
            overflow: "hidden",
            position: "relative",
            flexShrink: 0,
            border: preview ? `1px solid ${C.line}` : "none",
          }}
        >
          {index === 0 ? (
            <>
              <Header />
              <Divider />
            </>
          ) : null}

          <div
            style={{
              display: "flex",
              gap: COL_GAP / scale,
              alignItems: "flex-start",
              width: CONTENT_W / scale,
              transform: scale === 1 ? undefined : `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div style={{ width: MAIN_W / scale, flexShrink: 0 }}>
              {page.main.map((block) => (
                <div key={block.id}>{block.node}</div>
              ))}
            </div>

            {page.side.length ? (
              <div
                style={{
                  width: SIDE_W / scale,
                  flexShrink: 0,
                  backgroundColor: C.mistSoft,
                  padding: SIDE_PAD,
                  boxSizing: "border-box",
                  minHeight: page.available,
                }}
              >
                {page.side.map((block) => (
                  <div key={block.id}>{block.node}</div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}
