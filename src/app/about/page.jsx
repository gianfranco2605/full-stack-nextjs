import Image from 'next/image';
import styles from './page.module.css';


const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image className={styles.img} src="https://images.pexels.com/photos/18278184/pexels-photo-18278184.jpeg" fill={true} alt='' />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDescription}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}></div>
    </div>
  )
}

export default About