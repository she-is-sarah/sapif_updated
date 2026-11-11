import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./ai.css";
import { styles } from "./styles";
import { Header } from "@/components/sapif/header";
import { Footer } from "@/components/sapif/footer";
import Curriculum from "./Curriculum";
import {
  AUTOMATION_HIGHLIGHTS,
  BUILD_AUTOMATION,
  BUILD_VIDEO,
  LINKS,
  MARQUEE,
  START_DATE,
  VIDEO_AREAS,
  WHY,
} from "./data";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-ai-display",
  display: "swap",
});
const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-ai-serif",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-ai-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AI Advantage | Sapif",
  description:
    "Practical training in AI Video Creation and AI Automation with Sapif. Create with AI. Build with AI. Stay ahead. Starts November 18, 2026.",
};

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Glyph({ kind, x, y }: { kind: "form" | "sheet" | "bell" | "spark" | "mail"; x: number; y: number }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return (
    <g transform={`translate(${x - 11} ${y - 11})`} className={styles.glyph}>
      {kind === "form" && (
        <>
          <rect x="3" y="2" width="16" height="18" rx="2" {...common} />
          <path d="M7 8h8M7 12h8M7 16h4" {...common} />
        </>
      )}
      {kind === "sheet" && (
        <>
          <rect x="2" y="3" width="18" height="16" rx="2" {...common} />
          <path d="M2 9h18M2 14h18M9 3v16" {...common} />
        </>
      )}
      {kind === "bell" && (
        <>
          <path d="M5 16V10a6 6 0 0 1 12 0v6l1.5 2h-15z" {...common} />
          <path d="M9 20h4" {...common} />
        </>
      )}
      {kind === "spark" && <path d="M11 2l2.2 6.8L20 11l-6.8 2.2L11 20l-2.2-6.8L2 11l6.8-2.2z" {...common} />}
      {kind === "mail" && (
        <>
          <rect x="2" y="4" width="18" height="14" rx="2" {...common} />
          <path d="M3 6l8 7 8-7" {...common} />
        </>
      )}
    </g>
  );
}

function WorkflowIllustration() {
  const nodes = [
    { x: 70, y: 110, g: "form" as const, t: "FORM", n: "1" },
    { x: 210, y: 110, g: "sheet" as const, t: "SHEETS", n: "2", above: true },
    { x: 350, y: 110, g: "bell" as const, t: "NOTIFY", n: "3" },
    { x: 210, y: 260, g: "spark" as const, t: "AI", n: "4" },
    { x: 350, y: 260, g: "mail" as const, t: "DRAFT", n: "5" },
  ];
  return (
    <svg className={styles.flowSvg} viewBox="0 0 420 330" role="img" aria-label="Illustration of a connected workflow: a form feeds Google Sheets, which triggers a notification and an AI step that drafts a reply.">
      <g className={styles.flowLines} fill="none">
        <path d="M100 110H180" />
        <path d="M240 110H320" />
        <path d="M210 140V230" />
        <path d="M240 260H320" />
      </g>
      <g className={styles.flowLinesLive} fill="none">
        <path d="M100 110H180" />
        <path d="M240 110H320" />
        <path d="M210 140V230" />
        <path d="M240 260H320" />
      </g>
      {nodes.map((n) => (
        <g key={n.t}>
          <circle cx={n.x} cy={n.y} r="30" className={styles.flowNode} />
          <Glyph kind={n.g} x={n.x} y={n.y} />
          <circle cx={n.x + 24} cy={n.y - 24} r="9" className={styles.flowBadge} />
          <text x={n.x + 24} y={n.y - 20.5} textAnchor="middle" className={styles.flowBadgeText}>
            {n.n}
          </text>
          <text x={n.x} y={n.y + ("above" in n && n.above ? -42 : 52)} textAnchor="middle" className={styles.flowText}>
            {n.t}
          </text>
        </g>
      ))}
      <circle r="5" className={styles.flowPulse}>
        <animateMotion dur="6s" repeatCount="indefinite" path="M70 110H210V260H350" />
      </circle>
    </svg>
  );
}

