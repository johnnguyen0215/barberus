import { FC, ReactElement, useState } from 'react';
import styles from './signup.module.scss';
import { UserType } from '../../shared/enums/user';
import Navbar from '../../components/navbar/navbar';
import navStyles from '../../components/navbar/navbar.module.scss';

const SignUp: FC = (): ReactElement => {
  const [userType, setUserType] = useState('');

  return (
    <>
      <Navbar>
        <ul className={navStyles.navList}>
          <li className={navStyles.navItem}>
            <a href="/">Home</a>
          </li>
        </ul>
      </Navbar>
      <div className={styles.signupPage}>
        <div className={styles.form}>
          {!userType && (
            <>
              <div className={styles.question}>Who are you?</div>
              <div className={styles.barberBlock}>
                <button
                  onClick={() => {
                    setUserType(UserType.BARBER);
                  }}
                  className={`ghostButton ${styles.userButton}`}
                >
                  {UserType.BARBER}
                </button>
              </div>
              <div className={styles.clientBlock}>
                <button
                  onClick={() => {
                    setUserType(UserType.CLIENT);
                  }}
                  className={`ghostButton ${styles.userButton}`}
                >
                  {UserType.CLIENT}
                </button>
              </div>
            </>
          )}
          {userType === UserType.BARBER && <div className="barberForm"></div>}
          {userType === UserType.CLIENT && <div className="clientForm"></div>}
        </div>
      </div>
    </>
  );
};

SignUp.displayName = 'Signup page component';

export default SignUp;
