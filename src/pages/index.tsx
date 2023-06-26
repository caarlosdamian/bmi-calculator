import Head from 'next/head';
import styles from '../styles/Main.module.css';
import { Benefits, Hero, Presentation } from '@/sections';

export default function Main() {
  return (
    <>
      <Head>
        <title>Bmi Calculator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Hero />
        <Presentation />
        <Benefits />
        <section id="description">description</section>
      </main>
    </>
  );
}
