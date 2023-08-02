import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Chau Nguyen';
export const siteTitle = 'Chau Nguyen';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <meta name="og:title" content={siteTitle} />
      </Head>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}