import Menu from '../menu/Menu.tsx';
import styles from './header.module.scss';
import { useCallback, useState } from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Text from '../../../shared/ui/text/Text.tsx';

const HeaderUI = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const handleOpenMenu = useCallback(
    () => setIsMenuActive(true),
    [setIsMenuActive],
  );
  return (
    <header className={styles.header}>
      <MenuIcon className={styles.menu} onClick={handleOpenMenu} />
      <Link to="/">
        <Text as={'h1'} weight={500} height={24}>
          Some Title
        </Text>
      </Link>

      <Link to="/profile">
        <Person2Icon />
      </Link>

      <Menu active={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </header>
  );
};

export default HeaderUI;
