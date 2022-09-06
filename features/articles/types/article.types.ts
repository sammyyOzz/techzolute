export interface Article {
  _id: string;
  title: string;
  excerpt: string;
  category: string;
  content?: string;
  imagePreview?: string;
  [anyProp: string]: any;
}

export interface ArticleGroupByCategory {
  category: string;
  items: Array<Article>;
}
