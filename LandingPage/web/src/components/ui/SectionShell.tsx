import type { ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  tone?: "plain" | "warm" | "ink";
};

export const SectionShell = ({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "plain",
}: SectionShellProps) => (
  <section className={`section section-${tone}`} id={id}>
    <div className="section-inner">
      <div className="section-heading">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
      {children}
    </div>
  </section>
);
