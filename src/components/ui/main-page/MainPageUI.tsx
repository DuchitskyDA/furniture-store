import {
  Articles,
  Footer,
  Header,
  LivingRoom,
  NewProducts,
  Services,
} from '../../index.ts';
import HeadingCarouselUI from '../../ui/heading-carousel/HeadingCarouselUI.tsx';
import Banner from '../../ui/banner/Banner.tsx';
import styles from './main.module.scss';

const MainPageUI = () => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <HeadingCarouselUI />
        <Services />
        <LivingRoom />
        <NewProducts />
        <Banner />
        <Articles />
      </main>
      <Footer />
    </>
  );
};

export default MainPageUI;
