import { Article } from "@features/articles/types/article.types";
import { ArticleCardHorizontal } from "../article-card-horizontal/article-card-horizontal.component";
import { ArticleCardVertical } from "../article-card-vertical/article-card-vertical.component";


interface ArticleListProps {
    cardType: 'horizontal' | 'vertical';
    articles: Array<Article>;
    [anyProp: string]: any;
}

export function ArticleList({ cardType, articles, ...props }: ArticleListProps) {

    return (
        <>
            { cardType === 'horizontal' && articles.map((article) => (
                <ArticleCardHorizontal
                    key={article._id}
                    { ...article }
                    { ...props }
                />
            ))}
            { cardType === 'vertical' && articles.map((article) => (
                <ArticleCardVertical
                    key={article._id}
                    { ...article }
                    { ...props }
                />
            ))}
        </>
    )
}