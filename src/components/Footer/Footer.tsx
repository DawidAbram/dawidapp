import globalStyles from "@/styles/Main.module.css";
import styles from "./Footer.module.css";

const socials = [
  { href: "mailto:dawid.a@mail.com", label: "Email" },
  { href: "https://www.linkedin.com/in/dawid-abram/", label: "LinkedIn" },
  { href: "https://twitter.com/Dawid_Abram", label: "Twitter" },
  { href: "https://github.com/DawidAbram", label: "GitHub" },
];

const Footer = () => {
  return (
    <div className={globalStyles.wide}>
      <footer className={styles.footer}>
        <p>© {new Date().getUTCFullYear()} Dawid Abram</p>
        <nav className={styles.socials}>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target={social.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
            >
              {social.label}
            </a>
          ))}
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
