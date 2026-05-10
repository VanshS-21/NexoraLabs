import styles from "@/styles/testimonial.module.css";

const testimonials = [
  {
    name: "Akhil Lodha",
    role: "Financial advisor",
    proof: "Made the offer easier to choose",
    quote:
      "They dug into what clients ask before they call. The new site explains our value quickly, handles trust upfront, and makes enquiries feel more prepared.",
    tone: "testimonialWarm",
  },
  {
    name: "Angelique Overton",
    role: "Salon owner",
    proof: "Turned a service list into bookings",
    quote:
      "Nexora took our scattered service list, photos, price questions, and launch notes and turned them into a site that feels polished without becoming stiff.",
    tone: "testimonialRose",
  },
  {
    name: "Kevin Khoury",
    role: "Local studio founder",
    proof: "Strategy and build in one flow",
    quote:
      "The process was calm and clear. They handled positioning, design, and launch without making us chase five different people or translate web jargon.",
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
            <h2 id="testimonials-heading">What clients say after launch</h2>
            <p className={styles.sectionLead}>
              Outcomes from owners who needed a clearer offer, more credibility, and more enquiries.
            </p>
            <nav className={styles.testimonialNav} aria-label="Testimonial cards">
              {testimonials.map((testimonial, index) => (
                <button
                  type="button"
                  className={styles.testimonialNavDot}
                  data-testimonial-nav-dot
                  data-testimonial-index={index}
                  key={testimonial.name}
                  aria-label={`${testimonial.name}, ${testimonial.role}`}
                />
              ))}
            </nav>
          </div>

          <div className={styles.testimonialDeck} aria-label="Partner stories">
            {testimonials.map((testimonial) => (
              <article
                className={`${styles.testimonialCard} ${styles[testimonial.tone]}`}
                data-testimonial-card
                key={testimonial.name}
              >
                <div className={styles.testimonialCopy}>
                  <h3>{testimonial.proof}</h3>
                  <p>{testimonial.quote}</p>
                  <small>{testimonial.name}, {testimonial.role}</small>
                </div>
                <div className={styles.testimonialPattern} aria-hidden="true" />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
