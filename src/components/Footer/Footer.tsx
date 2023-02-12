import globalStyles from '@/styles/Main.module.css';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={globalStyles.container}>
            <footer className={styles.footer}>
                <p>© {new Date().getUTCFullYear()} by Dawid Abram. All rights reserved.</p>
                <a href="#" className={styles.sourceCodeLink} target="_blank" rel="noreferrer noopener">source code</a>
            </footer>
        </div>
    );
};

export default Footer;
