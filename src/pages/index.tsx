import Head from 'next/head';
import styles from '../styles/main.module.scss';
import MainPage from './mainPage/mainPage';

const Main = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Barberus</title>
        </Head>
        <MainPage />
      </div>
    </>
  );
};

Main.displayName = 'Main';

export default Main;
