import styles from './home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <div className="container">
        <div className="row">
          <div className={`col-6 offset-6 ${styles.introContainer}`}>
            <div className={styles.intro}>Find all your grooming needs here.</div>
            <div><button className={`ghostButton ${styles.getStarted}`}>Get Started</button></div>
          </div>
        </div>
      </div>
    </div >
  );
};

Home.displayName = 'Home Page';

export default Home;
