import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section id="about">
        <h1 className={utilStyles.heading2Xl}>It's me, Chau!</h1>
        <p>I'm your typical Computer Science kid struggling through uni and life, but I'm loving (read: detesting) every part of it.</p>
      </section>
      <section id="experiences">
        <h2 className={utilStyles.headingXl}>Experiences</h2>
        <ul className={utilStyles.list}>
          <li className={utilStyles.listItem}><Link href="experiences/softchoice">ServiceNow Co-op @ Softchoice</Link></li>
        </ul>
      </section>
    </Layout>
  );
}