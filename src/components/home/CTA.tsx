import styles from "./home.module.css";
import Link from "next/link";

const CTA = () => {
  return (
    <section className={styles.ctaBand}>
      <h2>Have a project in mind?</h2>
      <p>Let&apos;s talk about how I can help you ship it.</p>
      <div className={styles.ctaRow}>
        <Link href="/contact" className={styles.btnPrimary}>
          Get in touch <span className={styles.arrow}>→</span>
        </Link>
        <a
          href="https://www.linkedin.com/in/dawid-abram/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.btnSecondary}
        >
          Connect on LinkedIn
        </a>
      </div>
    </section>
  );
};

export default CTA;
