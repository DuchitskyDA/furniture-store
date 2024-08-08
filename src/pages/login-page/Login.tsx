import AuthHeading from '../../components/ui/auth-heading/AuthHeading.tsx';
import styles from './login.module.scss';
import AuthContent from '../../components/ui/auth-content/AuthContent.tsx';
import { InputData } from '../../components/ui/form/FormUI.tsx';
import { Footer, Header } from '../../components';

const mockInputs: InputData[] = [
  {
    name: 'email',
    placeholder: 'Email address',
    options: {
      required: 'This field is required.',
      pattern: {
        value:
          /^\s*[\w\-+_]+(\.[\w\-+_]+)*@[\w\-+_]+\.[\w\-+_]+(\.[\w\-+_]+)*\s*$/,
        message: 'Should be like example@mail.com',
      },
    },
  },
  {
    name: 'password',
    placeholder: 'Password',
    hasPasswordInput: true,
    options: {
      required: 'This field is required.',
      minLength: {
        value: 6,
        message: 'Minimum length is 6.',
      },
    },
  },
];

export const Login = () => {
  return (
    <>
      <Header />
      <main className={styles.login}>
        <div className={styles.wrapper}>
          <AuthHeading
            src={
              'https://i.pinimg.com/564x/ec/a1/c9/eca1c9a68d95317d6df7d95e617803c8.jpg'
            }
          />
          <AuthContent
            inputs={mockInputs}
            title={'Sign in'}
            description={'Don’t have an account yet?'}
            link={{ value: 'Sign up', ref: '/registration' }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
