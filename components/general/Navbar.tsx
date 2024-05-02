import styles from '@/styles/components/general/Navbar.module.css'
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <h3 className={styles.logoTitle}>MP</h3>
            </div>
            <div>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link href="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/livro/cadastro">Livro</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/grupo/cadastro">Grupo</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}