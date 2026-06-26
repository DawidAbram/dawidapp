import styles from "./home.module.css";

const tags = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "AWS",
  "System architecture",
  "Technical strategy",
  "Team leadership",
  "Product delivery",
];

const Expertise = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.sectionLabel}>Expertise</p>
      </div>
      <div className={styles.tags}>
        {tags.map((tag) => (
          <span className={styles.tag} key={tag}>
            {tag}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
