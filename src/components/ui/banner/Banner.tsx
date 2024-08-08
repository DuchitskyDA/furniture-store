import { FC } from 'react';
import styles from './banner.module.scss';
import ForwardLink from '../forward-link/ForwardLink';
import Text from '../text/Text.tsx';

interface BannerProps {
  bannerInfo?: {
    accentText?: string;
    title: string;
    text: string;
    description?: string;
    img: string;
  };
}

const bannerMockInfo = {
  title: 'HUNDREDS of New lower prices!',
  text: 'It’s more affordable than ever to give every room in your home a stylish makeover',
  img: 'https://i.pinimg.com/564x/61/00/99/610099885d1b996962ee9983882820a8.jpg',
  accentText: 'SALE UP TO 35% OFF',
};

const Banner: FC<BannerProps> = ({ bannerInfo = bannerMockInfo }) => {
  return (
    <div className={styles.container}>
      <img src={bannerInfo.img} alt="" className={styles.image} />
      <div className={styles.banner}>
        {bannerInfo.accentText && (
          <Text
            as={'span'}
            color={'blue'}
            size={16}
            weight={700}
            height={16}
            family={'inter'}
          >
            {bannerInfo.accentText}
          </Text>
        )}
        <Text
          as={'h3'}
          size={28}
          weight={500}
          height={44}
          className={styles.banner__title}
        >
          {bannerInfo.title}
        </Text>
        <Text as={'p'} family={'inter'} size={16} weight={400} height={26}>
          {bannerInfo.text}
        </Text>
        <ForwardLink>Shop Now</ForwardLink>
      </div>
    </div>
  );
};

export default Banner;
