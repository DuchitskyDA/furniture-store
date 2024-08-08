import { FC, ReactNode } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: FC<ButtonProps> = ({ onClick, children, type }) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
