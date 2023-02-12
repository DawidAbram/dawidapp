import Head from 'next/head'
import globalStyles from '@/styles/Main.module.css'
import styles from './AboutPage.module.css'
import Image from "next/image";
import DawidAbramImage from "../../../public/dawidabram.jpg";
import Link from "next/link";

export default function About() {
    return (
        <>
            <Head>
                <title>Dawid Abram - About</title>
                <meta name="description" content="Dawid Abram - About" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={globalStyles.container}>
                <h1 className={globalStyles.mainTitle}>About</h1>
                <section className={styles.aboutMeSection}>
                    <header className={styles.imageContainer}>
                        <Image src={DawidAbramImage} alt="Dawid Abram" className={styles.image} />
                        <div>
                            <p>
                                Hi I’m Dawid! 👋
                            </p>
                            <p>
                                I'm a full stack website developer based out of United Kingdom,
                                currently working at <a href="https://th-ey.com" target="_blank" rel="noopener noreferrer">TH-EY</a>.
                                I work with javascript technologies, such as ReactJs and NextJs, but also have a solid background in Java,
                                which I have utilized to develop API's and backend logic with Spring Boot.
                            </p>
                            <p>
                                I got started in my career in engineering while studying computing at Manchester Metropolitan University.
                                Since then, I have continued to grow my skill set as a consultant, working in various projects, some of which
                                you can find on <a href="https://th-ey.com/portfolio/" target="_blank" rel="noopener noreferrer">here</a>.
                            </p>
                            <p>
                                Recently I also began sharing my experiences and knowledge through blog posts and videos.
                                These cover subjects and technologies that I have recently worked with, as well as my findings and learnings.
                                Additionally, I have been working on small side projects in my spare time and publishing them as open source projects on GitHub.
                                With a goal of helping others who may encounter similar challenges in their work.
                            </p>
                            <p>
                                If you are interested in more information about me
                            </p>
                            <Link href="/Dawid-Abram_CV.pdf" target="_blank" rel="noopener noreferrer" className={styles.button}>Check out my CV</Link>
                        </div>
                    </header>
                </section>
            </main>
        </>
    )
}
