import Image from 'next/image'
import styles from './page.module.css'


const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            My React Word
          </h1>
          <p className={styles.desc}>
          React noto anche come React.js o ReactJS è una libreria open-source, front-end, JavaScript per la creazione di interfacce utente. È mantenuto da Meta già Facebook e da una comunità di singoli sviluppatori e aziende.
          </p>
          <div className={styles.author}>
            <Image 
              src="/me.jpeg"
              alt='author'
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Gianfranco Navas Fernandini</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
              src="https://images.pexels.com/photos/18357123/pexels-photo-18357123/free-photo-of-se-desideri-donare-per-il-mio-lavoro-invialo-tramite-il-mio-paypal-paypal-me-godwintorres.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt='image'
              fill={true}
              className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
        React può essere utilizzato come base nello sviluppo di applicazioni a pagina singola ma è utilizzabile anche su mobile tramite React Native, una libreria sempre sviluppata da Meta che tramuta i componenti React in componenti nativi (iOS e Android)[5]. Tuttavia, React si occupa solo del rendering dei dati sul DOM, pertanto la creazione di applicazioni React richiede generalmente l'uso di librerie aggiuntive per lo state management e il routing.[6] Redux[7] e React Router[8] sono i rispettivi esempi[9] di tali librerie.
        </p>
      </div>
    </div>
  )
}

export default BlogPost