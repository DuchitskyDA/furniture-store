import styles from './footer.module.scss';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import Text from '../text/Text.tsx';

const FooterUI = () => {
  return (
    <footer className={styles.footer}>
      <Text
        as={'h2'}
        align={'center'}
        size={22}
        weight={500}
        color={'white'}
        className={styles.footer__title}
      >
        Some Title
      </Text>
      <ul className={styles.footer__list}>
        <li className={styles.footer__list_item}>
          <Text
            as={'span'}
            family={'inter'}
            size={14}
            weight={400}
            height={22}
            color={'white'}
          >
            <Link to="/">Home</Link>
          </Text>
        </li>
        <li className={styles.footer__list_item}>
          <Text
            as={'span'}
            family={'inter'}
            size={14}
            weight={400}
            height={22}
            color={'white'}
          >
            <Link to="/">Shop</Link>
          </Text>
        </li>
        <li className={styles.footer__list_item}>
          <Text
            as={'span'}
            family={'inter'}
            size={14}
            weight={400}
            height={22}
            color={'white'}
          >
            <Link to="/">Product</Link>
          </Text>
        </li>
        <li className={styles.footer__list_item}>
          <Text
            as={'span'}
            family={'inter'}
            size={14}
            weight={400}
            height={22}
            color={'white'}
          >
            <Link to="/">Blog</Link>
          </Text>
        </li>
        <li className={styles.footer__list_item}>
          <Text
            as={'span'}
            family={'inter'}
            size={14}
            weight={400}
            height={22}
            color={'white'}
          >
            <Link to="/">Contact Us</Link>
          </Text>
        </li>
      </ul>
      <div className={styles.socials}>
        <a target="blank" href="https://github.com/DuchitskyDA">
          <InstagramIcon />
        </a>

        <a target="blank" href="https://github.com/DuchitskyDA">
          <FacebookIcon />
        </a>
        <a target="blank" href="https://github.com/DuchitskyDA">
          <YouTubeIcon />
        </a>
      </div>
    </footer>
  );
};

export default FooterUI;
