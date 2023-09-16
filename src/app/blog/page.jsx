import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href="blog/:id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/277218/pexels-photo-277218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Las Llamas</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </Link>
      <Link href="blog/:id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/277218/pexels-photo-277218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Las Llamas</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </Link>
      <Link href="blog/:id" className={styles.container}>
        <div className={styles.imgContainer}>
          <Image 
            src="https://images.pexels.com/photos/277218/pexels-photo-277218.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Las Llamas</h1>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
      </Link>
    </div>
  )
}

export default Blog