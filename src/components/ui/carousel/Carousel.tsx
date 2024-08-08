import {
  FC,
  memo,
  ReactElement,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { ArrowBigLeft, ArrowBigRight } from 'lucide-react';
import { useSwipeable } from 'react-swipeable';
import styles from './carousel.module.scss';

interface CarouselProps {
  children: ReactElement[];
  arrows?: boolean;
  visibleItems: number;
}

const Carousel: FC<CarouselProps> = memo(
  ({ children, arrows, visibleItems }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const showNextImage = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Math.ceil(children.length / visibleItems) - 1
          ? 0
          : prevIndex + 1,
      );
    }, [children.length, visibleItems]);

    const showPrevImage = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0
          ? Math.ceil(children.length / visibleItems) - 1
          : prevIndex - 1,
      );
    }, [children.length, visibleItems]);

    const resetInterval = useCallback(() => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(showNextImage, 5000);
    }, [showNextImage]);

    useEffect(() => {
      resetInterval();
      return () => {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      };
    }, [resetInterval]);

    const handlers = useSwipeable({
      onSwipedLeft: () => {
        showNextImage();
        resetInterval();
      },
      onSwipedRight: () => {
        showPrevImage();
        resetInterval();
      },
      preventScrollOnSwipe: true,
      trackMouse: true,
    });

    const handlePrevClick = () => {
      showPrevImage();
      resetInterval();
    };

    const handleNextClick = () => {
      showNextImage();
      resetInterval();
    };

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
              onClick={handlePrevClick}
              className={styles.button}
              style={{ left: 0 }}
              aria-label="Посмотреть предыдущее изображение"
            >
              <ArrowBigLeft />
            </button>
            <button
              onClick={handleNextClick}
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

export default Carousel;
