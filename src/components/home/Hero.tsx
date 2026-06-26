import styles from "./home.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <header className={styles.hero}>
      <div className={styles.heroMain}>
        <h1 className={styles.heroTitle}>
          I help startups build software that scales.
        </h1>
        <p className={styles.heroLead}>
          I&apos;m <strong>Dawid Abram</strong>, a lead engineer who partners
          with founders and teams as a fractional CTO and hands-on consultant,
          turning ideas into reliable products.
        </p>
        <div className={styles.ctaRow}>
          <Link href="/contact" className={styles.btnPrimary}>
            Work with me <span className={styles.arrow}>→</span>
          </Link>
          <Link href="/about" className={styles.btnSecondary}>
            More about me
          </Link>
        </div>
      </div>

      <div className={styles.heroCard}>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Currently</span>
          <span className={styles.cardValue}>
            <a href="https://th-ey.com" target="_blank" rel="noopener noreferrer">
              Lead Dev @ TH-EY
            </a>
          </span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Based in</span>
          <span className={styles.cardValue}>United Kingdom</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Focus</span>
          <span className={styles.cardValue}>Fractional CTO &middot; Advisory</span>
        </div>
        <div className={styles.cardRow}>
          <span className={styles.cardLabel}>Stack</span>
          <span className={styles.cardValue}>React &middot; Next.js &middot; TS</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;
