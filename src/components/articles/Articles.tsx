import ArticlesUI from '../ui/articles/ArticlesUI';
import { TArticle } from './types.ts';

const mockArticles: TArticle[] = [
  {
    title: '7 ways to decor your home',
    img: 'https://i.pinimg.com/564x/20/f9/f5/20f9f5eb9b7db92427c2349b63889be6.jpg',
    alt: '',
  },
  {
    title: 'Kitchen organization',
    img: 'https://i.pinimg.com/564x/c8/c1/f1/c8c1f128259236afccfd4a00de320f8e.jpg',
    alt: '',
  },
  {
    title: 'Decor your bedroom',
    img: 'https://i.pinimg.com/564x/6c/74/07/6c7407075fa45fa2bacb06ba223e12e7.jpg',
    alt: '',
  },
];

export const Articles = () => {
  return <ArticlesUI articles={mockArticles} />;
};
