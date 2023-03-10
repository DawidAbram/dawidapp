import styles from "@/components/BlogPosts/BlogPosts.module.css";
import Link from "next/link";
import {BlogPost} from "@/utils/helpers";
import Image from "next/image";

const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
    const convertImage = (w: number, h: number) => `
        <svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <defs>
                <linearGradient id="g">
                    <stop stop-color="#333" offset="20%" />
                    <stop stop-color="#222" offset="50%" />
                    <stop stop-color="#333" offset="70%" />
                </linearGradient>
            </defs>
            <rect width="${w}" height="${h}" fill="#333" />
            <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
            <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
        </svg>
    `;

    const toBase64 = (str: string) =>
        typeof window === 'undefined'
            ? Buffer.from(str).toString('base64')
            : window.btoa(str);

    const getShortTitle = (title: string, maxAmount = 55) => {
        if (title.length > maxAmount) {
            return title.substring(0, maxAmount) + '...';
        }
        return title;
    };

    return (
        <div className={styles.blogPostsGrid}>
            {posts.map(post => (
                <Link href={`/blog/${post.slug}`} className={styles.blogPost} key={post.slug}>
                    <Image
                        src={post.data.imageUrl}
                        alt="Blog post title"
                        placeholder="blur"
                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                            convertImage(320, 190)
                        )}`}
                        width={320}
                        height={190}
                        className={styles.blogPostImage}
                    />
                    <div className={styles.blogPostInfo}>
                        <p>{post.data.publishedAt}</p>
                        <p>{post.readingTime} min. read</p>
                    </div>
                    <h3>{getShortTitle(post.data.title)}</h3>
                </Link>
            ))}
        </div>
    );
};

export default BlogPosts;
