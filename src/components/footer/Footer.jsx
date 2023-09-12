import styles from './footer.module.css';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>@2023 Digital Navas. All right reserved</div>
        
          <div className={styles.socials}>
            <Image className={styles.icon} src='/1.png'  width={30} height={30} alt='facebook' />
            <Image className={styles.icon} src='/2.png'  width={30} height={30} alt='instagram' />
            <Image className={styles.icon} src='/3.png'  width={30} height={30} alt='twitter' />
            <Image className={styles.icon} src='/4.png'  width={30} height={30} alt='youtube' />
          </div>
        
    </div>
  )
}

export default Footer;