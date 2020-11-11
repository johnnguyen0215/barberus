import Head from 'next/head';
import styles from '../styles/main.module.scss';
import Main from '../components/main/main';
import { FC, ReactElement } from 'react';

const Index: FC = (): ReactElement => {
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

Index.displayName = 'Index page';

export default Index;
