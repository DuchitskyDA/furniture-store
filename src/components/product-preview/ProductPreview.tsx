import ProductPreviewUI from '../ui/product-preview/ProductPreviewUI';

export const ProductPreview = () => {
  const previewList = [
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
  return <ProductPreviewUI previewList={previewList} />;
};
