import { FC } from 'react';
import styles from './index.module.scss';
import ForwardLink from '../forward-link/ForwardLink';
import Text from '../../../shared/ui/text/Text.tsx';

interface ProductPreviewUIProps {
  previewList: {
    title: string;
    img: string;
  }[];
}

const ProductPreviewUI: FC<ProductPreviewUIProps> = ({ previewList }) => {
  return (
    <div className={styles.container}>
      {previewList.map((item) => (
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

export default ProductPreviewUI;
