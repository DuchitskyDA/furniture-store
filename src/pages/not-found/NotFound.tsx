import { Link } from 'react-router-dom';
import styles from '../../app/styles/not-found.module.scss';
import Text from '../../shared/ui/text/Text.tsx';

export const NotFound = () => {
  return (
    <div className={styles.container}>
      <Text as={'h2'}>Извините, эта страница недоступна.</Text>
      <Link to="/" className={styles.link}>
        Вернуться на главную
      </Link>
    </div>
  );
};
