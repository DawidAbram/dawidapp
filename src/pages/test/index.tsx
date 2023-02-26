import Head from 'next/head'
import globalStyles from '@/styles/Main.module.css'
import {databaseId, getDatabase} from "@/lib/notion";
import {QueryDatabaseResponse} from "@notionhq/client/build/src/api-endpoints";
import Link from "next/link";
import {Text} from "@/pages/test/[id]";

export default function TestingNotion({ posts }: { posts: QueryDatabaseResponse }) {
    return (
        <>
            <Head>
                <title>Dawid Abram - Testing notion</title>
                <meta name="description" content="Dawid Abram - Testing notion" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <main className={globalStyles.container}>
                <h1 className={globalStyles.mainTitle}>Testing notion</h1>
                <section>
                    <ol>
                        {posts.map((post) => {
                            const date = new Date(post.last_edited_time).toLocaleString(
                                "en-US",
                                {
                                    month: "short",
                                    day: "2-digit",
                                    year: "numeric",
                                }
                            );
                            return (
                                <li key={post.id}>
                                    <h3>
                                        <Link href={`/test/${post.properties.slug.rich_text[0].plain_text}`}>
                                            <Text text={post.properties.title.title} />
                                        </Link>
                                    </h3>

                                    <p>{date}</p>
                                    <Link href={`/test/${post.properties.slug.rich_text[0].plain_text}`}>Read post →</Link>
                                </li>
                            );
                        })}
                    </ol>
                </section>
            </main>
        </>
    )
}

export const getStaticProps = async () => {
    const database = await getDatabase(databaseId!);

    return {
        props: {
            posts: database,
        },
        revalidate: 1,
    };
};
