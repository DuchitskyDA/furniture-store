import styles from '@styles/main.module.scss';
import { HeadingCarousel } from '@features/heading-carousel';
import { Articles } from '@features/articles';
import { LivingRoom, NewProducts, Services } from '@/components';
import Banner from '../../../components/ui/banner/Banner.tsx';

export const MainPage = () => {
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
