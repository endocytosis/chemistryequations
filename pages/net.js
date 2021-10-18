import Head from 'next/head';
import styles from '../styles/globals.css';
import styles from '../home.module.css';

export default function Net() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Net Ionic Equations</h1>
      </main>
      <title>Net Ionic Equations</title>
      <body>
        <p>Net ionic equations are a topic of frequent study.</p>
      </body>

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
