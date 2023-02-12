import styles from '@/styles/Main.module.css';
import mdxComponentsStyles from '@/styles/MdxComponents.module.css';
import {ReactElement} from "react";
import Head from "next/head";
import Image from "next/image";

interface Props {
    title: string;
    description?: string;
    publishedAt: string;
    keywords?: string;
    imageUrl?: string;
    children: ReactElement;
}

const BlogPostLayout = ({
                            title = "Dawid Abram - Blog",
                            description = "Dawid Abram - Blog",
                            publishedAt,
                            keywords = "blog, Dawid Abram, reactjs, nextjs, typescript, tutorial",
                            imageUrl,
                            children
}: Props) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={keywords} />
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={styles.container}>
                <div className={styles.postTitleContainer}>
                    <h1 className={styles.postTitle}>{title}</h1>
                    <div className={styles.underTitle}>
                        <p>{publishedAt}</p>
                        <p>{keywords}</p>
                    </div>
                </div>
                {!!imageUrl ?
                    <Image
                        src={imageUrl}
                        placeholder="blur"
                        blurDataURL="/images/landscape.jpg"
                        alt={title}
                        className={styles.postImage}
                    /> : null}
                <div className={styles.blogContent}>{children}</div>
            </main>
        </>
    )
}

export default BlogPostLayout;
