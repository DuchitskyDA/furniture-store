import { FC } from 'react';
import ProductUI from '../ui/product/ProductUI';

interface ProductsProps {
  productsList: {
    title: string;
    price: number;
    oldPrice: number;
    stars: number;
    img: string;
    isNew?: boolean;
  }[];
}
const Products: FC<ProductsProps> = ({ productsList }) => {
  return (
    <>
      {productsList.map((item) => {
        <ProductUI product={item} />;
      })}
    </>
  );
};

export default Products;
