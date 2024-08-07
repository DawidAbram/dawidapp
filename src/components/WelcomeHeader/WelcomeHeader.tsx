import Image from "next/image";
import DawidAbramImage from "../../../public/dawidabram.webp";
import styles from "./WelcomeHeader.module.css";

const WelcomeHeader = () => {
  return (
    <header className={styles.welcomeContainer}>
      <Image
        priority
        src={DawidAbramImage}
        placeholder="blur"
        alt="Dawid Abram"
        className={styles.image}
      />
      <div>
        <h1>Hi I’m Dawid Abram! 👋</h1>
        <p>
          A lead developer specialising in javascript applications.
          <br />
          Currently working at{" "}
          <a href="https://th-ey.com" target="_blank" rel="noopener noreferrer">
            TH-EY
          </a>
        </p>
      </div>
    </header>
  );
};

export default WelcomeHeader;
