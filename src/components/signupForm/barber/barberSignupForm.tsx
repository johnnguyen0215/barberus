import { FC, useContext, useEffect } from 'react';
import signupStyles from '../signupForm.module.scss';
import { TextField } from '@material-ui/core';
import { SignupFormProps } from '../models';
import { FieldName } from '../../../pages/signup/models';
import { UserContext } from '../../../contexts/userContext';
import axios from 'axios';

const BarberSignupForm: FC<SignupFormProps> = ({ name, email, password, handleOnInputChange }) => {
  const userContext = useContext(UserContext);

  return (
    <form className={signupStyles.signupForm}>
      <div className={signupStyles.inputSection}>
        <TextField
          className={signupStyles.registrationField}
          id="name-field"
          label="Name"
          type="text"
          onChange={(event) => handleOnInputChange(event, FieldName.NAME)}
          value={name}
          required={true}
        />
      </div>
      <div className={signupStyles.inputSection}>
        <TextField
          className={signupStyles.registrationField}
          id="email-field"
          label="Email"
          type="email"
          onChange={(event) => handleOnInputChange(event, FieldName.EMAIL)}
          value={email}
          required={true}
        />
      </div>
      <div className={signupStyles.inputSection}>
        <TextField
          className={signupStyles.registrationField}
          id="password-field"
          label="Password"
          type="password"
          onChange={(event) => handleOnInputChange(event, FieldName.PASSWORD)}
          value={password}
          required={true}
        />
      </div>
    </form>
  );
};

export default BarberSignupForm;
