import Button from '../button/Button';
import { Carousel } from '@features/carousel';
import styles from './main-carousel.module.scss';
import { useEffect, useState } from 'react';
import StarIcon from '@mui/icons-material/Star';
import useWindowSize from '../../../utils/hooks/useWindowSize.ts';
import Text from '@shared/ui/text/Text.tsx';

const productsList = [
  {
    title: 'Диван Loveseat',
    price: 199.0,
    oldPrice: 400.0,
    stars: 4,
    img: 'https://i.pinimg.com/564x/6c/55/b9/6c55b975e2b57d4e228047683725bc31.jpg',
    isNew: true,
  },
  {
    title: 'Настольная лампа',
    price: 24.99,
    stars: 3,
    img: 'https://i.pinimg.com/564x/cc/06/d5/cc06d5dba84a7979dd22cc9990e6a7ae.jpg',
    isNew: true,
  },
  {
    title: 'Бежевая настольная лампа',
    price: 24.99,
    oldPrice: 400.0,
    stars: 5,
    img: 'https://i.pinimg.com/564x/af/1f/97/af1f97207bbcaf53cf6952cd508739ed.jpg',
    isNew: true,
  },
  {
    title: 'Бамбуковая корзина',
    price: 24.99,
    oldPrice: 400.0,
    stars: 5,
    img: 'https://i.pinimg.com/564x/e0/69/6b/e0696be2866b3119b51b901d9a03bd9c.jpg',
    isNew: true,
  },
  {
    title: 'Диван Loveseat',
    price: 199.0,
    oldPrice: 400.0,
    stars: 4,
    img: 'https://i.pinimg.com/564x/6c/55/b9/6c55b975e2b57d4e228047683725bc31.jpg',
    isNew: true,
  },
  {
    title: 'Настольная лампа',
    price: 24.99,
    stars: 3,
    img: 'https://i.pinimg.com/564x/cc/06/d5/cc06d5dba84a7979dd22cc9990e6a7ae.jpg',
    isNew: true,
  },
  {
    title: 'Бежевая настольная лампа',
    price: 24.99,
    oldPrice: 400.0,
    stars: 5,
    img: 'https://i.pinimg.com/564x/af/1f/97/af1f97207bbcaf53cf6952cd508739ed.jpg',
    isNew: true,
  },
  {
    title: 'Бамбуковая корзина',
    price: 24.99,
    oldPrice: 400.0,
    stars: 5,
    img: 'https://i.pinimg.com/564x/e0/69/6b/e0696be2866b3119b51b901d9a03bd9c.jpg',
    isNew: true,
  },
];

const MainCarouselUI = () => {
  const { width } = useWindowSize();
  const [visibleItems, setVisibleItems] = useState<number>(1);

  useEffect(() => {
    if (width < 768) {
      setVisibleItems(1);
    } else if (width < 1200) {
      setVisibleItems(2);
    } else {
      setVisibleItems(4);
    }
  }, [width]);

  return (
    <Carousel visibleItems={visibleItems}>
      {productsList.map((item) => (
        <div key={item.title} className={styles.container}>
          <img className={styles.item} src={item.img} alt={item.title} />

          <Button>Add to cart</Button>

          <div className={styles.footer}>
            <div className={styles.stars}>
              {Array.from({ length: item.stars }).map((_, index) => (
                <StarIcon key={index} />
              ))}
            </div>
            <Text as={'h4'} family={'inter'} size={16} weight={600} height={26}>
              {item.title}
            </Text>
            <div className={styles.prices}>
              <Text
                as={'span'}
                size={14}
                weight={600}
                height={22}
                family={'inter'}
              >
                ${item.price}
              </Text>
              {item.oldPrice && (
                <Text
                  as={'span'}
                  family={'inter'}
                  size={14}
                  weight={400}
                  height={22}
                  color={'grey'}
                >
                  <s>${item.oldPrice}</s>
                </Text>
              )}
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default MainCarouselUI;
