import styles from "./page.module.css";

const testimonials = [
  {
    name: "Akhil Lodha",
    role: "Financial advisor",
    proof: "Clarified high-trust enquiries",
    quote:
      "They dug into what our clients ask before they call. The new website explains our value quickly, handles trust upfront, and makes enquiries feel more prepared.",
    mark: "01",
    tone: "testimonialWarm",
  },
  {
    name: "Angelique Overton",
    role: "Salon owner",
    proof: "Turned services into bookings",
    quote:
      "Nexora took our scattered service list, photos, and launch notes and turned them into a site that feels polished without becoming stiff.",
    mark: "02",
    tone: "testimonialRose",
  },
  {
    name: "Kevin Khoury",
    role: "Local studio founder",
    proof: "Strategy, design, and launch in one flow",
    quote:
      "The process was calm and clear. They handled strategy, design, and launch without making us chase five different people or translate design language.",
    mark: "03",
    tone: "testimonialMint",
  },
] as const;

export function TestimonialStack() {
  return (
    <>
      <section
        className={styles.testimonialsSection}
        aria-labelledby="testimonials-heading"
        data-testimonial-section
      >
        <div className={styles.testimonialSticky}>
          <div className={styles.testimonialIntro}>
            <div className={styles.sectionKicker}>Client notes</div>
            <h2 id="testimonials-heading">Client proof, in plain words</h2>
            <p className={styles.sectionLead}>
              Practical outcomes from owners who needed their site to feel sharper, clearer, and easier to trust.
            </p>
            <div className={styles.testimonialProgress} aria-hidden="true">
              <span>Notes</span>
              <div className={styles.progressTrack}>
                <i />
              </div>
            </div>
          </div>

          <div className={styles.testimonialDeck} aria-label="Partner stories">
            {testimonials.map((testimonial) => (
              <article
                className={`${styles.testimonialCard} ${styles[testimonial.tone]}`}
                data-testimonial-card
                key={testimonial.name}
              >
                <div className={styles.testimonialCopy}>
                  <span>{testimonial.mark}</span>
                  <h3>{testimonial.name}</h3>
                  <strong>{testimonial.proof}</strong>
                  <p>{testimonial.quote}</p>
                  <small>{testimonial.role}</small>
                </div>
                <div className={styles.testimonialPattern} aria-hidden="true" />
                <div className={styles.testimonialSticker} aria-hidden="true">
                  <b>Proof</b>
                  <span>first</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
