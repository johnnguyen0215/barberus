import Head from 'next/head'
import styles from '../styles/HomePage.module.scss'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.stuff}>
        Hello World
      </div>
    </div>
  )
}
