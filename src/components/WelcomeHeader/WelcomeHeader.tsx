import Image from "next/image";
import DawidAbramImage from '../../../public/dawidabram.webp';
import styles from './WelcomeHeader.module.css';

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
            <h1>
                Hi I’m Dawid! 👋<br/>
                A full stack website developer specialising in javascript applications.<br/>
                Currently working @ <a href="https://th-ey.com" target="_blank" rel="noopener noreferrer">TH-EY</a>
            </h1>
        </header>
    );
}

export default WelcomeHeader;
