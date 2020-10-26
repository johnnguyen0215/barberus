import Head from 'next/head'
import styles from '../styles/main.module.scss'
import HomePage from './homePage'

const Main = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Barberus</title>
      </Head>
      <HomePage />
    </div>
  )
}

Main.displayName = 'Main'

export default Main
