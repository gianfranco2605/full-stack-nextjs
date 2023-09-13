import Image from 'next/image'
import styles from './page.module.css';
import Hero from 'public/hero.png';


export default function Home() {
  return (
    <div>
      <div className={styles.texts}>
        <h1>Better desing for your digital products.</h1>
        <p>Turning your idea into Reality. We bring together the teams from the global tech industry.</p>
      </div>
      <div className={styles.imgContainer}></div>
      <Image src={Hero} width={50} height={50} alt='hero image' className={styles.img}/>
    </div>
  )
}
