export type TArticle = {
  title: string;
  img: string;
  alt: string;
};

export type TArticlesProps = {
  articles?: TArticle[];
};
