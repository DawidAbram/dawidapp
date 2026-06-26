import Head from "next/head";
import styles from "@/styles/Main.module.css";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import SelectedWork from "@/components/home/SelectedWork";
import Expertise from "@/components/home/Expertise";
import CTA from "@/components/home/CTA";
import LatestPosts from "@/components/LatestPosts";
import Reveal from "@/components/Reveal/Reveal";
import { BlogPost, getPosts } from "@/utils/helpers";

export const getStaticProps = () => {
  const posts = getPosts().sort(
    (a, b) =>
      Number(new Date(b.data.publishedAt)) -
      Number(new Date(a.data.publishedAt)),
  );

  return {
    props: {
      posts,
    },
  };
};

const Home = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <>
      <Head>
        <title>Dawid Abram - Fractional CTO & Technical Advisor</title>
        <meta
          name="description"
          content="Dawid Abram - Fractional CTO and technical advisor helping startups build software that scales with React, Next.js and TypeScript."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.wide}>
        <Hero />
        <Reveal>
          <Services />
        </Reveal>
        <Reveal>
          <SelectedWork />
        </Reveal>
        <Reveal>
          <Expertise />
        </Reveal>
        <Reveal>
          <LatestPosts posts={posts} />
        </Reveal>
        <Reveal>
          <CTA />
        </Reveal>
      </main>
    </>
  );
};

export default Home;
