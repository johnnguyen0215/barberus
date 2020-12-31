import { FC, useContext, useRef } from 'react';
import styles from '../signupForm.module.scss';
import { TextField, Chip } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import { SignupFormProps } from '../models';
import { FieldName, HandleOnSpecsChange } from '../../../pages/signup/models';
import { UserContext } from '../../../contexts/userContext';
import { specializations } from '../../../shared/constants/specializations';

interface BarberSignupFormProps extends SignupFormProps {
  handleOnSpecsChange: HandleOnSpecsChange;
}

const BarberSignupForm: FC<BarberSignupFormProps> = ({
  name,
  email,
  password,
  handleOnInputChange,
  handleOnSpecsChange
}) => {
  const userContext = useContext(UserContext);
  const specializationValues = useRef([]);

  return (
    <form className={styles.signupForm}>
      <div className={styles.inputSection}>
        <TextField
          className={styles.registrationField}
          id="name-field"
          label="Name"
          type="text"
          onChange={(event) => handleOnInputChange(event, FieldName.NAME)}
          value={name}
          required={true}
        />
      </div>
      <div className={styles.inputSection}>
        <TextField
          className={styles.registrationField}
          id="email-field"
          label="Email"
          type="email"
          onChange={(event) => handleOnInputChange(event, FieldName.EMAIL)}
          value={email}
          required={true}
        />
      </div>
      <div className={styles.inputSection}>
        <TextField
          className={styles.registrationField}
          id="password-field"
          label="Password"
          type="password"
          onChange={(event) => handleOnInputChange(event, FieldName.PASSWORD)}
          value={password}
          required={true}
        />
      </div>
      <div className={styles.inputSection}>
        <Autocomplete
          id="specializations-combo"
          options={specializations}
          value={specializationValues.current}
          onChange={handleOnSpecsChange}
          limitTags={3}
          freeSolo={true}
          multiple={true}
          renderInput={(params) => (
            <TextField {...params} label="Specializations" variant="outlined" />
          )}
        />
      </div>
    </form>
  );
};

export default BarberSignupForm;
