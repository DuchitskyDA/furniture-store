import styles from './index.module.scss';
import MainCarouselUI from '../main-carousel/MainCarouselUI';
import ForwardLink from '../forward-link/ForwardLink';
import Text from '../../../shared/ui/text/Text.tsx';

const NewProductsUI = () => {
  return (
    <section className={styles.container}>
      <div className={styles.title}>
        <Text as={'h2'} size={28} weight={500} height={38} spacing={'06'}>
          New Arrivals
        </Text>
      </div>

      <MainCarouselUI />
      <ForwardLink>More Products</ForwardLink>
    </section>
  );
};

export default NewProductsUI;
