import Head from "next/head";
import { useState } from "react";
import globalStyles from "@/styles/Main.module.css";
import styles from "./ContactPage.module.css";
import Reveal from "@/components/Reveal/Reveal";

const EMAIL = "dawid.a@mail.com";

const subjects = [
  "Let's build something great",
  "I have an idea (and a budget)",
  "Fractional CTO wanted, must like coffee",
  "Saw your site, we should talk",
  "Help, my codebase is on fire 🔥",
  "Quick question that is definitely not quick",
];

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [subjectIndex, setSubjectIndex] = useState(0);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const input = document.createElement("textarea");
      input.value = EMAIL;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const shuffleSubject = () =>
    setSubjectIndex((i) => (i + 1) % subjects.length);

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    subjects[subjectIndex],
  )}`;

  return (
    <>
      <Head>
        <title>Dawid Abram - Contact</title>
        <meta
          name="description"
          content="Get in touch with Dawid Abram. No contact forms, just email."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={globalStyles.wide}>
        <section className={styles.hero}>
          <span className={styles.eyebrow}>Contact</span>
          <h1 className={styles.title}>
            Say hello{" "}
            <span className={styles.wave} role="img" aria-label="waving hand">
              👋
            </span>
          </h1>
          <p className={styles.lead}>
            No contact forms. No &ldquo;please fill out these 14 fields&rdquo;.
            No chatbot named <em>Skip</em>. Just an email address and a human
            (me) on the other end.
          </p>

          <div className={styles.card}>
            <span className={styles.cardLabel}>Email me at</span>
            <a href={mailto} className={styles.email}>
              {EMAIL}
            </a>

            <div className={styles.actions}>
              <a href={mailto} className={styles.btnPrimary}>
                Write email <span className={styles.arrow}>→</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                className={styles.btnSecondary}
                aria-live="polite"
              >
                {copied ? "Copied ✓" : "Copy address"}
              </button>
            </div>

            <div className={styles.subjectRow}>
              <span className={styles.subjectLabel}>Subject</span>
              <span className={styles.subject}>{subjects[subjectIndex]}</span>
              <button
                type="button"
                onClick={shuffleSubject}
                className={styles.shuffle}
                aria-label="Shuffle subject line"
                title="Shuffle subject line"
              >
                🎲
              </button>
            </div>
          </div>
        </section>

        <Reveal>
          <p className={styles.footnote}>
            Prefer to lurk first? That&apos;s allowed too &mdash; find me on{" "}
            <a
              href="https://www.linkedin.com/in/dawid-abram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{" "}
            or{" "}
            <a
              href="https://github.com/DawidAbram"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </p>
        </Reveal>
      </main>
    </>
  );
};

export default Contact;
