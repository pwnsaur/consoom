import './Authentication.styles.scss';
import { SignUpForm, SignInForm } from '../../components/index';

const Authentication = () => {
  return (
    <div className='authentication-container '>
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
