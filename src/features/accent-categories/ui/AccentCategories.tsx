import { FC } from 'react';
import styles from '@styles/accent-categories.module.scss';
import Text from '@shared/ui/text/Text.tsx';
import ForwardLink from '@/components/ui/forward-link/ForwardLink.tsx';

import {
  AccentCategoriesProps,
  Categories,
} from '@features/accent-categories/types/types.ts';

const mockCategoriesList: Categories[] = [
  {
    title: 'Living Room',
    img: 'https://i.pinimg.com/564x/0e/4e/65/0e4e65f96ebd9a2fa770d960f79e676a.jpg',
  },
  {
    title: 'Bedroom',
    img: 'https://i.pinimg.com/564x/0c/80/0e/0c800e081dffdb44b18da72805892b8f.jpg',
  },
  {
    title: 'Kitchen',
    img: 'https://i.pinimg.com/736x/d9/bb/47/d9bb47bdad9b53eebdb6f9980ff676cc.jpg',
  },
];

const AccentCategories: FC<AccentCategoriesProps> = ({
  categoriesList = mockCategoriesList,
}) => {
  return (
    <div className={styles.container}>
      {categoriesList.map((item: Categories) => (
        <div key={item.title} className={styles.product}>
          <div className={styles.product__heading}>
            <div className={styles.product__heading_title}>
              <Text as={'h2'} size={28} weight={500} spacing={'06'} height={34}>
                {item.title}
              </Text>
            </div>
            <ForwardLink>Shop Now</ForwardLink>
          </div>
          <div className={styles.product__image}>
            <img className={styles.product__image_item} src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AccentCategories;
