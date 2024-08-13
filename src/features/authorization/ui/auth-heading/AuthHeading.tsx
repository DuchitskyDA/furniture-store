import { FC } from 'react';
import styles from '@styles/auth-heading.module.scss';
import { Link } from 'react-router-dom';
import Text from '@shared/ui/text/Text.tsx';

interface AuthHeadingProps {
  src: string;
}

const AuthHeading: FC<AuthHeadingProps> = ({ src }) => {
  return (
    <div className={styles.heading}>
      <Link to="/">
        <Text as={'h1'} size={22} height={24} weight={500}>
          Some Title
        </Text>
      </Link>

      <div className={styles.heading__image}>
        <img src={src} alt="" />
      </div>
    </div>
  );
};

export default AuthHeading;
