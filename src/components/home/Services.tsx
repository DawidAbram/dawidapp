import styles from "./home.module.css";

const services = [
  {
    title: "Fractional CTO",
    body: "Technical leadership without the full-time hire. I own strategy, architecture, hiring and the roadmap so you can stay focused on the product.",
  },
  {
    title: "Technical advisory",
    body: "Architecture reviews, tech due diligence and pragmatic decisions that keep you shipping. A second pair of senior eyes when the stakes are high.",
  },
  {
    title: "Hands-on development",
    body: "When you need it built, I write the code. React, Next.js and TypeScript, from first commit to production, end to end.",
  },
];

const Services = () => {
  return (
    <section className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.sectionLabel}>How I help</p>
      </div>
      <div className={styles.services}>
        {services.map((service, i) => (
          <div className={styles.service} key={service.title}>
            <span className={styles.serviceNum}>0{i + 1}</span>
            <h3>{service.title}</h3>
            <p>{service.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
