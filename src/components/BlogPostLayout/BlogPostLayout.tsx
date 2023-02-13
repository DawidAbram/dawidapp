import styles from '@/styles/Main.module.css';
import { renderToString } from "react-dom/server";
import {ReactElement} from "react";
import Head from "next/head";
import Image from "next/image";
import {useHeadsObserver} from "@/hooks/useHeadsObserver";

interface Props {
    title: string;
    description?: string;
    publishedAt: string;
    keywords?: string;
    imageUrl?: string;
    hideTableOfContents?: boolean;
    children: ReactElement;
}

const BlogPostLayout = ({
                            title = "Dawid Abram - Blog",
                            description = "Dawid Abram - Blog",
                            publishedAt,
                            keywords = "blog, Dawid Abram, reactjs, nextjs, typescript, tutorial",
                            imageUrl,
                            hideTableOfContents = false,
                            children
}: Props) => {
    const contentString = renderToString(children);
    const { activeId } = useHeadsObserver();

    const getHeadings = (source: string) => {
        const regex = /<h[2-3]>(.*?)<\/h[2-3]>/g;
        if (source.match(regex)) {
            return source.match(regex)?.map((heading) => {
                const isH2 = heading.includes("<h2>");
                const text = heading.replace(isH2 ? "<h2>" : "<h3>", "").replace(isH2 ? "</h2>" : "</h3>", "");
                const id = text.replace(/ /g, "_").toLowerCase();

                return {
                    text: text,
                    id,
                    link: `#${id}`,
                };
            });
        }

        return [];
    };
    const headings = getHeadings(contentString);

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
                <div className={!!headings && headings.length > 0 && !hideTableOfContents ? styles.blogContentContainer : undefined}>
                    {!!headings && headings.length > 0 && !hideTableOfContents ? (
                        <aside className={styles.blogAside}>
                            <div className={styles.blogTableOfContents}>
                                <h2>Table of contents</h2>
                                <ol>
                                    {headings.map((heading) => (
                                        <li key={heading.text}>
                                            <a href={heading.link} className={activeId === heading.id ? styles.headingActive : undefined}>{heading.text}</a>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </aside>
                    ) : null}
                    <div className={styles.blogContent}>{children}</div>
                </div>
            </main>
        </>
    )
}

export default BlogPostLayout;
