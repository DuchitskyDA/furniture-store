import { Path } from 'react-hook-form';

export interface FormValues {
  name: string;
  userName: string;
  email: string;
  password: string;
  termsOfUse: boolean;
}

export interface InputOptions {
  required?: string | boolean;
  minLength?: {
    value: number;
    message: string;
  };
  maxLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: RegExp;
    message: string;
  };
}

export interface InputData {
  name: Path<FormValues>;
  placeholder: string;
  className?: string;
  hasPasswordInput?: boolean;
  hasCheckbox?: boolean;
  options?: InputOptions;
}

export interface FormProps {
  inputsData: InputData[];
  link: string;
}
