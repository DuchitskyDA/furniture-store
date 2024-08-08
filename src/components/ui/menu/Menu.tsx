import { Dispatch, FC, SetStateAction, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import styles from './menu.module.scss';
import Button from '../../ui/button/Button';
import Text from '../../../shared/ui/text/Text.tsx';

interface MenuProps {
  active: boolean;
  setIsMenuActive: Dispatch<SetStateAction<boolean>>;
}

const Menu: FC<MenuProps> = ({ active, setIsMenuActive }) => {
  const menuItems = [
    { title: 'Главная', id: 0, href: '/' },
    { title: 'Каталог', id: 1, href: '/' },
    { title: 'О нас', id: 2, href: '/' },
  ];

  const handleCloseMenu = useCallback(
    () => setIsMenuActive(false),
    [setIsMenuActive],
  );

  return (
    <nav className={`${styles.menu} ${active ? styles.active : ''}`}>
      <div className={styles.blur} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Some Title</h2>
          <CloseIcon className={styles.close} onClick={handleCloseMenu} />
        </div>
        <ul className={styles.list}>
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link onClick={handleCloseMenu} to={item.href}>
                <Text
                  as={'span'}
                  family={'inter'}
                  size={14}
                  weight={500}
                  height={24}
                >
                  {item.title}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
        <div className={styles.footer}>
          <Link to="/login">
            <Button onClick={handleCloseMenu}>Sign in</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
