import globalStyles from "@/styles/Main.module.css";
import styles from "@/components/Navigation/Navigation.module.css";
import DawidAbramLogo from "../../../public/logo.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import ThemeToggler from "@/components/Navigation/ThemeToggler";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <header className={styles.navigationContainer}>
      <nav className={clsx(globalStyles.wide, styles.navigation)}>
        <Link href="/" className={styles.logoLink} aria-label="Home">
          <DawidAbramLogo className={styles.logo} />
        </Link>
        <ul className={styles.navLinks}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={pathname === link.href ? styles.activeLink : undefined}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.navRight}>
          <Link
            href="/contact"
            className={clsx(styles.workBtn, globalStyles.hideMobile)}
          >
            Work with me
          </Link>
          <ThemeToggler />
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
