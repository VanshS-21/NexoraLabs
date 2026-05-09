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
  },
  {
    title: "Northside Clinic",
    category: "Care service website",
    proof: "Reduced patient confusion with service pages, trust cues, and contact routes.",
    image: "/work-clinic.svg",
    placement: "workTopRight",
    tone: "workSky",
  },
  {
    title: "Pulse Coach",
    category: "Fitness landing page",
    proof: "Turned a personal brand into a sharp offer page for coaching leads.",
    image: "/work-fitness.svg",
    placement: "workBottomLeft",
    tone: "workInk",
  },
  {
    title: "Bloom Studio",
    category: "Salon launch page",
    proof: "Packaged services, location details, and booking intent for a premium local launch.",
    image: "/work-salon.svg",
    placement: "workBottomRight",
    tone: "workPeach",
  },
] as const;

export function WorkShowcase() {
  return (
    <>
      <section id="work" className={styles.workSection}>
        <div className={styles.workStage}>
          <div className={styles.workHeader}>
            <p className={styles.workKicker}>Selected work</p>
            <h2>Proof-shaped websites</h2>
            <p>Each direction is built around the job your buyer needs the site to do before they contact you.</p>
            <a href="#contact">Talk through your project</a>
          </div>

          <div className={styles.workProjectField} aria-label="Selected website projects">
            {workProjects.map((project) => (
              <article
                className={`${styles.workProject} ${styles[project.placement]} ${styles[project.tone]}`}
                aria-label={`${project.title}, ${project.category}`}
                key={project.title}
              >
                <div className={styles.workProjectImage}>
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    sizes="(max-width: 760px) 72vw, 38vw"
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
    </>
  );
}
