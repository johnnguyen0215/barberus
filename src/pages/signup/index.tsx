import { FC, ReactElement, ChangeEvent, useState, useRef, MouseEvent } from 'react';
import styles from './signup.module.scss';
import { UserType } from '../../shared/enums/user';
import Navbar from '../../components/navbar/navbar';
import navStyles from '../../components/navbar/navbar.module.scss';
import environment from '../../shared/environments/environment';
import ApiService from '../../services/api';

interface QuestionProps {
  onSetUserType: (userType: UserType) => void;
}

const Question: FC<QuestionProps> = ({ onSetUserType }): ReactElement => {
  return (
    <>
      <div className={styles.question}>Are you a</div>
      <div className={styles.barberBlock}>
        <button
          onClick={() => onSetUserType(UserType.BARBER)}
          className={`ghostButton ${styles.userButton}`}
        >
          {UserType.BARBER}
        </button>
      </div>
      <div className={styles.divider}>OR</div>
      <div className={styles.clientBlock}>
        <button
          onClick={() => onSetUserType(UserType.CLIENT)}
          className={`ghostButton ${styles.userButton}`}
        >
          {UserType.CLIENT}
        </button>
      </div>
      <div className={styles.question}>?</div>
    </>
  );
};

interface FormProps {
  userType: UserType;
  onSetUserType: (userType: UserType) => void;
}

const Form: FC<FormProps> = ({ userType, onSetUserType }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupError, setSignupError] = useState('');
  const apiService = useRef(new ApiService(environment.apiUrl));

  const handleOnInputChange = (
    event: ChangeEvent<HTMLInputElement>,
    handler: (value: string) => void
  ) => {
    if (handler) {
      handler(event.target.value);
    }
  };

  const handleSubmit = async (event: MouseEvent) => {
    event.preventDefault();

    try {
      await apiService.current.post(['users'], {
        name,
        email,
        password
      });
    } catch (err) {
      setSignupError(err?.message);

      throw err;
    }
  };

  return (
    <form className={styles.signupForm}>
      {userType === UserType.BARBER && (
        <>
          <div>
            <div>
              <label>Name</label>
            </div>
            <input
              className={styles.nameInput}
              type="name"
              value={name}
              onChange={(event) => handleOnInputChange(event, setName)}
            ></input>
          </div>
          <div>
            <div>
              <label>Email:</label>
            </div>
            <input
              className={styles.emailInput}
              type="email"
              value={email}
              onChange={(event) => handleOnInputChange(event, setEmail)}
            ></input>
          </div>
          <div>
            <div>
              <label>Password:</label>
            </div>
            <input
              className={styles.passwordInput}
              type="password"
              value={password}
              onChange={(event) => handleOnInputChange(event, setPassword)}
            ></input>
          </div>
        </>
      )}
      {userType === UserType.CLIENT && (
        <>
          <h1>Client Signup</h1>
          <div className={styles.clientForm}>This is the client form</div>
        </>
      )}
      {signupError && <div className={`${styles.errorContainer}`}>{signupError}</div>}
      <div className={styles.buttonContainer}>
        <div>
          <button
            onClick={(event) => handleSubmit(event)}
            className={`ghostButton ${styles.submitButton}`}
          >
            Submit
          </button>
        </div>
        <div>
          <button
            onClick={() => onSetUserType(UserType.NONE)}
            className={`ghostButton ${styles.goBackButton}`}
          >
            Go Back
          </button>
        </div>
      </div>
    </form>
  );
};

const SignUp: FC = (): ReactElement => {
  const [userType, setUserType] = useState(UserType.NONE);

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
        <div className={styles.signupBg} />
        <div className={styles.signupContainer}>
          {userType === UserType.NONE ? (
            <Question onSetUserType={setUserType} />
          ) : (
            <>
              <h1>{userType === UserType.BARBER ? 'Barber Signup' : 'Client Signup'}</h1>
              <Form onSetUserType={setUserType} userType={userType} />
            </>
          )}
        </div>
      </div>
    </>
  );
};

SignUp.displayName = 'Signup page component';

export default SignUp;
