import styles from './navbar.module.css';

export default function Navbar({ current }) {
    return (
        <div className={styles.container}>
            <ul className={styles.menu}>
                <li className={styles.item}><a className={styles.link} href="#experiences">experiences</a></li>
                <li className={styles.item}><a className={styles.link} href="#about">about</a></li>
            </ul>
        </div>
    )
}