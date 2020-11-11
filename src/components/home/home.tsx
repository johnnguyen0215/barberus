import styles from './home.module.scss';
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from 'react';
import Link from 'next/link';

const Home: ForwardRefExoticComponent<RefAttributes<HTMLDivElement>> = forwardRef<
  HTMLDivElement,
  unknown
>((props, homeSectionRef) => {
  return (
    <div className={styles.home} ref={homeSectionRef}>
      <div className="container">
        <div className="row">
          <div className={`col-6 offset-6 ${styles.introContainer}`}>
            <div className={styles.intro}>Find all your grooming needs here.</div>
            <div>
              <Link href="/signup" passHref>
                <button className={`ghostButton ${styles.getStarted}`}>Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

Home.displayName = 'Home Page';

export default Home;
