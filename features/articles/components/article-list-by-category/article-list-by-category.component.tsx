import Link from "next/link";
import { Fragment } from "react";
import { Title, VerticalCardsContainer } from "./article-list-by-category.styles";
import { groupByCategory } from "@features/articles/helpers/article.helpers";
import { Article } from "@features/articles/types/article.types";
import { ArticleCardVertical } from "../article-card-vertical/article-card-vertical.component";

interface ArticleListByCategoryProps {
    articles: Array<Article>
}

export function ArticleListByCategory({ articles }: ArticleListByCategoryProps) {
    const articlesByCategory = groupByCategory(articles);

    return (
        <>
            { articlesByCategory.map(group => (
                <Fragment key={group.category}>
                    
                    <Title>
                        <Link href={`/${group.category}`} passHref>
                            <span>{ group.category } </span>
                        </Link>
                    </Title>

                    <VerticalCardsContainer>
                        { group.items.map(({ _id, title, category, imagePreview }) => (
                            <ArticleCardVertical 
                                key={_id} 
                                _id={_id}
                                title={title}
                                category={category}
                                imagePreview={imagePreview}
                            />
                        ))}
                    </VerticalCardsContainer>
                </Fragment>
            ))}
        </>
    )
}