export default function AIAdvantagePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className={`${display.variable} ${serif.variable} ${mono.variable} ${styles.root}`}>
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.wrap}>
          <div className={styles.heroTop}>
            <span className={styles.label}>Sapif presents</span>
            <span className={styles.heroRule} aria-hidden="true" />
            <span className={`${styles.label} ${styles.labelDate}`}>
              <span className={styles.pulseDot} aria-hidden="true" /> Starts {START_DATE}
            </span>
          </div>

          <h1 id="hero-title" className={styles.heroTitle}>
            <span className={styles.tAI}>AI</span> <span className={styles.tAdv}>Advantage</span>
          </h1>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-10">
            <div className={`${styles.heroCopy} lg:col-span-4`}>
              <p className={styles.heroSub}>
                Create with AI.
                <br />
                Build with AI.
                <br />
                <em>Stay ahead.</em>
              </p>
              <p className={styles.heroDesc}>
                Explore the possibilities of artificial intelligence through practical training in AI Video Creation and AI
                Automation. Learn to transform ideas into compelling content, build intelligent workflows and develop skills
                you can demonstrate through real projects.
              </p>
              <div className={styles.ctas}>
                <a className={`${styles.btn} ${styles.btnPurple}`} href="#video">
                  Explore AI Video Creation <Arrow />
                </a>
                <a className={`${styles.btn} ${styles.btnPaper}`} href="#automation">
                  Explore AI Automation <Arrow />
                </a>
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className={styles.stage}>
                <div className={`${styles.panelCreate}`}>
                  <div className={styles.panelHead}>
                    <span className={styles.label}>01 · Create</span>
                    <span className={styles.labelMuted}>AI video</span>
                  </div>
                  <div className={styles.shot} role="img" aria-label="Abstract illustration of an AI-generated image: nested arches against a setting sun.">
                    <span className={styles.sun} />
                    <span className={`${styles.arch} ${styles.archA}`} />
                    <span className={`${styles.arch} ${styles.archB}`} />
                    <span className={`${styles.arch} ${styles.archC}`} />
                    <span className={styles.shotTag}>Frame 03 · 16:9</span>
                  </div>
                  <p className={styles.prompt}>
                    <span className={styles.promptKey}>Prompt</span>
                    <span>
                      golden-hour arches, wide shot
                      <span className={styles.caret} aria-hidden="true" />
                    </span>
                  </p>
                  <div className={styles.strip} aria-hidden="true">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span key={i} className={`${styles.thumb} ${styles[`thumb${i}` as keyof typeof styles]}`} />
                    ))}
                    <span className={styles.playhead} />
                  </div>
                </div>

                <div className={styles.panelBuild}>
                  <div className={styles.panelHead}>
                    <span className={styles.label}>02 · Build</span>
                    <span className={styles.labelMuted}>Automation</span>
                  </div>
                  <WorkflowIllustration />
                  <p className={styles.caption}>Trigger → action → AI → output</p>
                </div>

                <span className={styles.seam} aria-hidden="true">
                  ×
                </span>
              </div>
              <p className={styles.illusNote}>Illustrative composition. Not a product screenshot.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── INTRO ───────────────────────── */}
      <section className={styles.intro} aria-labelledby="intro-title">
        <div className={styles.wrap}>
          <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-12 lg:gap-x-10">
            <p className={`${styles.label} ${styles.labelInk} lg:col-span-2`}>
              <span className={styles.sectionNo}>01</span> The idea
            </p>
            <h2 id="intro-title" className={`${styles.introTitle} ${styles.reveal} lg:col-span-10`}>
              Don&rsquo;t just learn AI. <span className={styles.introSerif}>Learn what you can</span>{" "}
              <span className={styles.mark}>do</span> with it.
            </h2>
            <div className="lg:col-span-5 lg:col-start-6">
              <p className={`${styles.lead} ${styles.reveal}`}>
                AI is changing how we create, work and solve problems. AI Advantage gives you the opportunity to explore these
                possibilities through practical training, guided projects and real-world applications.
              </p>
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className={`${styles.body} ${styles.reveal}`}>
                Whether you want to create compelling videos or build systems that automate everyday tasks, there is a track
                designed to help you get started.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.marquee} aria-hidden="true">
          <div className={styles.marqueeTrack}>
            {[...MARQUEE, ...MARQUEE].map((m, i) => (
              <span key={`${m}-${i}`} className={styles.marqueeItem}>
                {m}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── TRACKS ───────────────────────── */}
      <section id="tracks" className={styles.tracks} aria-labelledby="tracks-title">
        <div className={`${styles.wrap} ${styles.tracksHead}`}>
          <p className={`${styles.label} ${styles.labelInk}`}>
            <span className={styles.sectionNo}>02</span> Two tracks
          </p>
          <h2 id="tracks-title" className={`${styles.sectionTitle} ${styles.reveal}`}>
            Two ways to use AI. <span className={styles.serifItalic}>Pick yours.</span>
          </h2>
        </div>

        {/* Track one */}
        <article id="video" className={`${styles.band} ${styles.bandVideo}`}>
          <div className={`${styles.wrap} ${styles.bandGrid}`}>
            <div className={styles.bandNumWrap}>
              <span className={styles.bandNum} aria-hidden="true">
                01
              </span>
              <span className={`${styles.label} ${styles.labelInk}`}>Track one</span>
            </div>
            <div className={styles.bandMain}>
              <h3 className={`${styles.bandTitle} ${styles.reveal}`}>AI Video Creation</h3>
              <p className={`${styles.lead} ${styles.bandLead}`}>
                Learn how to use AI to transform ideas into images, videos, UGC content and brand commercials.
              </p>
              <div className={styles.bandActions}>
                <a className={`${styles.btn} ${styles.btnPurple}`} href={LINKS.video} target="_blank" rel="noopener noreferrer">
                  Join AI Video Creation <Arrow />
                </a>
                <a className={styles.textLink} href="#curriculum-video">
                  See the curriculum
                </a>
              </div>
            </div>
            <div className={styles.bandSide}>
              <p className={`${styles.label} ${styles.labelInk}`}>Key areas</p>
              <ol className={styles.areas}>
                {VIDEO_AREAS.map((a, i) => (
                  <li key={a} className={styles.area}>
                    <span className={styles.areaNum}>{String(i + 1).padStart(2, "0")}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </article>

        {/* Track two */}
        <article id="automation" className={`${styles.band} ${styles.bandAuto}`}>
          <div className={`${styles.wrap} ${styles.bandGrid} ${styles.bandGridRev}`}>
            <div className={styles.bandNumWrap}>
              <span className={styles.bandNum} aria-hidden="true">
                02
              </span>
              <span className={styles.label}>Track two</span>
            </div>
            <div className={styles.bandMain}>
              <p className={styles.platform}>
                <span className={styles.platformChip}>Platform</span> Make.com
              </p>
              <h3 className={`${styles.bandTitle} ${styles.reveal}`}>AI Automation</h3>
              <p className={styles.classTitle}>SAPIF AI Automation Class &mdash; Edition 2</p>
              <p className={`${styles.lead} ${styles.bandLead}`}>
                Learn to build practical automations using Make.com, connect different applications, integrate AI into workflows
                and create intelligent systems that solve real-world problems.
              </p>
              <div className={styles.bandActions}>
                <a className={`${styles.btn} ${styles.btnLime}`} href={LINKS.automation} target="_blank" rel="noopener noreferrer">
                  Join AI Automation <Arrow />
                </a>
                <a className={`${styles.textLink} ${styles.textLinkLight}`} href="#curriculum-automation">
                  See the curriculum
                </a>
              </div>
            </div>
            <div className={styles.bandSide}>
              <p className={styles.label}>Programme highlights</p>
              <dl className={styles.spec}>
                {AUTOMATION_HIGHLIGHTS.map((h, i) => (
                  <div key={h} className={styles.specRow}>
                    <dt>{String(i + 1).padStart(2, "0")}</dt>
                    <dd>{h}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </article>
      </section>

      {/* ───────────────────────── CURRICULUM ───────────────────────── */}
      <section id="curriculum" className={styles.curriculum} aria-labelledby="curriculum-title">
        <div className={styles.wrap}>
          <div className={styles.curTop}>
            <p className={`${styles.label} ${styles.labelInk}`}>
              <span className={styles.sectionNo}>03</span> Curriculum
            </p>
            <h2 id="curriculum-title" className={`${styles.sectionTitle} ${styles.reveal}`}>
              Explore the programme, <span className={styles.serifItalic}>week by week.</span>
            </h2>
            <p className={styles.body}>Switch between tracks and open any week. Each one ends in something you build.</p>
          </div>
          <Curriculum />
        </div>
      </section>

      {/* ───────────────────────── WHAT YOU WILL BUILD ───────────────────────── */}
      <section className={styles.build} aria-labelledby="build-title">
        <div className={styles.wrap}>
          <div className={styles.buildTop}>
            <p className={styles.label}>
              <span className={styles.sectionNo}>04</span> What you will build
            </p>
            <h2 id="build-title" className={`${styles.sectionTitle} ${styles.titleOnDark} ${styles.reveal}`}>
              Not just lessons. <span className={styles.serifItalic}>Things you can show.</span>
            </h2>
          </div>

          <div className={styles.buildGrid}>
            {/* Video side */}
            <div className={styles.buildVideo}>
              <p className={`${styles.label} ${styles.accentPurple}`}>AI Video Creation</p>

              <div className={styles.frames}>
                <figure className={styles.figPhone}>
                  <div className={styles.phone} role="img" aria-label="Abstract vertical video frame representing a UGC-style video.">
                    <span className={styles.phoneBar} />
                    <span className={styles.phoneSun} />
                    <span className={styles.phoneArch} />
                    <span className={styles.phoneCaption}>
                      <i />
                      <i />
                    </span>
                  </div>
                  <figcaption>
                    <strong>{BUILD_VIDEO[0].name}</strong>
                    <span>{BUILD_VIDEO[0].note}</span>
                  </figcaption>
                </figure>

                <figure className={styles.figWide}>
                  <div className={styles.wide} role="img" aria-label="Abstract widescreen frame representing a brand commercial, with a storyboard strip beneath.">
                    <span className={styles.bottle} />
                    <span className={styles.wideTag}>16:9</span>
                  </div>
                  <div className={styles.board} aria-hidden="true">
                    {["Scene 1", "Scene 2", "Scene 3", "Scene 4"].map((s, i) => (
                      <span key={s} className={`${styles.boardTile} ${styles[`board${i}` as keyof typeof styles]}`}>
                        {s}
                      </span>
                    ))}
                  </div>
                  <figcaption>
                    <strong>{BUILD_VIDEO[1].name}</strong>
                    <span>{BUILD_VIDEO[1].note}</span>
                  </figcaption>
                </figure>
              </div>
            </div>

            {/* Automation side */}
            <div className={styles.buildAuto}>
              <p className={`${styles.label} ${styles.accentLime}`}>AI Automation</p>
              <ol className={styles.projectRows}>
                {BUILD_AUTOMATION.map((p, i) => (
                  <li key={p.name} className={styles.projectRow}>
                    <span className={styles.rowNum}>{String(i + 1).padStart(2, "0")}</span>
                    <div className={styles.rowBody}>
                      <h3 className={styles.rowTitle}>{p.name}</h3>
                      <p className={styles.rowFlow} aria-label={p.flow.join(", then ")}>
                        {p.flow.map((f, j) => (
                          <span key={f} className={styles.flowItem}>
                            <span className={styles.flowChip}>{f}</span>
                            {j < p.flow.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
                          </span>
                        ))}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <p className={styles.buildNote}>
            These are examples of the types of projects participants work on. They are illustrations, not completed student
            work.
          </p>
        </div>
      </section>

      {/* ───────────────────────── WHY ───────────────────────── */}
      <section id="why-sapif" className={styles.why} aria-labelledby="why-title">
        <div className={styles.wrap}>
          <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:gap-x-10">
            <div className="lg:col-span-6">
              <div className={styles.whyStick}>
                <p className={`${styles.label} ${styles.labelInk}`}>
                  <span className={styles.sectionNo}>05</span> Why AI Advantage
                </p>
                <h2 id="why-title" className={`${styles.whyTitle} ${styles.reveal}`}>
                  Move beyond knowing AI exists. <span className={styles.serifItalic}>Learn how to use it.</span>
                </h2>
              </div>
            </div>
            <ul className={`${styles.whyList} lg:col-span-6`}>
              {WHY.map((w, i) => (
                <li key={w.k} className={`${styles.whyRow} ${styles.reveal}`}>
                  <span className={styles.whyIdx}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.whyKey}>{w.k}</span>
                  <span className={styles.whyVal}>{w.v}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ───────────────────────── REGISTER ───────────────────────── */}
      <section id="register" className={styles.final} aria-labelledby="final-title">
        <div className={styles.wrap}>
          <p className={`${styles.label} ${styles.labelOnPurple}`}>
            <span className={styles.sectionNo}>06</span> Register &middot; Starts {START_DATE}
          </p>
          <h2 id="final-title" className={`${styles.finalTitle} ${styles.reveal}`}>
            Your next <span className={styles.serifItalic}>advantage</span> starts here.
          </h2>
          <p className={styles.finalLead}>
            Choose your track, explore what AI can help you create, and take the next step in developing your digital skills.
          </p>

          <div className={styles.finalCtas}>
            <a className={`${styles.bigCta} ${styles.bigCtaPaper}`} href={LINKS.video} target="_blank" rel="noopener noreferrer">
              <span className={styles.bigCtaNo}>A</span>
              <span className={styles.bigCtaText}>Register for AI Video Creation</span>
              <Arrow />
            </a>
            <a className={`${styles.bigCta} ${styles.bigCtaInk}`} href={LINKS.automation} target="_blank" rel="noopener noreferrer">
              <span className={styles.bigCtaNo}>B</span>
              <span className={styles.bigCtaText}>Register for AI Automation</span>
              <Arrow />
            </a>
          </div>

          <div id="contact" className={styles.contact}>
            <div>
              <p className={`${styles.label} ${styles.labelOnPurple}`}>For enquiries</p>
              <a className={styles.phone2} href={LINKS.phoneTel}>
                {LINKS.phoneDisplay}
              </a>
            </div>
            <a className={`${styles.btn} ${styles.btnInk}`} href={LINKS.enquiry} target="_blank" rel="noopener noreferrer">
              Chat on WhatsApp <Arrow />
            </a>
          </div>

          <p className={styles.tagline}>
            <a href={LINKS.site} target="_blank" rel="noopener noreferrer">
              Sapif
            </a>{" "}
            &mdash; Building the next generation of Digital talents, and revolutionizing the Ed-tech Ecosystem.
          </p>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  );
}
