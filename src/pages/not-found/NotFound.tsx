import { Link } from 'react-router-dom';
import styles from './index.module.scss';
import Text from '../../components/ui/text/Text.tsx';

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
