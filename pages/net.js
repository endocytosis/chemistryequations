import styles from '../styles/pages.module.css';

function Net() {
  return (
    <div classname={styles.container}>
      <title>Net Ionic Equations</title>
      <main className={styles.main}>
        <p>
          Net ionic equations are complete ionic equations absent the spectator
          ions. Let's look at the following reaction between sodium chloride and
          silver nitrate: \ce{NaCl} + \ce{AgNO_3} \rightarrow \ce{NaNO_3} + \ce
          {AgCl}
        </p>
      </main>
    </div>
  );
}

export default Net;
