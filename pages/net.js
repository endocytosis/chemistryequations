import styles from '../styles/pages.module.css';

export default function Net() {
  return (
    <div classname={styles.container}>
      <title>Net Ionic Equations</title>
      <main className={styles.main}>
        <p>
          Net ionic equations are complete ionic equations absent the spectator
          ions. Let's look at the following reaction between sodium chloride and
          silver nitrate:
          <MathJaxContext>
            <h2>Basic MathJax example with Latex</h2>
            <MathJax>{'\\(\\frac{10}{4x} \\approx 2^{12}\\)'}</MathJax>
          </MathJaxContext>
        </p>
      </main>
    </div>
  );
}
