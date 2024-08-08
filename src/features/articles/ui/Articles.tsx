import { TArticle, TArticlesProps } from '../types/types.ts';
import { FC } from 'react';
import Text from '../../../shared/ui/text/Text.tsx';
import ForwardLink from '../../../components/ui/forward-link/ForwardLink.tsx';
import styles from '../../../app/styles/articles.module.scss';

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

export const Articles: FC<TArticlesProps> = ({ articles = mockArticles }) => {
  return (
    <div className={styles.articles}>
      <div className={styles.articles__heading}>
        <Text as={'h2'} size={28} weight={500} spacing={'06'} height={38}>
          Articles
        </Text>
        <ForwardLink>More Articles</ForwardLink>
      </div>
      <div className={styles.container}>
        {articles.map((item) => (
          <div key={item.title} className={styles.articles__item}>
            <div className={styles.articles__wrapper}>
              <img
                className={styles.articles__item_image}
                src={item.img}
                alt={item.alt}
              />
            </div>

            <div className={styles.articles__item_text}>
              <div className={styles.articles__item_title}>
                <Text
                  as={'h3'}
                  family={'inter'}
                  size={16}
                  weight={600}
                  height={26}
                >
                  {item.title}
                </Text>
              </div>
              <ForwardLink>Read more</ForwardLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
