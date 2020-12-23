import { HandleOnInputChange } from '../../pages/signup/models';
import { UserType } from '../../shared/enums/user';

export interface SignupFormProps {
  handleOnInputChange: HandleOnInputChange;
  name: string;
  email: string;
  password: string;
}
