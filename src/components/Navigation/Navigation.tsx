import globalStyles from "@/styles/Main.module.css";
import styles from "@/components/Navigation/Navigation.module.css";
import DawidAbramLogo from "../../../public/logo.svg";
import Link from "next/link";
import clsx from "clsx";
import { useRouter } from "next/router";
import ThemeToggler from "@/components/Navigation/ThemeToggler";
import { GithubLogo, LinkedinLogo, TwitterLogo } from "phosphor-react";

const Navigation = () => {
  const { pathname } = useRouter();

  return (
    <div className={clsx(globalStyles.container, styles.navigationContainer)}>
      <div className={styles.logoContainer}>
        <Link href="/">
          <DawidAbramLogo className={styles.logo} />
        </Link>
        <ThemeToggler />
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link
              href="/"
              className={pathname === "/" ? styles.activeLink : undefined}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? styles.activeLink : undefined}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.activeLink : undefined}
            >
              About
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/dawid-abram/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <LinkedinLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>LinkedIn</span>
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/Dawid_Abram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <TwitterLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>Twitter</span>
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DawidAbram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={globalStyles.hideDesktop}>
                <GithubLogo size={20} />
              </span>
              <span className={globalStyles.hideMobile}>Github</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
