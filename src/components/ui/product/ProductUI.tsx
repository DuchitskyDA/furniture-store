import { FC, memo } from 'react';

interface ProductUIProps {
  product: {
    title: string;
    price: number;
    oldPrice: number;
    stars: number;
    img: string;
    isNew?: boolean;
  };
}
const ProductUI: FC<ProductUIProps> = memo(({ product }) => {
  console.log(product);
  return <div>{product.title}</div>;
});

export default ProductUI;
