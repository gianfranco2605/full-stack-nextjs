import React from 'react'
import styles from './page.module.css'
import Button from '../../../components/Button/Button'
import Image from 'next/image'

const Category = ({ params }) => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Viaggio nell passato</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <Button text="See More" url=""/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/18140870/pexels-photo-18140870/free-photo-of-grecia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>I fondo al mare</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <Button text="See More" url=""/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/14309988/pexels-photo-14309988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Noi li amaiamo</h1>
          <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget neque tellus. Vestibulum id posuere sapien. Aliquam erat volutpat. Sed in ipsum vitae velit venenatis suscipit vitae vitae metus. Fusce risus risus, euismod vel dui eget, cursus suscipit leo. Aenean scelerisque vel arcu eget pretium. Praesent vehicula velit ante, eget aliquam magna cursus sit amet. Praesent eleifend semper erat, in condimentum sem posuere nec. Mauris ut gravida est, et finibus felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
          <Button text="See More" url=""/>
        </div>
        <div className={styles.imgContainer}>
          <Image 
            className={styles.img}
            fill={true}
            src="https://images.pexels.com/photos/18187517/pexels-photo-18187517/free-photo-of-citta-strada-allenare-vintage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt='image'
          />
        </div>
      </div>
    </div>
  )
}

export default Category