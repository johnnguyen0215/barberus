import styles from '../styles/home.module.scss'

const HomePage = () => {
  return (
    <div className={styles.home}>
      <div className={styles.intro}>Grooming needs here.</div>
      <div><button>Get Started</button></div>
    </div>
  )
}

HomePage.displayName = 'Home Page'

export default HomePage
