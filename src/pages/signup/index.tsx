import { FC, ReactElement, ChangeEvent, useState, useRef, MouseEvent, useContext } from 'react';
import styles from './signup.module.scss';
import { UserType } from '../../shared/enums/user';
import Navbar from '../../components/navbar/navbar';
import navStyles from '../../components/navbar/navbar.module.scss';
import environment from '../../shared/environments/environment';
import ApiService from '../../services/api';
import Router from 'next/router';
import { HandleOnInputChange, HandleOnSubmit, FieldName } from './models';
import BarberSignupForm from '../../components/signupForm/barber/barberSignupForm';
import ClientSignupForm from '../../components/signupForm/client/clientSignupForm';
import { ErrorContext } from '../../contexts/errorContext';
import { PendingContext } from '../../contexts/pendingContext';

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
  const apiService = useRef(new ApiService(environment.apiUrl));

  const { setErrorMessage, setShowError } = useContext(ErrorContext);
  const { setPending } = useContext(PendingContext);

  const handleOnInputChange: HandleOnInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    fieldName: FieldName
  ): void => {
    switch (fieldName) {
      case FieldName.NAME:
        setName(event.target.value);
        break;
      case FieldName.EMAIL:
        setEmail(event.target.value);
        break;
      case FieldName.PASSWORD:
        setPassword(event.target.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit: HandleOnSubmit = async (event: MouseEvent): Promise<void> => {
    event.preventDefault();

    try {
      setPending(true);

      await apiService.current.post(['users'], {
        name,
        email,
        password
      });

      Router.push('/barber');
    } catch (err) {
      setErrorMessage(err.message);
      setShowError(true);
    }

    setPending(false);
  };

  return (
    <>
      {userType === UserType.BARBER && (
        <BarberSignupForm
          name={name}
          email={email}
          password={password}
          handleOnInputChange={handleOnInputChange}
        />
      )}
      {userType === UserType.CLIENT && (
        <ClientSignupForm
          name={name}
          email={email}
          password={password}
          handleOnInputChange={handleOnInputChange}
        />
      )}
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
    </>
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
