import Head from 'next/head';
import styles from '../styles/main.module.scss';
import Main from '../components/main/main';

const Index = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Barberus</title>
        </Head>
        <Main />
      </div>
    </>
  );
};

Index.displayName = 'Main';

export default Index;
