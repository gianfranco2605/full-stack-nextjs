import styles from './page.module.css';

const DarkModelToogle = () => {

  const mode = "light"

  return (
    <div className={styles.container}>
        <div className={styles.icon}>🌙</div>
        <div className={styles.icon}>🌞</div>
        <div className={styles.ball} 
            // moving the bottom
            style = { mode === "light" ? { left: '2px' } : { right: '2px' } }
        />
    </div>
  )
}

export default DarkModelToogle