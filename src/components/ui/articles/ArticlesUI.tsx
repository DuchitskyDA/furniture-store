import { FC } from 'react';
import styles from './index.module.scss';
import ForwardLink from '../forward-link/ForwardLink';
import Text from '../text/Text.tsx';
import { TArticlesProps } from '../../articles/types.ts';

const ArticlesUI: FC<TArticlesProps> = ({ articles }) => {
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

export default ArticlesUI;
