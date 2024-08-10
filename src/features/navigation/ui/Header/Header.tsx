import { FC, useCallback, useState } from 'react';
import styles from '@styles/header.module.scss';
import { MenuIcon, PersonIcon } from '@shared/icons';
import Text from '@shared/ui/text/Text.tsx';
import { Link } from 'react-router-dom';
import Menu from '../../../../components/ui/menu/Menu.tsx';
// TODO: перенести в navigation Menu
export const Header: FC = () => {
  const [isMenuActive, setIsMenuActive] = useState<boolean>(false);
  const handleOpenMenu = useCallback(
    () => setIsMenuActive(true),
    [setIsMenuActive],
  );
  return (
    <header className={styles.header}>
      <div className={styles.header__menu_icon} onClick={handleOpenMenu}>
        <MenuIcon />
      </div>

      <Link to="/">
        <Text as={'h1'} weight={500} height={24}>
          Some Title
        </Text>
      </Link>

      <Link to="/profile" className={styles.header__profile_icon}>
        <PersonIcon />
      </Link>

      <Menu active={isMenuActive} setIsMenuActive={setIsMenuActive} />
    </header>
  );
};
