import Image from "next/image";
import { ContactForm } from "@/components/ContactForm";
import { CopyEmailButton } from "@/components/CopyEmailButton";
import styles from "@/styles/contact.module.css";

export function FooterSection() {
  return (
    <footer id="contact" className={styles.contactSection}>
      <Image
        src="/footer-sunrise.webp"
        alt=""
        fill
        sizes="100vw"
        className={styles.footerBackground}
      />
      <div className={styles.footerOverlay} aria-hidden="true" />
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.contactFormCard} data-reveal>
            <div className={styles.contactFormHeader}>
              <div className={styles.footerAvailability} data-reveal>
                <span aria-hidden="true" />
                Booking website builds for 2026
              </div>
              <h2 className={styles.contactFormHeading}>Start a project</h2>
              <p className={styles.contactFormLead}>
                Tell us about your business and we&apos;ll get back within a day.
              </p>
            </div>
            <ContactForm />
          </div>

          <div className={styles.footerSide} data-reveal>
            <p className={styles.footerSideHeading}>Prefer email?</p>
            <CopyEmailButton />
            <p className={styles.footerSideNote}>hello@nexoralabs.com</p>
            <div className={styles.footerRule} aria-hidden="true" />
            <p className={styles.footerTagline}>Websites that turn local trust into enquiries.</p>
          </div>
        </div>

        <p className={styles.footerCopyright} data-reveal>&copy;2026 Nexora Labs &bull; All rights reserved</p>
      </div>
    </footer>
  );
}
