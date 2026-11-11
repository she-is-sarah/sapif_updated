"use client";

import { useEffect, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import "./ai.css";
import { styles } from "./styles";
import Pipeline from "./Pipeline";
import { LINKS, TRACKS, type Step, type TrackId } from "./data";

const ORDER: TrackId[] = ["video", "automation"];

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StepPanel({ step, weekCount }: { step: Step; weekCount: number }) {
  const weekNo = step.kind === "week" ? Number(step.label.replace(/\D/g, "")) : null;

  return (
    <>
      <p className={styles.kicker}>
        {weekNo ? `Week ${weekNo} of ${weekCount}` : step.kind === "final" ? "Where it all comes together" : "The concluding project"}
      </p>
      <h3 className={styles.panelTitle}>{step.title}</h3>

      {step.topics && (
        <>
          <p className={styles.miniLabel}>Topics</p>
          <ol className={styles.topics}>
            {step.topics.map((t, i) => (
              <li key={t} className={styles.topic}>
                <span className={styles.topicNum}>{String(i + 1).padStart(2, "0")}</span>
                <span>{t}</span>
              </li>
            ))}
          </ol>
        </>
      )}

      {step.projects && (
        <>
          <p className={styles.miniLabel}>Participants will create</p>
          <ol className={styles.projects}>
            {step.projects.map((p, i) => (
              <li key={p} className={styles.project}>
                <span className={styles.projectNum}>{i + 1}</span>
                <span>{p}</span>
              </li>
            ))}
          </ol>
        </>
      )}

      {step.outcome && (
        <div className={styles.outcome}>
          <p className={styles.miniLabel}>{step.outcomeLabel}</p>
          <p className={styles.outcomeText}>{step.outcome}</p>
          {step.extra && step.kind !== "final" && <p className={styles.outcomeExtra}>{step.extra}</p>}
          {step.pipeline && step.kind !== "final" && <Pipeline stages={step.pipeline} />}
        </div>
      )}

      {step.kind === "final" && step.pipeline && (
        <div className={styles.finalPipe}>
          <p className={styles.miniLabel}>{step.extra}</p>
          <Pipeline stages={step.pipeline} large label="Idea, then Prompt, then Image Generation, then Video Generation, then Editing" />
        </div>
      )}

      {step.closing && (
        <div className={styles.closing}>
          <p className={styles.miniLabel}>{step.closing.title}</p>
          <ul className={styles.closingList}>
            {step.closing.items.map((it) => (
              <li key={it}>{it}</li>
            ))}
          </ul>
        </div>
      )}

      {step.abilities && (
        <div className={styles.abilities}>
          <p className={styles.miniLabel}>What participants will learn to do</p>
          <ul className={styles.abilityList}>
            {step.abilities.map((a) => (
              <li key={a} className={styles.ability}>
                <svg viewBox="0 0 20 20" width="16" height="16" aria-hidden="true" className={styles.tick}>
                  <path d="M4 10.5l4 4 8-9" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>{a}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}

export default function Curriculum() {
  const [trackId, setTrackId] = useState<TrackId>("video");
  const [idx, setIdx] = useState<Record<TrackId, number>>({ video: 0, automation: 0 });
  const railRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const track = TRACKS[trackId];
  const active = idx[trackId];
  const step = track.steps[active];
  const weekCount = track.steps.filter((s) => s.kind === "week").length;

  // Let links elsewhere on the page (e.g. "#curriculum-automation") pre-select a programme.
  useEffect(() => {
    const apply = () => {
      if (window.location.hash === "#curriculum-video") setTrackId("video");
      if (window.location.hash === "#curriculum-automation") setTrackId("automation");
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, []);

  const select = (i: number) => setIdx((prev) => ({ ...prev, [trackId]: i }));

  const onRailKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    const n = track.steps.length;
    let next = active;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") next = (active + 1) % n;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") next = (active - 1 + n) % n;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = n - 1;
    else return;
    e.preventDefault();
    select(next);
    railRefs.current[next]?.focus();
  };

  return (
    <div className={styles.cur} data-track={trackId}>
      <div className={styles.switcher} role="group" aria-label="Choose a programme" data-track={trackId}>
        <span className={styles.switchInd} aria-hidden="true" />
        {ORDER.map((id) => (
          <button
            key={id}
            id={`curriculum-${id}`}
            type="button"
            aria-pressed={trackId === id}
            className={styles.switchBtn}
            onClick={() => setTrackId(id)}
          >
            <span className={styles.switchLetter}>{TRACKS[id].letter}</span>
            <span>{TRACKS[id].tab}</span>
          </button>
        ))}
      </div>

      <div className={styles.curHead} key={`head-${trackId}`}>
        <div>
          <p className={styles.miniLabel}>{track.subtitle}</p>
          <ul className={styles.facts}>
            {track.facts.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.curLayout}>
        <div
          className={styles.rail}
          role="tablist"
          aria-orientation="vertical"
          aria-label={`${track.title} curriculum`}
        >
          {track.steps.map((s, i) => (
            <button
              key={s.id}
              ref={(el) => {
                railRefs.current[i] = el;
              }}
              id={`tab-${s.id}`}
              type="button"
              role="tab"
              aria-selected={i === active}
              aria-controls="curriculum-panel"
              tabIndex={i === active ? 0 : -1}
              data-done={i < active}
              className={styles.railBtn}
              onClick={() => select(i)}
              onKeyDown={onRailKey}
            >
              <span className={styles.railDot} aria-hidden="true" />
              <span className={styles.railNum}>{s.label}</span>
              <span className={styles.railTitle}>{s.title}</span>
            </button>
          ))}
        </div>

        <div
          id="curriculum-panel"
          role="tabpanel"
          aria-labelledby={`tab-${step.id}`}
          className={styles.panel}
          key={`${trackId}-${step.id}`}
        >
          <StepPanel step={step} weekCount={weekCount} />

          <div className={styles.panelFoot}>
            <div className={styles.stepNav}>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => select(Math.max(0, active - 1))}
                disabled={active === 0}
              >
                <Arrow /> <span>Previous</span>
              </button>
              <button
                type="button"
                className={styles.navBtn}
                onClick={() => select(Math.min(track.steps.length - 1, active + 1))}
                disabled={active === track.steps.length - 1}
              >
                <span>Next</span> <Arrow />
              </button>
            </div>
            <a
              className={`${styles.btn} ${trackId === "video" ? styles.btnPurple : styles.btnLime}`}
              href={LINKS[trackId]}
              target="_blank"
              rel="noopener noreferrer"
            >
              Join {track.title} <Arrow />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
