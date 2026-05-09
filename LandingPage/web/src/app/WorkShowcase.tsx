import Image from "next/image";
import styles from "./page.module.css";

const workProjects = [
  {
    title: "Corner Bistro",
    category: "Restaurant booking site",
    proof: "Menu, table booking, and private event enquiries in one clear flow.",
    image: "/work-bistro.svg",
    placement: "workTopLeft",
    tone: "workSage",
    sticker: "Bookings",
    rotate: "-3.4",
  },
  {
    title: "Northside Clinic",
    category: "Care service website",
    proof: "Reduced patient confusion with service pages, trust cues, and contact routes.",
    image: "/work-clinic.svg",
    placement: "workTopRight",
    tone: "workSky",
    sticker: "Care routes",
    rotate: "2.7",
  },
  {
    title: "Pulse Coach",
    category: "Fitness landing page",
    proof: "Turned a personal brand into a sharp offer page for coaching leads.",
    image: "/work-fitness.svg",
    placement: "workBottomLeft",
    tone: "workInk",
    sticker: "Lead ready",
    rotate: "1.8",
  },
  {
    title: "Bloom Studio",
    category: "Salon launch page",
    proof: "Packaged services, location details, and booking intent for a premium local launch.",
    image: "/work-salon.svg",
    placement: "workBottomRight",
    tone: "workPeach",
    sticker: "Launch kit",
    rotate: "-2.2",
  },
] as const;

export function WorkShowcase() {
  return (
    <section id="work" className={styles.workSection} data-work-section>
      <div className={styles.workStage} data-work-stage>
        <div className={styles.workHeader} data-work-center>
          <p className={styles.workKicker}>Selected work</p>
          <h2>Proof, pinned to the wall</h2>
          <p>Every preview is built around a practical job: bookings, trust, enquiries, launch confidence, and fewer confused customers.</p>
          <a href="#contact">Talk through your project</a>
        </div>

        <div className={styles.workProjectField} aria-label="Selected website projects">
          {workProjects.map((project) => (
            <article
              className={`${styles.workProject} ${styles[project.placement]} ${styles[project.tone]}`}
              aria-label={`${project.title}, ${project.category}`}
              data-work-card
              data-work-rotate={project.rotate}
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
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
