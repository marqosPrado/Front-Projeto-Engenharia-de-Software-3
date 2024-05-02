import styles from '@/styles/components/general/Footer.module.css';
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
    return (
        <div className={styles.footerRoot}>
            <footer className={styles.footer}>
                <p className={styles.stack}>
                    <span>© 2024, Marcos Prado</span>
                </p>
                <ul className={styles.stackSocial}>
                    <a className={styles.item} href='https://linkedin.com/in/marcos-pradoo/' rel="noopener" target="_blank">
                        <FaLinkedinIn />
                    </a>
                    <hr />
                    <a className={styles.item} href='https://github.com/marqosPrado' rel="noopener" target="_blank">
                        <FaGithub />
                    </a>
                </ul>
            </footer>
        </div>
    );
}