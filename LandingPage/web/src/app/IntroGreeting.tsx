import styles from "./page.module.css";

const capabilityPills = [
  { label: "Design systems", icon: "grid", pos: "pos-0", drift: "34" },
  { label: "UI/UX", icon: "square", pos: "pos-1", drift: "-42" },
  { label: "Research", icon: "search", pos: "pos-2", drift: "52" },
  { label: "Prototyping", icon: "frame", pos: "pos-3", drift: "-38" },
  { label: "Animation", icon: "motion", pos: "pos-4", drift: "28" },
  { label: "Strategy", icon: "compass", pos: "pos-5", drift: "-48" },
] as const;

const greetingLines = [
  "Strategy on the left",
  "taste on the right",
  "all the fiddly web bits",
  "quietly handled",
  "before launch day",
];

function CapabilityGlyph({ type }: { type: string }) {
  if (type === "grid") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5 5h6v6H5zM13 5h6v6h-6zM5 13h6v6H5zM13 13h6v6h-6z" />
      </svg>
    );
  }

  if (type === "square") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 6h12v12H6z" />
      </svg>
    );
  }

  if (type === "search") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="10.5" cy="10.5" r="5.5" />
        <path d="M15 15l4 4" />
      </svg>
    );
  }

  if (type === "frame") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 4H5v3M16 4h3v3M8 20H5v-3M16 20h3v-3" />
        <path d="M9 9h6v6H9z" />
      </svg>
    );
  }

  if (type === "motion") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M6 8c3-4 9 4 12 0M6 16c3 4 9-4 12 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}

export function IntroGreeting() {
  return (
    <>
      <section
        id="intro"
        className={styles.greetingSection}
        aria-label="How Nexora helps"
        data-greeting-section
      >
        <div className={styles.greetingCenter}>
          <div className={styles.greetingLabel}>
            <span />
            <p>Hello!</p>
            <span />
          </div>
          <h2 data-greeting-copy>
            {greetingLines.map((line) => (
              <span className={styles.greetingLine} data-ink-line key={line}>
                {line}
              </span>
            ))}
          </h2>
        </div>
        <div className={styles.capabilityOrbit} aria-label="Nexora capabilities">
          {capabilityPills.map((pill) => (
            <div
              className={`${styles.capabilityPill} ${styles[pill.pos]}`}
              data-capability-pill
              data-pill-drift={pill.drift}
              key={pill.label}
            >
              <span className={`${styles.capabilityIcon} ${styles[pill.icon]}`}>
                <CapabilityGlyph type={pill.icon} />
              </span>
              <span>{pill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
