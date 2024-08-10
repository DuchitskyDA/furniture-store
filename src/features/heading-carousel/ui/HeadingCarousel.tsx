import { FC } from 'react';
import { Carousel } from '@/features/carousel';
import { HeadingCarouselProps } from '@features/heading-carousel/types/types.ts';
import styles from '@styles/heading-carousel.module.scss';

const mockImages = [
  {
    src: 'https://bezkovrov.com/wp-content/uploads/2018/10/12.jpg',
    alt: 'alt',
  },
  {
    src: 'https://www.housedigest.com/img/gallery/the-best-way-to-paint-over-dark-walls-and-lighten-up-your-home/l-intro-1659203809.jpg',
    alt: 'alt',
  },
];

const HeadingCarousel: FC<HeadingCarouselProps> = ({ images = mockImages }) => {
  return (
    <section className={styles.container}>
      <Carousel visibleItems={1}>
        {images.map((item) => (
          <img key={item.src} className={styles.item} src={item.src} alt="" />
        ))}
      </Carousel>
    </section>
  );
};

export default HeadingCarousel;
