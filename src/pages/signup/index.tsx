import { useState } from "react";
import styles from './signup.module.scss';

enum UserType {
  BARBER = 'Barber',
  CLIENT = 'Client'
}

const SignUp = () => {
  const [userType, setUserType] = useState('');

  return (
    <div className="signupPage">
      Who are you?
      <button
        onClick={() => {
          setUserType(UserType.BARBER);
        }}
        className={`ghostButton ${styles.userButton}`}
      >
        {UserType.BARBER}
      </button>
      <button
        onClick={() => {
          setUserType(UserType.CLIENT)
        }}
        className={`ghostButton ${styles.userButton}`}
      >
        {UserType.CLIENT}
      </button>
    </div>
  );
};

SignUp.displayName = 'Signup page component';

export default SignUp;