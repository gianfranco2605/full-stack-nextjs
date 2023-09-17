import Link from 'next/link';
import styles from './page.module.css';
import Image from 'next/image';

// Fetching data server side with getData() 
async function getData()  {
  // revalidate data each 10 seconds
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", { next: { revalidate: 10 } });

  if( !res.ok ) 
  throw new Error('Failed to fetch data'); 

  return res.json();
}

const Blog = async () => {

  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map(( item ) => (
        <Link href="blog/:id" className={styles.container} key={item.id}>
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
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.body}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Blog