import Image from "next/image";
import styles from "@/styles/work.module.css";

const workProjects = [
  {
    title: "Corner Bistro",
    category: "Table bookings up",
    proof: "Menu, booking, and event enquiries arranged around one clear next step.",
    image: "/work-bistro.svg",
    tone: "workSage",
    sticker: "Bookings",
    rotate: "-3.4",
    href: "#contact",
  },
  {
    title: "Northside Clinic",
    category: "Patient trust built",
    proof: "Service pages, credentials, and FAQs that reduce hesitation before the first call.",
    image: "/work-clinic.svg",
    tone: "workSky",
    sticker: "Care routes",
    rotate: "2.7",
    href: "#contact",
  },
  {
    title: "Pulse Coach",
    category: "Enquiries doubled",
    proof: "Personal brand turned into a focused coaching offer with a clear enquiry path.",
    image: "/work-coach.svg",
    tone: "workInk",
    sticker: "Lead ready",
    rotate: "1.8",
    href: "#contact",
  },
  {
    title: "Bloom Studio",
    category: "Launch bookings live",
    proof: "Services, location, and price cues packaged for a premium local launch.",
    image: "/work-bloom.svg",
    tone: "workPeach",
    sticker: "Launch kit",
    rotate: "-2.2",
    href: "#contact",
  },
] as const;

export function WorkShowcase() {
  return (
    <section id="work" className={styles.workSection} data-work-section>
      <div className={styles.workStage} data-work-stage>
        <div className={styles.workHeader} data-work-center>
          <p className={styles.workKicker}>Selected work</p>
          <h2>Real projects, pinned to the wall</h2>
          <p>Every preview starts with a real decision: book a table, trust a clinic, enquire about coaching, or choose a salon.</p>
          <a href="#contact" aria-label="See what we would build for you">See what we would build for you</a>
        </div>

        <div className={styles.workProjectField} aria-label="Selected website projects">
          {workProjects.map((project, index) => (
            <a
              href={project.href}
              className={`${styles.workProject} ${styles[project.tone]}`}
              aria-label={`${project.title}, ${project.category}`}
              data-work-card
              data-work-rotate={project.rotate}
              style={{ "--work-card-index": index } as React.CSSProperties}
              key={project.title}
            >
              <span className={styles.workSticker} aria-hidden="true">
                {project.sticker}
              </span>
              <div className={styles.workProjectImage}>
                <Image
                  src={project.image}
                  alt={`Preview of ${project.title}`}
                  fill
                  sizes="(max-width: 760px) 92vw, 48vw"
                />
              </div>
              <div className={styles.workProjectMeta}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.proof}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
