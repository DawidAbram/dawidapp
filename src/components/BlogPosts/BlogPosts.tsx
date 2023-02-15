import styles from "@/components/BlogPosts/BlogPosts.module.css";
import Link from "next/link";
import {BlogPost} from "@/utils/helpers";
import Image from "next/image";

const BlogPosts = ({ posts }: { posts: BlogPost[] }) => {
    return (
        <div className={styles.blogPostsGrid}>
            {posts.map(post => (
                <Link href={`/blog/${post.slug}`} className={styles.blogPost} key={post.slug}>
                    <Image
                        src={post.data.imageUrl}
                        alt="Blog post title"
                        placeholder="blur"
                        blurDataURL={post.data.imageUrl}
                        className={styles.blogPostImage}
                        width={320}
                        height={190}
                    />
                    <div className={styles.blogPostInfo}>
                        <p>{post.data.publishedAt}</p>
                        <p>{post.readingTime} min. read</p>
                    </div>
                    <h3>{post.data.title}</h3>
                </Link>
            ))}
        </div>
    );
};

export default BlogPosts;
