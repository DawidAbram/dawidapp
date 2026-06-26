import Head from "next/head";
import globalStyles from "@/styles/Main.module.css";
import styles from "./AboutPage.module.css";
import Image from "next/image";
import DawidAbramImage from "../../../public/dawidabram.webp";
import Link from "next/link";

export default function About() {
  return (
    <>
      <Head>
        <title>Dawid Abram - About</title>
        <meta
          name="description"
          content="Dawid Abram - Lead engineer, fractional CTO and technical advisor for startups and growing teams."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={globalStyles.wide}>
        <h1 className={globalStyles.mainTitle}>About</h1>
        <section className={styles.aboutMeSection}>
          <header className={styles.imageContainer}>
            <Image
              src={DawidAbramImage}
              placeholder="blur"
              alt="Dawid Abram"
              className={styles.image}
            />
            <div>
              <p>
                I&apos;m Dawid Abram, a lead engineer based in the United
                Kingdom. I help startups and growing teams as a fractional CTO,
                technical advisor and hands-on developer, currently leading
                engineering at{" "}
                <a
                  href="https://th-ey.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TH-EY
                </a>
                .
              </p>
              <p>
                I work primarily with JavaScript and TypeScript, building and
                scaling products with React, Next.js and Node.js. Over my career
                I&apos;ve owned architecture, shipped production software and led
                teams across a wide range of projects, from early-stage MVPs to
                established platforms.
              </p>
              <p>
                I started in engineering while studying computing at Manchester
                Metropolitan University, and have grown my skill set as a
                consultant ever since. I also build my own products, such as{" "}
                <a
                  href="https://prettyestimate.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  prettyestimate
                </a>
                , and contribute to open source on GitHub.
              </p>
              <p>
                I write about the technologies I work with and the lessons I
                pick up along the way, with a goal of helping other builders
                solve similar problems. If you&apos;re looking for technical
                leadership or a senior engineer to help ship your product,
                let&apos;s talk.
              </p>
              <div className={styles.actions}>
                <Link href="/contact" className={styles.buttonPrimary}>
                  Work with me
                </Link>
                <Link
                  href="/Dawid-Abram_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  Check out my CV
                </Link>
              </div>
            </div>
          </header>
        </section>
      </main>
    </>
  );
}
