import { FC, memo } from 'react';
import { ArrowBigLeft, ArrowBigRight } from '../../../shared/icons';
import { useCarousel } from '../lib/useCarousel';
import { useSwipeHandlers } from '../lib/useSwipeHandlers';
import styles from '../../../app/styles/carousel.module.scss';
import { CarouselProps } from '../types/carouselTypes.ts';

export const Carousel: FC<CarouselProps> = memo(
  ({ children, arrows, visibleItems }) => {
    const { currentIndex, showNextImage, showPrevImage, resetInterval } =
      useCarousel(children.length, visibleItems);

    const handlers = useSwipeHandlers(
      showNextImage,
      showPrevImage,
      resetInterval,
    );

    const containerStyle = {
      width: `${100 * Math.ceil(children.length / visibleItems)}%`,
      transform: `translateX(-${(100 / Math.ceil(children.length / visibleItems)) * currentIndex}%)`,
    };

    const itemStyle = {
      width: `${100 / visibleItems}%`,
    };

    return (
      <div className={styles.container} {...handlers}>
        <div className={styles.wrapper} style={containerStyle}>
          {children.map((child, index) => (
            <div key={index} className={styles.item} style={itemStyle}>
              {child}
            </div>
          ))}
        </div>
        {arrows && (
          <>
            <button
              onClick={showPrevImage}
              className={styles.button}
              style={{ left: 0 }}
              aria-label="Посмотреть предыдущее изображение"
            >
              <ArrowBigLeft />
            </button>
            <button
              onClick={showNextImage}
              className={styles.button}
              style={{ right: 0 }}
              aria-label="Посмотреть следующее изображение"
            >
              <ArrowBigRight />
            </button>
          </>
        )}
      </div>
    );
  },
);
