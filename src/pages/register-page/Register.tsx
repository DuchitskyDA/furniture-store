import type { FC } from 'react';
import styles from './register.module.scss';
import { InputData } from '../../components/ui/form/FormUI.tsx';
import AuthHeading from '../../components/ui/auth-heading/AuthHeading.tsx';
import AuthContent from '../../components/ui/auth-content/AuthContent.tsx';
import { Footer, Header } from '../../components';

const mockInputs: InputData[] = [
  {
    name: 'name',
    placeholder: 'Your name',
    options: {
      required: 'This field is required.',
      minLength: {
        value: 2,
        message: 'Minimum length is 2.',
      },
    },
  },
  {
    name: 'userName',
    placeholder: 'Username',
    options: {
      required: 'This field is required.',
      minLength: {
        value: 4,
        message: 'Minimum length is 4.',
      },
    },
  },
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
  {
    name: 'termsOfUse',
    placeholder: 'I agree with Privacy Policy and Terms of Use',
    hasCheckbox: true,
    options: {
      required: 'This field is required.',
    },
  },
];

export const Register: FC = () => {
  return (
    <>
      <Header />
      <main className={styles.register}>
        <div className={styles.wrapper}>
          <AuthHeading
            src={
              'https://i.pinimg.com/564x/ec/a1/c9/eca1c9a68d95317d6df7d95e617803c8.jpg'
            }
          />
          <AuthContent
            inputs={mockInputs}
            title={'Sign up'}
            description={'Already have an account?'}
            link={{ value: 'Sign in', ref: '/login' }}
          />
        </div>
      </main>
      <Footer />
    </>
  );
};
