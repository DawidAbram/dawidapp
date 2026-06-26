import styles from "./home.module.css";

const work = [
  {
    name: "TH-EY",
    role: "Lead Developer",
    href: "https://th-ey.com",
  },
  {
    name: "prettyestimate",
    role: "Founder & Builder",
    href: "https://prettyestimate.com",
  },
  {
    name: "Open source",
    role: "GitHub",
    href: "https://github.com/DawidAbram",
  },
];

const SelectedWork = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.sectionLabel}>Selected work</p>
      </div>
      <div className={styles.workList}>
        {work.map((item) => (
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.workItem}
            key={item.name}
          >
            <h3>{item.name}</h3>
            <span className={styles.workRole}>
              {item.role} <span className={styles.workArrow}>↗</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default SelectedWork;
