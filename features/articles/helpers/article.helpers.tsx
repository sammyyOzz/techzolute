import { Article, ArticleGroupByCategory } from "../types/article.types";

export const groupByCategory = (data: Array<Article>) => {
  const groups = data.reduce((groups: any, item: any) => {
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {});

  const groupArrays: ArticleGroupByCategory[] = Object.keys(groups).map((category) => {
    return {
      category,
      items: groups[category],
    };
  });

  return groupArrays;
};
