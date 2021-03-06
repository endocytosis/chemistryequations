import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chemistry Equations</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="#">Chemistry Equations</a>
        </h1>

        <div className={styles.grid}>
          <a href="#" className={styles.card}>
            <h3>Introduction to Stoichiometry</h3>
          </a>

          <a href="/net" className={styles.card}>
            <h3>Net Ionic Equations</h3>
          </a>

          <a href="#" className={styles.card}>
            <h3>Kinetics</h3>
          </a>

          <a href="#" className={styles.card}>
            <h3>Acids and Bases</h3>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://stackblitz.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by StackBlitz{' '}
          <img
            src="https://c.staticblitz.com/assets/favicon-7453cf0c12d349fb64b7aa2b69cc69c026f083a27f139f0839b1f4948bed6811.png"
            width="20"
            height="20"
          />
        </a>
      </footer>
    </div>
  );
}
