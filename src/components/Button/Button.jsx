import Link from 'next/link';
// module path is case sensitve if we put "modules" become a global style
import styles from  './button.module.css'

const Button = ({ text, url }) => {
  return (
    <Link href={url}>
      <button className={styles.container}>{text}</button>
    </Link>
    
  )
}

export default Button;