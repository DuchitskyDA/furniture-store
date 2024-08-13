import styles from '@styles/main.module.scss';
import { HeadingCarousel } from '@features/heading-carousel';
import { Articles } from '@features/articles';
import { NewProducts, Services } from '@/components';
import Banner from '../../../components/ui/banner/Banner.tsx';
import { AccentCategories } from '@features/accent-categories';

export const MainPage = () => {
  return (
    <>
      <main className={styles.main}>
        <HeadingCarousel />
        <Services />
        <AccentCategories />
        <NewProducts />
        <Banner />
        <Articles />
      </main>
    </>
  );
};
