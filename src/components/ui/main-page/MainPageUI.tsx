import { LivingRoom, NewProducts, Services } from '../../index.ts';
import { Articles } from '../../../features';
import HeadingCarousel from '../heading-carousel/HeadingCarousel.tsx';
import Banner from '../../ui/banner/Banner.tsx';
import styles from './main.module.scss';

const MainPageUI = () => {
  return (
    <>
      <main className={styles.main}>
        <HeadingCarousel />
        <Services />
        <LivingRoom />
        <NewProducts />
        <Banner />
        <Articles />
      </main>
    </>
  );
};

export default MainPageUI;
