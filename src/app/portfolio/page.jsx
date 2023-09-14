import Link from 'next/link';
import styles from './page.module.css';

const Portfolio = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.selectTitle}>Choose a gallery</h1>
      <div className={styles.items}>
        <Link href="/portfolio/illustrations" className={styles.item}>
          <span className={styles.titles}>Illustrations</span>
        </Link>
        <Link href="/portfolio/websites" className={styles.item}>
          <span className={styles.titles}>Websites</span>
        </Link>
        <Link href="/portfolio/Applications" className={styles.item}>
          <span className={styles.titles}>Applications</span>
        </Link>
      </div>
    </div>
  )
}

export default Portfolio